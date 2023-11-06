import { GET_DETAIL_TOUR } from '@/graphql/tourDetail/queries'
import getData from '@/utils/getData'
import Link from 'next/link'
import React from 'react'

const AboutUs = async ({params}) => {
  const data = await getData(GET_DETAIL_TOUR, { slug: params?.slug })
  // if (!data?.data?.tourHG) return <IndexNotFound />
  return (
    <div>{params?.slug} <Link href="/">Back</Link></div>
  )
}

export default AboutUs