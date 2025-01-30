import React from 'react'

const Layout = ({children}:{children?:React.ReactNode}) => {

  return (
    <div className='fixed w-full top-0 left-0 h-full bg-black/5 z-20 flex justify-center items-center'>
        <div className="w-[400px] h-[200px] bg-white border rounded-md "></div>
    </div>
  )
}

export default Layout