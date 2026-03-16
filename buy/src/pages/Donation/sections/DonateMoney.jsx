import { useState } from 'react'
import { CalenderIcon, CrossIcon, EmailIcon, LocationIcon, UserNameIcon } from '../../../components/Icons'
import { CREATEDONATION } from '../../../services/operations/donationApi';
import { toast } from 'sonner';
import PhoneNumber from '../../../components/PhoneNumber';



function DonateMoney() {

    const [formData, setFormData] = useState({
        otherAmount: false,
        amount: '',
        name: "",
        email: '',
        countryCode: "+91",
        phone: '',
        pickupAddress: '',
        pickupDate: '',
    });

    const handleChange = (e) => {
        const { value, name } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }))
    };

    const handleDonation = async (e) => {
        e.preventDefault();
        const toastId = toast.loading("loading...")
        let res = await CREATEDONATION({ ...formData, type: "MONEY" });
        if (res.status) {
            toast.success(res.message, {
                id: toastId
            });
        } else {
            toast.error(res.message, {
                id: toastId
            });
        }
        // toast.success("Donation has been completed successfully")
    };


    return (
        <form className='flex flex-col justify-between items-start'>
            <div className='relative col-span-3 mb-6 w-full'>
                <label className='text-primary text-lg font-bold text-nowrap' htmlFor="selectAmout">Select Amount </label>
                <div className='bg-white border border-gray-200 px-5 py-3 col-span-3 rounded grid grid-cols-4 gap-5 w-full relative mt-2 flex-wrap'>
                    <div>
                        <input className='opacity-0 absolute' type="radio" name="amount" id="10" value={'10'} onChange={(e) => setFormData((prev) => ({ ...prev, otherAmount: false, amount: e.target.value }))} />
                        <label className={`cursor-pointer min-h-20 text-3xl  p-2 ${formData.amount === '10' ? " bg-helper text-white" : "text-primary"}  font-bold text-nowrap shadow-md bg-[#F0F4FA] rounded  flex justify-center items-center`} htmlFor="10">$ 10</label>
                    </div>
                    <div >
                        <input className='opacity-0 absolute' type="radio" name="amount" id="20" value={'20'} onChange={(e) => setFormData((prev) => ({ ...prev, otherAmount: false, amount: e.target.value }))} />
                        <label className={`cursor-pointer min-h-20 text-3xl  p-2 ${formData.amount === '20' ? "bg-helper text-white" : "text-primary"}  font-bold text-nowrap shadow-md bg-[#F0F4FA] rounded  flex justify-center items-center`} htmlFor="20">$ 20</label>
                    </div>
                    <div >
                        <input className='opacity-0 absolute' type="radio" name="amount" id="30" value={'30'} onChange={(e) => setFormData((prev) => ({ ...prev, otherAmount: false, amount: e.target.value }))} />
                        <label className={`cursor-pointer min-h-20 text-3xl  p-2 ${formData.amount === '30' ? "bg-helper text-white" : "text-primary"}  font-bold text-nowrap shadow-md bg-[#F0F4FA] rounded  flex justify-center items-center`} htmlFor="30">$ 30</label>
                    </div>
                    <div >
                        <input className='opacity-0 absolute' type="radio" name="amount" id="40" value={'40'} onChange={(e) => setFormData((prev) => ({ ...prev, otherAmount: false, amount: e.target.value }))} />
                        <label className={`cursor-pointer min-h-20 text-3xl  p-2 ${formData.amount === '40' ? "bg-helper text-white" : "text-primary"}  font-bold text-nowrap shadow-md bg-[#F0F4FA] rounded  flex justify-center items-center`} htmlFor="40">$ 40</label>
                    </div>
                    <div >
                        <input className='opacity-0 absolute' type="radio" name="amount" id="50" value={'50'} onChange={(e) => setFormData((prev) => ({ ...prev, otherAmount: false, amount: e.target.value }))} />
                        <label className={`cursor-pointer min-h-20 text-3xl  p-2 ${formData.amount === '50' ? "bg-helper text-white" : "text-primary"}  font-bold text-nowrap shadow-md bg-[#F0F4FA] rounded  flex justify-center items-center`} htmlFor="50">$ 50</label>
                    </div>
                    <div >
                        <input className='opacity-0 absolute' type="radio" name="amount" id="100" value={'100'} onChange={(e) => setFormData((prev) => ({ ...prev, otherAmount: false, amount: e.target.value }))} />
                        <label className={`cursor-pointer min-h-20 text-3xl  p-2 ${formData.amount === '100' ? "bg-helper text-white" : "text-primary"}  font-bold text-nowrap shadow-md bg-[#F0F4FA] rounded  flex justify-center items-center`} htmlFor="100">$ 100</label>
                    </div>
                    <div>
                        <span onClick={(e) => setFormData((prev) => ({ ...prev, otherAmount: !formData.otherAmount, amount: '' }))} className={`cursor-pointer min-h-20 text-3xl  py-2 px-4 ${formData.otherAmount === true ? "bg-helper text-white" : "text-primary"}  font-bold text-nowrap shadow-md bg-[#F0F4FA] rounded  flex justify-center items-center`} >Other</span>
                    </div>
                    {formData.amount && <div>
                        <span onClick={(e) => setFormData((prev) => ({ ...prev, otherAmount: false, amount: '' }))} className={`cursor-pointer min-h-20 py-2 px-4 text-red-500 text-sm font-bold text-nowrap   flex justify-center items-center`}><CrossIcon /><span className='ml-1'>clear</span></span>
                    </div>}
                    {formData.otherAmount === true &&
                        <div className='relative flex-grow'>
                            <input className='py-4 w-full pl-14 pr-2 text-sm lg:text-base border border-[#D5E3EE] rounded focus:outline-none placeholder:text-[#374b5c]  font-medium' type="number" placeholder="Enter Amount *" name='amount' maxLength={5} onChange={handleChange} />
                            <span className='absolute top-[13px] left-3 w-8 h-8 rounded-md bg-[#d5e3ee] flex justify-center items-center'></span>
                        </div>}
                </div>
            </div>
            <div className='grid grid-cols-1 w-full gap-5  lg:grid-cols-3'>
                {/* {!user ? <> */}
                <div className='relative col-span-3 md:col-span-1'>
                    <input
                        name='name'
                        onChange={handleChange}
                        className='py-4 w-full pl-14 pr-2 text-sm lg:text-base border border-[#D5E3EE] rounded focus:outline-none placeholder:text-[#374b5c]  font-medium'
                        type="text"
                        placeholder="Name *"
                    />
                    <span className='absolute top-[13px] left-3 w-8 h-8 rounded-md bg-[#d5e3ee] flex justify-center items-center'>
                        <UserNameIcon color={"#475B6B"} />
                    </span>
                </div>
                <div className='relative col-span-3 md:col-span-1'>
                    <input
                        name='email'
                        onChange={handleChange}
                        className='py-4 w-full pl-14 pr-2 text-sm lg:text-base border border-[#D5E3EE] rounded focus:outline-none placeholder:text-[#374b5c]  font-medium'
                        type="email"
                        placeholder="E-mail *"
                    />
                    <span className='absolute top-[13px] left-3 w-8 h-8 rounded-md bg-[#d5e3ee] flex justify-center items-center'>
                        <EmailIcon color={"#475B6B"} />
                    </span>
                </div>
                <PhoneNumber onchange={(value) => setFormData((prev) => ({ ...prev, phone: value.split("-")[1], countryCode: value.split("-")[0] }))} value={formData.phone} />
                {/* <div className='relative col-span-3 md:col-span-1'>
                    <input
                        name='pickupAddress'
                        onChange={handleChange}
                        className='py-4 w-full pl-14 pr-2 text-sm lg:text-base border border-[#D5E3EE] rounded focus:outline-none placeholder:text-[#374b5c] font-medium'
                        type="text"
                        placeholder="Pickup Address *"
                    />
                    <span className='absolute top-[13px] left-3 w-8 h-8 rounded-md bg-[#d5e3ee] flex justify-center items-center'>
                        <LocationIcon color={"#475B6B"} />
                    </span>
                </div> */}
                {/* <div className='relative col-span-3 md:col-span-1'>
                    <label htmlFor='pickupDate' className={`${formData.pickupDate ? "hidden" : 'absolute mb-2 block ml-2 pb-1 font-medium text-primary bg-white z-20 left-12 top-4 w-1/2'}`}>Pickup Date *</label>
                    <input value={formData.pickupDate} name='pickupDate' id='pickupDate' onChange={handleChange} className='py-4 w-full pl-14 pr-2 text-sm lg:text-base border border-[#D5E3EE] rounded focus:outline-none placeholder:text-[#374b5c] font-medium' type="date" placeholder="Pickup Date *" />
                    <span className='absolute top-[13px] left-3 w-8 h-8 rounded-md bg-[#d5e3ee] flex justify-center items-center'>
                        <CalenderIcon color={"#475B6B"} />
                    </span>

                </div> */}
            </div>
            <button onClick={handleDonation} className='mt-10 block w-full rounded-md bg-indigo-600 disabled:bg-opacity-50 disabled:hover:bg-opacity-50 disabled:cursor-not-allowed px-3 py-2 text-center text-xl font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>Donate Now</button>
        </form>
    )
}

export default DonateMoney
