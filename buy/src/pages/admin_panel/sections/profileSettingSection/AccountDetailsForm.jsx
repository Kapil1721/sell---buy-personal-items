import { useContext, useState } from "react";
import { DropdownComponent } from "../../../../components/Dropdown";
import PhoneNumber from "../../../../components/PhoneNumber";
import { UPDATE_ACCOUNT_DETAILS } from "../../../../services/operations/adminApi";
import { toast } from "sonner";
import { createValidator } from "../../../../hooks/Hooks";
import { AuthContext } from "../../../../auth/AuthContext";



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
    role: (obj) => {
        if (!obj.buyer && !obj.seller && !obj.donor) return 'Choose atleast one role';
        return null
    }

    // Add more validation rules as needed
};

const validator = createValidator(validationSchema);

export const AccountDetailForm = ({ defaultData }) => {
    const [formData, setFormData] = useState(() => defaultData);
    const { setUser } = useContext(AuthContext)


    const options = [
        { value: 'Recipient', label: 'Recipient' },
        { value: 'Donor', label: 'Donor' },
    ];

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }
    const handleSaveChanges = async (e) => {
        e.preventDefault();


        const validationErrors = validator({ ...formData, role: { buyer: formData.buyer, seller: formData.seller, donor: formData.donor } });
        // console.log(validationErrors);
        for (let i = 0; i < Object.keys(validationErrors).length; i++) {
            if (Object.values(validationErrors)[i] !== undefined) {
                console.log(Object.values(validationErrors)[i]);
                return toast.error(Object.values(validationErrors)[i])
            }
        }
        // toast.error(validationErrors)


        // setLoading(true)
        if (Object.keys(validationErrors).length === 0) {
            let res = await UPDATE_ACCOUNT_DETAILS(formData);
            if (res.status) {
                toast.success(res.message);
                setUser(res.user)
            }
        }
    }
    const handleRoleChange = (e) => {
        const { name, checked } = e.target
        setFormData((prev) => ({ ...prev, [name]: checked }))
    };

    // console.log(formData, "form");

    return (
        <div className='lg:px-6'>
            <div className='flex flex-col my-4'>
                <label className='text-primary lg:text-lg font-semibold lg:mb-4 mb-2 lg:ml-4 ml-2' htmlFor="name">{'Display Name'} <span></span></label>
                <input type="text" className='border border-[#D5E3EE] flex justify-between items-center p-4 gap-4 rounded-md focus:outline-none font-medium text-primary' name='name' id="name" value={formData.name} onChange={handleChange} />
            </div>
            <div className='flex flex-col my-4'>
                <label className='text-primary lg:text-lg font-semibold lg:mb-4 mb-2 lg:ml-4 ml-2' htmlFor="productName">{'Account Type'} <span></span></label>
                <DropdownComponent options={options} onChange={handleChange} value={'Recipient'} className='p-4' />
            </div>
            <div className='flex flex-col my-4'>
                <label className='text-primary lg:text-lg font-semibold lg:mb-4 mb-2 lg:ml-4 ml-2' htmlFor="productName">{'Phone Number'} <span></span></label>
                <PhoneNumber value={formData.contactNumber} onchange={(value) => setFormData((pre) => ({ ...pre, countryCode: value.split('-')[0], contactNumber: value.split('-')[1] }))} />
                <div className='flex justify-start items-center font-medium my-2 ml-1'>
                    <input name='whatsApp' id="whatsApp" checked={formData.whatsApp} onChange={(e) => setFormData((pre) => ({ ...pre, whatsApp: e.target.checked }))} className='border transition ease-in-out size-[18px] border-[#D5E3EE] outline-[#D5E3EE] rounded-lg hover:outline-none focus:outline-none placeholder:text-[#374b5c] text-base font-medium' type="checkbox" placeholder="Email or Username" />
                    <label htmlFor="whatsApp" className='ml-2 text-[#374b5c]'>WhatsApp</label>
                </div>
                <div className='flex justify-start items-center font-medium ml-1'>
                    <input name='viber' id="viber" checked={formData.viber} onChange={(e) => setFormData((pre) => ({ ...pre, viber: e.target.checked }))} className='border transition ease-in-out size-[18px] border-[#D5E3EE] outline-[#D5E3EE] rounded-lg hover:outline-none focus:outline-none placeholder:text-[#374b5c] text-base font-medium' type="checkbox" placeholder="Email or Username" />
                    <label htmlFor="viber" className='ml-2 text-[#374b5c]'>Viber</label>
                </div>
            </div>

            <div className='flex flex-col my-4'>
                <label className='text-primary lg:text-lg font-semibold lg:mb-4 mb-2 lg:ml-4 ml-2' htmlFor="profileDescription">{'Profile Description'} <span></span></label>
                <textarea name='profileDescription' id="profileDescription" value={formData.profileDescription} onChange={handleChange} className='w-full border text-sm lg:text-base border-[#D5E3EE] rounded py-3 min-h-24 p-2 lg:p-8 focus:outline-none placeholder:text-[#374b5c] font-medium text-primary' type="text" placeholder="Write something about yourself" />
            </div>
            <div className='flex flex-col my-4'>
                <label className='text-primary lg:text-lg font-semibold lg:mb-4 mb-2 lg:ml-4 ml-2' htmlFor="address">{'Address'} <span></span></label>
                <input type="text" id="address" value={formData.address} onChange={handleChange} className='border border-[#D5E3EE] flex justify-between items-center p-4 gap-4 rounded-md focus:outline-none font-medium text-primary' name='address' />
            </div>
            <div className='relative ml-1'>
                <p htmlFor="" className='text-primary font-medium ml-4'>Active Accounts *</p>
                <div className='grid grid-cols-1 md:grid-cols-3 mt-2'>
                    <div className="flex items-center">
                        <input id="Buyer" disabled={true} type="checkbox" value={'BUYER'} checked={formData.buyer} name='buyer' onChange={handleRoleChange} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 ring-offset-gray-800 focus:ring-offset-gray-800 focus:ring-2 " />
                        <label htmlFor="Buyer" className="text-primary font-medium ml-3 select-none" >Buyer</label>
                    </div>
                    <div className='flex justify-start items-center'>
                        <input type='checkbox' name='seller' disabled={true} checked={formData.seller} onChange={handleRoleChange} id='Seller' value={'SELLER'} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 ring-offset-gray-800 focus:ring-offset-gray-800 focus:ring-2 " />
                        <label htmlFor="Seller" disabled={true} className='text-primary font-medium ml-3 select-none'>Seller</label>
                    </div>
                    <div className='flex justify-start items-center'>
                        <input type='checkbox' disabled={true} name='donor' checked={formData.donor} onChange={handleRoleChange} id='Donor' value={'DONOR'} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 ring-offset-gray-800 focus:ring-offset-gray-800 focus:ring-2 " />
                        <label htmlFor="Donor" className='text-primary font-medium ml-3 select-none'>Donor</label>
                    </div>
                </div>

            </div>
            <div className='mt-8 flex justify-end'>
                <div>
                    <div className='post_product_button'>
                        <button onClick={(e) => handleSaveChanges(e)} className='bg-helper px-4  py-3 rounded-md flex items-center justify-between  gap-4 button'>
                            <span className='text-nowrap text-white font-medium mr-4'>Save Changes</span>
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
};