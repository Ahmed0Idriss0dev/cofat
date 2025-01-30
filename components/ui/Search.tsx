"use client"
import OurStore from '@/store'
import { SearchIcon } from 'lucide-react'
import React from 'react'

const Search = () => {
  const {SetisModelShow ,isModelShow} = OurStore()
  return (
    <button className='action' onClick={()=> isModelShow ? SetisModelShow(false):SetisModelShow(true)}>
        <SearchIcon/>
    </button>
  )
}

export default Search