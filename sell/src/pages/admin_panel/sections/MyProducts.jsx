import React, { useContext, useMemo, useState } from 'react'
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
import { PROMOTE_PRODUCTS } from '../../../services/operations/productsApi'

function MyProducts() {

  const [refresh, setRefresh] = useState(false);
  const [search, setSearch] = useState('');
  const [activeFilter, setActiveFilter] = useState(null);
  const navigate = useNavigate()
  const { user } = useContext(AuthContext);
  // const [refresh, setRefresh] = useState(false)
  const handleRefresh = () => {
    setTimeout(() => {
      setRefresh(!refresh)
    }, 1000)
  }
  const [SearchParams, setSearchParams] = useSearchParams()

  const searchQuery = SearchParams.get('searchQuery')
  const sort = SearchParams.get('sort')
  const { isLoading, error, data } = useQuery({
    queryKey: ['GET_My_PRODUCT', refresh, user, sort, searchQuery],
    queryFn: async () => await GET_MY_PRODUCT({ sort, searchQuery }),

  });

  const allProductsCount = useMemo(() => data?.products?.length, [data?.products?.length]);
  const draftProductsCount = useMemo(() => data?.products?.filter((item) => item.status === 'Draft')?.length, [data]);
  const activeProductsCount = useMemo(() => data?.products?.filter((item) => item.status === 'Active')?.length, [data]);
  const pendingProductsCount = useMemo(() => data?.products?.filter((item) => item.status === 'Pending')?.length, [data]);

  // console.log(status);

  if (isLoading) {
    return <GridLoadingUI />
  }

  if (error) {
    return <ErrorUi error={error.name} />
  }

  const handleDelete = async (id) => {
    let status = confirm("Do you want to delete this product?");
    if (status) {
      let res = await DELETE_MY_PRODUCT(id);
      if (res?.status === 200) {
        toast.success('Product deleted successfully')
      }
      handleRefresh()
    }
  }

  const handlePromote = async (postId) => {
    const res = await PROMOTE_PRODUCTS({ postId, planId: 1 });
    if (res?.status) {
      toast.success(res.message)
    }
  };

  const handleEdit = async (id) => {
    // setSearchParams((search)=>({...search,id:id,type:"moderation"}))
    await navigate(location.pathname + "/edit" + `?id=${id}&type=my-product`, { state: location.pathname, replace: true })
  }

  // const draftProducts = data?.products?.filter((item) => item.status === 'Draft')


  return (
    <div className="relative bg-[#F8FAFD]">
      <div className="max-w-[1200px] mx-auto py-6 lg:py-14">
        <div className='relative'>
          <div className=''>
            <Topsection title={"My Products"} />
            <div className='bg-[#FDFDFE] py-4 lg:p-10 mt-10'>
              <ProductFilter setActiveFilter={setActiveFilter} activeFilter={activeFilter} draft={draftProductsCount} All={allProductsCount} Active={activeProductsCount} Pending={pendingProductsCount} />
            </div>
            {
              data.products.length < 1 ?
                <div className='relative bg-white border border-[#D5E3EE] rounded flex justify-center items-center min-h-80'>
                  <NoRecords title={"You don't have any products."} />
                </div> :
                <div className='bg-white border border-[#F2F4F8] rounded relative overflow-auto'>
                  {data?.products.filter((item) => activeFilter ? item.status === activeFilter : item).map((item) => <div key={item.post_id} className='grid grid-cols-12'>
                    <div className='col-span-10 border-r border-[#F2F4F8]'>
                      <div className='grid grid-cols-3'>
                        <Link to={location.pathname + "/" + item.post_id + "-" + item.name} className='col-span-1 rounded-lg flex justify-center items-center overflow-hidden mx-4 my-2 size-60'>
                          <img className='rounded-lg object-cover w-full' src={IMAGEURL + item?.images[0]?.image} alt="" />
                        </Link>
                        <div className='col-span-2 flex justify-start items-start p-4'>
                          <div className='flex flex-col justify-between items-start gap-2'>
                            <Link to={location.pathname + "/" + item.post_id + "-" + item.name} className='text-primary font-medium text-2xl mb-2'>
                              <h3 >{item.name}</h3>
                            </Link>
                            <div className='flex flex-col justify-start items-start gap-2'>
                              <p className='text-primary font-normal border border-[#F2F4F8] py-2 px-6 rounded-md'>{item.category.name}</p>
                              <div className='flex justify-evenly gap-4 items-center'>
                                <p className='text-helper font-medium'>Added: <span className='text-light font-normal'>{getFormatedDate(item.createdAt)}</span></p>
                                <p className='text-helper font-medium'>Expires: <span className='text-light font-normal'>{item.expires ? getFormatedDate(item.expires) : "Never"}</span></p>
                                <p className='text-helper font-medium'>Status: <span className='text-light font-normal'>{item.status}</span></p>
                              </div>
                              <div className='bg-[#F2F4F8] flex justify-between items-center px-2 py-1 rounded-md gap-4'>
                                <div className=' flex justify-between items-center gap-2 cursor-pointer'>
                                  <ViewIcon className='fill-light' />
                                  <span className='text-light font-medium'>{item._count.views}</span>
                                </div>
                                <div className=' flex justify-between items-center gap-2 cursor-pointer'>
                                  <MobileIcon className='fill-light' />
                                  <span className='text-light font-medium'>{item._count.comments}</span>
                                </div>
                                <div className=' flex justify-between items-center gap-2 cursor-pointer'>
                                  <LikeIcon className='fill-light' />
                                  <span className='text-light font-medium'>{item._count.likes}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='col-span-2 relative p-4 flex justify-between items-start flex-col'>
                      <ul>
                        <li onClick={() => handleEdit(item.post_id)} className={`cursor-pointer text-base font-medium text-[#3F5263] hover:text-[#FFB300] py-1 transition ease-in-out flex justify-start gap-2 items-center`} ><EditIcon />Edit</li>
                        <li onClick={() => handleDelete(item.post_id)} className={`cursor-pointer text-base font-medium text-[#3F5263] hover:text-[#FFB300] py-1 transition ease-in-out flex justify-start gap-2 items-center`} ><DeleteIcon />Delete</li>
                      </ul>
                      <div className='mx-auto'>
                        {/* {user.role === 'USER' &&  */}
                        <button onClick={() => handlePromote(item.post_id, 'Pending')} className='bg-helper text-white font-semibold'>
                          Promote
                        </button>
                        {/* } */}
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

export default MyProducts


const LoadingUI = () => {
  return (
    <>
    </>
  )
}