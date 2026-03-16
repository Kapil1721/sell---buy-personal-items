import React, { useEffect, useMemo, useRef, useState } from 'react'
import Topsection from './components/Topsection'
import ProductFilter from './components/ProductFilter'
import { AdminIcon } from '../../../components/Icons'
import MensWhiteShoes300x267 from '../../../assets/Mens-White-Shoes-300x267.jpg'
import ErrorUi from '../../../components/ErrorUi'
import { GET_MODERATION_PRODUCT, MODERATION_PRODUCT_STATUSUPDATE, DELETE_MODERATION_PRODUCT } from '../../../services/operations/adminApi'
import { useQuery } from '@tanstack/react-query';
import { IMAGEURL, getFormatedDate } from '../../../utils/constants'
import NoRecords from './components/NoRecords'
import { toast } from 'sonner'
import { Navigate, useNavigate, useSearchParams } from 'react-router-dom'

function ModerateProducts() {
  const [refresh, setRefresh] = useState(false);
  const [search, setSearch] = useState('');
  const [activeFilter, setActiveFilter] = useState(null);
  const navigate = useNavigate();
  const [SearchParams, SetSearchParams] = useSearchParams({});

  const [products, setProducts] = useState([])

  const sortValue = SearchParams.get('sort');
  const searchQuery = SearchParams.get('searchQuery');


  const { isPending, error, data } = useQuery({
    queryKey: ['GET_MODERATION_PRODUCT', refresh, sortValue, searchQuery],
    queryFn: async () => await GET_MODERATION_PRODUCT({ sort: SearchParams.get('sort'), searchQuery })
  });




  const draftProductsCount = useMemo(() => products?.filter((item) => item.status === 'Draft')?.length, [products?.length]);
  const activeProductsCount = useMemo(() => products?.filter((item) => item.status === 'Active')?.length, [products?.length]);
  const pendingProductsCount = useMemo(() => products?.filter((item) => item.status === 'Pending')?.length, [products?.length]);

  useEffect(() => {
    setProducts(data?.products)
  }, [data])


  // if (isPending) {
  //   return <GridLoadingUI />
  // }

  if (error) {
    return <ErrorUi error={error.name} />
  }




  const handleStatus = async (product_id, status) => {
    let res = await MODERATION_PRODUCT_STATUSUPDATE({ product_id, status });
    if (res.status) {
      let _products = products.map((item, i) => {
        if (item.post_id === product_id) {
          console.log(item.post_id === product_id);
          return { ...res.product }
        }
        return item
      });
      setProducts(_products)
      toast.success(res.message)
    }
  };

  const handleDelete = async (id) => {
    let res = window.confirm("Are you sure you want to delete this product?");
    if (res) {
      let res = await DELETE_MODERATION_PRODUCT(id)
      if (res?.status) {
        let _products = products.filter((item) => item.post_id !== id);
        setProducts(_products)
        toast.success(res.message)
      }
    }
  };


  const handleEdit = async (id) => {
    // setSearchParams((search)=>({...search,id:id,type:"moderation"}))
    await navigate(location.pathname + "/edit" + `?id=${id}&type=moderation`, { state: location.pathname, replace: true })
  }



  return (
    <div className="relative bg-[#F8FAFD]">
      <div className="max-w-[1200px] mx-auto py-14">
        <div className='relative'>
          {


            <div className=''>
              <Topsection title={"Moderation"} />
              <div className='bg-[#FDFDFE]  p-10 mt-10'>
                <ProductFilter setActiveFilter={setActiveFilter} activeFilter={activeFilter} draft={draftProductsCount} All={data?.products.length} Active={activeProductsCount} Pending={pendingProductsCount} />
              </div>
              <div className='bg-white border border-[#D5E3EE] rounded relative'>
                <div className='grid grid-cols-12 border-b border-[#D5E3EE]'>
                  <div className='col-span-6 p-6 text-[#374B5C] text-lg font-medium'>Product</div>
                  <div className='col-span-2 p-6 text-[#374B5C] text-lg font-medium'>User</div>
                  <div className='col-span-2 p-6 text-[#374B5C] text-lg font-medium'>Status</div>
                  <div className='col-span-2 p-6 text-[#374B5C] text-lg font-medium'>Actions</div>
                </div>
                {isPending &&
                  <>
                    <div className='bg-white rounded relative'>
                      <div className='grid grid-cols-12 border-b border-[#D5E3EE] p-2'>
                        <div className='col-span-6 p-6 text-[#374B5C] text-lg font-medium  animate-pulse bg-loader w-1/2 rounded-3xl'></div>
                        <div className='col-span-2 p-6 text-[#374B5C] text-lg font-medium  animate-pulse bg-loader w-1/2 rounded-3xl'></div>
                        <div className='col-span-2 p-6 text-[#374B5C] text-lg font-medium  animate-pulse bg-loader w-1/2 rounded-3xl'></div>
                        <div className='col-span-2 p-6 text-[#374B5C] text-lg font-medium  animate-pulse bg-loader w-1/2 rounded-3xl'></div>
                      </div>
                      {[...Array(3), () => ({})].map((item, index) =>
                        <div key={index} className='grid grid-cols-12 border-b border-[#D5E3EE]'>
                          <div className='col-span-6 border-r  border-[#D5E3EE]'>
                            <div className='grid grid-cols-3'>
                              <div className='col-span-1 flex justify-center items-center overflow-hidden p-4'>
                                <span className='rounded-lg border-0 outline-none min-h-20 min-w-32 animate-pulse bg-loader' />
                              </div>
                              <div className='col-span-2 flex justify-start items-center w-full'>
                                <div className='flex flex-col justify-between items-start gap-2 w-full'>
                                  <h3 className='text-primary font-medium min-h-4 animate-pulse bg-loader w-1/2 rounded-3xl'></h3>
                                  <div className='flex flex-col justify-start items-start gap-1 w-1/2'>
                                    <p className='text-primary font-medium min-h-4 animate-pulse bg-loader w-1/2 rounded-3xl'></p>
                                    <p className='text-primary font-medium min-h-4 animate-pulse bg-loader w-1/2 rounded-3xl'></p>
                                    <p className='text-primary font-medium min-h-4 animate-pulse bg-loader w-1/2 rounded-3xl'></p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='col-span-2 flex justify-center items-center border-r border-[#D5E3EE]'>
                            <div className='flex justify-center items-center flex-col gap-3'>
                              <div className='rounded-full size-12 flex justify-center items-center animate-pulse bg-loader'>

                              </div>
                              <p className='text-primary font-semibold min-h-6 animate-pulse bg-loader w-full'></p>
                            </div>
                          </div>
                          <div className='col-span-2 flex justify-center items-center border-r border-[#D5E3EE]'>
                            <div className='flex justify-center items-center '>
                              <p className={`py-1 px-4 rounded-md font-semibold  min-h-6 w-full animate-pulse bg-loader text-center `}></p>
                            </div>
                          </div>
                          <div className='col-span-2 relative p-4 flex justify-center items-center'>
                            <div className='relative group'>
                              <div className=' min-w-32  flex justify-between items-center px-3 py-3 relative rounded-md min-h-6 animate-pulse bg-loader' >

                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className='mt-4'>
                      <p className='text-[#73819E] min-h-6 min-w-full animate-pulse bg-loader rounded-3xl'></p>
                    </div>
                  </>
                }
                {!isPending && products?.length < 1 ?
                  <div className='relative bg-white border border-[#D5E3EE] rounded flex justify-center items-center min-h-80'>
                    <NoRecords title={"No Moderations"} />
                  </div> : products?.filter((item) => activeFilter ? item.status === activeFilter : item).map((item, index) =>
                    <div key={item.post_id} className='grid grid-cols-12 border-b border-[#D5E3EE]'>
                      <div className='col-span-6 border-r  border-[#D5E3EE]'>
                        <div className='grid grid-cols-3'>
                          <div className='col-span-1 flex justify-center items-center overflow-hidden p-4'>
                            <img className='rounded-lg h-32 w-56 items-center object-fill' src={IMAGEURL + item.images[0].image} alt={item.name} />
                          </div>
                          <div className='col-span-2 flex justify-start items-center pr-4'>
                            <div className='flex flex-col justify-between items-start gap-2 w-full'>
                              <h3 className='text-primary font-medium'>{item.name}</h3>
                              <div className='flex flex-col justify-start items-start gap-1 w-full'>
                                <p className='text-primary font-medium'>Category: <span className='text-light font-normal'>{item.category.name}</span></p>
                                <p className='text-primary font-medium'>Added: <span className='text-light font-normal'>{getFormatedDate(item.createdAt)}</span></p>
                                <div className='flex justify-start gap-5 w-full'>
                                  <p className='text-primary font-medium'>Expires: <span className='text-light font-normal'>{getFormatedDate(item.expires) ? getFormatedDate(item.expires) : 'Never'}</span></p>
                                  <p className='text-primary font-medium'>For: <span className='text-light font-normal'>{item.itemsType}</span></p>
                                </div>

                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='col-span-2 flex justify-center items-center border-r border-[#D5E3EE]'>
                        <div className='flex justify-center items-center flex-col gap-3'>
                          <div className='rounded-full bg-[#F2F4F8] size-12 flex justify-center items-center '>
                            <AdminIcon color={"#D5E3EE"} />
                          </div>
                          <p className='text-primary font-semibold'>{item?.user?.name}</p>
                        </div>
                      </div>
                      <div className='col-span-2 flex justify-center items-center border-r border-[#D5E3EE]'>
                        <div className='flex justify-center items-center '>
                          <p className={`py-1 px-4 rounded-md font-semibold  ${item.status === 'Active' ? "bg-active text-white" : "bg-[#D5E3EE] text-primary"} text-center `}>{item.status}</p>
                        </div>
                      </div>
                      <div className='col-span-2 relative p-4 flex justify-center items-center'>
                        <div className='relative group'>
                          <div className='border min-w-32 border-[#D5E3EE] flex justify-between items-center px-3 py-3 relative rounded-md' >
                            <div className='text-base font-medium text-[#3F5263]'>{"Actions"}</div>
                            <div className='relative'>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={7}
                                height={5}
                                viewBox="0 0 7 5"
                                fill="none"
                              >
                                <path
                                  d="M3.5 2.56768L5.87477 0.192917C6.13207 -0.0643854 6.54972 -0.0643854 6.80702 0.192917C7.06433 0.45022 7.06433 0.86787 6.80702 1.12517L3.9394 3.99279C3.6964 4.2358 3.30298 4.2358 3.0606 3.99279L0.192977 1.12517C-0.0643257 0.86787 -0.0643257 0.45022 0.192977 0.192917C0.45028 -0.0643854 0.86793 -0.0643854 1.12523 0.192917L3.5 2.56768Z"
                                  fill="#2A3946"
                                />
                              </svg>
                            </div>
                          </div>
                          <div className='hidden min-w-40 group-hover:block dropdownlist w-full border border-[#D5E3EE] px-5 py-2 absolute z-10 bg-white rounded-md'>
                            <ul>
                              {!item.isApproved && <li onClick={() => handleStatus(item.post_id, 'Approve')} className={`cursor-pointer text-base font-medium text-[#3F5263] hover:text-[#FFB300] py-1 transition ease-in-out`} >Approve</li>}
                              {!item.isApproved && <li onClick={() => handleStatus(item.post_id, 'Decline')} className={`cursor-pointer text-base font-medium text-[#3F5263] hover:text-[#FFB300] py-1 transition ease-in-out`} >Decline</li>}
                              {(item.isApproved && item.status === 'Active') &&
                                <li onClick={() => handleStatus(item.post_id, "Draft")} className={`cursor-pointer text-base font-medium text-[#3F5263] hover:text-[#FFB300] py-1 transition ease-in-out`} >Switch to Draft</li>
                              }
                              {(item.isApproved && item.status === 'Draft') && <li onClick={() => handleStatus(item.post_id, "Publish")} className={`cursor-pointer text-base font-medium text-[#3F5263] hover:text-[#FFB300] py-1 transition ease-in-out`} >Publish</li>}
                              <li onClick={() => handleEdit(item.post_id)} className={`cursor-pointer text-base font-medium text-[#3F5263] hover:text-[#FFB300] py-1 transition ease-in-out`} >Edit</li>
                              <li onClick={() => handleDelete(item.post_id)} className={`cursor-pointer text-base font-medium text-[#3F5263] hover:text-[#FFB300] py-1 transition ease-in-out`} >Delete</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
              </div>
              <div className='mt-4'>
                {/* <p className='text-[#73819E]'>Showing <span className='text-[#374B5C] font-semibold'>1</span> to <span className='text-[#374B5C] font-semibold'>3</span> of <span className='text-[#374B5C] font-semibold'>6</span> results</p> */}
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default ModerateProducts



export const GridLoadingUI = () => {
  return (
    <div className="relative bg-[#F8FAFD]">
      <div className="max-w-[1200px] mx-auto py-14">
        <div className='relative'>
          {
            <div className=''>
              <Topsection title={"Moderation"} />
              <div className=' p-10 mt-10 min-h-14 animate-pulse bg-loader rounded-3xl mb-10'>

              </div>
              <div className='bg-white border border-[#D5E3EE] rounded relative'>
                <div className='grid grid-cols-12 border-b border-[#D5E3EE] p-2'>
                  <div className='col-span-6 p-6 text-[#374B5C] text-lg font-medium  animate-pulse bg-loader w-1/2 rounded-3xl'></div>
                  <div className='col-span-2 p-6 text-[#374B5C] text-lg font-medium  animate-pulse bg-loader w-1/2 rounded-3xl'></div>
                  <div className='col-span-2 p-6 text-[#374B5C] text-lg font-medium  animate-pulse bg-loader w-1/2 rounded-3xl'></div>
                  <div className='col-span-2 p-6 text-[#374B5C] text-lg font-medium  animate-pulse bg-loader w-1/2 rounded-3xl'></div>
                </div>
                {[...Array(3), () => ({})].map((item, index) =>
                  <div key={index} className='grid grid-cols-12 border-b border-[#D5E3EE]'>
                    <div className='col-span-6 border-r  border-[#D5E3EE]'>
                      <div className='grid grid-cols-3'>
                        <div className='col-span-1 flex justify-center items-center overflow-hidden p-4'>
                          <span className='rounded-lg border-0 outline-none min-h-20 min-w-32 animate-pulse bg-loader' />
                        </div>
                        <div className='col-span-2 flex justify-start items-center w-full'>
                          <div className='flex flex-col justify-between items-start gap-2 w-full'>
                            <h3 className='text-primary font-medium min-h-4 animate-pulse bg-loader w-1/2 rounded-3xl'></h3>
                            <div className='flex flex-col justify-start items-start gap-1 w-1/2'>
                              <p className='text-primary font-medium min-h-4 animate-pulse bg-loader w-1/2 rounded-3xl'></p>
                              <p className='text-primary font-medium min-h-4 animate-pulse bg-loader w-1/2 rounded-3xl'></p>
                              <p className='text-primary font-medium min-h-4 animate-pulse bg-loader w-1/2 rounded-3xl'></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='col-span-2 flex justify-center items-center border-r border-[#D5E3EE]'>
                      <div className='flex justify-center items-center flex-col gap-3'>
                        <div className='rounded-full size-12 flex justify-center items-center animate-pulse bg-loader'>

                        </div>
                        <p className='text-primary font-semibold min-h-6 animate-pulse bg-loader w-full'></p>
                      </div>
                    </div>
                    <div className='col-span-2 flex justify-center items-center border-r border-[#D5E3EE]'>
                      <div className='flex justify-center items-center '>
                        <p className={`py-1 px-4 rounded-md font-semibold  min-h-6 w-full animate-pulse bg-loader text-center `}></p>
                      </div>
                    </div>
                    <div className='col-span-2 relative p-4 flex justify-center items-center'>
                      <div className='relative group'>
                        <div className=' min-w-32  flex justify-between items-center px-3 py-3 relative rounded-md min-h-6 animate-pulse bg-loader' >

                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className='mt-4'>
                <p className='text-[#73819E] min-h-6 min-w-full animate-pulse bg-loader rounded-3xl'></p>
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  )
}