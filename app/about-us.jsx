import React from 'react'

const AboutUs = async () => {
  const data = await getData(GET_DETAIL_TOUR, { slug: params?.slug })
  // if (!data?.data?.tourHG) return <IndexNotFound />
  return (
    <div>{params?.slug} <Link href="/">Back</Link></div>
  )
}

export default AboutUs