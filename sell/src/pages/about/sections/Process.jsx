import React from 'react'
import { Link } from 'react-router-dom'
import IfYouWantToSellYourItems from '../../../assets/If-You-Want-To-Sell-Your-Items-.png'

function Process() {
    return (
        <div className="flex flex-col gap-10 mt-16 my-20">
            <div className=" mx-auto flex flex-col justify-center items-center">
                <div className="max-w-[841px] mb-10">
                    <p className="px-4 py-1 bg-[#537CD9] text-white text-sm font-medium rounded">Our process is simple and easy</p>
                </div>
                <div className="max-w-[841px]">
                    <h1 className="text-3xl text-center font-bold text-[#374B5C]">How We Work?</h1>
                </div>
            </div>
            <div className="container mx-auto border border-gray-400 my-20">
                <div className="py-5">
                    <div className="flex mx-auto w-[45%]  items-center">
                        <div className="flex w-full items-center">
                            <div className="after-image relative w-1/3">
                                <span className="text-black">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="25" viewBox="0 0 16 25" fill="none">
                                        <path d="M1.11914 23.7492C17.1613 9.08347 19.7173 17.7527 2.72758 1.96159" stroke="#F17851"
                                            stroke-width="3"></path>
                                    </svg>
                                </span>
                            </div>
                            <div className="after-image relative w-1/3">
                                <span className="text-black"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"
                                    fill="none">
                                    <rect x="1.5" y="1.5" width="27" height="27" rx="13.5" fill="#FDFDFE" stroke="#F17851" stroke-width="3">
                                    </rect>
                                </svg></span>
                            </div>
                            <div className="after-image relative w-1/3">
                                <span className="text-black"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="25" viewBox="0 0 16 25"
                                    fill="none">
                                    <path d="M1.11914 23.7492C17.1613 9.08347 19.7173 17.7527 2.72758 1.96159" stroke="#F17851"
                                        stroke-width="3"></path>
                                </svg></span>
                            </div>
                            <div className="after-image relative">
                                <span className="text-black do-nont"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"
                                    viewBox="0 0 30 30" fill="none">
                                    <rect x="1.5" y="1.5" width="27" height="27" rx="13.5" fill="#FDFDFE" stroke="#F17851" stroke-width="3">
                                    </rect>
                                </svg></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Process