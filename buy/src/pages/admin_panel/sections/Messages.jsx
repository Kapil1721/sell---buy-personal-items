import React from 'react'
import Topsection from './components/Topsection'
import NoRecords from './components/NoRecords'

function Messages() {
  return (
    <div className="relative bg-[#F8FAFD]">
      <div className="max-w-[1200px] mx-auto py-14">
        <Topsection title={"Messages"} />
        <div className='relative bg-white border border-[#D5E3EE] rounded flex justify-center items-center min-h-80'>
          <NoRecords title={"You don't have any messages yet"} icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={153}
              height={142}
              viewBox="0 0 153 142"
              fill="none"
            >
              <path
                d="M19.0301 0L14.6352 0.0853417L14.3365 0.128007C6.27224 1.10938 0 8.10698 0 16.3846V71C0 80.003 7.38161 87.3846 16.3846 87.3846H32.6839V109.231L61.869 87.3846H90.5847L112.431 109.231H109.273V120.154L94.7236 109.231H60.0769C57.9008 109.231 56.0234 107.908 55.1274 106.031L46.3377 112.644C49.2819 117.167 54.3167 120.154 60.0769 120.154H91.0541L120.197 142V120.154H123.354L134.021 130.864L141.787 123.098L19.0301 0.341346V0ZM34.092 0L45.015 10.9231H92.8462C95.8756 10.9231 98.3077 13.3552 98.3077 16.3846V64.2157L108.761 74.6695C109.06 73.5174 109.231 72.2801 109.231 71V16.3846C109.231 7.33894 101.892 0 92.8462 0H34.092ZM14.5499 11.3498L79.6617 76.4615H58.1995L43.607 87.3846V76.4615H16.3846C13.3125 76.4615 10.9231 74.0721 10.9231 71V16.3846C10.9231 13.9952 12.4591 12.1178 14.5499 11.3498ZM120.154 32.7692V43.6923H136.538C139.568 43.6923 142 46.1244 142 49.1538V103.769C142 104.921 141.573 105.945 140.933 106.841L148.699 114.65C151.302 111.706 152.923 107.951 152.923 103.769V49.1538C152.923 40.1082 145.584 32.7692 136.538 32.7692H120.154Z"
                fill="#D5E3EE"
              />
            </svg>

          } />
        </div>
      </div>
    </div>
  )
}

export default Messages