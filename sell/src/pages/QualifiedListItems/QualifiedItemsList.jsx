import React from 'react'
import { Link } from 'react-router-dom'
import Gadgets from "../../assets/Gadgets.png"
import HomeAndGarden from "../../assets/Home-And-Garden.png"
import clothing from "../../assets/Clothing.png"
import kids from "../../assets/Kids.png"
import vehicles from "../../assets/Vehicles.png"
import toys from "../../assets/Toys.png"
import sports from "../../assets/Sports.png"
import CollectiblesArt from "../../assets/Collectibles-Art.png"
import { useQuery } from '@tanstack/react-query'
import { GET_PRODUCT_CATEGORY } from '../../services/operations/productsApi'

const QualifiedItemsList = () => {

    const { isPending, error, data } = useQuery({
        queryKey: ['GET_PRODUCT_CATEGORY',],
        queryFn: async () => await GET_PRODUCT_CATEGORY()
    });


    return (
        <div className='w-full banner lg:h-[90vh] relative flex flex-col justify-center items-center '>
            <div className='absolute top-0 left-0 w-full h-full lg:h-screen bg-[#44525ecf]'></div>
            <div className='flex flex-col justify-center items-center  max-w-7xl md:mt-0 py-10 relative'>
                <h1 className='relative text-xl md:text-3xl lg:text-4xl font-bold text-secondary mb-10 mt-20 sm:mt-0'>Qualified Items List</h1>
                <div className='bg-transparent grid grid-cols-2 p-4 gap-2 md:grid-cols-4 lg:grid-cols-6'>
                    {
                        isPending ? [...Array(12)].map((list, i) =>
                            <div key={i} className='font-semibold py-1 cursor-pointer min-h-24 min-w-36 animate-pulse bg-loader ring-2 ring-primary'></div>) :
                            data.productCategories?.map((list, i) =>
                                <Link key={i} to={'/products?type=sale&category=' + list.id} className='border-2 transition ease-in-out relative hover:bg-btn-primay group border-white rounded-md flex items-center justify-center flex-col text-white py-2 px-4 gap-2'>
                                    <div>
                                        <img className='' height={45} width={45} src={HomeAndGarden} alt='helper' />
                                    </div>
                                    <p className='group-hover:text-black font-normal'>{list.name}</p>
                                </Link>)}
                    {/* <>
                        <div className='border-2 transition ease-in-out relative hover:bg-btn-primay group border-white rounded-md flex items-center justify-center flex-col text-white py-2 px-4 gap-2'>
                            <div>
                                <img className='' height={45} width={45} src={HomeAndGarden} alt='helper' />
                            </div>
                            <Link className='group-hover:text-black' to={''}>Home & Garden</Link>
                        </div>
                        <div className='border-2 transition ease-in-out relative hover:bg-btn-primay group border-white rounded-md flex items-center justify-center flex-col text-white py-2 px-4 gap-2'>
                            <div>
                                <img className='' height={45} width={45} src={Gadgets} alt='helper' />
                            </div>
                            <Link className='group-hover:text-black' to={''}>Electronics & Media</Link>
                        </div>
                        <div className='border-2 transition ease-in-out relative hover:bg-btn-primay group border-white rounded-md flex items-center justify-center flex-col text-white py-2 px-4 gap-2'>
                            <div>
                                <img className='' height={45} width={45} src={clothing} alt='helper' />
                            </div>
                            <Link className='group-hover:text-black' to={''}>Clothing, Shoes & Accessories</Link>
                        </div>
                        <div className='border-2 transition ease-in-out relative hover:bg-btn-primay group border-white rounded-md flex items-center justify-center flex-col text-white py-2 px-4 gap-2'>
                            <div>
                                <img className='' height={45} width={45} src={kids} alt='helper' />
                            </div>
                            <Link className='group-hover:text-black' to={''}>Baby & Kids</Link>
                        </div>
                        <div className='border-2 transition ease-in-out relative hover:bg-btn-primay group border-white rounded-md flex items-center justify-center flex-col text-white py-2 px-4 gap-2'>
                            <div>
                                <img className='' height={45} width={45} src={vehicles} alt='helper' />
                            </div>
                            <Link className='group-hover:text-black' to={''}>Vehicles</Link>
                        </div>
                        <div className='border-2 transition ease-in-out relative hover:bg-btn-primay group border-white rounded-md flex items-center justify-center flex-col text-white py-2 px-4 gap-2'>
                            <div>
                                <img className='' height={45} width={45} src={toys} alt='helper' />
                            </div>
                            <Link className='group-hover:text-black' to={''}>Toys, Games & Hobbies</Link>
                        </div>
                        <div className='border-2 transition ease-in-out relative hover:bg-btn-primay group border-white rounded-md flex items-center justify-center flex-col text-white py-2 px-4 gap-2'>
                            <div>
                                <img className='' height={45} width={45} src={sports} alt='helper' />
                            </div>
                            <Link className='group-hover:text-black' to={''}>Sports & Outdoors</Link>
                        </div>
                        <div className='border-2 transition ease-in-out relative hover:bg-btn-primay group border-white rounded-md flex items-center justify-center flex-col text-white py-2 px-4 gap-2'>
                            <div>
                                <img className='' height={45} width={45} src={CollectiblesArt} alt='helper' />
                            </div>
                            <Link className='group-hover:text-black' to={''}>Collectibles & Art</Link>
                        </div>
                    </>

 */}

                </div>
            </div>
        </div >
    )
}

export default QualifiedItemsList