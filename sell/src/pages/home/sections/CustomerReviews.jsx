import { Link } from "react-router-dom"
import ProductCard from "../../../components/ProductCard"
import ReviewCard from "../../../components/ReviewCard"
import backpattern from '../../../assets/backpattern.png'

function CustomerReviews() {
    return (
        <div className="relative bg-[#F0F4FA] mt-4">
            <div className="mx-auto lg:max-w-[1200px] pt-20">
                <div className="px-4">
                    <h1 className="text-2xl lg:text-4xl font-bold text-center">Customer’s Reviews</h1>
                    <h3 className="text-sm md:text-base text-center text-[#828E98]">Our Customers’ reviews: our inspiration. Share yours now!</h3>
                </div>
                <div className="w-full grid md:grid-cols-3 gap-6 mt-5 px-8">
                    <ReviewCard />
                    <ReviewCard />
                    <ReviewCard />
                </div>
            </div>
            <div className="w-full rotate-180 -z-0 bg-[#F0F4FA]">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1000 100"
                    preserveAspectRatio="none"
                >
                    <path
                        className="elementor-shape-fill"
                        opacity="0.33"
                        fill="#F0F4FA"
                        d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"
                    />
                    <path
                        className="elementor-shape-fill"
                        opacity="0.66"
                        fill="#F5F8FC"
                        d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"
                    />
                    <path
                        className="elementor-shape-fill"
                        fill="#FAFBFD"
                        d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"
                    />
                </svg>
               {/* <img className="w-full" src={backpattern} alt=""/> */}
            </div>
        </div>
    )
}

export default CustomerReviews