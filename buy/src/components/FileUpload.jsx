import React, { memo, useState } from 'react'
import { CrossIcon, UploadImageIcon, } from './Icons'
import { IMAGEURL } from '../utils/constants';

function FileUpload({ className, onUploadFile, handleRemove, type, files, setFiles, name, id, progress }) {

    const [dragging, setDragging] = useState(false);

    console.log(files, "files");
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
        // Handle uploaded files here

        onUploadFile(files);
        // You can send files to server or process them further
    };

    const handleFileChange = (e) => {
        let files = Array.from(e.target.files);
        console.log(files);
        onUploadFile(files);
    }


    return (
        <div
            className={`relative border border-[#D5E3EE] p-4 rounded ${dragging ? 'bg-blue-50' : ""}`}
            onDragEnter={handleDragEnter}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
        >
            <input className='opacity-0 absolute' type="file" name={name} id={id} multiple onChange={(e) => handleFileChange(e)} />
            {files?.length > 0 && <div className='w-full relative flex justify-start items-center gap-5 mb-5'>
                {files?.map((file, i) =>
                    <div key={i} className='relative  '>
                        <img src={file.liveUrl ? IMAGEURL + file.liveUrl : IMAGEURL + file.url} alt="Preview" className='size-48 rounded border' />
                        <span onClick={(e) => handleRemove(e, i)} className='absolute cursor-pointer top-3 right-3 p-2 size-5 flex justify-center items-center bg-secondary text-base font-medium rounded-full text-white'>X</span>
                        {file.progress > 0 && <progress value={file.progress} max="100" />}
                    </div>
                )}
            </div>}
            <label
                htmlFor={id}
                className={`border border-dashed cursor-pointer relative border-[#D5E3EE] rounded p-2  flex flex-col justify-center items-center gap-5 ${files?.length > 0 ? "" : className ? className : "min-h-56"}`}>
                <UploadImageIcon />
                <p className='text-lg text-primary font-semibold'><span className='text-helper'>Choose {type} </span><span>or drag it here</span></p>
            </label>
        </div>
    )
}

export default memo(FileUpload)