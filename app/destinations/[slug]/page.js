import BlogDetail from '@/components/blog/BlogDetail'
import { GET_DESTINATION_DETAIL } from '@/graphql/destinantion/queries'
import getDataDetail from '@/utils/getDataDetail'
import React from 'react'

export async function generateMetadata({ params: {slug } }) {
  const data = await getDataDetail(GET_DESTINATION_DETAIL,slug)
  if (!data) return
  const dataDestination = data?.data?.destinations
  return {
      title: dataDestination?.title,
      description: dataDestination?.excerpt,
      applicationName: process.env.SITE_NAME,
      openGraph: {
          title: dataDestination?.title,
          description: dataDestination?.excerpt,
          url: process.env.DOMAIN,
          siteName: process.env.SITE_NAME,
          images: [
              {
                  url: dataDestination?.featuredImage?.node?.sourceUrl,
                  alt: dataDestination?.featuredImage?.node?.altText || dataDestination?.featuredImage?.node?.title,
              },
          ],
          locale: 'en_US',
          type: 'website',
      },
      twitter: {
          card: 'summary_large_image',
          title: dataDestination?.title,
          description: dataDestination?.excerpt,
          creator: process.env.SITE_NAME,
          images: [
              {
                  url: dataDestination?.featuredImage?.node?.sourceUrl,
                  alt: dataDestination?.featuredImage?.node?.altText || dataDestination?.featuredImage?.node?.title,
              },
          ],
      },
      robots: {
          index: false,
          follow: true,
          nocache: true,
          googleBot: {
              index: true,
              follow: false,
              'max-video-preview': -1,
              'max-image-preview': 'large',
              'max-snippet': -1,
          },
      },
  }
}

async function page({ params: {slug } }) {
  const data = await getDataDetail(GET_DESTINATION_DETAIL,slug)
  const dataDestination = data?.data?.destinations
  return (
    <div>
      <BlogDetail data={dataDestination}/>
    </div>
  )
}

export default page