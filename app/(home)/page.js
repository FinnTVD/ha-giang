import IndexHomePage from '@/components/homepage'
import { GET_DATA_HOME, GET_META_HOME } from '@/graphql/home/queries'
import getData from '@/utils/getData'
export async function generateMetadata() {
  const data = await getData(GET_META_HOME)
  if (!data) return
  const { featuredImage, homeHG } = data?.data?.page
  return {
    title: homeHG?.meta?.metaTitle,
    description: homeHG?.meta?.metaDescription,
    applicationName: process.env.SITE_NAME,
    keywords: ['Cheers Tour', 'Ha Giang Tour', 'Ha Giang Loop', 'Cheers'],
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
          url: featuredImage?.node?.sourceUrl,
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
          url: featuredImage?.node?.sourceUrl,
          alt: featuredImage?.node?.altText || featuredImage?.node?.title,
        },
      ],
    },
  }
}
export default async function page() {
  const data = await getData(GET_DATA_HOME)
  return (
    <IndexHomePage
      data={data?.data?.page?.homeHG}
      allTourHG={data?.data?.allTourHG}
    />
  )
}
