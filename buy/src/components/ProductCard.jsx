import React from 'react'
import { AdminIcon, CompareIcon, LikeIcon } from './Icons'
import MensWhiteShoes from '../assets/Mens-White-Shoes.jpg'
function ProductCard() {
    return (
        <>
            <div className="relative flex flex-col rounded-lg group cursor-pointer">
                <div className="relative">
                    <div className="overflow-hidden rounded-t-lg box-border">
                        <img width={"100%"} height={'100%'} loading="lazy" className="transform object-cover  hover:scale-100 transition ease-in-out scale-105 border-0 shadow-none overflow-hidden aspect-[360/240]" src={MensWhiteShoes} alt="" />
                    </div>
                </div>
                <div className="flex-1  border  border-[#F2F4F8] rounded-b-lg  transition group-hover:shadow-lg overflow-hidden bg-[#FDFDFE]">
                    <div className=" flex flex-col justify-between">
                        <div className="p-10">
                            <h1 className="text-xl font-semibold min-h-[56px] text-start text-[#4E606F]"> Mens White Shoes </h1>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 justify-center items-start border-t border-[#F2F4F8] py-3">
                        <div className="grid grid-cols-2 items-center">
                            <div className="relative">
                                <div className="float-right rounded-full w-10 h-10 flex justify-center items-center bg-[#F2F4F8]">
                                    <AdminIcon />
                                </div>
                            </div>
                            <span className="ml-2 text-base text-[#4E606F] font-medium">Admin</span>
                        </div>
                        <div className="grid grid-cols-2 items-center">
                            <div className="relative">
                                <div className="float-right mr-2 rounded-full border flex justify-center items-center w-10 h-10 cursor-pointer hover:border-[#537CD9]">
                                    <CompareIcon />
                                </div>
                            </div>
                            <div className="rounded-full border w-10 h-10 flex justify-center items-center cursor-pointer hover:border-[#537CD9]">
                                <LikeIcon />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCard