import { useContext, useState } from 'react'
import { AddIcon, CalenderIcon, CrossIcon, EmailIcon, LocationIcon, MobileIcon, UserNameIcon } from '../../../components/Icons'
import { CREATEDONATION } from '../../../services/operations/donationApi';
import { toast } from 'sonner';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useForm } from 'react-hook-form';
import { DropdownList, SelectGroupOne } from '../../../components/Dropdown';
import EditorComponent from '../../../components/CKEEditor';
import FileUpload from '../../../components/FileUpload';
import { AuthContext } from '../../../auth/AuthContext';
import Table from '../../../components/Table';
import PhoneNumber from '../../../components/PhoneNumber';


const donationSchema = yup
    .object({
        name: yup.string().required(),
        email: yup.string().email().required(),
        countryCode: yup.string().length(10),
        phone: yup.string().required(),
        pickupAddress: yup.string().required(),
        pickupDate: yup.string().required(),
        otherAmount: yup.bool(),
        amount: yup.number().positive().required()
    })
    .required()

function DonationForm() {

    const [formData, setFormData] = useState({
        name: "",
        email: '',
        countryCode: "+91",
        phone: '',
        pickupAddress: '',
        pickupDate: '',
    });

    const [items, setItems] = useState([]);
    const [itemsData, setItemData] = useState({
        name: '',
        category: "",
        quantity: '',
        description: '',
        image: []
    });

    const handleChange = (e) => {
        const { value, name } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }))
    }


    const handleDonation = async (e) => {
        e.preventDefault();
        let res = await CREATEDONATION({ ...formData, items: items.length !== 0 ? items : [itemsData],type:"ITEMS" });
        if (res) {
            toast.success(res.message);
            handleReset()
        }
    }

    const handleGallary = async (files) => {
        if (!files || files.length === 0) return;
        try {
            const promises = Array.from(files).map(file => {
                return new Promise((resolve, reject) => {
                    const reader = new FileReader();

                    reader.onload = () => resolve({ fileName: file.name, url: reader.result });
                    reader.onerror = error => reject(error);

                    reader.readAsDataURL(file);
                });
            });
            const base64Results = await Promise.all(promises);
            setItemData((prev) => ({ ...prev, image: base64Results }))

        } catch (error) {
            console.error('Error converting files to base64:', error);
        }
    }


    const handleRemoveGallary = async (e, i) => {
        let list = [...itemsData.image];
        list.splice(i, 1);
        setItemData((prev) => ({ ...prev, image: list }))
        toast.success('Image removed successfully')
    }

    const handleReset = () => {
        setItemData((prev) => ({
            ...prev,
            name: '',
            category: "",
            quantity: '',
            description: '',
            image: []
        }));
        // setSearchValue({ name: "", value: "" })
        setItemData((prev) => ({ ...prev, category: '', categoryName: '' }))
    }


    const disable = formData.name === '' || formData.email === '' || formData.countryCode === '' || formData.phone === '' ||
        formData.pickupAddress === '' || formData.pickupDate === '' || itemsData.category === '' || itemsData.description === ''
        || itemsData.quantity === '' || itemsData.name === '' || itemsData.image.length === 0;



    return (
        <form className='flex flex-col justify-between items-start'>
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
                <div className='relative col-span-3 md:col-span-1'>
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
                </div>
                <div className='relative col-span-3 md:col-span-1'>
                    <label htmlFor='pickupDate' className={`${formData.pickupDate ? "hidden" : 'absolute mb-2 block ml-2 pb-1 font-medium text-primary bg-white z-20 left-12 top-4 w-1/2'}`}>Pickup Date *</label>
                    <input value={formData.pickupDate} name='pickupDate' id='pickupDate' onChange={handleChange} className='py-4 w-full pl-14 pr-2 text-sm lg:text-base border border-[#D5E3EE] rounded focus:outline-none placeholder:text-[#374b5c] font-medium' type="date" placeholder="Pickup Date *" />
                    <span className='absolute top-[13px] left-3 w-8 h-8 rounded-md bg-[#d5e3ee] flex justify-center items-center'>
                        <CalenderIcon color={"#475B6B"} />
                    </span>

                </div>
                {/* </> : <></>} */}
                <div className='relative col-span-3 text-primary mt-2'>
                    <h3 className='font-semibold ml-5'>Add Items *</h3>
                </div>
                <div className='relative text-primary col-span-3 md:col-span-1'>
                    <div className="w-full">
                        <label className="mb-2 block ml-2 font-medium text-primary">
                            Product Name *
                        </label>
                        <input
                            type="text"
                            placeholder="Product Name"
                            value={itemsData.name}
                            onChange={(e) => setItemData((prev) => ({ ...prev, name: e.target.value }))}
                            className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-primary outline-none transition focus:border-helper active:border-helper disabled:cursor-default disabled:bg-whiter border-form-strokedark bg-form-input"
                        />
                    </div>
                </div>
                <div className='relative col-span-3 md:col-span-1'>
                    <label className="mb-2 block ml-2 font-medium text-primary">
                        Product Category *
                    </label>
                    <DropdownList label={'Select Product Category'} value={itemsData.category} onClear={handleReset} onChange={(value) => setItemData((prev) => ({ ...prev, category: value.id, categoryName: value.name }))} />
                </div>
                <div className='relative text-primary col-span-3 md:col-span-1'>
                    <div className="w-full">
                        <label className="mb-2 block ml-2 font-medium text-primary">
                            Quantity *
                        </label>
                        <input
                            type="number"
                            placeholder="Quantity"
                            value={itemsData.quantity}
                            onChange={(e) => setItemData((prev) => ({ ...prev, quantity: e.target.value }))}
                            className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-primary outline-none transition focus:border-helper active:border-helper disabled:cursor-default disabled:bg-whiter border-form-strokedark bg-form-input"
                        />
                    </div>
                </div>
                <div className='relative col-span-3'>
                    <label className="mb-2 block ml-2 font-medium text-primary">
                        Product Description *
                    </label>
                    <EditorComponent data={itemsData.description} onChange={(value) => setItemData((prev) => ({ ...prev, description: value }))} />
                </div>
                <div className='relative col-span-3'>
                    <label className="mb-2 block ml-2 font-medium text-primary">
                        Product Image Upload *
                    </label>
                    <FileUpload files={itemsData.image} progress={0} onUploadFile={handleGallary} handleRemove={handleRemoveGallary} type={"images"} name={"Gallery"} id={"Gallery"} setFiles={(img) => setItemData((prev) => ({ ...prev, image: [...prev.image, img] }))} />
                </div>



            </div>
            <button onClick={handleDonation} disabled={disable} className='mt-10 block w-full rounded-md bg-indigo-600 disabled:bg-opacity-50 disabled:hover:bg-opacity-50 disabled:cursor-not-allowed px-3 py-2 text-center text-xl font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>Donate Now</button>
        </form>
    )
}

