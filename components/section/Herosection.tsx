import React from 'react'

const Herosection = () => {
  return (
    <header className='section   h-[35vh] '>
       <div className="container">
       <div className="w-full sm:w-[50%] flex justify-start  gap-3 items-start flex-col ">
          <div className="space-y-2 ">
            <h1 className='text-3xl font-bold'>Welcome to Cofat Jobs — Where You Find Your First Job with Us</h1>
            <p className='text-sm opacity-80'>Welcome to Cofat Jobs — where your journey to landing your first job begins. Discover exciting opportunities, connect with top employers, and kickstart your career with confidence.</p>
          </div>
          <button className='w-[200px]  button  bg-blue-600 text-white '>Get started</button>
      </div>
       </div>
    </header>
  )
}

export default Herosection