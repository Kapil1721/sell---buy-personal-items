import React from 'react'
import TopSection from './sections/Topsection'
import ContentPart from './sections/ContentPart'
import ContactForm from './sections/ContactForm'
import CallUs from '../../assets/Call-Us.png'
import VisitUs from '../../assets/Visit-Us.png'
import WriteToUs from '../../assets/Write-To-Us.png'
import Map from './sections/Map'

function ContactUs() {
    return (
        <div>
            <TopSection />
            <div className="relative">
                <div className="max-w-[1200px] mx-auto py-14">
                    <div className='grid grid-cols-5'>
                        <div className='col-span-2'>
                            <ContentPart />
                        </div>
                        <div className='col-span-3 relative'>
                            <div className='block md:hidden'>
                                <ContactForm />
                            </div>
                            <div className='md:absolute md:-top-48 md:z-10'>
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#F8FAFD]'>
                {/* <div className='relative max-w-[1200px] mx-auto mt-20 py-14'>
                    <div className='relative grid grid-cols-3 justify-between items-center mt-10'>
                        <div className='py-6 px-12 mx-10 bg-white min-h-[264px] relative'>
                            <div className='h-full flex flex-col justify-between items-center gap-10'>
                                <div className='bg-[#D5E3EE] rounded-full p-6 absolute -top-10'>
                                    <div>
                                        <img className='size-8' src={VisitUs} alt="" />
                                    </div>
                                </div>
                                <div className='mt-10'>
                                    <h4 className='text-[#374B5C] text-2xl font-semibold tracking-tighter'>Visit Us</h4>
                                </div>
                                <div>
                                    <p className='text-center text-[#374B5C]'>125 Ramsey Drive #314 <br />Greenville, SC 29607 </p>
                                </div>
                            </div>
                        </div>
                        <div className='py-6 px-12 mx-10 bg-white min-h-[264px] relative'>
                            <div className='h-full flex flex-col justify-between items-center gap-10'>
                                <div className='bg-[#D5E3EE] rounded-full p-6 absolute -top-10'>
                                    <div>
                                        <img className='size-8' src={CallUs} alt="" />
                                    </div>
                                </div>
                                <div className='mt-10'>
                                    <h4 className='text-[#374B5C] text-2xl font-semibold tracking-tighter'>Call Us</h4>
                                </div>
                                <div>
                                    <p className='text-center text-[#374B5C]'></p>
                                </div>
                            </div>
                        </div>
                        <div className='py-6 px-12 mx-10 bg-white min-h-[264px] relative'>
                            <div className='h-full flex flex-col justify-between items-center gap-10'>
                                <div className='bg-[#D5E3EE] rounded-full p-6 absolute -top-10'>
                                    <div>
                                        <img className='size-8' src={WriteToUs} alt="" />
                                    </div>
                                </div>
                                <div className='mt-10'>
                                    <h4 className='text-[#374B5C] text-2xl font-semibold tracking-tighter'>Write To Us</h4>
                                </div>
                                <div>
                                    <p className='text-center text-[#374B5C]'><a
                                        href="mailto:Info@sellpersonalitems.com"
                                    >
                                        Info@sellpersonalitems.com
                                    </a>
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div> */}
            </div>
            <Map />
        </div>
    )
}

export default ContactUs