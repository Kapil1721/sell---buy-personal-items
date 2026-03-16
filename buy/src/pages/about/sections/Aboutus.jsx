import { Link } from "react-router-dom"
import aboutusImage from '../../../assets/about-us.png'

function Aboutus() {
    return (
        <div className="flex flex-col mx-10 gap-10 pb-16">
            <div className='grid grid-cols-2 gap-16 py-10 justify-between items-center'>
                <div className="relative">
                    <img src={aboutusImage} alt="" />
                </div>
                <div className="flex flex-col items-start justify-start gap-5 px-16">
                    <p className="px-2 py-1 bg-[#537CD9] text-white text-sm font-medium rounded">About Us</p>
                    <h1 className="text-3xl font-bold text-[#374B5C]">Join Us- Explore Only The Best</h1>
                    <p className="text-[#73818C] leading-8">DCCCapital Group LLC is a secure, password-protected platform for selling and buying used products. We help people buy and sell clothes, find shoes, accessories, jewelry, books, sports apparel, and much more. With our focus on convenience, reliability, and customer satisfaction, we're dedicated to providing an exceptional shopping experience for our customers.</p>
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
            </div>
            <div className=" mx-auto flex flex-col justify-center items-center">
                <div className="max-w-[841px] mb-10">
                    <p className="px-4 py-1 bg-[#537CD9] text-white text-sm font-medium rounded">Why us?</p>
                </div>
                <div className="max-w-[841px]">
                    <h1 className="text-3xl text-center font-bold text-[#374B5C]">Most Trusted Platform For Buying And Selling Used Items</h1>
                </div>
            </div>
            <div className="w-full border border-[#F2F4F8] bg-white py-4 px-16" >
                <div className="flex justify-between items-center ">
                    <div className="flex flex-col justify-center items-center p-2">
                        <div className="flex items-center text-lg font-medium text-[#5E7CDE] gap-2"><div className="font-monoton text-4xl text-[#5E7CDE]">10</div>M</div>
                        <p className="text-[#374B5C] ">Active uploads</p>
                    </div>
                    <div className="flex flex-col justify-center items-center p-2">
                        <div className="flex items-center text-lg font-medium text-[#5E7CDE] gap-2"><div className="font-monoton text-4xl text-[#5E7CDE]">600</div>K</div>
                        <p className="text-[#374B5C]">Regular Users</p>
                    </div>
                    <div className="flex flex-col justify-center items-center p-2">
                        <div className="flex items-center text-lg font-medium text-[#5E7CDE] gap-2"><div className="font-monoton text-4xl text-[#5E7CDE]">200</div>K</div>
                        <p className="text-[#374B5C]">New ads Daily</p>
                    </div>
                    <div className="flex flex-col justify-center items-center p-2">
                        <div className="flex items-center text-lg font-medium text-[#5E7CDE] gap-2"><div className="font-monoton text-4xl text-[#5E7CDE]">3.5</div>K</div>
                        <p className="text-[#374B5C]">Daily Searches</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Aboutus