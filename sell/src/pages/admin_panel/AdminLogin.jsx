import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { getFormData } from '../../utils/constants';
import { AuthContext } from '../../auth/AuthContext';
import { useGlobalState } from '../../store/AuthStore';
import { toast } from 'sonner';
import { adminLogin } from '../../services/operations/adminApi';

function AdminLogin() {
    const navigate = useNavigate();
    const location = useLocation();
    const { AdminLogin } = useContext(AuthContext);
    // const loginActive = checkLoginActive();
    const inputrefs = useRef([]);

    const loading = useGlobalState(state => state.loading);

    const [rememberMe, setRememberMe] = useState(false);

    // remember me feature
    useEffect(() => {
        const savedEmail = localStorage.getItem('admin_usernameoremail');
        const savedPassword = localStorage.getItem('admin_password');
        if (savedEmail && savedPassword) {
            inputrefs.current[0].value = savedEmail
            inputrefs.current[1].value = savedPassword
            setRememberMe(true)
        }
    }, []);

    const handleLogin = async (e) => {
        e.preventDefault();
        const formdata = await getFormData(inputrefs);
        if (rememberMe) {
            localStorage.setItem('admin_usernameoremail', formdata.usernameoremail);
            localStorage.setItem('admin_password', formdata.password);
        } else {
            localStorage.removeItem('admin_usernameoremail');
            localStorage.removeItem('admin_password');
        }
        const res = await AdminLogin({ ...formdata, role: "ADMIN" });
        if (res) {
            navigate('/', { replace: true, state: location.state });
        }
    };

    return (
        <div className='w-full relative bg-[#697885]'>
            <div className='flex justify-center items-center relative'>
                <div className='max-w-[500px] w-full flex flex-col    my-14'>

                    <form autoComplete="off" className='w-full relative bg-white flex justify-center items-start rounded-b p-4 lg:p-12'>
                        <div className='flex justify-center items-center relative overflow-hidden'>
                            <div className='flex w-full flex-col gap-6'>
                                <h1 className='text-primary text-xl md:text-2xl lg:text-2xl font-bold text-center'>Admin Login</h1>
                                <div className='relative mt-10'>
                                    <input ref={ref => inputrefs.current[0] = ref} required={true} autoComplete="false" className='py-4 w-full px-16 border border-[#D5E3EE] rounded focus:outline-none placeholder:text-[#374b5c] text-base font-medium' type="text" placeholder="Email or Username" name='usernameoremail' />
                                    <span className='absolute top-[13px] left-3 w-8 h-8 rounded-md bg-[#d5e3ee] flex justify-center items-center'>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={16}
                                            height={15}
                                            viewBox="0 0 16 15"
                                            fill="none"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M0.0332031 7.5C0.0332031 3.36453 3.39773 0 7.5332 0C11.6687 0 15.0332 3.36453 15.0332 7.5C15.0332 11.6355 11.6687 15 7.5332 15C3.39773 15 0.0332031 11.6355 0.0332031 7.5ZM13.9075 7.5C13.9075 3.97252 11.06 1.125 7.53247 1.125C4.00499 1.125 1.15747 3.97252 1.15747 7.5C1.15747 11.0275 4.00499 13.875 7.53247 13.875C11.06 13.875 13.9075 11.0275 13.9075 7.5ZM7.53338 2.25C4.64042 2.25 2.28338 4.60705 2.28338 7.5C2.28338 10.393 4.64042 12.75 7.53338 12.75C8.18105 12.75 8.80398 12.6325 9.37835 12.4167C9.56879 12.3478 9.70745 12.1817 9.74137 11.982C9.77529 11.7823 9.69925 11.5798 9.54227 11.4518C9.38529 11.3238 9.17162 11.2901 8.98284 11.3635C8.53271 11.5326 8.04521 11.625 7.53338 11.625C5.24833 11.625 3.40838 9.78505 3.40838 7.5C3.40838 5.21495 5.24833 3.375 7.53338 3.375C9.81842 3.375 11.6584 5.21495 11.6584 7.5V8.0625C11.6584 8.58683 11.2452 9 10.7209 9C10.1965 9 9.78338 8.58683 9.78338 8.0625V5.4375C9.78564 5.15149 9.57294 4.90931 9.28903 4.87464C9.00512 4.83997 8.74039 5.02385 8.67376 5.302C8.29412 5.0341 7.84001 4.875 7.34588 4.875C5.97645 4.875 4.90838 6.0853 4.90838 7.5C4.90838 8.9147 5.97645 10.125 7.34588 10.125C8.03991 10.125 8.65548 9.81305 9.0949 9.32227C9.47345 9.80853 10.0621 10.125 10.7209 10.125C11.8533 10.125 12.7834 9.19492 12.7834 8.0625V7.5C12.7834 4.60705 10.4263 2.25 7.53338 2.25ZM8.65867 7.5C8.65867 6.63995 8.04449 6 7.34617 6C6.64785 6 6.03367 6.63995 6.03367 7.5C6.03367 8.36005 6.64785 9 7.34617 9C8.04449 9 8.65867 8.36005 8.65867 7.5Z"
                                                fill="#475B6B"
                                            />
                                        </svg>
                                    </span>
                                </div>
                                <div className='relative'>
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
                                </div>
                                <button onClick={handleLogin} className='rounded w-full px-8 py-4 bg-[#537CD9] text-white font-bold'>{loading ? "Loading..." : "Login"}</button>

                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default AdminLogin