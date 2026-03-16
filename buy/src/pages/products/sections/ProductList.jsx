import React, { useContext } from 'react'
import { AdminIcon, CompareIcon, LikeIcon, ViewIcon } from '../../../components/Icons'
import MensWhiteShoes from '../../../assets/Mens-White-Shoes.jpg'
import { Tooltip } from 'react-tooltip'
import TooltipIcon from '../../../components/Tooltip'
import NoRecords from '../../admin_panel/sections/components/NoRecords'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../auth/AuthContext'



function ProductList({ products, isPending, handleLike }) {


  const { user } = useContext(AuthContext)




  if (isPending) {
    return <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {
        [...Array(6)].map((product, index) => {
          return (
            <div key={index} className="relative flex flex-col rounded-lg group cursor-pointer">
              <div className="relative">
                <div className="overflow-hidden rounded-t-lg box-border gap-4 p-4 border border-bdr">
                  <div className='min-h-40 animate-pulse bg-loader w-full rounded-3xl'></div>
                </div>
              </div>
              <div className=" border  border-[#F2F4F8] rounded-b-lg  transition group-hover:shadow-lg overflow-hidden bg-[#FDFDFE]">
                <div className=" flex flex-col justify-between">
                  <div className="p-6">
                    <div className='min-h-5 animate-pulse bg-loader w-full rounded-3xl'></div>
                  </div>
                </div>
                <div className="grid grid-cols-2 justify-between items-center px-3 border-t border-[#F2F4F8] py-4 gap-4 ">
                  <div className='min-h-4 animate-pulse bg-loader w-full rounded-3xl'></div>
                </div>
              </div>
            </div>
          )
        })}
    </div>
  }


  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {
        products?.length > 0 ? products?.map((product, index) => {
          return (
            <div key={index} className="relative flex flex-col rounded-lg group cursor-pointer">
              <Link to={`/products/${product.slug}`} className="   transition group-hover:shadow-lg overflow-hidden bg-[#FDFDFE]">
                <div className="relative">
                  <div className="overflow-hidden rounded-t-lg box-border">
                    <img width={"100%"} height={'100%'} loading="lazy" className="transform object-cover  hover:scale-100 transition ease-in-out scale-105 border-0 shadow-none overflow-hidden aspect-[360/240]" src={product.images[0].image} alt="" />
                  </div>
                </div>
                <div className="border-b  border-[#F2F4F8] flex flex-col justify-between">
                  <div className="p-6">
                    <h1 className="text-xl font-semibold min-h-[56px] text-start text-[#4E606F] line-clamp-2">{product.name}</h1>
                  </div>
                </div>
              </Link>
              <div className=" rounded-b-lg  transition group-hover:shadow-lg overflow-hidden border-b border-[#F2F4F8] bg-[#FDFDFE]">
                <div className="grid grid-cols-2 justify-between items-center px-3  py-4">
                  <div className="grid grid-cols-3 items-center gap-4">
                    <Link to={`/products/${product.slug}`}><TooltipIcon IconComponent={ViewIcon} tooltipText="View" id='View' /></Link>
                    {/* <TooltipIcon IconComponent={CompareIcon} tooltipText="Compare" id={'Compare'} /> */}
                    {user && <TooltipIcon IconComponent={LikeIcon} tooltipText="Like" id={'Like'} like={product.likeStatus} onClick={() => handleLike(product.post_id)} />}
                  </div>
                  <div className='text-end flex gap-2'>
                    <p className="text-sm font-medium text-[#9A818C]">{product._count.views} views</p>
                    <p className="text-sm font-medium text-[#9A818C]">{product._count.likes} likes</p>
                  </div>
                </div>
              </div>
            </div>
          )
        })
          : <div className='relative col-span-3 bg-white border border-[#D5E3EE] rounded flex justify-center items-center min-h-96'>
            <NoRecords title={"Products are not found under this category"} />
          </div>
      }
    </div >
  )
}

export default ProductList