import Banner from '@/components/faq/Banner'
import Family from '@/components/homepage/Family'
import TheTrip from '@/components/homepage/TheTrip'
import { GET_META_FAQ } from '@/graphql/faq/queries'
import { GET_DATA_HOME } from '@/graphql/home/queries'
import getData from '@/utils/getData'
import React from 'react'

export async function generateMetadata() {
  const data = await getData(GET_META_FAQ)
  if (!data) return
  const { featuredImage, faq } = data?.data?.page
  return {
      title: faq?.meta?.title,
      description: faq?.meta?.description,
      applicationName: process.env.SITE_NAME,
      openGraph: {
          title: faq?.meta?.title,
          description: faq?.meta?.description,
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
          title: faq?.meta?.title,
          description: faq?.meta?.description,
          creator: process.env.SITE_NAME,
          images: [
              {
                  url: featuredImage?.node?.sourceUrl,
                  alt: featuredImage?.node?.altText || featuredImage?.node?.title,
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

async function page() {
  const data = await getData(GET_DATA_HOME)
 const section8 = data?.data?.page?.homeHG?.section8
 const section6 = data?.data?.page?.homeHG?.section6
  return (
    <div>
      <Banner/>
      <TheTrip section8={section8} allTourHG={data?.data?.allTourHG}/>
      <Family section6={section6} />
    </div>
  )
}

export default page