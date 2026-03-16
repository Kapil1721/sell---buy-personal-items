import React, { useEffect, useState } from 'react'
import { UPDATE_PASSWORD_DETAILS } from '../../services/operations/adminApi';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { CHANGE_PASSWORD } from '../../services/operations/authApi';

const ChangePassword = () => {
    const location = useLocation();
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false);
    const [passwordData, setPasswordData] = useState({
        newPassword: "",
        confirmPassword: ""
    });

    const [showPassword, setShowPassword] = useState({
        showNewPassword: false,
        showConfirmPassword: false
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPasswordData((prevData) => ({ ...prevData, [name]: value }));
    };
    console.log(passwordData);


    const handleSubmit = async (e) => {
        e.preventDefault();
        let res = await CHANGE_PASSWORD({ ...passwordData, email: location.state.email });
        if (res?.status) {
            toast.success(res.message)
            navigate('/login-register?tab=login')
        }
    };

    useEffect(() => {
        if (!location.state?.email) {
            navigate('/forget-password')
        }
    }, [])

    return (
        <form autoComplete="off" onSubmit={handleSubmit} className='w-full relative bg-white flex justify-center items-start rounded-b p-4 lg:p-12'>
            <div className='flex justify-center items-center relative overflow-hidden'>
                <div className='flex w-full flex-col gap-6'>
                    <h1 className='text-primary text-xl md:text-2xl lg:text-2xl font-bold text-center'>Change Password
                        {/* With {accountType === 'DONOR' ? "Donor" : accountType === 'SELLER' ? "Seller" : "Buyer"} Account */}
                    </h1>
                    <div className='relative'>
                        <input required={true}
                            autoComplete={"false"}
                            onChange={handleChange}
                            className='py-4 w-full px-16 border border-[#D5E3EE] rounded focus:outline-none placeholder:text-[#374b5c] text-base font-medium'
                            type={showPassword.showNewPassword ? "text" : "password"}
                            placeholder="New Password"
                            name='newPassword'
                        />
                        <span className='absolute top-[13px] left-3 w-8 h-8 rounded-md bg-[#d5e3ee] flex justify-center items-center'>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={13}
                                height={16}
                                viewBox="0 0 13 16"
                                fill="none"
                            >
                                <path
                                    d="M6.09524 0C3.56281 0 1.52381 2.039 1.52381 4.57143V5.33333C0.691 5.33333 0 6.02433 0 6.85714V14.4762C0 15.309 0.691 16 1.52381 16H10.6667C11.4995 16 12.1905 15.309 12.1905 14.4762V6.85714C12.1905 6.02433 11.4995 5.33333 10.6667 5.33333V4.57143C10.6667 2.039 8.62766 0 6.09524 0ZM6.09524 1.52381C7.82948 1.52381 9.14286 2.83719 9.14286 4.57143V5.33333H3.04762V4.57143C3.04762 2.83719 4.361 1.52381 6.09524 1.52381ZM1.52381 6.85714H10.6667V14.4762H1.52381V6.85714ZM6.09524 9.14286C5.25714 9.14286 4.57143 9.82857 4.57143 10.6667C4.57143 11.5048 5.25714 12.1905 6.09524 12.1905C6.93333 12.1905 7.61905 11.5048 7.61905 10.6667C7.61905 9.82857 6.93333 9.14286 6.09524 9.14286Z"
                                    fill="#475B6B"
                                />
                            </svg>
                        </span>
                        <span className='absolute right-5 top-[18px]' onClick={() => setShowPassword({ ...showPassword, showNewPassword: !showPassword.showNewPassword })}>
                            {!showPassword.showNewPassword ? <i className="fa fa-eye text-primary" aria-hidden="true" /> :
                                <i className="fa fa-eye-slash text-primary" aria-hidden="true" />}
                        </span>
                    </div>
                    <div className='relative'>
                        <input required={true}
                            autoComplete={"false"}
                            className='py-4 w-full px-16 border border-[#D5E3EE] rounded focus:outline-none placeholder:text-[#374b5c] text-base font-medium'
                            type={showPassword.showConfirmPassword ? "text" : "password"}
                            placeholder="Confirm Password"
                            name='confirmPassword'
                            onChange={handleChange}
                        />
                        <span className='absolute top-[13px] left-3 w-8 h-8 rounded-md bg-[#d5e3ee] flex justify-center items-center'>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={13}
                                height={16}
                                viewBox="0 0 13 16"
                                fill="none"
                            >
                                <path
                                    d="M6.09524 0C3.56281 0 1.52381 2.039 1.52381 4.57143V5.33333C0.691 5.33333 0 6.02433 0 6.85714V14.4762C0 15.309 0.691 16 1.52381 16H10.6667C11.4995 16 12.1905 15.309 12.1905 14.4762V6.85714C12.1905 6.02433 11.4995 5.33333 10.6667 5.33333V4.57143C10.6667 2.039 8.62766 0 6.09524 0ZM6.09524 1.52381C7.82948 1.52381 9.14286 2.83719 9.14286 4.57143V5.33333H3.04762V4.57143C3.04762 2.83719 4.361 1.52381 6.09524 1.52381ZM1.52381 6.85714H10.6667V14.4762H1.52381V6.85714ZM6.09524 9.14286C5.25714 9.14286 4.57143 9.82857 4.57143 10.6667C4.57143 11.5048 5.25714 12.1905 6.09524 12.1905C6.93333 12.1905 7.61905 11.5048 7.61905 10.6667C7.61905 9.82857 6.93333 9.14286 6.09524 9.14286Z"
                                    fill="#475B6B"
                                />
                            </svg>
                        </span>
                        <span className='absolute right-5 top-[18px]' onClick={() => setShowPassword({ ...showPassword, showConfirmPassword: !showPassword.showConfirmPassword })}>
                            {!showPassword.showConfirmPassword ? <i className="fa fa-eye text-primary" aria-hidden="true" /> :
                                <i className="fa fa-eye-slash text-primary" aria-hidden="true" />}
                        </span>
                    </div>
                    {/* <div className='relative'>
                                <input ref={ref => inputrefs.current[1] = ref} required={true} autoComplete={"false"} className='py-4 w-full px-16 border border-[#D5E3EE] rounded focus:outline-none placeholder:text-[#374b5c] text-base font-medium' type="password" placeholder="Password" name='password' />
                                <span className='absolute top-[13px] left-3 w-8 h-8 rounded-md bg-[#d5e3ee] flex justify-center items-center'>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={13}
                                        height={16}
                                        viewBox="0 0 13 16"
                                        fill="none"
                                    >
                                        <path
                                            d="M6.09524 0C3.56281 0 1.52381 2.039 1.52381 4.57143V5.33333C0.691 5.33333 0 6.02433 0 6.85714V14.4762C0 15.309 0.691 16 1.52381 16H10.6667C11.4995 16 12.1905 15.309 12.1905 14.4762V6.85714C12.1905 6.02433 11.4995 5.33333 10.6667 5.33333V4.57143C10.6667 2.039 8.62766 0 6.09524 0ZM6.09524 1.52381C7.82948 1.52381 9.14286 2.83719 9.14286 4.57143V5.33333H3.04762V4.57143C3.04762 2.83719 4.361 1.52381 6.09524 1.52381ZM1.52381 6.85714H10.6667V14.4762H1.52381V6.85714ZM6.09524 9.14286C5.25714 9.14286 4.57143 9.82857 4.57143 10.6667C4.57143 11.5048 5.25714 12.1905 6.09524 12.1905C6.93333 12.1905 7.61905 11.5048 7.61905 10.6667C7.61905 9.82857 6.93333 9.14286 6.09524 9.14286Z"
                                            fill="#475B6B"
                                        />
                                    </svg>
                                </span>
                            </div>
                            <div className='relative flex justify-between w-full items-center'>
                                <div className='flex justify-between items-center font-medium'>
                                    <input id='rememberMe' onChange={(e) => setRememberMe(e.target.checked)} checked={rememberMe} className='border size-4 border-[#D5E3EE] outline-[#D5E3EE] rounded hover:outline-none focus:outline-none placeholder:text-[#374b5c] text-base font-medium' type="checkbox" placeholder="Email or Username" />
                                    <label htmlFor='rememberMe' className='ml-2 text-[#374b5c]'>Remember me</label>
                                </div>
                                <div><Link className='text-[#ffb300] font-semibold' to={'/forget-password'}>Forget Password?</Link></div>
                            </div> */}
                    <button type='submit' className='rounded w-full px-8 py-4 bg-[#537CD9] text-white font-bold'>{loading ? "Sending..." : "Change Password"}</button>
                    {/* <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setSendNext(false)
                                    }}
                                    className='rounded w-full text-red-500 underline font-bold'>Go Back</button> */}
                </div>
            </div>
        </form>
    )
}

export default ChangePassword