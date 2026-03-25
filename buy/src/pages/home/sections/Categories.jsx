import { Link } from 'react-router-dom'
import HomeAndGarden from "../../../assets/Home-And-Garden.png"
import { useQuery } from '@tanstack/react-query'
import { GET_PRODUCT_CATEGORY } from '../../../services/operations/productsApi'

const Categories = () => {

    const { isPending, error, data } = useQuery({
        queryKey: ['GET_PRODUCT_CATEGORY',],
        queryFn: async () => await GET_PRODUCT_CATEGORY()
    });

    return (
        <div className='w-full banner relative flex flex-col justify-center items-center '>
            <div className='absolute top-0 left-0 w-full h-full lg:h-screen bg-[#44525ecf]'></div>
            <div className='flex flex-col justify-center items-center  max-w-7xl md:mt-0 py-10 relative'>
                <h1 className='relative text-xl md:text-3xl lg:text-4xl font-bold text-secondary mb-10 mt-20 sm:mt-0'>Qualified Items List</h1>
                <div className='bg-transparent grid grid-cols-2 p-4 gap-2 md:grid-cols-4 lg:grid-cols-6'>
                    {isPending ? [...Array(12)].map((list, i) =>
                        <div key={i} className='font-semibold py-1 cursor-pointer min-h-24 min-w-36 animate-pulse bg-loader ring-2 ring-primary'></div>) :
                    data.productCategories?.map((list, i) =>
                        <Link key={i} to={'/products?type=sale&category=' + list.id} className='border-2 transition ease-in-out relative hover:bg-btn-primay group border-white rounded-md flex items-center justify-center flex-col text-white py-2 px-4 gap-2'>
                            <div>
                                <img className='' height={45} width={45} src={HomeAndGarden} alt='helper' />
                            </div>
                            <p className='group-hover:text-black font-normal'>{list.name}</p>
                        </Link>
                    )}
                </div>
            </div>
        </div >
    )
}

export default Categories