import React from 'react'
import { Tooltip } from 'react-tooltip';

const TooltipIcon = ({ IconComponent, tooltipText, id, onClick, like }) => {
  return (
    <>
      <div 
        onClick={onClick} 
        className={`rounded-full border w-8 h-8 flex justify-center items-center cursor-pointer ${like ? "bg-red-500 border-red-500 text-white" : "hover:border-[#537CD9] text-primary"}`} 
        data-tooltip-id={id} 
        data-tooltip-content={tooltipText}
      >
        <IconComponent />
      </div>
      <Tooltip id={id} />
    </>
  );
};

export default TooltipIcon