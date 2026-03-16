import { useContext } from 'react'
import SELLYOURPRODUCTS from '../../../assets/SELL-YOUR-PRODUCTS-.png'
import REGISTERMEMBERSHIP from '../../../assets/REGISTER-MEMBERSHIP-.png'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../auth/AuthContext'

function Services() {
    const { user } = useContext(AuthContext)
    return (
        <div className='w-full relative bg-white mb-20'>
            <div className='lg:mx-auto grid  lg:grid-cols-2 lg:gap-6 lg:max-w-7xl lg:mt-32 mt-20 mb-20 px-10 lg:px-0 gap-3'>
                <div className='flex flex-col items-center justify-center gap-8'>
                    <Link to={user && user.seller ? '/panel/create' : "/login-register?tab=login"} state={{ to: '/panel/create', "for": "sell" }} className='flex flex-col justify-center items-center p-4 border gap-4 rounded-md '>
                        <img src={SELLYOURPRODUCTS} alt="" />
                        <h1 className='text-lg font-bold  text-center'>SELL YOUR PRODUCTS</h1>
                        <p className='text-center'>{`Ready to sell your products? It's as easy as 1-2-3! Simply take a snap of your items, set a price, and post it with a click-all in less than 60 seconds!`}</p>
                    </Link>
                    {/* <div className='flex flex-col justify-center items-center p-4 border gap-4 rounded-md'>
                        <img className='object-cover' src={CUSTOMERSUPPORT} alt="" />
                        <h1 className='text-lg font-bold '>CUSTOMER SUPPORT</h1>
                        <p className='text-center'>{`Our dedicated team is here to help you answer buying and selling queries. Let's connect, and we assure you we will help you shop more easily!`}</p>
                    </div> */}
                </div>
                {/* <div className=''>
                    <img src={belowbanner} alt='below-banner' />
                </div> */}
                <div className='flex flex-col items-center justify-center gap-8'>
                    <Link to={user ? '/memberships' : "/login-register?tab=login"} className='flex flex-col justify-center items-center p-4 border gap-4 rounded-md'>
                        <img src={REGISTERMEMBERSHIP} alt="" />
                        <h1 className='text-lg font-bold '>REGISTER/MEMBERSHIP</h1>
                        <p className='text-center'>{`We value our early registered members and offer our lowest membership fee for the first 90 days. After that, it's free!`}</p>
                    </Link>
                    {/* <div className='flex flex-col justify-center items-center p-4 border gap-4 rounded-md'>
                        <img src={FINDYOURSTYLE} alt="" />
                        <h1 className='text-lg font-bold '>FIND YOUR STYLE</h1>
                        <p className='text-center'>{`Looking for your favorite styles? Discover a wide range of items across thousands of brands, styles, and trends uploaded by other sellers.`}</p>
                    </div> */}
                </div>
            </div>
            <div className="relative lg:px-[100px] py-5">
                {/* <div className='grid lg:grid-cols-5'> */}
                {/* <div className="relative col-span-3">
                        <div className="h-[55vh] lg:h-[80vh]" style={{ backgroundImage: `url(${LOVEATFIRSTSALE})` }}>
                            <div className='relative '>
                                <div className='absolute group  overflow-hidden -right-2 top-20'>
                                    <figure className=''>
                                        <img width={'100%'} height={"80vh"} className='object-top transform scale-[1.3] transition-all duration-700 -translate-y-8 group-hover:translate-y-8' src={LOVEATFIRSTSALE2} alt='' />
                                        <div className='cursor-pointer absolute top-0 right-0 w-full h-[300px] lg:h-[580px] bg-[#44525e67] text-white flex items-center justify-center '>
                                            <h1 className='text-3xl font-bold text-center relative px-4 lg:px-0'><span className='font-normal'>{"SEASON'S "}</span>FAVROURITES</h1>
                                        </div>
                                    </figure>
                                    <div className='absolute top-[50%] left-[30%] text-white text-center'>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                {/* <div className="relative col-span-2 ml-4 px-[30px] flex justify-center items-center"> */}
                <div className='lg:px-[30px] max-w-6xl mx-auto'>
                    <div className=''>
                        <h2 className=' text-center text-primary text-2xl font-bold' >Love At First Sale!</h2>

                    </div>
                    <div className=''>
                        <h2 className='text-center text-light' >Your Marketplace, Your Choice</h2>
                    </div>
                    <div className=' mt-5'>
                        <p className='font-light text-center px-2 text-light' >Welcome to Sell Personal Items, your leading destination for buying and selling high-quality used products online. Founded with a passion for merchandise and a commitment to creating a more conscious consumer culture, we aim to provide a platform where individuals can easily buy, sell, and discover unique items of their choice.
                            <br />Got too much stuff, right? Well, how about turning some of it into cold, hard cash?  In these economic times, it’s important to have a reliable place to raise money when you want to or get in a pinch, as we all do. That’s what “Sell Personal Items” is here for.

                            One of the best parts of our membership-only website is that it’s cheap and only for 90 days. After that, we will only get a small percentage of the sales.

                        </p>
                    </div>
                    <div className='mt-8 md:mt-4 flex justify-center items-center'>
                        <Link to={'/memberships'} className='bg-[#537CD9] text-white md:text-xl font-medium py-2 px-7 rounded-md'>Get your membership started today!</Link>
                    </div>
                    {/* </div> */}
                    {/* </div> */}
                </div>
            </div>
        </div >
    )
}

export default Services