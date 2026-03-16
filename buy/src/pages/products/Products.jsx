import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react'
import Breadcrums from './sections/Breadcrums'
import SearchSection from './sections/SearchSection'
import ProductList from './sections/ProductList'
import ProductFilter from './sections/ProductFilter'
import ProductListHeader from './sections/ProductListHeader'
import { GET_ALL_PRODUCTS, GET_PRODUCT_CATEGORY, POST_LIKE } from '../../services/operations/productsApi'
import { useQuery } from '@tanstack/react-query'
import ErrorUi from '../../components/ErrorUi'
import { useSearchParams } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContext'
import { useDebounce } from '../../hooks/Hooks'

function Products() {

    const { user } = useContext(AuthContext)
    const [URLSearchParams] = useSearchParams();
    const [products, setProducts] = useState([])

    const [pendingLike, setPendingLike] = useState(null);
    const [show, setShow] = useState(false);



    const searchParams = useMemo(() => {
        const params = {};
        URLSearchParams.forEach((value, key) => {
            params[key] = value;
        });
        return params;
    }, [URLSearchParams]);


    const { isPending, error, data } = useQuery({
        queryKey: ['GET_PRODUCTS', searchParams],
        queryFn: async () => {
            const product = await GET_ALL_PRODUCTS(searchParams, user ? user.id : null);
            return { products: product.products }
        }
    });

    const debouncedPendingLike = useDebounce(pendingLike, 500);

    useEffect(() => {
        if (debouncedPendingLike) {
            const handleDebouncedLike = async () => {
                const { id, likeStatus } = debouncedPendingLike;
                const res = await POST_LIKE({ id, like: likeStatus });
                if (!res) {
                    setProducts(products.map((itm) =>
                        itm.post_id === id ? {
                            ...itm,
                            likeStatus: false,
                            _count: { ...itm._count, likes: (itm._count.likes - 1) },
                        } : { ...itm }
                    ));
                }
            };
            handleDebouncedLike();
        }
    }, [debouncedPendingLike, setProducts, products, POST_LIKE]);


    const handleLike = useCallback((id) => {
        setProducts(products.map((itm) =>
            itm.post_id === id ? {
                ...itm,
                likeStatus: !itm.likeStatus,
                _count: { ...itm._count, likes: !itm?.likeStatus ? (itm._count.likes + 1) : (itm._count.likes - 1) },
            } : { ...itm }
        ));

        const _products = products.find((itm) => itm.post_id === id);
        setPendingLike({ id, likeStatus: !_products.likeStatus });
    }, [products]);

    useEffect(() => {
        setProducts(data?.products)
    }, [data])

    if (error) {
        return <ErrorUi error={error.message} />
    }

    // const products = data?.products;




    return (
        <div className="bg-white w-full relative">
            <div className="bg-[#F8FAFD]  relative">
                <div className="max-w-[1200px] mx-auto px-8">
                    <Breadcrums />
                </div>
            </div>
            {/* <div className="bg-[#D5E3EE]  relative">
                <div className="max-w-[1200px] mx-auto px-8">
                    {isPending ? <div className='min-h-10 animate-pulse bg-loader w-full rounded-3xl'></div> : <SearchSection />}
                </div>
            </div> */}
            <div className="bg-[#F8FAFD] relative">
                <div className="max-w-[1200px] mx-auto px-8">
                    <div className='py-14'>
                        <div className='grid grid-cols-4 gap-x-10'>
                            <div className='col-span-1 hidden lg:block'>
                                <div className='relative bg-white border border-[#F2F4F8] p-6'>
                                    <ProductFilter />
                                </div>
                            </div>
                            <div className='col-span-4 lg:col-span-3'>
                                <div className='flex flex-col justify-start'>
                                    <div className='relative w-full'>
                                        <div className='lg:hidden w-full absolute  sm:right-0 -top-16 sm:-top-0'>
                                            <button className='bg-helper absolute sm:right-0  text-white  top-0 z-20' onClick={()=>setShow(!show)}>Category</button>
                                            <div className={show?'absolute top-14 right-0 w-full sm:w-1/2 z-20 bg-white border border-[#F2F4F8] p-6 max-h-64 overflow-y-auto':"hidden"}>
                                                <ProductFilter />
                                            </div>
                                        </div>
                                        <ProductListHeader count={products?.length} category={products?.category} isPending={isPending} />
                                    </div>
                                    <div className='my-4'>
                                        <div>
                                            <ProductList products={products} isPending={isPending} handleLike={handleLike} />
                                        </div>
                                    </div>
                                    <div>
                                        {isPending ? <div className='min-h-5 animate-pulse bg-loader w-full rounded-3xl'></div> : products?.length > 0 && <p className='text-[#73819E]'>Showing <span className='text-[#374B5C] font-semibold'>1</span> to <span className='text-[#374B5C] font-semibold'>{products?.length}</span> of <span className='text-[#374B5C] font-semibold'>{products?.length}</span> results</p>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products


const productsLoadingUI = ({ isPending }) => {
    return (
        <>
            <div className="bg-[#D5E3EE]  relative">
                <div className="max-w-[1200px] mx-auto px-8">
                    <SearchSection isPending={isPending} />
                </div>
            </div>
            <div className="bg-[#F8FAFD] relative">
                <div className="max-w-[1200px] mx-auto px-8">
                    <div className='py-14'>
                        <div className='grid grid-cols-4 gap-x-10'>
                            <div className='col-span-1'>
                                <div className='relative bg-white border border-[#F2F4F8] p-6'>
                                    <ProductFilter isPending={isPending} />
                                </div>
                            </div>
                            <div className='col-span-3'>
                                <div className='flex flex-col justify-start '>
                                    <div>
                                        <ProductListHeader isPending={isPending} />
                                    </div>
                                    <div className='my-4'>
                                        <div>
                                            <ProductList isPending={isPending} />
                                        </div>
                                    </div>
                                    <div>
                                        <p className='text-[#73819E] w-1/2 h-3 animate-pulse'></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}