import { Link } from 'react-router-dom'
import logoImage from '../assets/Logo-w-1.png'
import {  MessageIcon } from './Icons'

function Footer() {
    return (
        <footer className='relative w-full bg-[#374B5C]'>
            <div className='relative px-[30px] lg:px-[60px] py-[60px] '>
                <div className='flex flex-col lg:flex-row lg:mx-auto gap-5  lg:max-w-7xl'>
                    <div className='flex flex-col lg:w-[40%] gap-2 mx-auto'>
                        <div className='flex flex-col justify-start items-start gap-2 lg:px-4'>
                            <Link className='relative'>
                                <img src={logoImage} alt="" />
                            </Link>
                        </div>
                        <div className='flex flex-col justify-start items-start lg:px-6 gap-4 mt-4'>
                            <p className='text-base font-normal text-start leading-8 text-white' >Founded with a passion for merchandise and a commitment to creating a more eco-friendly consumer culture, we aim to provide a platform where individuals can easily buy, sell, and discover unique items of their choice.</p>
                            {/* <p className='text-base font-normal leading-6 text-white'>Follow our social media</p>
                            <div className='flex justify-start items-start gap-2'>
                                <div className='rounded-full border border-white p-4 flex justify-center items-center transition ease-in-out group hover:border-[#FFB301]'>
                                    <svg className='fill-white transition ease-in-out group-hover:fill-[#FFB301]' xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 320 512">
                                        <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                                    </svg>
                                </div>
                                <div className='rounded-full border border-white p-4 flex justify-center items-center transition ease-in-out group hover:border-[#FFB301]'>
                                    <svg className='fill-white transition ease-in-out group-hover:fill-[#FFB301]' xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 512 512">
                                        <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                                    </svg>
                                </div>
                                <div className='rounded-full border border-white p-4 flex justify-center items-center transition ease-in-out group hover:border-[#FFB301]'>
                                    <svg className='fill-white transition ease-in-out group-hover:fill-[#FFB301]' xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 448 512">
                                        <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                                    </svg>
                                </div>
                                <div className=' rounded-full border border-white p-4 flex justify-center items-center transition ease-in-out group hover:border-[#FFB301]'>
                                    <svg className='fill-white transition ease-in-out group-hover:fill-[#FFB301]' xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 448 512">
                                        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                                    </svg>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    <div className='relative lg:w-[30%]'>
                        <div className='flex flex-col items-start justify-between'>
                            <h3 className='text-white font-normal'>Useful Links</h3>
                            <ul className='mt-6 flex flex-col justify-between items-start'>
                                {
                                    [{ label: "Refund Policy", url: '/refund-policy' }, { label: "Privacy Policy", url: '/privacy-policy' }, { label: "Terms & Conditions", url: '/terms-and-conditions' }].map((itm) => {
                                        return (
                                            <li className='py-3' key={itm.url}>
                                                <Link className='flex gap-3 group:' to={`${itm.url}`} >
                                                    <span className='text-white'><i aria-hidden="true" className="fas fa-angle-double-right" /></span>
                                                    <span className='text-[#DFE1E3] font-normal transition ease-in-out hover:text-[#FFB301]'>{itm.label}</span>
                                                </Link>
                                            </li>
                                        )
                                    })
                                }
                                <li className='py-3' >
                                    <Link className='flex gap-3 group:' to={'/products?type=sale'} >
                                        <span className='text-white'><i aria-hidden="true" className="fas fa-angle-double-right" /></span>
                                        <span className='text-[#DFE1E3] font-normal transition ease-in-out hover:text-[#FFB301]'>Items for Sale</span>
                                    </Link>
                                </li>
                                <li className='py-3' >
                                    <Link className='flex gap-3 group:' to={'/products?type=donation'} >
                                        <span className='text-white'><i aria-hidden="true" className="fas fa-angle-double-right" /></span>
                                        <span className='text-[#DFE1E3] font-normal transition ease-in-out hover:text-[#FFB301]'>Items for Donation</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* <div className='lg:w-[30%]'>
                        <div className='flex flex-col items-start justify-between'>
                            <h3 className='text-white font-normal'>Categories</h3>
                            <ul className='mt-6 flex flex-col justify-between items-start'>
                                {
                                    ['Clothes', 'Shoes', 'Accessories', 'Sports & Outdoors', 'Baby & Kids'].map((itm) => {
                                        return (
                                            <li className='py-3' key={itm}>
                                                <Link className='flex gap-3 group:' to={`/${itm}`} >
                                                    <span className='text-white'><i aria-hidden="true" className="fas fa-angle-double-right" /></span>
                                                    <span className='text-[#DFE1E3] font-normal transition ease-in-out hover:text-[#FFB301]'>{itm}</span>
                                                </Link>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div> */}
                    <div className='lg:w-[30%]'>
                        <div className='flex flex-col items-start justify-between'>
                            <h3 className='text-white font-normal'>Contact Us</h3>
                            <ul className='mt-6 flex flex-col justify-between items-start'>
                                <li className='py-3 flex gap-3 group' >
                                    <address className='flex justify-center items-center'>
                                        <span className='text-white bg-[#314352] p-1 rounded-sm'>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={10}
                                                height={13}
                                                viewBox="0 0 10 13"
                                                fill="none"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M4.99992 0C2.42961 0 0.333252 2.09635 0.333252 4.66667C0.333252 5.38854 0.628564 6.17969 1.0369 7.01458C1.44523 7.85313 1.97752 8.72813 2.51346 9.52656C3.57804 11.1271 4.63898 12.4286 4.63898 12.4286L4.99992 12.8734L5.36086 12.4286C5.36086 12.4286 6.42179 11.1271 7.49002 9.52656C8.02231 8.72813 8.55461 7.85313 8.96294 7.01458C9.37127 6.17969 9.66658 5.38854 9.66658 4.66667C9.66658 2.09635 7.57023 0 4.99992 0ZM4.99998 0.933105C7.06716 0.933105 8.73331 2.59925 8.73331 4.66644C8.73331 5.10394 8.50362 5.82946 8.12445 6.60602C7.74529 7.38623 7.22758 8.23206 6.71352 9.01227C5.92922 10.187 5.37406 10.8791 5.076 11.2507L4.99998 11.3456L4.92395 11.2507C4.62589 10.8791 4.07073 10.187 3.28643 9.01227C2.77237 8.23206 2.25466 7.38623 1.8755 6.60602C1.49633 5.82946 1.26664 5.10394 1.26664 4.66644C1.26664 2.59925 2.93279 0.933105 4.99998 0.933105ZM4.06659 4.66667C4.06659 4.1526 4.48586 3.73333 4.99992 3.73333C5.51398 3.73333 5.93325 4.1526 5.93325 4.66667C5.93325 5.18073 5.51398 5.6 4.99992 5.6C4.48586 5.6 4.06659 5.18073 4.06659 4.66667Z"
                                                    fill="#FDFDFE"
                                                />
                                            </svg>
                                        </span>
                                    </address>
                                    <div className='text-[#DFE1E3] font-medium'>125 Ramsey Drive #314Greenville, SC 29607</div>
                                </li>
                                <li className='py-3 flex gap-3 group' >
                                    <div className='flex justify-center items-center'>
                                        <MessageIcon color={'#fff'} />
                                    </div>
                                    <a href="mailto:Info@sellpersonalitems.com" className='text-[#DFE1E3] font-medium transition ease-in-out hover:text-[#FFB301]'>Info@sellpersonalitems.com</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-black w-full text-xs lg:text-base text-center py-4'><p className='text-white'>Copyright © 2024 Sell Personal Items | Designed by Zonewebsites</p></div>
        </footer>
    )
}

export default Footer