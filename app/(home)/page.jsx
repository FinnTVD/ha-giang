import Banner from '@/components/homepage/Banner'
import CheersTour from '@/components/homepage/CheersTour'
import Family from '@/components/homepage/Family'
import GreatTrips from '@/components/homepage/GreatTrips'
import TheGallery from '@/components/homepage/TheGallery'
import TheTrip from '@/components/homepage/TheTrip'
import Travelers from '@/components/homepage/Travelers'
import Weather from '@/components/homepage/Weather'
import { GET_DATA_HOME, GET_META_HOME } from '@/graphql/home/queries'
import getData from '@/utils/getData'
import Image from 'next/image'

export async function generateMetadata() {
  const data = await getData(GET_META_HOME)
  if (!data) return
  const featuredImage = data?.data?.page?.featuredImage
  const homeHG = data?.data?.page?.homeHG
  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL),
    title: homeHG?.meta?.metaTitle,
    description: homeHG?.meta?.metaDescription,
    applicationName: process.env.SITE_NAME,
    keywords: [
      'Cheers Tour',
      'Ha Giang Tour',
      'Ha Giang Loop',
      'Cheers',
      'Cheers Hostel Official Site',
      'Cheers Hostel',
    ],
    authors: [
      {
        name: 'okhub',
        url: 'https://okhub.vn/',
      },
    ],
    creator: 'FinnTVD',
    openGraph: {
      title: homeHG?.meta?.metaTitle,
      description: homeHG?.meta?.metaDescription,
      url: process.env.DOMAIN,
      siteName: process.env.SITE_NAME,
      images: [
        {
          url: featuredImage?.node?.sourceUrl || '/images/bg-header.jpg',
          alt: featuredImage?.node?.altText || featuredImage?.node?.title,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: homeHG?.meta?.metaTitle,
      description: homeHG?.meta?.metaDescription,
      creator: process.env.SITE_NAME,
      images: [
        {
          url: featuredImage?.node?.sourceUrl || '/images/bg-header.jpg',
          alt: featuredImage?.node?.altText || featuredImage?.node?.title,
        },
      ],
    },
  }
}
export default async function page() {
  const data = await getData(GET_DATA_HOME)
  const homeHG = data?.data?.page?.homeHG
  const allTourHG = data?.data?.allTourHG
  const section1 = homeHG?.section1
  const section2 = homeHG?.section2
  const section3 = homeHG?.section3
  const section4 = homeHG?.section4
  const section5 = homeHG?.section5
  const section6 = homeHG?.section6
  const section7 = homeHG?.section7
  const section8 = homeHG?.section8

  return (
    <div>
      <Banner section1={section1} />
      <Image
        className='!h-[220vh] object-cover w-full top-0 left-0 z-0 max-lg:hidden'
        src={'/images/mask.png'}
        fill
        sizes='100vw'
      />
      <CheersTour
        section2={section2}
        allTourHG={allTourHG}
      />
      <GreatTrips
        section3={section3}
        allTourHG={allTourHG}
      />
      <TheGallery
        section4={section4}
        allTourHG={allTourHG}
      />
      <Travelers section5={section5} />
      <Family section6={section6} />
      <Weather section7={section7} />
      <TheTrip
        section8={section8}
        allTourHG={allTourHG}
      />
    </div>
  )
}
