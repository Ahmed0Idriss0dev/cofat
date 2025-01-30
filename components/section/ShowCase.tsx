import React from 'react'

const ShowCase = () => {
  return (
    <main className='section h-dvh ' >
    <div className="container w-full h-full p-5">
      <div className="w-full h-full grid-cols-1 grid sm:grid-cols-2 gap-1">
       <div className="w-full h-[50dvh] bg-neutral-50 rounded-md "></div>
       <div className="w-full grid-rows-3 h-[50dvh] bg-neutral-50 rounded-md "></div>
       <div className="w-full h-[50dvh] bg-neutral-50 rounded-md "></div>


      </div>
    </div>
  </main >
)
}

export default ShowCase