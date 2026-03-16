import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useGlobalState } from '../store/AuthStore'

function ErrorUi({ error }) {


    // useEffect(() => {
    //     callback()
    // }, [])

    return (
        <div className="bg-white py-12 sm:py-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                    <div className="-mt-2 p-2 lg:mt-0 lg:w-full">
                        <div className="rounded-2xl bg-gray-100 py-10 text-center ring-1 ring-inset ring-gray-900/5 w-full lg:flex lg:flex-col lg:justify-center lg:py-16 ">
                            <div className="mx-auto px-8 w-full">
                                <h4 className='text-primary text-2xl text-nowrap font-bold text-center w-full'>{"Sorry for the Inconvenience"}</h4>
                                <p className='text-light text-lg font-semibold text-center'>{'Something went wrong!'}</p>
                                <p className='text-light text-sm font-medium text-center'>{'It will be resolved soon.'}</p>
                            </div>
                            <div className=' mt-10'>
                                <Link to={'/'} className='text-helper text-lg font-medium ring-1 ring-inset ring-helper rounded-2xl px-6 py-2 hover:'>Back To Home</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ErrorUi

export const UnAuthorisedUi = ({ setAuthorisation }) => {

    const navigate = useNavigate()
    const logout = useGlobalState(state => state.logout)


    return (
        <div className="bg-white py-12 sm:py-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                    <div className="-mt-2 p-2 lg:mt-0 lg:w-full">
                        <div className="rounded-2xl bg-gray-100 py-10 text-center ring-1 ring-inset ring-gray-900/5 w-full lg:flex lg:flex-col lg:justify-center lg:py-16 ">
                            <div className="mx-auto px-8 w-full">
                                <h4 className='text-primary text-2xl text-nowrap font-bold text-center w-full'>{"Your session has been expired."}</h4>
                                <p className='text-light text-lg font-semibold text-center'>{'Please back to Login or Home Page...'}</p>
                                {/* <p className='text-light text-sm font-medium text-center'>{'It will be resolved soon.'}</p> */}
                            </div>
                            <div className=' mt-10  flex justify-center items-center gap-5'>
                                <div onClick={() => {
                                    console.log('jdfj')
                                    logout()
                                    navigate('/')
                                    setAuthorisation(true)
                                }} className='text-secondary text-lg font-medium ring-2 cursor-pointer ring-inset ring-secondary rounded-2xl px-6 py-2 transition-colors ease-in-out duration-500 hover:bg-secondary  hover:bg-sering-secondary hover:text-white hover:ring-white '>Back To Home</div>
                                <div onClick={() => {
                                    logout()
                                    navigate('/login-register?tab=login')
                                    setAuthorisation(true)
                                }} className='hover:text-helper text-lg font-medium ring-2 cursor-pointer ring-inset hover:ring-helper rounded-2xl px-6 py-2 transition-colors ease-in-out duration-500  bg-helper hover:bg-white text-white ring-white '>Back To Login</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}