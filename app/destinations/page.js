import Destination from '@/components/destinations/Destination'
import { DESTINATIONS, GET_META_DESTINATION } from '@/graphql/destinantion/queries'
import getData from '@/utils/getData'
import React from 'react'

export async function generateMetadata() {
  const data = await getData(GET_META_DESTINATION)
  if (!data) return
  const { featuredImage, destination } = data?.data?.page
  return {
      title: destination?.meta?.title,
      description: destination?.meta?.description,
      applicationName: process.env.SITE_NAME,
      openGraph: {
          title: destination?.meta?.title,
          description: destination?.meta?.description,
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
          title: destination?.meta?.title,
          description: destination?.meta?.description,
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
  const destinations = await getData(DESTINATIONS)
  const arrayDesInit = []
  const arrayDesSlug = []
  destinations?.data?.allDestination?.nodes?.map((item) => {
    arrayDesInit.push(item)
  })
  destinations?.data?.allDestination?.nodes?.map((item) => {
    arrayDesSlug.push(item?.slug)
  })
  return (
    <div>
      <Destination 
        arrayDesInit={arrayDesInit}
        arrayDesSlug={arrayDesSlug}
      />
    </div>
  )
}

export default page