import { MoreHorizontal } from 'lucide-react'
import React from 'react'

const Job = () => {
  return (
    <div className='w-full  p-2 h-[200px] bg-white border rounded-md '>
        <div className="flex  justify-between items-start ">
            <div className="flex justify-start items-center gap-2">
                <div className="w-11 h-11 rounded-full  bg-neutral-200"></div>
               <div className="">
               <p>Cofat</p>
               <span className='text-wm opacity-70'>22/3/25</span>
               </div>
            </div>
            <button className='action'>
            <MoreHorizontal/>
            </button>
        </div>
    </div>
  )
}

export default Job