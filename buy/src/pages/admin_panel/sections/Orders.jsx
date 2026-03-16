import React, { useContext, useEffect, useState } from 'react'
import NoRecords from './components/NoRecords'
import { useQuery } from '@tanstack/react-query'
import { GET_PURCHASE_REQUEST, UPDATE_STATUS_PURCHASE_REQUEST } from '../../../services/operations/PurchaseRequestApi'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { AuthContext } from '../../../auth/AuthContext'
import Topsection from './components/Topsection'
import ProductFilter from './components/ProductFilter'
import { GlobalLoader } from '../../../components/backdropLoader/BackdropLoader'

function Orders() {

  const { user } = useContext(AuthContext)
  const [myOrders, setMyOrders] = useState([])
  const navigate = useNavigate();
  const [SearchParams, SetSearchParams] = useSearchParams({});

  const sortValue = SearchParams.get('sort');
  const searchQuery = SearchParams.get('searchQuery');
  const { isPending, error, data } = useQuery({
    queryKey: ['Orders', sortValue, searchQuery],
    queryFn: async () => await GET_PURCHASE_REQUEST(user.id, { who: 'seller', sort: SearchParams.get('sort'), searchQuery })
  });


  const handleRemoveItem = async (id) => {
    const res = await UPDATE_STATUS_PURCHASE_REQUEST("Cancelled", id);
    // console.log(res);
    if (res) {
      setMyOrders(myOrders.map((item) => item.id === id ? ({ ...item, status: res.requestStatus }) : ({ ...item })));
    }
  };
  const handleApprove = async (id) => {
    const res = await UPDATE_STATUS_PURCHASE_REQUEST("Accepted", id);
    // console.log(res);
    if (res) {
      setMyOrders(myOrders.map((item) => item.id === id ? ({ ...item, status: res.requestStatus }) : ({ ...item })));
    }
  };

  useEffect(() => {
    setMyOrders(data?.data)
  }, [data])

  return (
    <div className="relative bg-[#F8FAFD]">
      <div className="max-w-[1200px] mx-auto py-14">
        <Topsection title={"Orders"} />
        {/* <div className='bg-[#FDFDFE]  p-10 mt-10'>

        </div> */}
        {myOrders?.length === 0 ? <div className='relative bg-white border border-[#D5E3EE] rounded flex justify-center items-center min-h-80'>
          <NoRecords title={"You don't have any order"} />
        </div> :
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
              <thead className="text-xs text-primary font-medium uppercase bg-gray-100">
                <tr>
                  <th scope="col" className="px-10 py-3 text-sm border">
                    <span className="">Image</span>
                  </th>
                  <th scope="col" className="px-6 py-3 text-sm border">
                    <span className="">Product Name</span>
                  </th>
                  <th scope="col" className="px-6 py-3 text-sm border">
                    <span className="">Category</span>
                  </th>
                  <th scope="col w-0" className="px-6 py-3 text-sm border">
                    <span className="">Quantity</span>
                  </th>
                  <th scope="col" className="px-6 py-3 text-sm border">
                    <span className="">Buyer</span>
                  </th>
                  <th scope="col" className="px-6 py-3 text-sm border">
                    <span className="">Status</span>
                  </th>
                  <th scope="col" className="px-6 py-3 text-sm border">
                    <span className="">Action</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {isPending &&
                  [...Array(6)].map((itm, i) =>
                    <tr key={i} className="bg-white hover:bg-gray-5">
                      <td className="p-4 w-0 border">
                        <div className='size-20 bg-loader animate-pulse'></div>
                      </td>
                      <td className="px-6 py-4 font-semibold text-primary border">
                        <div className='min-h-5 bg-loader animate-pulse rounded-md'></div>
                      </td>
                      <td className="px-6 py-4 w-fit font-semibold text-primary text-nowrap border">
                        <div className='min-h-5 bg-loader animate-pulse rounded-md'></div>
                      </td>
                      <td className="px-6 py-4 w-0 font-semibold text-primary border">
                        <div className='min-h-5 bg-loader animate-pulse rounded-md'></div>
                      </td>
                      <td className="px-6 py-4 font-semibold text-primary border">
                        <div className='min-h-5 bg-loader animate-pulse rounded-md'></div>
                      </td>
                      <td className="px-6 py-4 font-semibold text-primary border">
                        <div className='min-h-5 min-w-10 bg-loader animate-pulse rounded-md'></div>
                      </td>
                      <td className="px-6 py-4 border">
                        <div className='min-h-5 bg-loader animate-pulse rounded-md'></div>
                      </td>
                    </tr>

                  )
                }

                {myOrders?.map((item, i) =>
                  <tr key={i} className="bg-white hover:bg-gray-5">
                    <td className="p-4 w-0 border">
                      <img
                        src={item.product.images[0].image}
                        className="w-16 md:w-20 rounded-md max-w-full max-h-full"
                        alt="Apple Watch"
                      />
                    </td>
                    <td className="px-6 py-4 font-semibold text-primary border">
                      {item.product.name}
                    </td>
                    {/* <td className="px-6 py-4">
                        <div className="flex items-center">
                            <button
                                className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                                type="button"
                            >
                                <span className="sr-only">Quantity button</span>
                                <svg
                                    className="w-3 h-3"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 18 2"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M1 1h16"
                                    />
                                </svg>
                            </button>
                            <div>
                                <input
                                    type="number"
                                    id="first_product"
                                    className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder={1}
                                    required=""
                                />
                            </div>
                            <button
                                className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                                type="button"
                            >
                                <span className="sr-only">Quantity button</span>
                                <svg
                                    className="w-3 h-3"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 18 18"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 1v16M1 9h16"
                                    />
                                </svg>
                            </button>
                        </div>
                    </td> */}
                    <td className="px-6 py-4 w-fit font-semibold text-primary text-nowrap border">
                      {item.product.category.name}
                    </td>
                    <td className="px-6 py-4 w-0 font-semibold text-primary border">
                      {item.product.quantity || 2}
                    </td>
                    <td className="px-6 py-4 font-semibold text-primary border">
                      {item.buyer.name}
                    </td>
                    <td className="px-6 py-4 font-semibold text-primary border">
                      <span className={`${item.status === 'Pending' ? "bg-light text-white" : item.status === 'Accepted' ? "bg-secondary text-white" : "bg-red-500 text-white"} p-2 rounded-lg cursor-default`}>{item.status}</span>
                    </td>
                    {/* {item.description}
                        </td> */}
                    <td className="px-6 py-4 border">
                      <div className='flex flex-col justify-center items-center gap-2'>
                        {!(item.status === 'Accepted') && <span
                          onClick={() => handleApprove(item.id)}
                          className="font-medium text-helper cursor-pointer hover:underline"
                        >
                          Accept
                        </span>}
                        {/* {item.status === 'Accepted' && <span
                          onClick={() => handleApprove(item.id)}
                          className="font-medium text-helper cursor-pointer hover:underline"
                        >
                          Fulfill
                        </span>} */}
                        <span
                          onClick={() => handleRemoveItem(item.id)}
                          className="font-medium text-red-600 cursor-pointer hover:underline"
                        >
                          Cancel
                        </span>
                      </div>
                    </td>
                  </tr>)}
              </tbody>
            </table>
          </div >
        }
      </div>
    </div>
  )
}

export default Orders