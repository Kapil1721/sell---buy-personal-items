import React, { useEffect, useRef, useState } from 'react'

function ProductListHeader({ isPending, count }) {

    const dropdownRef = useRef(null)
    const [sortValue, setSortvalue] = useState('Most Relevant')

    const handleChange = (value) => {
        setSortvalue(value)
    };
    const handleCloseSortSelect = () => {
        if (!dropdownRef.current) {
            return
        }
        // handle close sort select
        if (dropdownRef?.current.children[1] && !dropdownRef?.current.contains(event.target)) {
            // console.log(dropdownRef.current)
            dropdownRef.current.children[1].style.display = 'none'
        }
    };
    const handleToggle = () => {
        dropdownRef.current.children[1].style.display = dropdownRef.current.children[1].style.display === 'block' ? 'none' : 'block'
    };



    useEffect(() => {
        document.addEventListener('click', handleCloseSortSelect);
        return () => removeEventListener('click', handleCloseSortSelect)
    });

    // if (isPending) {
    //     return <div className='min-h-10 animate-pulse bg-loader w-full rounded-3xl'></div>
    // }

    return (
        <div className='flex flex-col-reverse lg:flex-row justify-between items-start lg:items-center'>
            {isPending ? <div className='min-h-10 animate-pulse bg-loader  rounded-3xl'></div> : <div className='flex gap-2 items-end justify-start text-start mt-4 lg:mt-0'>
                <h2 className='text-[#374B5C] text-xl md:text-2xl font-semibold'>{count} Results</h2>
                <h3 className='text-[#FFB300]'>Classified Products</h3>
            </div>}
            <div className=' flex items-center justify-between gap-4'>
                <div className=''>
                    <div className='flex items-center justify-between gap-4'>
                        <div className='text-[#000018] font-medium'>Sort By:</div>
                        <div ref={dropdownRef} className='relative' onClick={handleToggle}>
                            <div className='border border-[#D5E3EE] flex justify-between items-center p-2 md:p-3 lg:p-5 gap-4 rounded-md' >
                                <div className='min-w-48 text-base font-medium text-[#3F5263]'>{sortValue}</div>
                                <div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={7}
                                        height={5}
                                        viewBox="0 0 7 5"
                                        fill="none"
                                    >
                                        <path
                                            d="M3.5 2.56768L5.87477 0.192917C6.13207 -0.0643854 6.54972 -0.0643854 6.80702 0.192917C7.06433 0.45022 7.06433 0.86787 6.80702 1.12517L3.9394 3.99279C3.6964 4.2358 3.30298 4.2358 3.0606 3.99279L0.192977 1.12517C-0.0643257 0.86787 -0.0643257 0.45022 0.192977 0.192917C0.45028 -0.0643854 0.86793 -0.0643854 1.12523 0.192917L3.5 2.56768Z"
                                            fill="#2A3946"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div className='hidden dropdownlist w-full border border-[#D5E3EE] px-5 py-3 absolute z-10 bg-white rounded-md'>
                                <ul>
                                    <li className={`lg:min-w-48 text-base font-medium ${sortValue === 'Most Relevant' ? 'text-[#537CD9]' : 'text-[#3F5263] hover:text-[#FFB300]'} py-1 transition ease-in-out`} onClick={() => handleChange('Most Relevant')}>Most Relevant</li>
                                    <li className={`lg:min-w-48 text-base font-medium ${sortValue === 'Date Listed: Newest' ? 'text-[#537CD9]' : 'text-[#3F5263] hover:text-[#FFB300]'} py-1 transition ease-in-out`} onClick={() => handleChange('Date Listed: Newest')}>Date Listed: Newest</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='hidden '>
                    <div className='bg-[#537CD9] p-4 lg:p-6 rounded-md'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                        >
                            <path
                                d="M2.60078 0.800049C1.61378 0.800049 0.800781 1.61305 0.800781 2.60005V5.80005C0.800781 6.78705 1.61378 7.60005 2.60078 7.60005H5.80078C6.78778 7.60005 7.60078 6.78705 7.60078 5.80005V2.60005C7.60078 1.61305 6.78778 0.800049 5.80078 0.800049H2.60078ZM10.2008 0.800049C9.21378 0.800049 8.40078 1.61305 8.40078 2.60005V5.80005C8.40078 6.78705 9.21378 7.60005 10.2008 7.60005H13.4008C14.3878 7.60005 15.2008 6.78705 15.2008 5.80005V2.60005C15.2008 1.61305 14.3878 0.800049 13.4008 0.800049H10.2008ZM2.60078 2.00005H5.80078C6.13938 2.00005 6.40078 2.26145 6.40078 2.60005V5.80005C6.40078 6.13865 6.13938 6.40005 5.80078 6.40005H2.60078C2.26218 6.40005 2.00078 6.13865 2.00078 5.80005V2.60005C2.00078 2.26145 2.26218 2.00005 2.60078 2.00005ZM10.2008 2.00005H13.4008C13.7394 2.00005 14.0008 2.26145 14.0008 2.60005V5.80005C14.0008 6.13865 13.7394 6.40005 13.4008 6.40005H10.2008C9.86218 6.40005 9.60078 6.13865 9.60078 5.80005V2.60005C9.60078 2.26145 9.86218 2.00005 10.2008 2.00005ZM2.60078 8.40005C1.61378 8.40005 0.800781 9.21305 0.800781 10.2V13.4C0.800781 14.387 1.61378 15.2 2.60078 15.2H5.80078C6.78778 15.2 7.60078 14.387 7.60078 13.4V10.2C7.60078 9.21305 6.78778 8.40005 5.80078 8.40005H2.60078ZM10.2008 8.40005C9.21378 8.40005 8.40078 9.21305 8.40078 10.2V13.4C8.40078 14.387 9.21378 15.2 10.2008 15.2H13.4008C14.3878 15.2 15.2008 14.387 15.2008 13.4V10.2C15.2008 9.21305 14.3878 8.40005 13.4008 8.40005H10.2008ZM2.60078 9.60005H5.80078C6.13938 9.60005 6.40078 9.86145 6.40078 10.2V13.4C6.40078 13.7386 6.13938 14 5.80078 14H2.60078C2.26218 14 2.00078 13.7386 2.00078 13.4V10.2C2.00078 9.86145 2.26218 9.60005 2.60078 9.60005ZM10.2008 9.60005H13.4008C13.7394 9.60005 14.0008 9.86145 14.0008 10.2V13.4C14.0008 13.7386 13.7394 14 13.4008 14H10.2008C9.86218 14 9.60078 13.7386 9.60078 13.4V10.2C9.60078 9.86145 9.86218 9.60005 10.2008 9.60005Z"
                                fill="#FDFDFE"
                            />
                        </svg>

                    </div>
                </div>
                <div className='hidden'>
                    <div className='border border-[#D5E3EE] p-4 lg:p-6  rounded-md group transition ease-in-out hover:border-[#537CD9]'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                        > transition ease-in-out
                            <path
                                className='group-hover:fill-[#537CD9] transition ease-in-out'
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M13.5988 2.00005H2.39883C2.17791 2.00005 1.99883 2.17913 1.99883 2.40005V2.80005C1.99883 3.02096 2.17791 3.20005 2.39883 3.20005H13.5988C13.8197 3.20005 13.9988 3.02096 13.9988 2.80005V2.40005C13.9988 2.17913 13.8197 2.00005 13.5988 2.00005ZM2.39883 0.800049C1.51517 0.800049 0.798828 1.51639 0.798828 2.40005V2.80005C0.798828 3.6837 1.51517 4.40005 2.39883 4.40005H13.5988C14.4825 4.40005 15.1988 3.6837 15.1988 2.80005V2.40005C15.1988 1.51639 14.4825 0.800049 13.5988 0.800049H2.39883Z"
                                fill="#2A3946"
                            />{" "}
                            <path
                                className='group-hover:fill-[#537CD9] transition ease-in-out'
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M13.5988 12.8001H2.39883C2.17791 12.8001 1.99883 12.9792 1.99883 13.2001V13.6001C1.99883 13.821 2.17791 14.0001 2.39883 14.0001H13.5988C13.8197 14.0001 13.9988 13.821 13.9988 13.6001V13.2001C13.9988 12.9792 13.8197 12.8001 13.5988 12.8001ZM2.39883 11.6001C1.51517 11.6001 0.798828 12.3164 0.798828 13.2001V13.6001C0.798828 14.4838 1.51517 15.2001 2.39883 15.2001H13.5988C14.4825 15.2001 15.1988 14.4838 15.1988 13.6001V13.2001C15.1988 12.3164 14.4825 11.6001 13.5988 11.6001H2.39883Z"
                                fill="#2A3946"
                            />{" "}
                            <path
                                className='group-hover:fill-[#537CD9] transition ease-in-out'
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M13.5988 7.2H2.39883C2.17791 7.2 1.99883 7.37909 1.99883 7.6V8C1.99883 8.22091 2.17791 8.4 2.39883 8.4H13.5988C13.8197 8.4 13.9988 8.22091 13.9988 8V7.6C13.9988 7.37909 13.8197 7.2 13.5988 7.2ZM2.39883 6C1.51517 6 0.798828 6.71634 0.798828 7.6V8C0.798828 8.88366 1.51517 9.6 2.39883 9.6H13.5988C14.4825 9.6 15.1988 8.88366 15.1988 8V7.6C15.1988 6.71634 14.4825 6 13.5988 6H2.39883Z"
                                fill="#2A3946"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductListHeader