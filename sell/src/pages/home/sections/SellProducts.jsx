import { Link } from "react-router-dom"
import { AdminIcon, CompareIcon, LikeIcon } from "../../../components/Icons"
import ProductCard from "../../../components/ProductCard"

function SellProducts() {
    return (
        <div className="w-full relative bg-[#F8FAFD] lg:py-8">
            <div className="mx-auto max-w-[1200px]">
                <div className="">
                    <h1 className="text-4xl font-bold text-center">Sell Your Products</h1>
                    <h3 className="text-center text-[#828E98]">Join our 90-day membership</h3>
                </div>
                <div className="w-full mb-10">
                    <div className='bg-[#F8FAFD] post_product_button relative float-right max-w-60'>
                        <Link to={'/ads'} className='bg-[#537CD9] text-white rounded-md flex items-center justify-between w-full gap-4 button'>
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
                <div className="w-full sm:grid sm:grid-cols-3 gap-6 mt-20">
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                </div>
            </div>
        </div>
    )
}

export default SellProducts