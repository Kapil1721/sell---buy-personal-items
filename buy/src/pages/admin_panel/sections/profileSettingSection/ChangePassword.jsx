import { useState } from "react";
import { UPDATE_PASSWORD_DETAILS } from "../../../../services/operations/adminApi";
import { toast } from "sonner";

export const ChangePasswordForm = () => {


    const [formData, setFormData] = useState({
        oldPassword: '',
        newPassword: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSaveChanges = async (e) => {
        e.preventDefault();
        let res = await UPDATE_PASSWORD_DETAILS(formData);
        if (res.status) {
            toast.success(res.message)
            setFormData({ newPassword: "", oldPassword: "" })
        }
    };

    // console.log(formData);
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 lg:items-center lg:gap-x-5 lg:px-6'>
            <div className='col-span-2 lg:col-span-1 flex flex-col lg:my-4'>
                <label className='text-primary lg:text-lg font-semibold mb-4 ml-4' htmlFor="oldPassword">{'Old Password'} <span></span></label>
                <input type="password" autoComplete='off' className='border border-[#D5E3EE] flex justify-between items-center p-4 gap-4 rounded-md focus:outline-none placeholder:text-[#374b5c] text-base font-medium' id='oldPassword' name="oldPassword" placeholder='Enter your old password' value={formData.oldPassword} onChange={handleChange} />
            </div>
            <div className='col-span-2 lg:col-span-1 flex flex-col my-4'>
                <label className='text-primary lg:text-lg font-semibold mb-4 ml-4' htmlFor="newPassword">{'New Password'} <span></span></label>
                <input type="password" autoComplete='off' className='border border-[#D5E3EE] flex justify-between items-center p-4 gap-4 rounded-md focus:outline-none placeholder:text-[#374b5c] text-base font-medium' id='newPassword' name="newPassword" placeholder='Enter your new password' value={formData.newPassword} onChange={handleChange} />
            </div>
            <div className='col-span-2 flex justify-center lg:justify-end mt-5'>
                <div>
                    <div className='post_product_button'>
                        <button onClick={(e) => handleSaveChanges(e)} className='bg-helper px-4  py-3 rounded-md flex items-center justify-between  gap-4 button'>
                            <span className='text-nowrap text-white font-medium mr-4'>Change Password</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 14 10" fill="none">
                                <rect x="12.2676" y="0.646447" width="1.53602" height="11.5509" rx="0.768011" transform="rotate(45 12.2676 0.646447)" fill="#FDFDFE" stroke="#FDFDFE" strokeWidth="0.5"></rect>
                                <path d="M1.19345 4.98425C0.891119 5.28658 0.897654 5.77873 1.20791 6.07292L4.70642 9.39036C4.94829 9.61971 5.32032 9.64118 5.58696 9.44116C5.91859 9.1924 5.95423 8.70807 5.66258 8.41344L2.27076 4.98699C1.97447 4.68767 1.49125 4.68644 1.19345 4.98425Z"
                                    fill="#FDFDFE"
                                    stroke="#FDFDFE"
                                    strokeWidth="0.5">
                                </path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
