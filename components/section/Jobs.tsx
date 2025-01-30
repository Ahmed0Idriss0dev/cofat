import React from 'react'
import Job from '../ui/Job'

const Jobs = () => {
  return (
    <main className='section h-dvh ' >
      <div className="container w-full h-full p-5">
        <div className="w-full h-full grid-cols-1 grid sm:grid-cols-2 gap-1">
          <div className="w-full h-full flex flex-col justify-center items-center gap-2">
            <Job/>
            <Job/>
            <Job/>

          </div>
          <div className="w-full   rounded-md h-full"></div>

        </div>
      </div>
    </main >
  )
}

export default Jobs