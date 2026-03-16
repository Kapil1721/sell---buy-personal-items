import React from 'react'
import contactUsimage from '../../../assets/We-are-ready-to-answer-your-questions.jpg'
import { Link } from 'react-router-dom'

function ContactUs() {
    return (
        <div className="relative bg-white mt-4">
            <div className="mx-auto lg:max-w-[1200px] pt-20 pb-10">
                <div className='grid lg:grid-cols-2'>
                    <div className='w-full relative'>
                        <img width={'100%'} height={'100%'} className='rounded-md' src={contactUsimage} alt="" />
                        <div className='absolute bottom-10 left-0 px-10'>
                            <div className='relative flex flex-col justify-between items-start gap-2'>
                                <h2 className='text-white text-2xl font-semibold'>Need some cash? Uncluttering could be the answer.</h2>
                                <p className='text-white text-base font-medium'>We believe it’s important to have a place to go if or when you may be in a pinch and don’t want to go into debt. You can do this for yourself or start a side hustle to supplement your current income.</p>
                                <Link to={'/memberships'} className='bg-[#FFB301] transition ease-in-out px-6 py-2 rounded-3xl text-white mt-5 border-2 border-[#FFB301] hover:border-2 hover:border-[#FFB301] hover:bg-white hover:text-[#FFB301]'>Join Us Now</Link>
                            </div>
                        </div>
                    </div>
                    {/* <div className='bg-[#EFEFEF] px-10 py-16'>
                        <h3 className='text-2xl font-semibold'>Contact Us</h3>
                        <form className=' w-full mt-6 flex flex-col justify-between items-start' action="">
                            <div className='bg-transparent w-full my-3'>
                                <input className='bg-[#EDEDED] text-[#606060] placeholder:font-medium placeholder:text-base  placeholder:text-[#606060] hover:bg-[#F9E4E8] focus:bg-[#F9E4E8] focus-visible:outline-none w-full px-2 py-2 border-l-2 border-[#E04562]' placeholder='Name' type="text" />
                                <p className='hidden px-2 py-1 text-[#E2526D] text-sm font-normal mt-2 bg-[#f9e4e8]'>Error Message</p>
                            </div>
                            <div className='bg-transparent w-full my-3'>
                                <input className='bg-[#EDEDED] text-[#606060]  placeholder:font-medium placeholder:text-base placeholder:text-[#606060] hover:bg-[#F9E4E8] focus:bg-[#F9E4E8] focus-visible:outline-none w-full px-2 py-2 border-l-2 border-[#E04562]' placeholder='Email Address' type="email" />
                                <p className='hidden px-2 py-1 text-[#E2526D] text-sm font-normal mt-2 bg-[#f9e4e8]'>Error Message</p>
                            </div>
                            <div className='bg-transparent w-full my-3'>
                                <input className='bg-[#EDEDED] text-[#606060]  placeholder:font-medium placeholder:text-base placeholder:text-[#606060] hover:bg-[#F9E4E8] focus:bg-[#F9E4E8] focus-visible:outline-none w-full px-2 py-2 border-l-2 border-[#E04562] ' placeholder='Phone Number' type="text" />
                                <p className='hidden px-2 py-1 text-[#E2526D] text-sm font-normal mt-2 bg-[#f9e4e8]'>Error Message</p>
                            </div>
                            <div className='bg-transparent w-full my-3'>
                                <textarea className='bg-[#EDEDED] text-[#606060]  placeholder:font-medium placeholder:text-base placeholder:text-[#606060] hover:bg-[#F9E4E8] focus:bg-[#F9E4E8] focus-visible:outline-none w-full px-2 py-2 border-l-2 border-[#E04562]' placeholder='Enter Your Message' type="text" maxLength={180} />
                                <p className='hidden px-2 py-1 text-[#E2526D] text-sm font-normal mt-2 bg-[#f9e4e8]'>Error Message</p>
                            </div>
                            <div className='bg-transparent my-3'>
                                <button className='bg-[#537DD9] px-6 py-2 transition ease-in-out hover:bg-[#00cb48] hover:shadow hover:shadow-[rgba(0,0,0,.6)] text-white' type='submit'>Submit</button>
                            </div>
                        </form>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default ContactUs