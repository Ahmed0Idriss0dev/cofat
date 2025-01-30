import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <div className='flex justify-start h-full border-r px-4 items-center gap-1'>
        <Image src="/logo/logo.svg" width={44} height={44} alt='logo' />
        <h1 className='text-2xl font-bold text-Brand'>Cofat</h1>
    </div>
  )
}

export default Logo