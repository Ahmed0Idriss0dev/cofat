"use client"
import CofatAi from '@/components/ai/CofatAi'
import Layout from '@/components/Model/Layout'
import Herosection from '@/components/section/Herosection'
import Jobs from '@/components/section/Jobs'
import ShowCase from '@/components/section/ShowCase'
import OurStore from '@/store'
import React from 'react'

const page = () => {
  const {isModelShow} = OurStore()
  return (
    <>
    {isModelShow && <Layout/>}
    <Herosection/>
    <CofatAi/>
    <ShowCase/>
    </>
  )
}

export default page