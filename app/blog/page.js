import Blog from '@/components/blog/Blog'
import { CATEGORIES, GET_META_BLOG } from '@/graphql/blog/queries'
import getData from '@/utils/getData'
import React from 'react'
import { GET_DATA_HOME, GET_DATA_ABOUT_US } from '@/graphql/home/queries'

export async function generateMetadata() {
  const data = await getData(GET_META_BLOG)
  if (!data) return
  const { featuredImage, blog } = data?.data?.page
  return {
    title: blog?.meta?.title,
    description: blog?.meta?.description,
    applicationName: process.env.SITE_NAME,
    keywords: [
      'Cheers Tour',
      'Ha Giang Tour',
      'Ha Giang Loop',
      'Cheers',
      'Cheers Hostel Official Site',
      'Cheers Hostel',
    ],
    openGraph: {
      title: blog?.meta?.title,
      description: blog?.meta?.description,
      url: process.env.DOMAIN,
      siteName: process.env.SITE_NAME,
      images: [
        {
          url: featuredImage?.node?.sourceUrl,
          alt: featuredImage?.node?.altText || featuredImage?.node?.title,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: blog?.meta?.title,
      description: blog?.meta?.description,
      creator: process.env.SITE_NAME,
      images: [
        {
          url: featuredImage?.node?.sourceUrl,
          alt: featuredImage?.node?.altText || featuredImage?.node?.title,
        },
      ],
    },
  }
}
async function page() {
  const categories = await getData(CATEGORIES)

  const arrayCateInit = []
  const arrayCateSlug = []
  categories?.data?.categories?.nodes?.map((item) => {
    arrayCateInit.push(item)
  })
  categories?.data?.categories?.nodes?.map((item) => {
    arrayCateSlug.push(item?.slug)
  })
  const data = await getData(GET_DATA_HOME)
  const dataAboutUs = await getData(GET_DATA_ABOUT_US)

  return (
    <Blog
      arrayCateInit={arrayCateInit}
      arrayCateSlug={arrayCateSlug}
      dataHome={data?.data?.page?.homeHG}
      allTourHG={data?.data?.allTourHG}
      dataAboutUs={dataAboutUs?.data?.page?.aboutUs}
    />
  )
}

export default page
