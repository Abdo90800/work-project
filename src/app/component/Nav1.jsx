import React from 'react'
import { IoCloseCircleOutline } from "react-icons/io5";

function Nav1() {
  return (
    <div style={{
      background: "linear-gradient(to right,#3EABCC, #5AE4CB )",
    }} className='h-[32px] flex items-center justify-between p-5'>
      
    <span className='text-white'>
        $120 OFF your new design limited time offer
    </span>
      <span>
<IoCloseCircleOutline width={18} className='text-[18px] text-[#FFFFFF]'/>
      </span>
      </div>
  )
}

export default Nav1