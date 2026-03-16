import React from 'react'
import { Link } from 'react-router-dom'

function Breadcrums({ data }) {
    let breadcrumData = data ? data : []
    return (
        <div className='relative'>
            <ul className='flex relative py-4 rounded gap-4'>
                {
                    breadcrumData.map((item, index) => {
                        return item.link ?
                            <li key={index} className='flex items-center justify-between gap-4'>
                                <Link className='text-base font-medium text-[#904B5C]' to={`${item.link}`}>{item.name}</Link>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={5}
                                    height={7}
                                    viewBox="0 0 5 7"
                                    fill="none"
                                >
                                    <path
                                        d="M2.56744 3.5L0.192673 1.12523C-0.0646296 0.86793 -0.0646296 0.45028 0.192673 0.192977C0.449976 -0.0643258 0.867626 -0.0643258 1.12493 0.192977L3.99255 3.0606C4.23556 3.3036 4.23556 3.69702 3.99255 3.9394L1.12493 6.80702C0.867626 7.06433 0.449976 7.06433 0.192673 6.80702C-0.0646296 6.54972 -0.0646296 6.13207 0.192673 5.87477L2.56744 3.5Z"
                                        fill="#F09965"
                                    />
                                </svg>
                            </li> : <li key={index} className='text-[#B18B8C] text-base font-medium'>{item.name}</li>
                    })
                }

            </ul>
        </div>
    )
}

export default Breadcrums