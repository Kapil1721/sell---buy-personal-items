import React, { useContext, useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate, } from 'react-router-dom'

import { AuthContext } from '../../auth/AuthContext';
import { createValidator } from '../../hooks/Hooks';
import { SEND_OTP, VALIDATE_OTP } from '../../services/operations/authApi';
import { toast } from 'sonner';



const validationSchema = {
    name: (value) => {
        if (!value) return 'Name is required';
        if (value.length < 3) return 'Name must be at least 3 characters long';
        return null;
    },
    username: (value) => {
        if (!value) return 'Name is required';
        if (value.length < 3) return 'Name must be at least 3 characters long';
        return null;
    },
    email: (value) => {
        if (!value) return 'Email is required';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return 'Email is not valid';
        return null;
    },
    contactNumber: (value) => {
        if (!value) return 'Contact number is required';
        const contactNumberRegex = /^[0-9]{10}$/; // Adjust the regex according to your requirements
        if (!contactNumberRegex.test(value)) return 'Contact number must be 10 digits';
        return null;
    },
    password: (value) => {
        if (!value) return 'Password is required';
        if (value.length < 8) return 'Password must be at least 8 characters long';
        if (!/[A-Z]/.test(value)) return 'Password must contain at least one uppercase letter';
        if (!/[a-z]/.test(value)) return 'Password must contain at least one lowercase letter';
        if (!/[0-9]/.test(value)) return 'Password must contain at least one digit';
        if (!/[!@#$%^&*]/.test(value)) return 'Password must contain at least one special character';
        return null;
    },
    role: (obj) => {
        if (!obj.buyer && !obj.seller && !obj.donor) return 'Choose atleast one role';
        return null
    }

    // Add more validation rules as needed
};

const validator = createValidator(validationSchema);


function OtpVerification() {

    const navigate = useNavigate();
    const location = useLocation();
    const { login } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const [otp, setOtp] = useState(new Array(6).fill(""));
    const inputrefs = useRef([])
    const [isDisabled, setIsDisabled] = useState(true);
    const [timer, setTimer] = useState(60); // 30 seconds timer

    useEffect(() => {
        if (timer > 0) {
            const interval = setInterval(() => {
                setTimer(prevTimer => prevTimer - 1);
            }, 1000);

            return () => clearInterval(interval);
        } else {
            setIsDisabled(false); // Enable resend button after timer expires
        }
    }, [timer]);

    useEffect(() => {
        // console.log(location.state.email);
        if (!location.state?.email) {
            navigate('/forget-password')
        }
    }, [])

    const handleResendOTP = async (e) => {
        e.preventDefault();
        const res = await SEND_OTP({ email: location.state.email });
        if (res.status) {
            toast.success('OTP sent successfully');
            setTimeout(() => {
                setLoading(false)
            }, 1000)
        }
        setOtp(new Array(6).fill("")); // Clear OTP input
        setIsDisabled(true);
        setTimer(30); // Reset the timer
        // Add your resend OTP logic here
        console.log("OTP Resent!");
    };


    const handleChange = (e, element, index) => {
        if (isNaN(element.value)) return;
        if (e.key !== "Backspace") {
            console.log(element.value);
            setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);
            if (element.value !== '') {
                // Focus next input field
                if (element.nextSibling) {
                    element.nextSibling.focus()
                }
            }
        }

    };

    const handleKeyDown = (e, index) => {
        // console.log(index);
        if (e.key === "Backspace" && otp[index] === "") {
            // Focus previous input field
            if (e.target.previousSibling) {
                console.log(inputrefs.current[index - 1]);
                // inputrefs.current[index - 1].focus()
                e.target.previousSibling.focus();
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await VALIDATE_OTP({ otp: otp.join(''), email: location.state.email });
        if (res?.status) {
            // alert(`Entered OTP is: ${otp.join('')}`);
            navigate('/forget-password/change-password', { state: { email: location.state.email, otp: otp.join('') } })
        }
        // Add your verification logic here
    };


    // useEffect(() => {
    //     handleKeyDown();
    //     // return () => {
    //     //     removeEventListener('keydown', handleKeyDown)
    //     // }
    // })

    return (
        <form autoComplete="off" className='w-full relative bg-white flex justify-center items-start rounded-b p-4 lg:p-12' onSubmit={handleSubmit}>
            <div className='flex justify-center items-center relative overflow-hidden'>
                <div className='flex w-full flex-col gap-6'>
                    <h1 className='text-primary text-xl md:text-2xl lg:text-2xl font-bold text-center'>OTP Verification
                        {/* With {accountType === 'DONOR' ? "Donor" : accountType === 'SELLER' ? "Seller" : "Buyer"} Account */}
                    </h1>
                    <div className='relative mt-10 px-2'>
                        <div className="flex space-x-2 ">
                            {otp.map((data, index) => (
                                <input
                                    ref={ref => inputrefs.current[index] = ref}
                                    key={index}
                                    type="text"
                                    name="otp"
                                    maxLength="1"
                                    className="w-12 h-12 text-center text-xl font-semibold border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    value={data}
                                    onChange={e => handleChange(e, e.target, index)}
                                    onKeyDown={(e) => handleKeyDown(e, index)}
                                />
                            ))}
                        </div>
                    </div>
                    <button type='submit' className='rounded w-full px-8 py-4 bg-[#537CD9] text-white font-bold'>{loading ? "Verifying..." : "Verify"}</button>
                    <div className="text-gray-500 flex justify-center items-center">
                        {isDisabled ? (
                            <span>Resend OTP in {timer} seconds</span>
                        ) : (
                            <button
                                onClick={handleResendOTP}
                                className="text-blue-500 hover:text-blue-700 focus:outline-none"
                            >
                                Resend OTP
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </form>
    )
}

export default OtpVerification