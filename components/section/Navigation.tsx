import React from 'react'
import Search from '../ui/Search'
import Logo from '../ui/Logo'
import User from '../ui/User'

const Navigation = () => {
  return (
    <nav className='section border-b z-10  sticky bg-white top-0 py-2'>
        <div className="container h-12 w-full ">
          <Logo/>
            <div className="hidden sm:section   gap-4">
                <a href="" className='action'>About </a>
                <a href="" className='action'>Jobs </a>
                <a href="" className='action new' >New </a>
                <a href="" className='action'>Location </a>
                <a href="" className='action'>Contact us </a>
                <a href="" className='action'>FAQ </a>
            </div>
            <Search/>
           <User />
        </div>
    </nav>
  )
}

export default Navigation