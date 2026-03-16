import { useState } from "react";

export default function RatingComponent({ rating }) {
    const [stars, setStarts] = useState(rating ? rating : 0);

    const ratingData = [
        { label: "Poor", color: "#E74C3C" },
        { label: "Bad", color: "#E59866" },
        { label: "Okay", color: "#F7DC6F" },
        { label: "Good", color: "#76D7C4" },
        { label: "Great", color: "#229954" },
    ];

    const handleRating = (index) => {
        setStarts(index + 1)
    }
    return (
        <div className='flex gap-4 p-2 justify-between items-center'>
            <div className="flex gap-2">
                {Array.from({ length: 5 }).map((_, index) => (
                    <div key={index} className="flex justify-center">
                        {/* <FiStar
                            size={25}
                            strokeWidth={0}
                            fill={index + 1 <= stars ? "gold" : "#D6DBDF"}
                            cursor="pointer"
                            className="star"
                            onClick={() => setStarts(index + 1)}
                        /> */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={30}
                            height={30}
                            viewBox="0 0 30 30"
                            onClick={() => handleRating(index)}
                            // onMouseEnter={
                            //     (e) => {
                            //        let ele =  e.currentTarget;
                            //        ele.style.fill = "#FFB300";
                            //     }
                            // }
                            // onMouseLeave={
                            //     (e) => {
                            //         let ele =  e.currentTarget;
                            //         ele.style.fill = "#d5e3ee";
                            //     }
                            // }
                            fill={index + 1 <= stars ? "gold" : "#d5e3ee"}
                            className={index + 1 <= stars ? "transition ease-in-out duration-500 hover:fill-secondary" : " transition ease-in-out duration-500"}
                        >
                            <path d="M14.9987 22.6139L21.21 26.3626C22.19 26.9539 23.3987 26.0751 23.1387 24.9614L21.49 17.8951L26.9787 13.1401C27.8437 12.3914 27.3812 10.9701 26.2412 10.8739L19.0162 10.2614L16.19 3.59264C15.7437 2.54139 14.2537 2.54139 13.8075 3.59264L10.9812 10.2614L3.75624 10.8739C2.61624 10.9701 2.15374 12.3914 3.01874 13.1401L8.50749 17.8951L6.85874 24.9614C6.59874 26.0751 7.80749 26.9539 8.78749 26.3626L14.9987 22.6139Z" />
                        </svg>
                    </div>
                ))}
            </div>
            {
                stars > 0 ? (
                    <div
                        className="font-semibold min-w-20 p-2"
                        style={{ color: ratingData[stars - 1]?.color }}>
                        {ratingData[stars - 1]?.label}
                    </div>
                ) : (
                    <p className="font-semibold text-gray-400">No ratings yet...</p>
                )
            }

        </div >
    );
}