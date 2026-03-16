import { useState } from "react";
import { UploadImageIcon } from "../../../../components/Icons";
import { UPDATE_PROFILE_IMAGE_DETAILS } from "../../../../services/operations/adminApi";
import { toast } from "sonner";

export const ProfileImage = ({ defaultData }) => {
    const [dragging, setDragging] = useState(false);
    const [files, setFiles] = useState(() => defaultData);

    // console.log(files, "files");
    const handleDragEnter = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragging(true);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragging(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragging(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragging(false);

        const files = [...e.dataTransfer.files];
        handleFiles(files);
    };

    const handleFiles = (files) => {
        const file = files[0];
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            setFiles(reader.result)
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
        let ele = document.getElementById('profile');
        ele.value = '';
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            setFiles(reader.result)
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
        let ele = document.getElementById('profile');
        ele.value = '';
    }

    // console.log(files);

    const handleSaveChanges = async () => {
        console.log(files, "files");
        const res = await UPDATE_PROFILE_IMAGE_DETAILS({ image: files });
        if (res.status) {
            toast.success(res.message)
        }
    }

    return (
        <>
            <div
                className={`relative border flex justify-start gap-5 border-[#D5E3EE] p-4 mt-4 lg:mx-6 rounded ${dragging ? 'bg-blue-50' : ""}`}
                onDragEnter={handleDragEnter}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
            >
                <input className='opacity-0 absolute' type="file" id={'profile'} onChange={(e) => handleFileChange(e)} />
                <label
                    htmlFor={'profile'}
                    className={`border w-1/2 border-dashed cursor-pointer relative border-[#D5E3EE] rounded p-2  flex flex-col justify-center items-center gap-5 }`}>
                    <UploadImageIcon />
                    <p className='text-sm lg:text-lg text-primary font-semibold'><span className='text-helper'>Choose Profile Photo </span><span>or drag it here</span></p>
                </label>
                {files && <div className='relative flex justify-center items-center gap-5 mb-5'>
                    <div className=' overflow-hidden rounded-full'>
                        <img src={files} alt="Preview" className='size-32 rounded border object-cover' />
                        <span onClick={(e) => setFiles(null)} className='absolute z-10 cursor-pointer top-0 right-0 p-2 size-5 flex justify-center items-center bg-secondary text-base font-medium rounded-full text-white'>X</span>
                        {/* {file.progress > 0 && <progress value={file.progress} max="100" />} */}
                    </div>

                </div>}
            </div>
            <div className='mt-8 flex justify-center lg:justify-end items-end px-6'>
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
        </>
    )
};