import React, { memo, useEffect, useRef, useState } from 'react'
import { CrossIcon } from './Icons';
import { GET_PRODUCT_CATEGORY } from '../services/operations/productsApi';
import { useQuery } from '@tanstack/react-query';

const Dropdown = ({ defaultValue, children, setCategory, category, onChange, onClear, required, search, label }) => {

    const dropdownRef = useRef(null)
    // const [sortValue, setSortvalue] = useState('');
    const [filteredList, setFilteredList] = useState([]);

    const { isPending, error, data } = useQuery({
        queryKey: ['GET_PRODUCT_CATEGORY',],
        queryFn: async () => {
            const category = await GET_PRODUCT_CATEGORY();
            setFilteredList(category.productCategories)
            return { categories: category.productCategories }
        }
    });

    const handleChange = (e, value) => {
        setCategory(value)
        onChange(value)
        dropdownRef.current.children[1].style.display = 'none'
    };

    const handleCloseSelect = (e, value) => {
        if (dropdownRef.current) {
            if (dropdownRef?.current.children[1] && !dropdownRef?.current.children[1].contains(event.target)) {
                dropdownRef.current.children[1].style.display = 'none'
            }
        }
    };
    const handleToggle = (e) => {
        e.stopPropagation();
        dropdownRef.current.children[1].style.display = dropdownRef.current.children[1].style.display === 'block' ? 'none' : 'block'
    };

    const handleSearch = (e) => {
        console.log(e.target.value, data.categories);
        const searchValue = e.target.value.toLowerCase();
        const filteredList = data.categories.filter((item) => item.name.toLowerCase().includes(searchValue));
        setFilteredList(filteredList)
    }

    const handleClear = (e) => {
        e.stopPropagation()
        setCategory({ value: '', name: "" });
        onChange('')
        onClear && onClear('')
    }


    useEffect(() => {
        document.addEventListener('click', handleCloseSelect);
        return () => removeEventListener('click', handleCloseSelect)
    }, []);
    return (
        <div ref={dropdownRef} className='relative' >
            <div className='border border-[#D5E3EE] flex justify-between items-center p-4 gap-4 rounded-md' onClick={handleToggle}>
                <div className='min-w-48 text-base font-medium text-[#3F5263] select-none'>{category.value !== '' ? category.name : label}</div>
                {category.value !== '' ? <CrossIcon onClick={handleClear} /> : <div>
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
                </div>}
            </div>
            <div className='hidden dropdownlist w-full border border-[#D5E3EE] px-5 py-3 absolute z-10 bg-white rounded-md shadow-lg '>
                <input type="search" placeholder='Search...' onChange={handleSearch} className=' border border-[#D5E3EE] focus:outline-none w-full rounded py-1 px-2 sticky top-0' />
                <ul className='mt-4 max-h-80 overflow-auto select-none'>
                    {
                        isPending ? [...Array(7)].map((list, i) =>
                            <li key={i} className='text-primary font-semibold py-1 cursor-pointer min-h-2 animate-pulse bg-loader'></li>
                        ) :
                            filteredList?.map((list, i) =>
                                <li key={i} onClick={(e) => handleChange(e, list)} className='text-primary font-semibold py-1 cursor-pointer transition ease-in-out hover:text-secondary'>{list.name}</li>
                            )
                    }
                </ul>
            </div>
        </div>
    )
}

export default memo(Dropdown)




export const DropdownComponent = ({ options, onChange, value }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(() => ({ label: value }));
    const dropdownRef = useRef(null);

    // Function to handle clicks outside the dropdown
    const handleOutsideClick = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    // Effect to add click event listener on mount
    useEffect(() => {
        document.addEventListener('click', handleOutsideClick);

        // Cleanup the event listener on unmount
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);



    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        onChange(option.value);
        setIsOpen(false); // Close the dropdown after selecting an option
    };

    useEffect(() => {
        if (value === '' || value === null) {
            setSelectedOption(null)
        }
    }, [value])
    return (
        <div ref={dropdownRef} className="relative inline-block text-left w-full ">
            {/* Dropdown button */}
            <div className='w-full'>
                <button
                    type="button"
                    className="inline-flex justify-between w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-primary "
                    onClick={toggleDropdown}
                >
                    <span>{selectedOption ? selectedOption.label : 'Select an option'}</span>
                    {/* Dropdown arrow */}
                    <svg
                        className="-mr-1 ml-2 h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10 12a1 1 0 01-.707-.293l-4-4a1 1 0 111.414-1.414L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4A1 1 0 0110 12z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </div>

            {/* Dropdown menu */}
            <div
                className={`origin-top-left z-10 absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
            >
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    {options.map((option) => (
                        <button
                            key={option.value}
                            onClick={() => handleOptionClick(option)}
                            className="block px-4 py-2 text-base font-medium text-primary hover:text-secondary w-full text-left"
                            role="menuitem"
                        >
                            {option.label}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};



export const SelectGroupOne = ({ onChange, value, children }) => {
    const [selectedOption, setSelectedOption] = useState(() => value ? value : "");
    const [isOptionSelected, setIsOptionSelected] = useState(false);

    const changeTextColor = () => {
        setIsOptionSelected(true);
    };

    return (
        <div className="mb-4.5">
            <label className="mb-2.5 block text-black dark:text-white">
                {" "}
                Subject{" "}
            </label>

            <div className="relative z-20 bg-transparent dark:bg-form-input">
                <select
                    value={selectedOption}
                    onChange={(e) => {
                        setSelectedOption(e.target.value);
                        onChange(e, e.target.value)
                        changeTextColor();
                    }}
                    className={`relative z-20 w-full appearance-none rounded border border-stroke bg-transparent px-5 py-3 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary ${isOptionSelected ? "text-black dark:text-white" : ""
                        }`}
                >
                    <option value="" disabled className="text-body dark:text-bodydark">
                        Select your subject
                    </option>
                    <option value="USA" className="text-body dark:text-bodydark">
                        USA
                    </option>
                    <option value="UK" className="text-body dark:text-bodydark">
                        UK
                    </option>
                    <option value="Canada" className="text-body dark:text-bodydark">
                        Canada
                    </option>
                </select>

                <span className="absolute right-4 top-1/2 z-30 -translate-y-1/2">
                    <svg
                        className="fill-current"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g opacity="0.8">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                                fill=""
                            ></path>
                        </g>
                    </svg>
                </span>
            </div>
        </div>
    );
};


export const DropdownList = ({ value, onChange, label }) => {
    const dropdownRef = useRef(null)
    const [sortValue, setSortvalue] = useState(() => ({ value: value, name: "" }));
    const [searchValue, setSearchValue] = useState('');

    const [filteredList, setFilteredList] = useState([]);
    const { isPending, error, data } = useQuery({
        queryKey: ['GET_Category',],
        queryFn: async () => {
            const category = await GET_PRODUCT_CATEGORY();
            setFilteredList(category.productCategories)
            return { categories: category.productCategories }
        }
    });




    const handleChange = (e, value) => {
        console.log(value);
        setSortvalue(value)
        onChange(value)
        handleSearch('')
        dropdownRef.current.children[1].style.display = 'none'
    };

    const handleCloseSelect = (e, value) => {
        if (!dropdownRef.current) {
            return;
        }
        if (dropdownRef?.current.children[1] && !dropdownRef?.current.children[1].contains(event.target)) {
            dropdownRef.current.children[1].style.display = 'none'
        }
    };
    const handleToggle = (e) => {
        e.stopPropagation();
        dropdownRef.current.children[1].style.display = dropdownRef.current.children[1].style.display === 'block' ? 'none' : 'block'
    };

    const handleSearch = (searchValue) => {
        // console.log(e.target.value, lists);
        // const searchValue = e.target.value.toLowerCase();
        setSearchValue(searchValue)
        const filteredList = data.categories.filter((item) => item.name.toLowerCase().includes(searchValue));
        setFilteredList(filteredList)
    }

    const handleClear = () => {
        handleSearch('')
        setSortvalue({ value: "", name: "" })
        // onClear(setSortvalue)
        onChange({ value: "", name: "" })
    }


    useEffect(() => {
        document.addEventListener('click', handleCloseSelect);
        return () => removeEventListener('click', handleCloseSelect)
    }, []);
    return (
        <div ref={dropdownRef} className='relative' >
            <div className='border border-[#D5E3EE] flex justify-between items-center p-3 gap-4 rounded-md' onClick={handleToggle}>
                <input type="text" defaultValue={sortValue.name} className={`w-full focus:outline-none ${sortValue.value === '' ? "hidden" : ""}`} name='category'/>
                <div className={`min-w-48 text-base font-medium text-[#A9C5CB] select-none ${sortValue.value !== '' ? "hidden" : ""}`}>{sortValue.value !== '' ? sortValue.name : label}</div>
                {sortValue.value !== '' ? <CrossIcon onClick={(e) => handleClear(e)} /> : <div>
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
                </div>}
            </div>
            <div className='hidden dropdownlist w-full border border-[#D5E3EE] px-5 py-3 absolute z-10 bg-white rounded-md shadow-lg mt-1'>
                <input type="search" placeholder='Search...' value={searchValue} onChange={(e) => handleSearch(e.target.value.toLowerCase())} className='relative border border-[#D5E3EE] focus:outline-none w-full rounded py-1 px-2' />
                <ul className='mt-4 scroll-smooth max-h-96 select-none'>
                    {
                        isPending ? [...Array(7)].map((list, i) =>
                            <li key={i} className='text-primary font-semibold py-1 cursor-pointer min-h-2 animate-pulse bg-loader'></li>
                        ) :
                            filteredList.map((list, i) =>
                                <li key={i} onClick={(e) => handleChange(e, list)} className='text-primary font-semibold py-1 cursor-pointer transition ease-in-out hover:text-secondary'>{list.name}</li>
                            )
                    }
                </ul>
            </div>
        </div>
    )
}