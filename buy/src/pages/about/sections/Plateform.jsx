import React from 'react'
import { Link } from 'react-router-dom'
import aboutusImage from '../../../assets/A-Little-More-About-Our-Platform.png'

function Plateform() {
    return (
        <div className="flex flex-col mx-10 gap-10 pb-16">
            <div className='grid grid-cols-2 gap-16 py-10 justify-between items-center'>
                <div className="flex flex-col items-start justify-center gap-5 px-16">
                    <p className="px-2 py-1 bg-[#537CD9] text-white text-sm font-medium rounded">Our Plateform</p>
                    <h1 className="text-3xl font-bold text-[#374B5C]">A Little More About Our Platform</h1>
                    <p className="text-[#73818C] leading-8">DCCCapital Group LLC connects you to people and closets filled with unique styles, hard-to-find pieces, and endless items to discover. Get started today and join our vibrant & diverse community, who make shopping and selling simple, social, and accessible!</p>
                    <div className='post_product_button mt-5'>
                        <Link to={'/login-register'} className='bg-btn-primay px-3 py-2 rounded-md flex items-center justify-between w-full gap-4 button'>
                            <span className='text-nowrap text-[#374B5C] mr-6'>Explore products</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={12}
                                height={11}
                                viewBox="0 0 12 11"
                                fill="none"
                            >
                                <path
                                    d="M7.13805 10.4713C7.00772 10.6017 6.83738 10.6667 6.66671 10.6667C6.49605 10.6667 6.32571 10.6017 6.19538 10.4713C5.93504 10.211 5.93504 9.78898 6.19538 9.52865L9.72407 5.99996H0.666672C0.298669 5.99996 0 5.70129 0 5.33329C0 4.96528 0.298669 4.66662 0.666672 4.66662H9.72407L6.19538 1.13792C5.93504 0.877589 5.93504 0.455586 6.19538 0.195251C6.45571 -0.0650838 6.87771 -0.0650838 7.13805 0.195251L11.8047 4.86195C12.0651 5.12229 12.0651 5.54429 11.8047 5.80462L7.13805 10.4713Z"
                                    fill="#374B5C"
                                />
                            </svg>
                        </Link>
                    </div>
                </div>
                <div className="relative">
                    <img src={aboutusImage} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Plateform