import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { GET_PRODUCT_CATEGORY } from '../../../services/operations/productsApi';
import ErrorUi from '../../../components/ErrorUi';

const ProductFilter = () => {
    const [URLSearchParams, SetURLSearchParams] = useSearchParams();

    const searchParams = {}
    URLSearchParams?.forEach((value, key, parent) => {
        if (searchParams[key]) {
            searchParams[key] = value
        } else {
            searchParams[key] = value
        }
    });

    const [category, setcategory] = useState(() => searchParams?.category ? searchParams?.category : 'Any');

    // console.log(searchParams);

    const { isPending, error, data: categories } = useQuery({
        queryKey: ['GET_PRODUCT_CATEGORY_LIST'],
        queryFn: async () => {
            // const product = await GET_ALL_PRODUCTS(searchParams);
            const category = await GET_PRODUCT_CATEGORY();
            return category
        }
    });

    if (error) {
        return <ErrorUi error={error.message} />
    }

    const handleChange = (e) => {
        setcategory(e.target.value);
        if (e.target.value !== 'Any') {
            SetURLSearchParams({ ...searchParams, category: e.target.value });
        } else {
            SetURLSearchParams({ ...searchParams });
        }
    }


    if (isPending) {
        return (
            <>
                <div className='relative'>
                    <h3 className='text-base font-medium text-[#374B5C] flex justify-between items-center'><span>Category</span><div className='h-3 w-3 rounded-full bg-[#D5E3EE]'></div></h3>
                    <ul className='mt-4'>
                        <li className='py-2 w-3/4 h-2 animate-pulse'> </li>
                        {
                            [...Array(10)].map((list, i) =>
                                <li className='py-2' key={i}>
                                    <div className='min-h-5 animate-pulse bg-loader w-full rounded-3xl'></div>
                                </li>
                            )
                        }
                    </ul>
                </div>
            </>
        )
    }
    const productCategories = categories?.productCategories
    return (
        <div className='relative '>
            <h3 className='text-base font-medium text-[#374B5C] flex justify-between items-center'><span>Category</span><div className='h-3 w-3 rounded-full bg-[#D5E3EE]'></div></h3>
            <ul className='mt-4'>
                <li className='py-2'>
                    <div className='flex justify-start items-center gap-3'>
                        <input id={'any'} className='size-4' value={"any"} checked={"any" === category} onChange={handleChange} type="radio" />
                        <label className='font-medium text-sm text-[#374B5C]' htmlFor={"any"}>{"Any"}<span></span></label>
                    </div>
                </li>
                {
                    productCategories.map((list, i) =>
                        <li className='py-2' key={i}>
                            <div className='flex justify-start items-center gap-3'>
                                <input id={list.id} className='size-4' value={list.id} checked={list.id === parseInt(category)} onChange={handleChange} type="radio" />
                                <label className='font-medium text-sm text-[#374B5C]' htmlFor={list.id}>{list.name}<span>{list.count}</span></label>
                            </div>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default ProductFilter


