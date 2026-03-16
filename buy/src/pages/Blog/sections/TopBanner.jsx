import { Link } from 'react-router-dom'
import blogbanner from '../../../assets/blog-banner.jpg'

function TopBanner() {
    return (
        <div className='relative'>
            <div className='relative'>
                <div className='absolute h-full bg-[#374b5c] opacity-75 transition duration-[0.3s] ease-linear delay-0 '></div>
                <img width={'100%'} src={blogbanner} alt='' />
                <div className='w-1/2 absolute z-10 top-0 left-[22rem]'>
                    <div className='mx-auto h-full min-h-[290px] max-w-[1200px] relative'>
                        <div className='flex flex-col absolute bottom-0 gap-6 justify-end items-baseline'>
                            <div>
                                <h1 className='text-5xl text-[#FFB300] font-bold'><span className='text-white '>Our latest news</span></h1>
                            </div>
                            <ul className='flex relative bg-[#F8FAFD] px-8 py-4 rounded gap-4'>
                                <li className='flex items-center justify-between gap-4'>
                                    <Link className='text-base font-medium text-[#904B5C]' to='/'>Home</Link>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={5}
                                        height={7}
                                        viewBox="0 0 5 7"
                                        fill="none"
                                    >
                                        <path
                                            d="M2.56744 3.5L0.192673 1.12523C-0.0646296 0.86793 -0.0646296 0.45028 0.192673 0.192977C0.449976 -0.0643258 0.867626 -0.0643258 1.12493 0.192977L3.99255 3.0606C4.23556 3.3036 4.23556 3.69702 3.99255 3.9394L1.12493 6.80702C0.867626 7.06433 0.449976 7.06433 0.192673 6.80702C-0.0646296 6.54972 -0.0646296 6.13207 0.192673 5.87477L2.56744 3.5Z"
                                            fill="#F09965"
                                        />
                                    </svg>
                                </li>
                                <li className='text-[#B18B8C] text-base font-medium'>About Us</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopBanner