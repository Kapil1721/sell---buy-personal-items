import { useState } from "react";
import { toast } from "sonner";
import { UPDATE_SOCIALMEDIA_DETAILS } from "../../../../services/operations/adminApi";

export const SocialMediaForm = ({ socialMediaLinks }) => {

    const [links, setLinks] = useState(() => socialMediaLinks)


    const handleChange = (e, i) => {
        const { name, value } = e.target
        setLinks(prev => {
            const newLinks = [...prev]
            newLinks[i]['link'] = value
            return newLinks
        })
    };

console.log(links);

    const handleSaveChanges = async (e) => {
        e.preventDefault();
        let data = { socialMedia: links.map((itm) => ({ label: itm.label, link: itm.link })) }
        let res = await UPDATE_SOCIALMEDIA_DETAILS(data);
        if (res.status) {
            toast.success(res.message)
        }
    };

    // console.log({ socialMedia: links });


    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 lg:items-center lg:gap-y-4 lg:gap-x-6 lg:p-4'>
            {
                links.map((link, index) =>
                    <div key={index} className='flex flex-col col-span-2 lg:col-span-1 mt-4'>
                        <label className='text-primary lg:text-lg font-semibold  mb-2 lg:mb-4 ml-2 lg:ml-4' htmlFor={link.label}>{link.label} <span></span></label>
                        <div className='relative'>
                            <input value={link.link} className='py-4 w-full text-sm px-16 border border-[#D5E3EE] rounded focus:outline-none placeholder:text-[#374b5c] lg:text-base font-medium' type="text" placeholder={`Enter the url to your ${link.label} profile`} name={link.label} onChange={(e) => handleChange(e, index)} />
                            <span className='absolute top-[13px] left-3 w-8 h-8 rounded-md bg-[#d5e3ee] flex justify-center items-center'>
                                {link.icons}
                            </span>
                        </div>
                    </div>
                )
            }
            <div className='mt-8 col-span-2 flex justify-center lg:justify-end'>
                <div>
                    <div className='post_product_button'>
                        <button onClick={(e) => handleSaveChanges(e)} className='bg-helper px-4  py-3 rounded-md flex items-center justify-between  gap-4 button'>
                            <span className='text-nowrap text-white font-medium mr-4'>Save Changes</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 14 10" fill="none">
                                <rect x="12.2676" y="0.646447" width="1.53602" height="11.5509" rx="0.768011" transform="rotate(45 12.2676 0.646447)" fill="#FDFDFE" stroke="#FDFDFE" strokeWidth="0.5"></rect>
                                <path d="M1.19345 4.98425C0.891119 5.28658 0.897654 5.77873 1.20791 6.07292L4.70642 9.39036C4.94829 9.61971 5.32032 9.64118 5.58696 9.44116C5.91859 9.1924 5.95423 8.70807 5.66258 8.41344L2.27076 4.98699C1.97447 4.68767 1.49125 4.68644 1.19345 4.98425Z"
                                    fill="#FDFDFE"
                                    stroke="#FDFDFE"
                                    strokeWidth="0.5">
                                </path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}