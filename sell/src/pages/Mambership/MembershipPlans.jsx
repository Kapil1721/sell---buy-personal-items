import { useQuery } from '@tanstack/react-query';
import { GETMEMBERSHIP, GETPLANS } from '../../services/operations/membershipApi';
import ErrorUi from '../../components/ErrorUi';
import { Link } from 'react-router-dom';
import { CheckIcon } from '../../components/Icons';
function MembershipPlans() {
    const { isPending, error, data } = useQuery({
        queryKey: ['getplans'],
        queryFn: async () => await GETPLANS()
    });

    const { isPending: isPendingMembership, error: errorMembership, data: dataMembership } = useQuery({
        queryKey: ['membership'],
        queryFn: async () => await GETMEMBERSHIP()
    });
    

    if (isPending || isPendingMembership) {
        return <LoadingUI />
    }

    if (error) {
        return <ErrorUi />
    }


    const includedFeatures = data?.plans[0]?.features.map((itm) => itm.feature.name) || [
        'Wide audience reach',
        'Verified Users',
        'Buyer-seller chat',
        'Premium Support',
    ]
    console.log('dataMembership', dataMembership);
    return (
        <div className="mx-auto mt-16 rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex">
            <div className="p-8 sm:p-10 lg:flex-auto">
                <h3 className="text-2xl font-bold tracking-tight text-primary">Ready to sell?</h3>
                <p className="mt-6 text-base leading-7 text-gray-600">
                    To sell items online, you just need to register with us, upload product photographs and prices, and just relax.
                </p>
                <div className="mt-10 flex items-center gap-x-4">
                    <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">Benefits of Membership</h4>
                    <div className="h-px flex-auto bg-gray-100" />
                </div>
                <ul
                    role="list"
                    className={"mt-8 gap-4 text-sm leading-6 text-gray-600"}
                >
                    {includedFeatures.map((feature) => (
                        <li key={feature} className="flex gap-x-2 items-center">
                            <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                            <p>{feature}</p>
                        </li>
                    ))}
                </ul>
            </div>
            {dataMembership?.isSubscribed ? (
                <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                    <div className="mx-auto max-w-xs px-8">
                        <p className="text-base font-semibold text-gray-600 text-nowrap">
                            You are already subscribed!
                        </p>
                        <p className="mt-6 flex items-baseline justify-center gap-x-2">
                            <span className="text-5xl font-bold tracking-tight text-primary">
                                {/* {`${data?.plans[0]?.currency}${data?.plans[0]?.price}`} */}
                                🎉
                            </span>
                        </p>
                        <Link
                            to={"/panel/settings"}
                            className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            View My Membership
                        </Link>
                    </div>
                </div>
                
            ) : (
                <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                    <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                        <div className="mx-auto max-w-xs px-8">
                            <p className="text-base font-semibold text-gray-600 text-nowrap">
                                {/* Pricing That Fits */}
                                The membership costs a
                            </p>
                            <p className="text-base font-semibold text-gray-600 text-nowrap">one-time fee of</p>
                            <p className="mt-6 flex items-baseline justify-center gap-x-2">
                                <span className="text-5xl font-bold tracking-tight text-primary">
                                    {/* {`${data?.plans[0]?.currency}${data?.plans[0]?.price}`} */}
                                    ${data?.plans[0]?.offerValue}
                                </span>
                                <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">{`only.`}</span>
                            </p>
                            <Link
                                to={location.pathname + "/purchase?planId=" + data?.plans[0]?.id}
                                className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Become A Member
                            </Link>
                        </div>
                    </div>
                </div>
            )}
            {/* <div className='my-auto'>
                        <p className="text-base font-semibold text-gray-600 text-nowrap">OR</p>
                    </div> */}
            {/* <div className="-mt-2 p-2 lg:mt-0 lg:w-full">
                        <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                            <div className="mx-auto max-w-xs px-8">
                                <p className="text-base font-semibold text-gray-600 text-nowrap">
                                    The cost for membership is only <br />for onetime fee of
                                </p>
                                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                                    <span className="text-5xl font-bold tracking-tight text-primary">
                                        $59
                                    </span>
                                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600"></span>
                                </p>
                                <p className="text-base font-semibold text-gray-600 text-nowrap mt-4">
                                   
                                </p>
                                <div className="mt-10 flex items-center gap-x-4">
                                    <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">Benefits of Membership</h4>
                                    <div className="h-px flex-auto bg-gray-100" />
                                </div>
                                <ul
                                    role="list"
                                    className={"mt-8 gap-4 text-sm leading-6 text-gray-600"}
                                >
                                    {includedFeatures.map((feature) => (
                                        <li key={feature} className="">
                                            <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <a
                                    href="#"
                                    className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Become A Member
                                </a>
                                <p className="mt-6 text-xs leading-5 text-gray-600">
                                    Also, Auto Withdrawal are available for monthly fee payments.
                                </p>
                            </div>
                        </div>
                    </div> */}

        </div>
    )
}

export default MembershipPlans

const LoadingUI = () => {
    return (
        <div className="bg-white py-12 sm:py-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl sm:text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl bg-gray-100 rounded-xl w-full animate-pulse min-h-10"></h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600 bg-gray-100 rounded-xl w-full animate-pulse min-h-10">

                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                    <div className="p-8 sm:p-10 lg:flex-auto">
                        <h3 className="text-2xl font-bold tracking-tight text-primary bg-gray-100 rounded-xl min-w-20 animate-pulse min-h-10"></h3>
                        <p className="mt-6 text-base leading-7 text-gray-600 bg-gray-100 rounded-xl w-full animate-pulse min-h-10">

                        </p>
                        <div className="mt-10 flex items-center gap-x-4">
                            <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600 bg-gray-100 rounded-xl w-full animate-pulse min-h-10"></h4>
                            <div className="h-px flex-auto bg-gray-100" />
                        </div>
                        <ul
                            role="list"
                            className={"mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 min-w-52  sm:gap-6 bg-gray-100 rounded-xl w-full animate-pulse min-h-10"}
                        >
                        </ul>
                    </div>
                    <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                        <div className="rounded-2xl bg-gray-100 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:items-center lg:py-16 animate-pulse">
                            <div className="mx-auto max-w-xs px-8">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
