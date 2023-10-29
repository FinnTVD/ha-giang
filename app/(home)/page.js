import { GET_DATA_HOME, GET_META_HOME } from '@/graphql/home/queries'
import getData from '@/utils/getData'
import Image from 'next/image'

import dynamic from 'next/dynamic'

const CheersTour = dynamic(() => import('../../components/homepage/CheersTour'));
const TheGallery = dynamic(() => import('../../components/homepage/TheGallery'));
const Travelers = dynamic(() => import('../../components/homepage/Travelers'));
const Weather = dynamic(() => import('../../components/homepage/Weather'));
const TheTrip = dynamic(() => import('../../components/homepage/TheTrip'));
const GreatTrips = dynamic(() => import('../../components/homepage/GreatTrips'));
const Family = dynamic(() => import('../../components/homepage/Family'));
const Header = dynamic(() => import('../../components/global/Header'));
const Banner = dynamic(() => import('../../components/homepage/Banner'));

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
  const res = await getData(GET_DATA_HOME)
  const allTourHG = res?.data?.allTourHG
  const data = res?.data?.page?.homeHG
  const header = data?.header
  const section1 = data?.section1
  const section2 = data?.section2
  const section3 = data?.section3
  const section4 = data?.section4
  const section5 = data?.section5
  const section6 = data?.section6
  const section7 = data?.section7
  const section8 = data?.section8

  return (
    <>
      <Header
        header={header}
        allTourHG={allTourHG}
        isHome={true}
      />
      <main className='relative w-full overflow-x-hidden'>
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
      </main>
    </>
  )
}
