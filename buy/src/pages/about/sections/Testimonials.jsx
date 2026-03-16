import { Link } from "react-router-dom"
import Clara from '../../../assets/Clara-L.jpg'

function Testimonials() {
    return (
        <div className="flex flex-col mx-10 gap-10 pb-16">
            <div className='grid grid-cols-3 gap-16 py-10 justify-between items-center'>
                <div className="col-span-1">
                    <div className="flex flex-col items-start justify-center gap-5 px-6 ml-[30px]">
                        <p className="px-2 py-1 bg-[#537CD9] text-white text-sm font-medium rounded">What our customers say</p>
                        <h1 className="text-3xl font-bold text-[#374B5C]">Testimonials</h1>
                        <p className="text-[#73818C] leading-8">Let's hear directly from our verified customers.</p>
                        <div className="flex gap-5">
                            <div className="w-14 h-14 rounded-md  bg-[#FDF2D8] flex justify-center items-center">
                                <svg
                                    className="rotate-180"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={12}
                                    height={11}
                                    viewBox="0 0 12 11"
                                    fill="none"
                                >
                                    <path
                                        d="M7.13805 10.4713C7.00772 10.6017 6.83738 10.6667 6.66671 10.6667C6.49605 10.6667 6.32571 10.6017 6.19538 10.4713C5.93504 10.211 5.93504 9.78898 6.19538 9.52865L9.72407 5.99996H0.666672C0.298669 5.99996 0 5.70129 0 5.33329C0 4.96528 0.298669 4.66662 0.666672 4.66662H9.72407L6.19538 1.13792C5.93504 0.877589 5.93504 0.455586 6.19538 0.195251C6.45571 -0.0650838 6.87771 -0.0650838 7.13805 0.195251L11.8047 4.86195C12.0651 5.12229 12.0651 5.54429 11.8047 5.80462L7.13805 10.4713Z"
                                        fill="#374B5C"
                                    />
                                </svg>
                            </div>
                            <div className="w-14 h-14 rounded-md bg-[#FFB300] flex justify-center items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={12}
                                    height={11}
                                    viewBox="0 0 12 11"
                                    fill="none"
                                >
                                    <path
                                        d="M7.13805 10.4713C7.00772 10.6017 6.83738 10.6667 6.66671 10.6667C6.49605 10.6667 6.32571 10.6017 6.19538 10.4713C5.93504 10.211 5.93504 9.78898 6.19538 9.52865L9.72407 5.99996H0.666672C0.298669 5.99996 0 5.70129 0 5.33329C0 4.96528 0.298669 4.66662 0.666672 4.66662H9.72407L6.19538 1.13792C5.93504 0.877589 5.93504 0.455586 6.19538 0.195251C6.45571 -0.0650838 6.87771 -0.0650838 7.13805 0.195251L11.8047 4.86195C12.0651 5.12229 12.0651 5.54429 11.8047 5.80462L7.13805 10.4713Z"
                                        fill="#374B5C"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-2">
                    <div className="cards-container flex justify-between items-center gap-5">
                        <div className="card border border-[#F2F4F8] flex flex-col justify-between items-center">
                            <div className="flex-1">
                                <div className="flex flex-col justify-start items-start p-12 gap-5">
                                    <h3 className="text-2xl font-bold text-[#374B5C]">Worth Every Penny!</h3>
                                    <div className="flex items-center gap-2">
                                        <div className="flex justify-center items-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={18}
                                                height={17}
                                                viewBox="0 0 18 17"
                                                fill="none"
                                            >
                                                <path
                                                    d="M9 14.0758L13.1408 16.575C13.7942 16.9692 14.6 16.3833 14.4267 15.6408L13.3275 10.93L16.9867 7.76001C17.5633 7.26084 17.255 6.31334 16.495 6.24918L11.6783 5.84084L9.79417 1.39501C9.49667 0.694176 8.50334 0.694176 8.20584 1.39501L6.32167 5.84084L1.505 6.24918C0.745002 6.31334 0.436669 7.26084 1.01334 7.76001L4.6725 10.93L3.57334 15.6408C3.4 16.3833 4.20584 16.9692 4.85917 16.575L9 14.0758Z"
                                                    fill="#E9E017"
                                                />
                                            </svg>
                                        </div>
                                        <div className="flex justify-center items-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={18}
                                                height={17}
                                                viewBox="0 0 18 17"
                                                fill="none"
                                            >
                                                <path
                                                    d="M9 14.0758L13.1408 16.575C13.7942 16.9692 14.6 16.3833 14.4267 15.6408L13.3275 10.93L16.9867 7.76001C17.5633 7.26084 17.255 6.31334 16.495 6.24918L11.6783 5.84084L9.79417 1.39501C9.49667 0.694176 8.50334 0.694176 8.20584 1.39501L6.32167 5.84084L1.505 6.24918C0.745002 6.31334 0.436669 7.26084 1.01334 7.76001L4.6725 10.93L3.57334 15.6408C3.4 16.3833 4.20584 16.9692 4.85917 16.575L9 14.0758Z"
                                                    fill="#E9E017"
                                                />
                                            </svg>
                                        </div>
                                        <div className="flex justify-center items-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={18}
                                                height={17}
                                                viewBox="0 0 18 17"
                                                fill="none"
                                            >
                                                <path
                                                    d="M9 14.0758L13.1408 16.575C13.7942 16.9692 14.6 16.3833 14.4267 15.6408L13.3275 10.93L16.9867 7.76001C17.5633 7.26084 17.255 6.31334 16.495 6.24918L11.6783 5.84084L9.79417 1.39501C9.49667 0.694176 8.50334 0.694176 8.20584 1.39501L6.32167 5.84084L1.505 6.24918C0.745002 6.31334 0.436669 7.26084 1.01334 7.76001L4.6725 10.93L3.57334 15.6408C3.4 16.3833 4.20584 16.9692 4.85917 16.575L9 14.0758Z"
                                                    fill="#E9E017"
                                                />
                                            </svg>
                                        </div>
                                        <div className="flex justify-center items-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={18}
                                                height={17}
                                                viewBox="0 0 18 17"
                                                fill="none"
                                            >
                                                <path
                                                    d="M9 14.0758L13.1408 16.575C13.7942 16.9692 14.6 16.3833 14.4267 15.6408L13.3275 10.93L16.9867 7.76001C17.5633 7.26084 17.255 6.31334 16.495 6.24918L11.6783 5.84084L9.79417 1.39501C9.49667 0.694176 8.50334 0.694176 8.20584 1.39501L6.32167 5.84084L1.505 6.24918C0.745002 6.31334 0.436669 7.26084 1.01334 7.76001L4.6725 10.93L3.57334 15.6408C3.4 16.3833 4.20584 16.9692 4.85917 16.575L9 14.0758Z"
                                                    fill="#E9E017"
                                                />
                                            </svg>
                                        </div>
                                        <div className="flex justify-center items-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={18}
                                                height={17}
                                                viewBox="0 0 18 17"
                                                fill="none"
                                            >
                                                <path
                                                    d="M9 14.0758L13.1408 16.575C13.7942 16.9692 14.6 16.3833 14.4267 15.6408L13.3275 10.93L16.9867 7.76001C17.5633 7.26084 17.255 6.31334 16.495 6.24918L11.6783 5.84084L9.79417 1.39501C9.49667 0.694176 8.50334 0.694176 8.20584 1.39501L6.32167 5.84084L1.505 6.24918C0.745002 6.31334 0.436669 7.26084 1.01334 7.76001L4.6725 10.93L3.57334 15.6408C3.4 16.3833 4.20584 16.9692 4.85917 16.575L9 14.0758Z"
                                                    fill="#E9E017"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <p className="text-[#73818C] leading-8">
                                        I recently bought a bag, and I have to say, it's worth every penny!  Everything about this platform screams quality and efficiency. Finding affordable and top quality accessories can be challenging as a student, but DCCCapital Group LLC exceeded my expectations.</p>
                                </div>
                            </div>
                            <div className="relative w-full border-t border-[#F2F4F8]">
                                <div className="absolute -top-9 right-10">
                                    <div className="h-15 w-15 border border-[#F2F4F8] bg-white rounded-full flex justify-center items-center p-5">
                                        <span className=""><svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={20}
                                            height={16}
                                            viewBox="0 0 20 16"
                                            fill="none"
                                        >
                                            <path
                                                d="M13.3333 0C12.1188 0 11.1111 1.00771 11.1111 2.22222V6.66667C11.1111 7.88118 12.1188 8.88889 13.3333 8.88889H16.6775L11.6905 15.5881H14.4618L20 8.1467V5.55773V2.22222C20 1.00771 18.9923 0 17.7778 0H13.3333ZM2.22222 0.0325521C1.00771 0.0325521 0 1.04026 0 2.25477V6.69922C0 7.91373 1.00771 8.92144 2.22222 8.92144H5.56641L0.603299 15.5881H3.3724L8.88889 8.17708V7.81033V5.58811V2.25477C8.88889 1.04026 7.88118 0.0325521 6.66667 0.0325521H2.22222ZM13.3333 2.22222H17.7778V6.66667H13.3333V2.22222ZM2.22222 2.25477H6.66667V5.58811V6.69922H2.22222V2.25477Z"
                                                fill="#374B5C"
                                            />
                                        </svg>
                                        </span>
                                    </div>
                                </div>
                                <div className="px-12 py-4">
                                    <div className="flex justify-start items-center">
                                        <img className="rounded-full mr-5" height={55} width={55} src={Clara} alt="" />
                                        <h3 className="text-xl font-medium text-[#374B5C]">Clara L</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card border border-[#F2F4F8] flex flex-col justify-between items-center">
                            <div className="flex-1">
                                <div className="flex flex-col justify-start items-start p-12 gap-5">
                                    <h3 className="text-2xl font-bold text-[#374B5C]">Worth Every Penny!</h3>
                                    <div className="flex items-center gap-2">
                                        <div className="flex justify-center items-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={18}
                                                height={17}
                                                viewBox="0 0 18 17"
                                                fill="none"
                                            >
                                                <path
                                                    d="M9 14.0758L13.1408 16.575C13.7942 16.9692 14.6 16.3833 14.4267 15.6408L13.3275 10.93L16.9867 7.76001C17.5633 7.26084 17.255 6.31334 16.495 6.24918L11.6783 5.84084L9.79417 1.39501C9.49667 0.694176 8.50334 0.694176 8.20584 1.39501L6.32167 5.84084L1.505 6.24918C0.745002 6.31334 0.436669 7.26084 1.01334 7.76001L4.6725 10.93L3.57334 15.6408C3.4 16.3833 4.20584 16.9692 4.85917 16.575L9 14.0758Z"
                                                    fill="#E9E017"
                                                />
                                            </svg>
                                        </div>
                                        <div className="flex justify-center items-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={18}
                                                height={17}
                                                viewBox="0 0 18 17"
                                                fill="none"
                                            >
                                                <path
                                                    d="M9 14.0758L13.1408 16.575C13.7942 16.9692 14.6 16.3833 14.4267 15.6408L13.3275 10.93L16.9867 7.76001C17.5633 7.26084 17.255 6.31334 16.495 6.24918L11.6783 5.84084L9.79417 1.39501C9.49667 0.694176 8.50334 0.694176 8.20584 1.39501L6.32167 5.84084L1.505 6.24918C0.745002 6.31334 0.436669 7.26084 1.01334 7.76001L4.6725 10.93L3.57334 15.6408C3.4 16.3833 4.20584 16.9692 4.85917 16.575L9 14.0758Z"
                                                    fill="#E9E017"
                                                />
                                            </svg>
                                        </div>
                                        <div className="flex justify-center items-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={18}
                                                height={17}
                                                viewBox="0 0 18 17"
                                                fill="none"
                                            >
                                                <path
                                                    d="M9 14.0758L13.1408 16.575C13.7942 16.9692 14.6 16.3833 14.4267 15.6408L13.3275 10.93L16.9867 7.76001C17.5633 7.26084 17.255 6.31334 16.495 6.24918L11.6783 5.84084L9.79417 1.39501C9.49667 0.694176 8.50334 0.694176 8.20584 1.39501L6.32167 5.84084L1.505 6.24918C0.745002 6.31334 0.436669 7.26084 1.01334 7.76001L4.6725 10.93L3.57334 15.6408C3.4 16.3833 4.20584 16.9692 4.85917 16.575L9 14.0758Z"
                                                    fill="#E9E017"
                                                />
                                            </svg>
                                        </div>
                                        <div className="flex justify-center items-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={18}
                                                height={17}
                                                viewBox="0 0 18 17"
                                                fill="none"
                                            >
                                                <path
                                                    d="M9 14.0758L13.1408 16.575C13.7942 16.9692 14.6 16.3833 14.4267 15.6408L13.3275 10.93L16.9867 7.76001C17.5633 7.26084 17.255 6.31334 16.495 6.24918L11.6783 5.84084L9.79417 1.39501C9.49667 0.694176 8.50334 0.694176 8.20584 1.39501L6.32167 5.84084L1.505 6.24918C0.745002 6.31334 0.436669 7.26084 1.01334 7.76001L4.6725 10.93L3.57334 15.6408C3.4 16.3833 4.20584 16.9692 4.85917 16.575L9 14.0758Z"
                                                    fill="#E9E017"
                                                />
                                            </svg>
                                        </div>
                                        <div className="flex justify-center items-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={18}
                                                height={17}
                                                viewBox="0 0 18 17"
                                                fill="none"
                                            >
                                                <path
                                                    d="M9 14.0758L13.1408 16.575C13.7942 16.9692 14.6 16.3833 14.4267 15.6408L13.3275 10.93L16.9867 7.76001C17.5633 7.26084 17.255 6.31334 16.495 6.24918L11.6783 5.84084L9.79417 1.39501C9.49667 0.694176 8.50334 0.694176 8.20584 1.39501L6.32167 5.84084L1.505 6.24918C0.745002 6.31334 0.436669 7.26084 1.01334 7.76001L4.6725 10.93L3.57334 15.6408C3.4 16.3833 4.20584 16.9692 4.85917 16.575L9 14.0758Z"
                                                    fill="#E9E017"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <p className="text-[#73818C] leading-8">
                                        I recently bought a bag, and I have to say, it's worth every penny!  Everything about this platform screams quality and efficiency. Finding affordable and top quality accessories can be challenging as a student, but DCCCapital Group LLC exceeded my expectations.</p>
                                </div>
                            </div>
                            <div className="relative w-full border-t border-[#F2F4F8]">
                                <div className="absolute -top-9 right-10">
                                    <div className="h-15 w-15 border border-[#F2F4F8] bg-white rounded-full flex justify-center items-center p-5">
                                        <span className=""><svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={20}
                                            height={16}
                                            viewBox="0 0 20 16"
                                            fill="none"
                                        >
                                            <path
                                                d="M13.3333 0C12.1188 0 11.1111 1.00771 11.1111 2.22222V6.66667C11.1111 7.88118 12.1188 8.88889 13.3333 8.88889H16.6775L11.6905 15.5881H14.4618L20 8.1467V5.55773V2.22222C20 1.00771 18.9923 0 17.7778 0H13.3333ZM2.22222 0.0325521C1.00771 0.0325521 0 1.04026 0 2.25477V6.69922C0 7.91373 1.00771 8.92144 2.22222 8.92144H5.56641L0.603299 15.5881H3.3724L8.88889 8.17708V7.81033V5.58811V2.25477C8.88889 1.04026 7.88118 0.0325521 6.66667 0.0325521H2.22222ZM13.3333 2.22222H17.7778V6.66667H13.3333V2.22222ZM2.22222 2.25477H6.66667V5.58811V6.69922H2.22222V2.25477Z"
                                                fill="#374B5C"
                                            />
                                        </svg>
                                        </span>
                                    </div>
                                </div>
                                <div className="px-12 py-4">
                                    <div className="flex justify-start items-center">
                                        <img className="rounded-full mr-5" height={55} width={55} src={Clara} alt="" />
                                        <h3 className="text-xl font-medium text-[#374B5C]">Clara L</h3>
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

export default Testimonials