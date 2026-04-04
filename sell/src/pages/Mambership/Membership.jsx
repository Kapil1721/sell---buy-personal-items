import React from 'react'
import { CheckIcon } from '../../components/Icons'
import { useQuery } from '@tanstack/react-query';
import { GETPLANS } from '../../services/operations/membershipApi';
import ErrorUi from '../../components/ErrorUi';
import { Link, Outlet } from 'react-router-dom';



function Membership() {
 
    return (
        <div className="bg-white py-12 sm:py-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl sm:text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">Become a member & Enjoy The Benefits</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Joining the platform means joining a strong community of sellers. Apply for our lifetime membership plan to sell more products and generate more revenue.
                    </p>
                </div>
                {<Outlet/>}
            </div>
        </div>
    )
}

export default Membership


// The cost for membership is only $47/Month for only (3 months) or for onetime fee of $59
//  which is a 69% discount!. Also, Auto Withdrawal are available for monthly fee payments"


// const includedFeatures = [
//     'Private forum access',
//     'Member resources',
//     'Entry to annual conference',
//     'Official member t-shirt',
// ]

// export function Example() {
//     return (
//         <div className="bg-white py-24 sm:py-32">
//             <div className="mx-auto max-w-7xl px-6 lg:px-8">
//                 <div className="mx-auto max-w-2xl sm:text-center">
//                     <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">Simple no-tricks pricing</h2>
//                     <p className="mt-6 text-lg leading-8 text-gray-600">
//                         Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et quasi iusto modi velit ut non voluptas
//                         in. Explicabo id ut laborum.
//                     </p>
//                 </div>
//                 <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
//                     <div className="p-8 sm:p-10 lg:flex-auto">
//                         <h3 className="text-2xl font-bold tracking-tight text-primary">Lifetime membership</h3>
//                         <p className="mt-6 text-base leading-7 text-gray-600">
//                             Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis perferendis blanditiis
//                             repellendus etur quidem assumenda.
//                         </p>
//                         <div className="mt-10 flex items-center gap-x-4">
//                             <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">What’s included</h4>
//                             <div className="h-px flex-auto bg-gray-100" />
//                         </div>
//                         <ul
//                             role="list"
//                             className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
//                         >
//                             {includedFeatures.map((feature) => (
//                                 <li key={feature} className="flex gap-x-3">
//                                     <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
//                                     {feature}
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                     <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
//                         <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
//                             <div className="mx-auto max-w-xs px-8">
//                                 <p className="text-base font-semibold text-gray-600">Pay once, own it forever</p>
//                                 <p className="mt-6 flex items-baseline justify-center gap-x-2">
//                                     <span className="text-5xl font-bold tracking-tight text-primary">$349</span>
//                                     <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">USD</span>
//                                 </p>
//                                 <a
//                                     href="#"
//                                     className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//                                 >
//                                     Get access
//                                 </a>
//                                 <p className="mt-6 text-xs leading-5 text-gray-600">
//                                     Invoices and receipts available for easy company reimbursement
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }




//<div className="bg-white py-12 sm:py-16">
//    <div className="mx-auto max-w-7xl px-6 lg:px-8">
//        <div className="mx-auto max-w-2xl sm:text-center">
//            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">Become a member & Enjoy The Benefits</h2>
//            <p className="mt-6 text-lg leading-8 text-gray-600">
//                Joining the platform means joining a strong community of sellers. Apply for our 90-day membership plan to sell more products and generate more revenue.
//            </p>
//        </div>
//        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
//            <div className="p-8 sm:p-10 lg:flex-auto">
//                <h3 className="text-2xl font-bold tracking-tight text-primary">Ready to sell?</h3>
//                <p className="mt-6 text-base leading-7 text-gray-600">
//                    To sell items online, you just need to register with us, upload product photographs and prices, and just relax.
//                </p>
//                <div className="mt-10 flex items-center gap-x-4">
//                    <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">Benefits of Membership</h4>
//                    <div className="h-px flex-auto bg-gray-100" />
//                </div>
//                <ul
//                    role="list"
//                    className={"mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"}
//                >
//                    {includedFeatures.map((feature) => (
//                        <li key={feature} className="flex gap-x-3">
//                            <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
//                            {feature}
//                        </li>
//                    ))}
//                </ul>
//            </div>
//            <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
//                <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
//                    <div className="mx-auto max-w-xs px-8">
//                        <p className="text-base font-semibold text-gray-600 text-nowrap">
//                            {/* Pricing That Fits */}
//                            The cost for membership is only
//                        </p>
//                        <p className="mt-6 flex items-baseline justify-center gap-x-2">
//                            <span className="text-5xl font-bold tracking-tight text-primary">
//                                {/* {`${data?.plans[0]?.currency}${data?.plans[0]?.price}`} */}
//                                $47
//                            </span>
//                            <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">{`per Month`}</span>
//                        </p>
//                        <p className="text-base font-semibold text-gray-600 text-nowrap mt-4">
//                            {/* Pricing That Fits */}
//                            for only (3 months)
//                        </p>
//
//                        <a
//                            href="#"
//                            className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//                        >
//                            Become A Member
//                        </a>
//                        <p className="mt-6 text-xs leading-5 text-gray-600">
//                            {/* Membership fees are only for {data?.plans[0]?.duration} days. */}
//                            Also, Auto Withdrawal are available for monthly fee payments.
//                        </p>
//                    </div>
//                </div>
//            </div>
//        </div>
//    </div>
//</div>