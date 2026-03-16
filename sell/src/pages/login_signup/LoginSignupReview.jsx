import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContext'
import { GlobalLoader } from '../../components/backdropLoader/BackdropLoader'





const LoginSignupReview = () => {

    const { user } = useContext(AuthContext)
    const [loading, setLoading] = useState(true)
    const location = useLocation()

    const [message, setMessage] = useState('')

    useEffect(() => {
        setTimeout(() => {
            if (location.state && location.state.toLowerCase().includes('donate') && !user.donor) {
                setMessage("You are unauthorised to donate items.Go to profile and change your account settings.")
            }
            // if (location.state && location.state.toLowerCase().includes('sell')) {
            //     setMessage("You are not authorised to sell items.Go to profile and change your account settings.")
            // }
            setLoading(false)
        }, 500)
    }, [])

    console.log(user, message, location.state, "user");

    return (
        <div className='bg-white absolute min-h-screen z-10 top-0 w-full flex justify-center items-center'>
            <div className='relative max-w-7xl'>
                {loading ? <GlobalLoader /> : <div className='w-full'>
                    <h1 className='text-primary text-xl md:text-3xl lg:text-4xl font-bold text-center'>Choose any one option...</h1>
                    <div className='flex gap-5 mt-20 justify-center'>
                        {user.donor && <div className='ring-2 ring-bdr rounded-md transition-all ease-in-out duration-500 hover:ring-helper hover:shadow-xl'>
                            <Link to='/donate' replace={true} className='flex flex-col items-center justify-center text-center p-4'>Donate Items</Link>
                        </div>}
                        {user.seller && <div className='ring-2 ring-bdr rounded-md transition-all ease-in-out duration-500 hover:ring-helper hover:shadow-xl'>
                            <Link to='/panel/create' replace={true} className='flex flex-col items-center justify-center text-center p-4'>Sell Items</Link>
                        </div>}
                        {user.buyer && <div className='ring-2 ring-bdr rounded-md transition-all ease-in-out duration-500 hover:ring-helper hover:shadow-xl'>
                            <Link to='/products?type=sale' replace={true} className='flex flex-col items-center justify-center text-center p-4'>Buy Items</Link>
                        </div>}
                    </div>
                    {message !== '' && <p className='text-red-600 text-sm md:text-sm lg:text-sm font-bold text-center mt-5'>Message: <span>{message.split('.')[0]}</span><br /><Link className='text-helper underline' to={'/panel/settings'} replace={true}>{message.split('.')[1].split('and')[0]}</Link>
                    <span className='text-primary text-sm'>and{" "}{message.split('.')[1].split('and')[1]}</span>
                    </p>}
                </div>}
            </div>

        </div>
    )
}

export default LoginSignupReview