import donationImage from '../../assets/donate.jpg'
import { Outlet } from 'react-router-dom'

function Donation() {
    return (
        <div className="bg-[#F0F4FA] ">
            <div className="mx-auto max-w-7xl px-4 md:px-6 py-12 sm:py-16 lg:px-8">
                <div className="mx-auto lg:mt-16 max-w-2xl rounded-3xl bg-white ring-1 ring-gray-200 sm:mt-20 lg:mx-0  lg:max-w-none">
                    <div className="p-8 sm:p-10 grid grid-cols-1 lg:grid-cols-2 justify-between items-center">
                        <div className='relative w-full'>
                            <h3 className="text-4xl font-bold tracking-tight text-primary text-center lg:text-left">Donate to Make The Difference</h3>
                            {/* <p className="mt-6 pr-10 text-base leading-7 text-gray-600 max-w-2xl">
                                To caring individuals who would like to donate items. Of course we will certainly except any monetary donations you can afford to offer. However, unused or gently used items are just as important and necessary. Depending on there conditions we can resell them given work to those who find themselves in unfortunate situations do to hardships they are experiencing.
                            </p> */}
                            <p className="mt-6 pr-10 text-base leading-7 text-gray-600 max-w-xl  text-center lg:text-left">
                                To caring individuals who would like to donate. Of course we will certainly except any monetary donations you can afford to offer. However, unused or gently used items are just as important and necessary. Depending on there conditions we can resell them given work to those who find themselves in unfortunate situations do to hardships they are experiencing.
                            </p>
                        </div>
                        <div className='flex justify-center items-center'>
                            <img className='' src={donationImage} alt="" />
                        </div>
                    </div>
                    <div className="-mt-2 p-5 lg:p-10 lg:mt-0 lg:w-full">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Donation