import Destination from '@/components/destinations/Destination'
import { DESTINATIONS, GET_META_DESTINATION, GET_CONTENT_DESTINATIONS } from '@/graphql/destinantion/queries'
import getData from '@/utils/getData'
import React from 'react'
import { GET_DATA_HOME, GET_DATA_ABOUT_US } from '@/graphql/home/queries'

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
  // const destinations = await getData(DESTINATIONS)
  // const arrayDesInit = []
  // const arrayDesSlug = []
  // destinations?.data?.allDestination?.nodes?.map((item) => {
  //   arrayDesInit.push(item)
  // })
  // destinations?.data?.allDestination?.nodes?.map((item) => {
  //   arrayDesSlug.push(item?.slug)
  // })
  const data = await getData(GET_DATA_HOME)
  const dataAboutUs = await getData(GET_DATA_ABOUT_US)
  const dataDestination = await getData(GET_CONTENT_DESTINATIONS)

  return (
    <div>
      <Destination 
        // arrayDesInit={arrayDesInit}
        // arrayDesSlug={arrayDesSlug}
        dataHome={data?.data?.page?.homeHG}
        allTourHG={data?.data?.allTourHG}
        dataAboutUs={dataAboutUs?.data?.page?.aboutUs}
        dataDestination={dataDestination?.data?.page?.destination}
      />
    </div>
  )
}

export default page