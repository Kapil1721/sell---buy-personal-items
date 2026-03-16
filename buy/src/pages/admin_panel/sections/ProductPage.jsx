import  { useState } from 'react'
import Breadcrums from '../../products/sections/Breadcrums'
import { useQuery } from '@tanstack/react-query';
import { DELETEUPLOADS, GET_MY_PRODUCT_BY_ID } from '../../../services/operations/adminApi';
import { Link, useParams } from 'react-router-dom';
import { IMAGEURL } from '../../../utils/constants';
import ErrorUi from '../../../components/ErrorUi';
import { AdminIcon, CompareIcon, EmailIcon, LikeIcon, MessageIcon, MobileIcon, ViewIcon } from '../../../components/Icons';
import FileUpload from '../../../components/FileUpload';
import { toast } from 'sonner';
import axios from 'axios';
import { fileUploadEndpoints } from '../../../services/api';


function ProductPage() {

    const params = useParams()
    const { isPending, error, data, isLoading } = useQuery({
        queryKey: ['GET_MY_PRODUCT_BY_ID'],
        queryFn: async () => {
            let res = await GET_MY_PRODUCT_BY_ID(params.slug);
            return res;
        }
    });
    const [progress, setProgress] = useState(0);
    const [gallery, setGallery] = useState([]);
    const [show, setShow] = useState(false);


    const Uploadfiletoserver = async (item) => {
        try {
            let progress = 0
            const formData = new FormData();
            formData.append('file', item);
            const res = await axios.post(fileUploadEndpoints.fileUpload_API, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                withCredentials: true,
                onUploadProgress: (progressEvent) => {
                    const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                    // setProgress(percentCompleted);
                    progress = percentCompleted;
                }
            });
            if (res.status === 200) {
                setProgress(0)
                return { ...res.data, file: { ...res.data.file, progress } }
            }
        } catch (error) {
            return error
        }
    }

    const handleGallary = async (file) => {
        // console.log(file, "handleGallary")
        if (!file) {
            return
        }
        toast.loading('Uploading...')
        if (file.length > 0) {
            let files = file.map((item) => {
                return ({ url: URL.createObjectURL(item), name: item.name, liveUrl: null, loading: true, progress: 0 })
            });
            setGallery([...gallery, ...files]);
        }

        let newArr = [];

        for (let index = 0; index < file.length; index++) {
            const element = file[index];
            const _resData = await Uploadfiletoserver(element);
            newArr.push({ ..._resData.file, url: `${_resData.file.filename}`, name: _resData.file.originalname, progress: 0 })
        }
        toast.dismiss()
        setGallery([...gallery, ...newArr]);
        toast.success('Images uploaded successfully.')
    };

    const handleRemoveGallary = async (e, i) => {
        let list = [...gallery];
        let res = await DELETEUPLOADS(list[i].filename);
        if (res.status) {
            list.splice(i, 1);
            setGallery(list);
            toast.success(res.message)
        }
    }

    const handleRating = () => {

    };

    const handleShow = (value) => {
        setShow(value)
    };

    const handlePostReview = () => {

    }

    const OpenChatModal = () => {
        toast.error("You can't send message to yourself!")
    }
    const OpenEmailModal = () => {
        toast.error("You can't send email to yourself!")
    }


    if (isLoading && isPending) {
        return <LoadingUi />
    }
    if (error) {
        return <ErrorUi />
    }

    const { product } = data;
    const breadcrumsData = [
        { name: "Home", link: "/" },
        { name: 'Search Result', link: `/product` },
        { name: product.category.name, link: `/product/${product.category.name}` },
        { name: product.name, link: `/product/${product.category.name}/${product.post_id}` }
    ]

    return (
        <div className="relative bg-[#F8FAFD]">
            <div className="max-w-[1200px] mx-auto py-14">
                <div className='relative w-full'>
                    <Breadcrums data={breadcrumsData} />
                    <div className='mx-auto lg:flex'>
                        <div className='relative w-full'>
                            <div className='relative w-full bg-white rounded-b-md  border border-bdr rounded-t-md'>
                                <img className='rounded-t-md w-full block aspect-video object-cover' src={IMAGEURL + product.images[0].image} alt="product-images" />
                                <div className='mt-4 lg:flex lg:justify-between lg:px-6 px-2 '>
                                    <div className='flex gap-4 items-center'>
                                        <span className='p-2 bg-light opacity-35  rounded-full'><AdminIcon className={'stroke-white'} /></span>
                                        <p className='text-light font-semibold'>{product.user.userType}</p>
                                    </div>
                                    <div className='flex gap-1 items-center'>
                                        {/* <span className='p-2 bg-light opacity-35  rounded-full'><AdminIcon /></span> */}
                                        <p className='text-light font-medium'>1 second ago</p>
                                        <span className='p-1 mt-0.5'><ViewIcon /></span>
                                        <p className='text-light font-medium'>{product.views.length} Views</p>
                                    </div>
                                </div>
                                <div className='mt-6 lg:px-6 px-2 text-primary'>
                                    <h1 className='text-3xl font-semibold '>{product.name}</h1>
                                    <p className='py-1 px-2 mt-4 rounded-md w-fit border border-helper text-helper'>{product.category.name}</p>
                                </div>
                                <div className='mt-6 lg:px-6 px-2 text-primary pb-6'>
                                    <h3 className='text-xl font-medium '>{'Description'}</h3>
                                    <div className='mt-4' dangerouslySetInnerHTML={{ __html: product.desription }} />
                                </div>
                            </div>
                            <div className='mt-6 bg-white border border-bdr  text-primary'>
                                <div className='py-6 border-b border-bdr px-6'>
                                    <h2 className='text-2xl font-bold'>Write a Review</h2>
                                </div>
                                <div className='py-6 px-6 border-b border-bdr'>
                                    <div className='lg:flex lg:justify-between lg:items-start'>
                                        <div className='lg:w-1/2 flex items-center justify-start gap-4 py-4'>
                                            <div className='rounded-full bg-[#F2F4F8] size-12 flex justify-center items-center '>
                                                <AdminIcon color={"#D5E3EE"} />
                                            </div>
                                            <div>
                                                <p className='text-primary font-semibold'>{product.user.name}</p>
                                                <p className='text-light font-medium text-sm'>{"Your opinion matters"}</p>
                                            </div>
                                        </div>
                                        <div className=' flex '>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={30}
                                                height={30}
                                                viewBox="0 0 30 30"
                                                fill="none"
                                                className="fill-secondary stroke-secondary transition ease-in-out duration-500 hover:fill-[#F8FAFD] hover:stroke-[#d5e3ee]"
                                            >
                                                <path d="M14.9987 22.6139L21.21 26.3626C22.19 26.9539 23.3987 26.0751 23.1387 24.9614L21.49 17.8951L26.9787 13.1401C27.8437 12.3914 27.3812 10.9701 26.2412 10.8739L19.0162 10.2614L16.19 3.59264C15.7437 2.54139 14.2537 2.54139 13.8075 3.59264L10.9812 10.2614L3.75624 10.8739C2.61624 10.9701 2.15374 12.3914 3.01874 13.1401L8.50749 17.8951L6.85874 24.9614C6.59874 26.0751 7.80749 26.9539 8.78749 26.3626L14.9987 22.6139Z" />
                                            </svg>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={30}
                                                height={30}
                                                viewBox="0 0 30 30"
                                                fill="none"
                                                className="fill-secondary stroke-secondary transition ease-in-out duration-500 hover:fill-[#F8FAFD] hover:stroke-[#d5e3ee]"
                                            >
                                                <path d="M14.9987 22.6139L21.21 26.3626C22.19 26.9539 23.3987 26.0751 23.1387 24.9614L21.49 17.8951L26.9787 13.1401C27.8437 12.3914 27.3812 10.9701 26.2412 10.8739L19.0162 10.2614L16.19 3.59264C15.7437 2.54139 14.2537 2.54139 13.8075 3.59264L10.9812 10.2614L3.75624 10.8739C2.61624 10.9701 2.15374 12.3914 3.01874 13.1401L8.50749 17.8951L6.85874 24.9614C6.59874 26.0751 7.80749 26.9539 8.78749 26.3626L14.9987 22.6139Z" />
                                            </svg>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={30}
                                                height={30}
                                                viewBox="0 0 30 30"
                                                fill="none"
                                                className="fill-secondary stroke-secondary transition ease-in-out duration-500 hover:fill-[#F8FAFD] hover:stroke-[#d5e3ee]"
                                            >
                                                <path d="M14.9987 22.6139L21.21 26.3626C22.19 26.9539 23.3987 26.0751 23.1387 24.9614L21.49 17.8951L26.9787 13.1401C27.8437 12.3914 27.3812 10.9701 26.2412 10.8739L19.0162 10.2614L16.19 3.59264C15.7437 2.54139 14.2537 2.54139 13.8075 3.59264L10.9812 10.2614L3.75624 10.8739C2.61624 10.9701 2.15374 12.3914 3.01874 13.1401L8.50749 17.8951L6.85874 24.9614C6.59874 26.0751 7.80749 26.9539 8.78749 26.3626L14.9987 22.6139Z" />
                                            </svg>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={30}
                                                height={30}
                                                viewBox="0 0 30 30"
                                                fill="none"
                                                className="fill-secondary stroke-secondary transition ease-in-out duration-500 hover:fill-[#F8FAFD] hover:stroke-[#d5e3ee]"
                                            >
                                                <path d="M14.9987 22.6139L21.21 26.3626C22.19 26.9539 23.3987 26.0751 23.1387 24.9614L21.49 17.8951L26.9787 13.1401C27.8437 12.3914 27.3812 10.9701 26.2412 10.8739L19.0162 10.2614L16.19 3.59264C15.7437 2.54139 14.2537 2.54139 13.8075 3.59264L10.9812 10.2614L3.75624 10.8739C2.61624 10.9701 2.15374 12.3914 3.01874 13.1401L8.50749 17.8951L6.85874 24.9614C6.59874 26.0751 7.80749 26.9539 8.78749 26.3626L14.9987 22.6139Z" />
                                            </svg>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={30}
                                                height={30}
                                                viewBox="0 0 30 30"
                                                fill="none"
                                                className="fill-secondary stroke-secondary transition ease-in-out duration-500 hover:fill-[#F8FAFD] hover:stroke-[#d5e3ee]"
                                            >
                                                <path d="M14.9987 22.6139L21.21 26.3626C22.19 26.9539 23.3987 26.0751 23.1387 24.9614L21.49 17.8951L26.9787 13.1401C27.8437 12.3914 27.3812 10.9701 26.2412 10.8739L19.0162 10.2614L16.19 3.59264C15.7437 2.54139 14.2537 2.54139 13.8075 3.59264L10.9812 10.2614L3.75624 10.8739C2.61624 10.9701 2.15374 12.3914 3.01874 13.1401L8.50749 17.8951L6.85874 24.9614C6.59874 26.0751 7.80749 26.9539 8.78749 26.3626L14.9987 22.6139Z" />
                                            </svg>

                                        </div>

                                    </div>
                                    <div>
                                        <FileUpload className={'min-h-30'} progress={progress} onUploadFile={handleGallary} handleRemove={handleRemoveGallary} type={"images"} name={"Gallery"} files={gallery} setFiles={setGallery} id={'review-images'} />
                                    </div>
                                    <textarea className='w-full border text-sm lg:text-base border-[#D5E3EE] rounded py-3 min-h-44 px-8 focus:outline-none placeholder:text-[#374b5c] mt-6 font-medium' name="Review" id="review" placeholder='Write your review' />
                                    <div className='mt-8 flex justify-end'>
                                        <div>
                                            <div className='post_product_button'>
                                                <button onClick={handlePostReview} className='bg-helper px-4  py-3 rounded-md flex items-center justify-between  gap-4 button'>
                                                    <span className='text-nowrap text-white font-medium mr-4'>Post Your Review</span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 12 12" fill="none">
                                                        <path d="M5.00488 11.525V7.075H0.854883V5.125H5.00488V0.65H7.00488V5.125H11.1549V7.075H7.00488V11.525H5.00488Z" fill="#fff"></path></svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='relative lg:w-1/3 md:w-2/3'>
                            <div className=' ml-10 border border-bdr rounded-md bg-white'>
                                <div className='relative px-8 py-4 w-full'>
                                    <div className='w-full flex items-center justify-start gap-4 py-4'>
                                        <div className='rounded-full bg-[#F2F4F8] size-12 flex justify-center items-center'>
                                            <AdminIcon color={"#D5E3EE"} />
                                        </div>
                                        <div className=''>
                                            <p className='text-primary font-semibold'>{product.user.username}</p>
                                            <p className='text-primary font-medium text-sm'>{"Member since: 3 weeks"}</p>
                                            <p to={`/user/${product.user.username}`} className='text-light font-medium text-sm flex items-center justify-start gap-2 '> <span className=' size-3 p-1 rounded-full bg-light'></span>User is offline</p>
                                            <Link
                                                // to={`/user/${product.user.username}`} 
                                                className='text-helper mt-3 font-medium text-lg flex items-center justify-start gap-2 underline underline-offset-2'>See all ads</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className='bg-[#D5E3EE] px-8 py-4 flex justify-between items-center'>
                                    {show ? <a href={`tel:${product.user.countryCode + product.user.contactNumber}`} className='flex justify-start gap-5 items-center w-full font-medium text-primary text-lg'>
                                        <div className='size-10 rounded-full bg-white cursor-pointer flex justify-center items-center'><MobileIcon className={'text-primary'} color={'#374b5c'} /></div>
                                        <div><p className=''><span>{product.user.countryCode}</span>{product.user.contactNumber}</p></div>
                                    </a> :
                                        <>
                                            <div className='flex justify-start gap-5 items-center w-full font-medium text-primary text-lg'>
                                                <div className='size-10 rounded-full bg-white cursor-pointer flex justify-center items-center'><MobileIcon className={'text-primary'} color={'#374b5c'} /></div>
                                                <div><p className='text-center'><span>{product.user.countryCode}</span>{String(product.user.contactNumber).substring(0, 3)} <span className='text-center text-helper'> * * * * * * *</span></p></div>
                                            </div>
                                            <div onClick={() => handleShow(true)} className='size-10 rounded-full bg-secondary cursor-pointer flex justify-center items-center flex-shrink-0'><ViewIcon /></div>
                                        </>
                                    }
                                </div>
                                <div className='bg-white px-8 w-full my-6'>
                                    <div className='flex justify-between items-center gap-4'>
                                        <button className='bg-helper px-8 py-4 text-white font-bold text-base' onClick={() => OpenChatModal()}>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={16}
                                                height={16}
                                                viewBox="0 0 16 16"
                                                fill="none"
                                            >
                                                <path
                                                    d="M12.25 3.82163V3.3332C12.25 2.02462 11.204 0.95 9.925 0.95H3.275C1.99602 0.95 0.95 2.02462 0.95 3.3332V9.07646V11.2428C0.95 11.9764 1.81796 12.4397 2.40539 12.0191L2.40636 12.0191L2.41964 12.0092L3.87559 10.9231C4.1898 11.8577 5.0588 12.5365 6.075 12.5365H10.4375L13.5804 14.8808L13.5936 14.8907L13.5946 14.8907C14.182 15.3113 15.05 14.848 15.05 14.1144V11.9481V6.20483C15.05 4.89625 14.004 3.82163 12.725 3.82163H12.25ZM3.275 2.12686H9.925C10.5787 2.12686 11.1 2.65963 11.1 3.3332V7.28169C11.1 7.95526 10.5787 8.48803 9.925 8.48803H5.375C5.2531 8.48801 5.13445 8.52763 5.03612 8.60101C5.03612 8.60101 5.03612 8.60101 5.03611 8.60101L2.1 10.7912V9.07646V3.3332C2.1 2.65963 2.62128 2.12686 3.275 2.12686ZM12.25 4.99849H12.725C13.3787 4.99849 13.9 5.53126 13.9 6.20483V11.9481V13.6628L10.9639 11.4726C10.9639 11.4726 10.9639 11.4726 10.9639 11.4726C10.8655 11.3993 10.7469 11.3596 10.625 11.3597H6.075C5.42304 11.3597 4.90281 10.8298 4.90001 10.1588L5.56248 9.66489H9.925C11.204 9.66489 12.25 8.59027 12.25 7.28169V4.99849Z"
                                                    fill="#FDFDFE"
                                                    stroke="#FDFDFE"
                                                    strokeWidth="0.1"
                                                />
                                            </svg>
                                            <span className='ml-4'>Chat</span>
                                        </button>
                                        <button className='bg-helper px-8 py-4 text-white font-bold text-base' onClick={() => OpenEmailModal()}>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={14}
                                                height={11}
                                                viewBox="0 0 14 11"
                                                fill="none"
                                            >
                                                <path
                                                    d="M1.4 0C0.6279 0 0 0.616687 0 1.375V9.625C0 10.3833 0.6279 11 1.4 11H12.6C13.3721 11 14 10.3833 14 9.625V1.375C14 0.616687 13.3721 0 12.6 0H1.4ZM1.4 1.375H12.6V1.37903L7 4.8125L1.4 1.37769V1.375ZM1.4 2.75269L7 6.1875L12.6 2.75403L12.6014 9.625H1.4V2.75269Z"
                                                    fill="#FDFDFE"
                                                />
                                            </svg>
                                            <span className='ml-4'>Email</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className=' ml-10 mt-8 border border-bdr rounded-md bg-white flex justify-center py-4'>
                                <div className="grid grid-cols-3 items-center gap-4 w-fit ">
                                    <div className="rounded-full border size-12  flex justify-center items-center cursor-pointer hover:border-[#537CD9]">
                                        <ViewIcon />
                                    </div>
                                    <div className="rounded-full border size-12  flex justify-center items-center cursor-pointer hover:border-[#537CD9]">
                                        <CompareIcon />
                                    </div>
                                    <div className="rounded-full border size-12   flex justify-center items-center cursor-pointer hover:border-[#537CD9]">
                                        <LikeIcon />
                                    </div>
                                </div>
                            </div>
                            <div className=' ml-10 mt-8 flex justify-center items-center gap-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M9.91804 8.89643e-05C9.23321 0.00563136 8.55081 0.270265 8.03664 0.792843L0.762291 8.18722C-0.266032 9.23236 -0.252158 10.9347 0.792997 11.963L8.18738 19.2374C9.23252 20.2657 10.9349 20.2518 11.9632 19.2067L19.2375 11.8132C19.2379 11.8129 19.2382 11.8126 19.2385 11.8123C20.266 10.7667 20.252 9.06483 19.2068 8.03649L11.8125 0.762137C11.2899 0.247976 10.6029 -0.00545358 9.91804 8.89643e-05ZM9.93013 1.41997C10.2462 1.41742 10.5631 1.53768 10.8104 1.78099L18.2047 9.05535C18.6993 9.54195 18.7052 10.3161 18.2187 10.8111L10.9443 18.2046C10.4577 18.6991 9.68406 18.7052 9.18949 18.2185L1.7951 10.9442C1.30055 10.4576 1.29453 9.68391 1.78115 9.18933L9.0555 1.79495C9.2988 1.54767 9.61405 1.42253 9.93013 1.41997ZM9.98875 4.74917C9.79956 4.75213 9.61926 4.83 9.48739 4.9657C9.35552 5.1014 9.28286 5.28386 9.28532 5.47307V11.1898C9.28398 11.2845 9.30148 11.3785 9.33679 11.4664C9.3721 11.5543 9.42452 11.6343 9.49101 11.7017C9.5575 11.7691 9.63673 11.8227 9.72409 11.8592C9.81146 11.8958 9.90522 11.9146 9.99992 11.9146C10.0946 11.9146 10.1884 11.8958 10.2757 11.8592C10.3631 11.8227 10.4423 11.7691 10.5088 11.7017C10.5753 11.6343 10.6277 11.5543 10.663 11.4664C10.6984 11.3785 10.7159 11.2845 10.7145 11.1898V5.47307C10.7158 5.3775 10.6978 5.28265 10.6618 5.19414C10.6257 5.10563 10.5723 5.02525 10.5046 4.95775C10.4369 4.89026 10.3564 4.83702 10.2678 4.80119C10.1792 4.76537 10.0843 4.74768 9.98875 4.74917ZM9.99992 13.3336C9.74722 13.3336 9.50488 13.434 9.32619 13.6127C9.14751 13.7914 9.04712 14.0337 9.04712 14.2864C9.04712 14.5391 9.14751 14.7814 9.32619 14.9601C9.50488 15.1388 9.74722 15.2392 9.99992 15.2392C10.2526 15.2392 10.495 15.1388 10.6736 14.9601C10.8523 14.7814 10.9527 14.5391 10.9527 14.2864C10.9527 14.0337 10.8523 13.7914 10.6736 13.6127C10.495 13.434 10.2526 13.3336 9.99992 13.3336Z" fill="#ED5E4F"></path></svg>
                                <p className='text-[#ED5E4F]'>Report abuse</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductPage;



const LoadingUi = () => {
    return(
        <div className = "relative bg-[#F8FAFD]" >
            <div className="max-w-[1200px] mx-auto py-14">
                <div className='relative'>
                    <div className='w-full'>
                        <div className='min-h-14 animate-pulse bg-loader rounded-3xl mb-10 w-full'></div>
                        <div className='bg-[#FDFDFE]  p-10 w-full'>
                            <form className='w-full '>
                                <div className='w-full'>
                                    <h3 className='text-3xl text-[#374B5C] font-semibold animate-pulse bg-loader w-1/2 rounded-3xl'></h3>
                                    <div className='mt-8 flex flex-col w-full'>
                                        <div className='min-h-6 animate-pulse bg-loader w-1/2 rounded-3xl m-1'></div>
                                        <div className='min-h-6 animate-pulse bg-loader w-full rounded-3xl m-1'></div>
                                    </div>
                                    <div className='mt-8 flex flex-col max-w-72 w-full'>
                                        <div className='min-h-6 animate-pulse bg-loader w-1/2 rounded-3xl m-1'></div>
                                        <div className='min-h-6 animate-pulse bg-loader w-full rounded-3xl m-1'></div>
                                    </div>
                                    <div className='mt-8 flex flex-col w-full'>
                                        <div className='min-h-20 animate-pulse bg-loader w-full rounded-3xl'></div>
                                    </div>
                                    <div className='mt-8 flex flex-col w-full'>
                                        <div className='min-h-20 animate-pulse bg-loader w-full rounded-3xl'></div>
                                    </div>
                                    <div className='mt-8 flex flex-col w-full'>
                                        <div className='min-h-20 animate-pulse bg-loader w-full rounded-3xl'></div>
                                    </div>
                                    <div className='mt-8 flex justify-end'>
                                        <div>
                                            <div className='post_product_button min-h-14 animate-pulse bg-loader rounded-3xl mb-10'>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}