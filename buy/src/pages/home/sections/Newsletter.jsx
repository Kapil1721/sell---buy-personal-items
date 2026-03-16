import React, { useState } from 'react'
import { SUBSCRIBE_NEWSLETTER } from '../../../services/operations/newsletter'
import { toast } from 'sonner';

function Newsletter({ text }) {

    const [email, setMail] = useState('')

    const handleSubscribe_Newsletter = async (e) => {
        e.preventDefault();
        const res = await SUBSCRIBE_NEWSLETTER({ email });
        if (res.status) {
            toast.success(res.message)
        }
    }

    return (
        <div className='w-full relative py-5 bg-[#283641]' >
            <div className='max-w-7xl mx-auto'>
                <div className='flex py-5 lg:py-10 flex-col sm:flex-row gap-4 lg:gap-0 justify-between items-center '>
                    <div className='w-full '>
                        <h2 className='text-white text-xl lg:text-4xl max-w-[600px] font-bold text-center lg:text-start'>{text ? text : "Join our news letter"}</h2>
                        <p className='text-white text-base text-center lg:text-start px-4 md:px-2 lg:px-0  max-w-[600px] mt-4'>{text ? text : "Get up to date information on current market conditions. Learn how these conditions effect your personal property. Learn also how to stage and price your personal items for quick sell."}</p>
                    </div>
                    <div className='w-full px-4 lg:px-0 lg:ml-20'>
                        <div className='flex justify-center lg:justify-between items-center gap-4 bg-white lg:p-5 p-2 rounded-md' >
                            <div className=' relative grow'>
                                <input id='subcribe' value={email} onChange={(e) => setMail(e.target.value)} className='border border-[#D5E3EE] rounded-md py-4 lg:py-5 pl-14 pr-4 lg:px-16 focus:outline-none placeholder:text-[#374b5c] w-full text-sm lg:text-base font-medium' type="email" placeholder="Email" />
                                <span className='absolute top-3 lg:top-4 left-3 lg:left-4 w-8 h-8 rounded-md bg-[#d5e3ee] flex justify-center items-center'>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={15}
                                        height={15}
                                        viewBox="0 0 15 15"
                                        fill="none"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M0 7.5C0 3.36453 3.36452 0 7.5 0C11.6355 0 15 3.36453 15 7.5C15 11.6355 11.6355 15 7.5 15C3.36452 15 0 11.6355 0 7.5ZM13.875 7.5C13.875 3.97252 11.0275 1.125 7.5 1.125C3.97252 1.125 1.125 3.97252 1.125 7.5C1.125 11.0275 3.97252 13.875 7.5 13.875C11.0275 13.875 13.875 11.0275 13.875 7.5ZM7.5 2.25C4.60705 2.25 2.25 4.60705 2.25 7.5C2.25 10.393 4.60705 12.75 7.5 12.75C8.14767 12.75 8.7706 12.6325 9.34497 12.4167C9.53541 12.3478 9.67407 12.1817 9.70799 11.982C9.74191 11.7823 9.66587 11.5798 9.50889 11.4518C9.35191 11.3238 9.13824 11.2901 8.94946 11.3635C8.49934 11.5326 8.01183 11.625 7.5 11.625C5.21495 11.625 3.375 9.78505 3.375 7.5C3.375 5.21495 5.21495 3.375 7.5 3.375C9.78505 3.375 11.625 5.21495 11.625 7.5V8.0625C11.625 8.58683 11.2118 9 10.6875 9C10.1632 9 9.75 8.58683 9.75 8.0625V5.4375C9.75226 5.15149 9.53956 4.90931 9.25565 4.87464C8.97174 4.83997 8.70701 5.02385 8.64038 5.302C8.26074 5.0341 7.80663 4.875 7.3125 4.875C5.94307 4.875 4.875 6.0853 4.875 7.5C4.875 8.9147 5.94307 10.125 7.3125 10.125C8.00653 10.125 8.62211 9.81305 9.06152 9.32227C9.44007 9.80853 10.0287 10.125 10.6875 10.125C11.8199 10.125 12.75 9.19492 12.75 8.0625V7.5C12.75 4.60705 10.393 2.25 7.5 2.25ZM8.625 7.5C8.625 6.63995 8.01082 6 7.3125 6C6.61418 6 6 6.63995 6 7.5C6 8.36005 6.61418 9 7.3125 9C8.01082 9 8.625 8.36005 8.625 7.5Z"
                                            fill="#405364"
                                        />
                                    </svg>
                                </span>
                            </div>
                            <div className=''>
                                <button onClick={handleSubscribe_Newsletter} className="bg-black py-[16px] lg:py-[30px] px-3 lg:px-6 rounded-md">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={18}
                                        height={18}
                                        viewBox="0 0 18 16"
                                        fill="none"
                                    >
                                        <path
                                            d="M10.7071 15.707C10.5116 15.9025 10.2561 16 10.0001 16C9.74407 16 9.48857 15.9025 9.29306 15.707C8.90256 15.3165 8.90256 14.6835 9.29306 14.293L14.5861 8.99994H1.00001C0.448004 8.99994 0 8.55193 0 7.99993C0 7.44793 0.448004 6.99992 1.00001 6.99992H14.5861L9.29306 1.70689C8.90256 1.31638 8.90256 0.68338 9.29306 0.292877C9.68357 -0.0976257 10.3166 -0.0976257 10.7071 0.292877L17.7071 7.29293C18.0976 7.68343 18.0976 8.31643 17.7071 8.70694L10.7071 15.707Z"
                                            fill="#FDFDFE"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newsletter