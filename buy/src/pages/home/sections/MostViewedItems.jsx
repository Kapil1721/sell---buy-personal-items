import { Link } from "react-router-dom"
import { AdminIcon, CompareIcon, LikeIcon } from "../../../components/Icons"
import ProductCard from "../../../components/ProductCard"
import ProductList from "../../products/sections/ProductList"
import { useCallback, useContext, useEffect, useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { ADD_TO_FAVORITE, GET_ALL_PRODUCTS } from "../../../services/operations/productsApi"
import { toast } from "sonner"
import { AuthContext } from "../../../auth/AuthContext"

function MostViewedItems() {
    const { user } = useContext(AuthContext)
    const [products, setProducts] = useState([]);
    const [pendingLike, setPendingLike] = useState(null);

    const searchParams = {
        "type": "sale",
        "category": "any",
        "sort": "views",
        "order": "desc",
        "limit": 6
    };
    const { isPending, error, data } = useQuery({
        queryKey: ['GET_PRODUCTS', searchParams],
        queryFn: async () => {
            const product = await GET_ALL_PRODUCTS(searchParams, null);
            return { products: product.products }
        }
    });

    
    const handleAddToFavorite = async (id) => {
        if (user) {
            const res = await ADD_TO_FAVORITE({
                id
            });
            if (res.status) {
                toast.success(res.message);
            }
        } else {
            toast.error("Please login to add product to favorite");
        }
    }

    
    useEffect(() => {
        setProducts(data?.products)
    }, [data])
    return (
        <div className="w-full relative bg-[#F8FAFD] lg:py-8">
            <div className="mx-auto max-w-[1200px]">
                <div className="flex justify-between items-end gap-4">
                    <div className="">
                        <h1 className="text-4xl font-bold">Most Viewed Items</h1>
                        <h3 className="text-[#828E98]">Discover what customers are viewing most! Browse our trending items<br /> and find something special that fits your style perfectly.</h3>
                    </div>
                    <div className="">
                        <div className='bg-[#F8FAFD] post_product_button relative float-right max-w-60'>
                            <Link to={'/products?type=sale&category=any'} className='bg-[#537CD9] text-white rounded-md flex items-center justify-between w-full gap-4 button'>
                                <span className='text-white text-nowrap px-2 mr-3'>View All</span>
                                <svg
                                    width={8}
                                    height={14}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 8 14"
                                >
                                    <g>
                                        <g>
                                            <path
                                                d="M7.33974,6.18666v0l-5.45414,-5.86846c-0.24639,-0.30357 -0.50858,-0.30357 -0.78587,0l-0.32364,0.35442c-0.24616,0.26968 -0.24616,0.55668 0,0.85987l4.71474,5.05868v0l-4.71474,5.05905c-0.27718,0.30282 -0.27718,0.58982 0,0.8595l0.32364,0.35404c0.27729,0.30395 0.53947,0.30395 0.78587,0l5.45414,-5.86846c0.24696,-0.26892 0.24696,-0.5386 0,-0.80865z"
                                                fill="#ffffff"
                                                fillOpacity={1}
                                            />
                                        </g>
                                    </g>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="w-full mt-20">
                    <ProductList products={products} isPending={isPending} handleFavorite={handleAddToFavorite} />
                </div>
            </div>
        </div>
    )
}

export default MostViewedItems