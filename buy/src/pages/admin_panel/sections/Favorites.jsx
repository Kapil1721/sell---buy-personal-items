import React, { useContext, useEffect, useMemo, useState } from 'react'
import NoRecords from './components/NoRecords'
import { AdminIcon, DeleteIcon, EditIcon, LikeIcon, MobileIcon, ViewIcon } from '../../../components/Icons'
import Topsection from './components/Topsection'
import ProductFilter from './components/ProductFilter'
import MensWhiteShoes300x267 from '../../../assets/Mens-White-Shoes-300x267.jpg'
import { useQuery } from '@tanstack/react-query'
import ErrorUi from '../../../components/ErrorUi'
import { GET_MY_PRODUCT, DELETE_MY_PRODUCT } from '../../../services/operations/adminApi'
import { IMAGEURL, getFormatedDate } from '../../../utils/constants'
import { toast } from 'sonner'
import { GridLoadingUI } from './ModerateProducts'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { useAuthStore } from '../../../store/AuthStore'
import { AuthContext } from '../../../auth/AuthContext'
import { DELETE_FAVORITE, GET_FAVORITE_PRODUCTS } from '../../../services/operations/productsApi'
import EmailModal from '../../../components/EmailModal'
import { SEND_PURCHASE_REQUEST } from '../../../services/operations/PurchaseRequestApi'

