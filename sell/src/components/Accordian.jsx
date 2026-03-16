import React, { useState } from 'react';




const Accordion = ({ items }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleItem = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="relative">
            {items?.map((item, index) => (
                <div key={index} className='border border-bdr mb-8 transition ease-in-out duration-300 rounded-md shadow-sm hover:shadow-md bg-white relative'>
                    <button
                        className="flex justify-between w-full py-8 lg:px-12 text-left lg:text-2xl font-bold tracking-tight text-primary relative"
                        onClick={() => toggleItem(index)}
                    >
                        <span>{item.title}</span>
                        <svg
                            className={`w-6 h-6 border border-bdr rounded-full pt-0.5 transition ease-linear duration-500 ${openIndex === index ? 'transform -rotate-180' : ''}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                    <div className="border-t border-bdr relative">
                        <div className={`transition-opacity ease-linear duration-500  ${openIndex === index ? ' max-h-full  opacity-1' : 'opacity-0 max-h-0 '}`}>
                            <div className='relative flex flex-col p-4'>
                                {item.content}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Accordion;
