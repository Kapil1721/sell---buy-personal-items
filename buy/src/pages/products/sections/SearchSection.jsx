import React from 'react'

function SearchSection() {
   
    return (
        <div className='flex justify-between gap-8 py-5'>
            <div className='border border-[#D5E3EE] w-full relative '>
                <input className='py-4 w-full px-14 rounded-md focus:outline-none placeholder:text-[#374b5c] text-base font-medium' type="text" placeholder="I'm looking for..." />
                <span className='absolute top-3 left-3 w-8 h-8 rounded-md bg-[#d5e3ee]'></span>
            </div>
            <div className='border border-[#D5E3EE] w-full relative'>
                <input className='py-4 px-14 w-full rounded-md focus:outline-none placeholder:text-[#374b5c] text-base font-medium' type="text" placeholder="Location (e.g. New York)" />
                <span className='absolute top-3 left-3 w-8 h-8 rounded-md bg-[#d5e3ee]'></span>
            </div>
            {/* <div className='w-full bg-[#537cd9] py-[15px] px-4'>
                <div className="w-[20px] h-[20px]  relative transition-transform ease-in-out transform hover:scale-125">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={18}
                        height={18}
                        viewBox="0 0 18 18"
                        fill="none"
                    >
                        <path
                            d="M0 7.24416C0 3.25516 3.25515 0 7.24416 0C11.2332 0 14.4883 3.25516 14.4883 7.24416C14.4883 8.87942 13.9353 10.3861 13.0149 11.601L17.6928 16.2798C17.9538 16.5305 18.0589 16.9026 17.9677 17.2528C17.8764 17.6029 17.6029 17.8764 17.2528 17.9677C16.9026 18.0589 16.5305 17.9538 16.2798 17.6928L11.601 13.0149C10.3861 13.9353 8.87942 14.4883 7.24416 14.4883C3.25515 14.4883 0 11.2332 0 7.24416ZM12.4899 7.24416C12.4899 4.33516 10.1532 1.99839 7.24416 1.99839C4.33516 1.99839 1.99839 4.33516 1.99839 7.24416C1.99839 10.1532 4.33516 12.4899 7.24416 12.4899C8.64188 12.4899 9.90406 11.9466 10.8418 11.0633C10.904 10.9775 10.9794 10.9021 11.0653 10.8399C11.9474 9.90231 12.4899 8.64089 12.4899 7.24416Z"
                            fill="#FDFDFE"
                        />
                    </svg>
                </div>
            </div> */}
        </div>
    )
}

export default SearchSection