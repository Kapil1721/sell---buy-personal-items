import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../auth/AuthContext'




function Banner() {

    const { user } = useContext(AuthContext)


    return (
        <div className='w-full h-[100vh] lg:h-screen relative flex flex-col justify-center items-center'>
            <div className='absolute top-0 left-0 w-full h-[100vh] lg:h-screen bg-[#44525ecf]'>
                <video
                    loop
                    autoPlay
                    muted
                    playsInline
                    className='w-full h-full object-cover'>
                    <source src={'/Video.mp4'} type='video/mp4' />
                </video>
            </div>
            <div className='relative z-20  flex flex-col justify-center items-center'>
                <div className='text-center mb-4'>
                    <h1 className='text-2xl md:text-3xl lg:text-5xl xl:text-7xl font-bold text-white py-2'>
                        Give Your Items
                    </h1>
                    <h1 className='text-2xl md:text-3xl lg:text-5xl xl:text-7xl font-bold text-yellow-500'>
                        A Second Chance!
                    </h1>
                </div>
                {/* Uncomment and adjust the following code block if you want to include the input section */}
                {/* <div className='flex flex-col lg:flex-row justify-between items-center gap-2 lg:gap-3 bg-white py-2 px-2 lg:py-4 lg:px-5 rounded-md'> 
          <div className='border border-[#D5E3EE] w-full relative'>
            <input className='py-3 px-14 focus:outline-none placeholder:text-[#374b5c] text-base font-medium' type='text' placeholder="I'm looking for..." />
            <span className='absolute top-2 left-2 w-8 h-8 rounded-md bg-[#d5e3ee]'></span>
          </div>
          <div className='border border-[#D5E3EE] w-full relative'>
            <input className='py-3 px-14 focus:outline-none placeholder:text-[#374b5c] text-base font-medium' type='text' placeholder='Location (e.g. New York)' />
            <span className='absolute top-2 left-2 w-8 h-8 rounded-md bg-[#d5e3ee]'></span>
          </div>
          <div className='w-full bg-[#537cd9] py-[15px] px-4'>
            <div className='w-[20px] h-[20px] flex justify-center items-center relative transition-transform ease-in-out transform hover:scale-125'>
              <svg xmlns='http://www.w3.org/2000/svg' width={18} height={18} viewBox='0 0 18 18' fill='none'>
                <path
                  d='M0 7.24416C0 3.25516 3.25515 0 7.24416 0C11.2332 0 14.4883 3.25516 14.4883 7.24416C14.4883 8.87942 13.9353 10.3861 13.0149 11.601L17.6928 16.2798C17.9538 16.5305 18.0589 16.9026 17.9677 17.2528C17.8764 17.6029 17.6029 17.8764 17.2528 17.9677C16.9026 18.0589 16.5305 17.9538 16.2798 17.6928L11.601 13.0149C10.3861 13.9353 8.87942 14.4883 7.24416 14.4883C3.25515 14.4883 0 11.2332 0 7.24416ZM12.4899 7.24416C12.4899 4.33516 10.1532 1.99839 7.24416 1.99839C4.33516 1.99839 1.99839 4.33516 1.99839 7.24416C1.99839 10.1532 4.33516 12.4899 7.24416 12.4899C8.64188 12.4899 9.90406 11.9466 10.8418 11.0633C10.904 10.9775 10.9794 10.9021 11.0653 10.8399C11.9474 9.90231 12.4899 8.64089 12.4899 7.24416Z'
                  fill='#FDFDFE'
                />
              </svg>
            </div>
          </div>
        </div> */}
                <div className='w-full flex justify-between flex-col items-center mt-10'>
                    <p className='text-lg md:text-xl font-normal leading-6 text-white'>
                        Follow our social media
                    </p>
                    <div className='flex justify-between items-start gap-5 mt-5'>
                        <div className='rounded-full border border-white p-3 md:p-4 flex justify-center items-center transition ease-in-out group hover:border-[#FFB301]'>
                            <svg
                                className='fill-white transition ease-in-out group-hover:fill-[#FFB301]'
                                xmlns='http://www.w3.org/2000/svg'
                                width={16}
                                height={16}
                                viewBox='0 0 320 512'>
                                <path d='M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z' />
                            </svg>
                        </div>
                        <div className='rounded-full border border-white p-3 md:p-4 flex justify-center items-center transition ease-in-out group hover:border-[#FFB301]'>
                            <svg
                                className='fill-white transition ease-in-out group-hover:fill-[#FFB301]'
                                xmlns='http://www.w3.org/2000/svg'
                                width={16}
                                height={16}
                                viewBox='0 0 512 512'>
                                <path d='M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z' />
                            </svg>
                        </div>
                        <div className='rounded-full border border-white p-3 md:p-4 flex justify-center items-center transition ease-in-out group hover:border-[#FFB301]'>
                            <svg
                                className='fill-white transition ease-in-out group-hover:fill-[#FFB301]'
                                xmlns='http://www.w3.org/2000/svg'
                                width={16}
                                height={16}
                                viewBox='0 0 448 512'>
                                <path d='M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3c94 0 111.3 61.9 111.3 142.3V448z' />
                            </svg>
                        </div>
                        <div className='rounded-full border border-white p-3 md:p-4 flex justify-center items-center transition ease-in-out group hover:border-[#FFB301]'>
                            <svg
                                className='fill-white transition ease-in-out group-hover:fill-[#FFB301]'
                                xmlns='http://www.w3.org/2000/svg'
                                width={16}
                                height={16}
                                viewBox='0 0 512 512'>
                                <path d='M504 256C504 119 393 8 256 8S8 119 8 256c0 123.5 89.8 225.9 207.2 248v-175h-62v-73h62v-56c0-61.1 36.3-94.8 92.1-94.8c26.7 0 54.6 4.8 54.6 4.8v60h-30.8c-30.4 0-39.9 18.9-39.9 38.1v47h68l-10.9 73H348v175C465.2 481.9 504 379.5 504 256z' />
                            </svg>
                        </div>
                    </div>
                    <div className='mt-5 relative z-20'>
                        {/* <div className='bg-transparent flex items-center justify-center lg:justify-between gap-1 lg:gap-3 flex-wrap'>
                    <div className='border-2 transition ease-in-out reletive hover:bg-btn-primay group border-white rounded-md flex items-center justify-center flex-col text-white py-2 px-4 gap-2'>
                        <div>
                            <img className='' height={45} width={45} src={Gadgets} alt='helper' />
                        </div>
                        <Link className='group-hover:text-black' to={''}>Electronics & Media</Link>
                    </div>
                    <div className='border-2 transition ease-in-out relative hover:bg-btn-primay group border-white rounded-md flex items-center justify-center flex-col text-white py-2 px-4 gap-2'>
                        <div>
                            <img className='' height={45} width={45} src={HomeAndGarden} alt='helper' />
                        </div>
                        <Link className='group-hover:text-black' to={''}>Home & Garden</Link>
                    </div>
                    <div className='border-2 transition ease-in-out relative hover:bg-btn-primay group border-white rounded-md flex items-center justify-center flex-col text-white py-2 px-4 gap-2'>
                        <div>
                            <img className='' height={45} width={45} src={clothing} alt='helper' />
                        </div>
                        <Link className='group-hover:text-black' to={''}>Clothing, Shoes & Accessories</Link>
                    </div>
                    <div className='border-2 transition ease-in-out relative hover:bg-btn-primay group border-white rounded-md flex items-center justify-center flex-col text-white py-2 px-4 gap-2'>
                        <div>
                            <img className='' height={45} width={45} src={kids} alt='helper' />
                        </div>
                        <Link className='group-hover:text-black' to={''}>Baby & Kids</Link>
                    </div>
                    <div className='border-2 transition ease-in-out relative hover:bg-btn-primay group border-white rounded-md flex items-center justify-center flex-col text-white py-2 px-4 gap-2'>
                        <div>
                            <img className='' height={45} width={45} src={vehicles} alt='helper' />
                        </div>
                        <Link className='group-hover:text-black' to={''}>Vehicles</Link>
                    </div>
                    <div className='border-2 transition ease-in-out relative hover:bg-btn-primay group border-white rounded-md flex items-center justify-center flex-col text-white py-2 px-4 gap-2'>
                        <div>
                            <img className='' height={45} width={45} src={toys} alt='helper' />
                        </div>
                        <Link className='group-hover:text-black' to={''}>Toys, Games & Hobbies</Link>
                    </div>
                    <div className='border-2 transition ease-in-out relative hover:bg-btn-primay group border-white rounded-md flex items-center justify-center flex-col text-white py-2 px-4 gap-2'>
                        <div>
                            <img className='' height={45} width={45} src={sports} alt='helper' />
                        </div>
                        <Link className='group-hover:text-black' to={''}>Sports & Outdoors</Link>
                    </div>
                    <div className='border-2 transition ease-in-out relative hover:bg-btn-primay group border-white rounded-md flex items-center justify-center flex-col text-white py-2 px-4 gap-2'>
                        <div>
                            <img className='' height={45} width={45} src={CollectiblesArt} alt='helper' />
                        </div>
                        <Link className='group-hover:text-black' to={''}>Collectibles & Art</Link>
                    </div>
                </div> */}
                        <div className='max-w-3xl mx-auto text-center mt-12 lg:mt-20 px-10 lg:px-0'>
                            <p className='lg:text-3xl lg:leading-10 text-white font-medium '>Join our group of buyers and sellers of some of the highest-quality merchandise, many of which have never been used. You will surely find great deals for yourself, your family, and your friends.</p>
                        </div>
                        <div className='max-w-3xl mx-auto text-center mt-12 lg:mt-20 px-10 lg:px-0 '>
                            {!user && <Link to={'/login-register?tab=login'} className='bg-secondary px-8 rounded text-white font-bold py-5 ring-2 ring-secondary hover:ring-white'>Login</Link>}
                            <a href='#subcribe' className='px-8 rounded font-bold py-5 ring-2 ring-secondary text-secondary ml-4'>Subscribe</a>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Banner