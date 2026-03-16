import React from 'react'
import TopSection from './sections/TopSection'
import Aboutus from './sections/Aboutus'
import Process from './sections/Process'
import Plateform from './sections/Plateform'
import Testimonials from './sections/Testimonials'
import Newsletter from '../home/sections/Newsletter'

function About() {
    return (
        <div>
            <TopSection />
            <div className="bg-white w-full relative">
                <div className="bg-[#F8FAFD] mt-32 relative">
                    <div className="max-w-7xl mx-auto">
                        <Aboutus />
                    </div>
                </div>
                <div className="mt-32 relative">
                    <div className="max-w-7xl mx-auto">
                        <Process />
                    </div>
                </div>
                <div className="bg-[#F8FAFD] mt-32 relative">
                    <div className="max-w-7xl mx-auto">
                        <Plateform />
                    </div>
                </div>
                <div className="mt-32 relative">
                    <div className="max-w-7xl mx-auto">
                        <Testimonials />
                    </div>
                </div>
            </div>
            <Newsletter text={<><span className='text-[#FFB300]'>Sign up</span> to receive the latest updates and news</>} />
        </div>
    )
}

export default About