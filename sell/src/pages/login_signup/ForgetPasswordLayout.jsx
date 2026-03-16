import React from 'react'
import { Outlet } from 'react-router-dom'

const ForgetPasswordLayout = () => {
    return (
        <div className='w-full relative bg-[#697885]'>
            <div className='flex justify-center items-center relative'>
                <div className='max-w-[500px] w-full flex flex-col    my-14'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default ForgetPasswordLayout