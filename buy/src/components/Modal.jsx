// Modal.js

import React from 'react';

const Modal = ({ isOpen, title, onClose, onConfirm, isLoading }) => {
    // Conditional rendering of the modal
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
                        <h4 className="py-2 px-4 text-white bg-red-600 rounded-lg w-fit">Warning</h4>
                        <h3 className="text-lg font-bold leading-6 text-primary mt-2" id="modal-title">
                            {title}
                        </h3>
                    </div>
                    <div className="px-4 py-4 sm:px-6">
                        {/* Modal body */}
                        <div className="mb-4">
                            <p className="text-base font-bold text-red-600"></p>
                            <ul className='text-base font-semibold text-red-400 list-disc ml-5'>
                                <li>Your all data will be deleted with this operation.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="px-4 py-3 sm:px-6">
                        {/* Modal footer with buttons */}
                        <div className="text-right">
                            <button
                                type="button"
                                className="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
                                onClick={isLoading ? null : onConfirm}
                                disabled={isLoading}
                            >
                                Confirm
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
