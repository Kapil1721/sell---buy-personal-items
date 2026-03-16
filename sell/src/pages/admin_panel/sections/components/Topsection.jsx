import React, { useContext, useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { AuthContext } from '../../../../auth/AuthContext';
import { GETMEMBERSHIP } from '../../../../services/operations/membershipApi';
import { useQuery } from '@tanstack/react-query';

function Topsection({ title }) {
    const navigate = useNavigate();

    const { isPending, error, data } = useQuery({
        queryKey: ['membership'],
        queryFn: async () => await GETMEMBERSHIP()
    });

    const { user } = useContext(AuthContext)


    return (
        <div className='flex md:justify-between items-center mb-5 lg:mb-10'>
            <h1 className='text-2xl px-2 lg:px-0 md:text-3xl lg:text-4xl text-[#374B5C] font-semibold'>{title}</h1>
            {user.role === 'USER' && (
                isPending ? <LoadingUI /> : (data?.membership ? <Membership plan={data?.membership?.subscriptionPlan} /> : <Subscribe />)
            )}
        </div>
    )
}

const LoadingUI = () => {
    return (
        <div className='flex justify-between items-center border px-4 py-3 rounded border-[#D5E3EE]'>
            <h6 className='text-[#374B5C] text-base font-medium mr-4 bg-gray-100 animate-pulse min-w-44 min-h-9'></h6>
            <div className='text-sm text-[#374B5C] font-normal px-4 py-2 rounded bg-gray-100 animate-pulse min-w-32 min-h-9'></div>
        </div>
    )
}

const Membership = ({ plan }) => {
    return (
        <div className='flex justify-between items-center border px-4 py-3 rounded border-[#D5E3EE]'>
            <h6 className='text-[#374B5C] text-base font-medium mr-4'>Current Subscription:</h6>
            <div className='text-sm text-[#374B5C] font-normal bg-[#FFB300] px-4 py-2 rounded'>{plan?.name}</div>
        </div>
    )
}

const Subscribe = () => {
    return (
        <div className='flex justify-between items-center border px-4 py-3 rounded border-[#D5E3EE]'>
            <h6 className='text-[#374B5C] text-base font-medium mr-4'>Current Subscription:</h6>
            <Link to={'/memberships'} className='text-sm text-[#374B5C] font-normal bg-[#FFB300] px-4 py-2 rounded'>Subscribe Now</Link>
        </div>
    )
}

export default Topsection