// Modal.js

import React, { useEffect, useState } from 'react';

const EmailModal = ({ isOpen, title, onClose, onConfirm, isLoading, product, clearForm }) => {
    // Conditional rendering of the modal
    const [message, setMessage] = useState('');

    useEffect(() => {
        setMessage('')
    }, [isOpen])
    if (!isOpen) return null;


    return (
        <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center">
                {/* Background overlay */}
                <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>

                {/* Modal container */}
                <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
                    {/* Modal content */}
                    <div className="px-4 py-5 sm:px-6">
                        {/* <h4 className="py-2 px-4 text-white bg-red-600 rounded-lg w-fit">Warning</h4> */}
                        <h3 className="text-lg font-bold leading-6 text-primary mt-2" id="modal-title">
                            {title}
                        </h3>
                    </div>
                    <div className="px-4 py-4 sm:px-6">
                        {/* Modal body */}
                        <div className="mb-4 flex flex-col gap-4">
                            <div className='flex flex-col gap-2'>
                                <p className="text-sm text-gray-500 line-clamp-1"><span className='font-bold mr-2'>Product Name:</span>{product.name}</p>
                                <p className="text-sm text-gray-500 line-clamp-1"><span className='font-bold mr-2'>Product Category:</span>{product.category.name}</p>
                                <p className="text-sm text-gray-500 line-clamp-1"><span className='font-bold mr-2'>Posted By:</span>{product.user.name}</p>
                            </div>
                            <div>
                                <label className="text-sm text-gray-500"><span className='font-bold mr-2'>Message</span></label>
                                <textarea value={message} onChange={(e) => setMessage(e.target.value)} className='w-full border text-sm lg:text-base border-[#D5E3EE] rounded py-3 min-h-16 px-3 focus:outline-none placeholder:text-light placeholder:text-sm mt-2 font-medium' name="Review" id="review" placeholder='Write your message' />
                            </div>
                        </div>
                    </div>
                    <div className="px-4 py-3 sm:px-6">
                        {/* Modal footer with buttons */}
                        <div className="text-right">
                            <button
                                type="button"
                                className="inline-flex justify-center px-4 py-2 text-sm font-medium text-primary bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 "
                                onClick={onClose}
                            >
                                Cancel
                            </button>
                            <button
                                type="button"
                                className={`inline-flex justify-center px-4 py-2 ml-3 text-sm font-medium rounded-md focus:outline-none ${isLoading
                                    ? 'bg-gray-300 text-gray-700 cursor-not-allowed'
                                    : 'text-white bg-indigo-600 hover:bg-indigo-700'
                                    }`}
                                onClick={isLoading ? null : () => onConfirm(message, product)}
                                disabled={isLoading}
                            >
                                send
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmailModal;
