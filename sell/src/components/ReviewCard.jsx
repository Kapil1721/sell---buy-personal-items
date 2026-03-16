import React from 'react'
import profileImage from '../assets/Brian-H.jpg'

function ReviewCard() {
    return (
        <div className='bg-white'>
            <div className='border-b-2 border-[#9678FF] flex flex-col gap-10 justify-between items-center py-6 px-8 lg:py-12 lg:px-16'>
                <p className='flex-1 text-center'>I found an amazing leather jacket in perfect condition for a fantastic price. I love knowing I'm helping reduce waste by buying second-hand. I highly recommend it!</p>
                <div className=''>
                    <img className='rounded-full' width={80} height={80} src={profileImage} alt="" />
                </div>
                <h1 className='text-xl font-semibold'>Brian H.</h1>
            </div>
        </div>
    )
}

export default ReviewCard