function Favorites() {

  const [activeFilter, setActiveFilter] = useState(null);
  const { user } = useContext(AuthContext)
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [SearchParams, setSearchParams] = useSearchParams()

  const searchQuery = SearchParams.get('searchQuery')
  const sort = SearchParams.get('sort')
  const { isLoading, error, data } = useQuery({
    queryKey: ['GET_FAVORITE_PRODUCTS', user, sort, searchQuery],
    queryFn: async () => {
      let res = await GET_FAVORITE_PRODUCTS({ sort, searchQuery })
      return res.products
    },
    keepPreviousData: true,
  });


  const [favoriteProduct, setFavoriteProduct] = useState([]);

  useEffect(() => {
    if (data) {
      setFavoriteProduct(data)
    }
  }, [data])

  const allProductsCount = useMemo(() => favoriteProduct.length, [favoriteProduct.length]);
  const draftProductsCount = useMemo(() => favoriteProduct.filter((item) => item?.status === 'Draft')?.length, [data]);
  const activeProductsCount = useMemo(() => favoriteProduct.filter((item) => item?.status === 'Active')?.length, [data]);
  const pendingProductsCount = useMemo(() => favoriteProduct.filter((item) => item?.status === 'Pending')?.length, [data]);

  // console.log(status);

  if (isLoading) {
    return <GridLoadingUI />
  }

  if (error) {
    return <ErrorUi error={error.name} />
  }

  const handleRemove = async (id) => {
    let status = confirm("Do you want to remove this product from favorite list?");
    if (status) {
      let res = await DELETE_FAVORITE({
        id
      });
      if (res?.status) {
        setFavoriteProduct(favoriteProduct.filter((item) => item.id !== id))
        toast.success(res.message)
      }

    }
  }

  const OpenEmailModal = (product) => {
    if (!user) {
      return navigate('/login-register?tab=login', { state: { to: location.pathname, for: "buyer" } });
    }
    console.log(user.id, product.userId);
    if (user.id === product.userId) {
      return toast.error("You can't send request to yourself!");
    }
    setModalOpen(true);
  }

  const handleEmailSend = async (message, product) => {
    console.log(message, product);
    const res = await SEND_PURCHASE_REQUEST({ buyerId: user.id, productId: product.post_id, message });
    console.log(res);
    if (res.status) {
      toast.success(res.message);
      setModalOpen(false);
      // navigate('/panel/my-orders');
      // toast.success("Email sent successfully")
    }
  }

  const closeModal = () => {
    setLoading(false)
    setModalOpen(false);
  };


  return (
    <div className="relative bg-[#F8FAFD]">
      <div className="max-w-[1200px] mx-auto py-14">
        <div className='relative'>
          <div className=''>
            <Topsection title={"Favorites"} />
            <div className='bg-[#FDFDFE] py-6 lg:p-10 lg:mt-10'>
              <ProductFilter setActiveFilter={setActiveFilter} activeFilter={activeFilter} draft={draftProductsCount} All={allProductsCount} Active={activeProductsCount} Pending={pendingProductsCount} />
            </div>
            {
              favoriteProduct.length < 1 ?
                <div className='relative bg-white border border-[#D5E3EE] rounded flex justify-center items-center min-h-80'>
                  <NoRecords title={"You don't have any products."} />
                </div> :
                <div className='bg-white border border-[#F2F4F8] rounded relative'>
                  {favoriteProduct.filter((item) => activeFilter ? item?.products?.status === activeFilter : item).map((item) =>
                    <div key={item?.products?.post_id} className='grid grid-cols-12'>
                      <div className='col-span-12 w-full lg:col-span-10 border-r border-[#F2F4F8]'>
                        <div className='grid grid-cols-3 w-full'>
                          <Link to={location.pathname + "/" + item?.products?.post_id + "-" + item?.products?.name} className='col-span-1 rounded-lg flex justify-center items-center overflow-hidden lg:mx-4 lg:my-2 '>
                            <img className='rounded-lg object-cover w-full size-40 lg:size-60' src={IMAGEURL + item?.products?.images[0]?.image} alt="" />
                          </Link>
                          <div className='col-span-2 flex justify-start items-start px-4 py-2 lg:p-4'>
                            <div className='flex flex-col justify-between items-start gap-2'>
                              <Link to={location.pathname + "/" + item?.products?.post_id + "-" + item?.products?.name} className='text-primary font-medium lg:text-2xl mb-2'>
                                <h3 >{item?.products?.name}</h3>
                              </Link>
                              <div className='flex flex-col justify-start items-start gap-2'>
                                <p className='text-primary font-normal border border-[#F2F4F8] p-1 lg:py-2 lg:px-6 rounded-md'>{item?.products?.category.name}</p>
                                <div className='flex flex-col  lg:justify-evenly gap-4 lg:items-center'>
                                  <p className='text-helper font-medium'>Added: <span className='text-light font-normal'>{getFormatedDate(item?.products?.createdAt)}</span></p>
                                  <p className='text-helper font-medium'>Expires: <span className='text-light font-normal'>{item?.products?.expires ? getFormatedDate(item?.products?.expires) : "Never"}</span></p>
                                </div>
                                <div className='bg-[#F2F4F8] flex justify-between items-center px-2 py-1 rounded-md gap-4'>
                                  <div className=' flex justify-between items-center gap-2 cursor-pointer'>
                                    <ViewIcon className='fill-light' />
                                    <span className='text-light font-medium'>{item?.products?.views.length}</span>
                                  </div>
                                  <div className=' flex justify-between items-center gap-2 cursor-pointer'>
                                    <MobileIcon className='fill-light' />
                                    <span className='text-light font-medium'>3</span>
                                  </div>
                                  <div className=' flex justify-between items-center gap-2 cursor-pointer'>
                                    <LikeIcon className='fill-light' />
                                    <span className='text-light font-medium'>0</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='col-span-12 lg:col-span-2 w-full relative p-4 flex justify-between items-start flex-col'>
                        {/* <ul>
                            <li onClick={() => handleEdit(item?.products?.post_id)} className={`cursor-pointer text-base font-medium text-[#3F5263] hover:text-[#FFB300] py-1 transition ease-in-out flex justify-start gap-2 items-center`} ><EditIcon />Edit</li>
                            
                          </ul> */}
                        <div className='mx-auto flex lg:flex-col gap-4'>
                          <button onClick={() => OpenEmailModal(item?.products)} className=' text-helper ring-2 ring-helper hover:bg-helper hover:text-white font-semibold'>
                            Send Request
                          </button>
                          <EmailModal
                            isLoading={loading}
                            isOpen={modalOpen}
                            title="Product Purchase Request"
                            product={item?.products}
                            onClose={closeModal}
                            onConfirm={handleEmailSend}
                          />
                          <button onClick={() => handleRemove(item.id)} className=' text-red-500 ring-2 ring-red-500 hover:bg-red-500 hover:text-white font-semibold'>
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>)}
                </div>}
            <div className='mt-4'>
              {/* <p className='text-[#73819E]'>Showing <span className='text-[#374B5C] font-semibold'>1</span> to <span className='text-[#374B5C] font-semibold'>3</span> of <span className='text-[#374B5C] font-semibold'>6</span> results</p> */}
            </div>
          </div>
        </div>

      </div >
    </div >
  )
}

export default Favorites