export default DonationForm




// < header >
// <h4 className='text-xl font-medium text-primary'>Gift Frequency</h4>
//             </header >
//             <div className='bg-[#F0F4FA] border border-gray-200 px-5 py-3 rounded-[4rem] flex justify-between gap-4 relative'>
//                 <div className='py-2 px-4 rounded-3xl bg-white flex justify-center items-center'>
//                     <input className='opacity-0' type="radio" name="frequency" id="Monthly" />
//                     <label className='mr-3' htmlFor="Monthly">Monthly</label>
//                 </div>
//                 <div className='py-2 px-4 rounded-3xl bg-white'>
//                     <input className='opacity-0' type="radio" name="frequency" id="one-time" />
//                     <label className='mr-3' htmlFor="one-time">One Time</label>
//                 </div>
//             </div>
//             <header>
//                 <h4>What want's to donate</h4>
//             </header>
//             <div>
//                 <div>
//                     <input type="radio" name="donationType" id="items" />
//                     <label htmlFor="items">Items</label>
//                 </div>
//                 <div>
//                     <input type="radio" name="donationType" id="money" />
//                     <label htmlFor="money">Money</label>
//                 </div>
//             </div>
//             <header>
//                 <h4>Selct amount (in US dollar)</h4>
//             </header>
//             <div>
//                 <div>
//                     <input type="radio" name="amount" id="10" />
//                     <label htmlFor="10">$ 10</label>
//                 </div>
//                 <div>
//                     <input type="radio" name="amount" id="20" />
//                     <label htmlFor="20">$ 20</label>
//                 </div>
//                 <div>
//                     <input type="radio" name="amount" id="30" />
//                     <label htmlFor="30">$ 30</label>
//                 </div>
//                 <div>
//                     <input type="radio" name="amount" id="40" />
//                     <label htmlFor="40">$ 40</label>
//                 </div>
//                 <div>
//                     <input type="radio" name="amount" id="other" />
//                     <label htmlFor="other">$ 40</label>
//                 </div>
//                 <div>
//                     <label htmlFor="other">Other Amount</label>
//                     <input type="text" name="amount" id="other" />
//                 </div>
//             </div>

//             <div>
//                 <div>
//                     <input type="checkbox" name="amount" id="10" />
//                     <label htmlFor="10">Yes, I’ll generously add $0.75 each month to cover the transaction fees.</label>
//                 </div>
//             </div>
//             <div>
//                 <label htmlFor="name">Name</label>
//                 <input type="text" name="name" />
//                 <a href="/">Click here to give in honor of other person</a>
//             </div>