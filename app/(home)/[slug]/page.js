import IndexNotFound from '@/components/not-found'
import IndexTourDetail from '@/components/tourDetail'
import { GET_DETAIL_TOUR, GET_META_TOUR_DETAIL } from '@/graphql/tourDetail/queries'
import getData from '@/utils/getData'

export async function generateMetadata({ params }) {
  const data = await getData(GET_META_TOUR_DETAIL, { slug: params?.slug })
  if (!data) return
  const { featuredImage, tourHaGiangDetail, title } = data?.data?.tourHG
  return {
    title: tourHaGiangDetail?.metaSeo?.metaTitle,
    description: tourHaGiangDetail?.metaSeo?.metaDescription,
    applicationName: process.env.SITE_NAME,
    keywords: [title, 'Cheers Tour', 'Ha Giang Tour', 'Ha Giang Loop', 'Cheers'],
    authors: [
      {
        name: 'okhub',
        url: 'https://okhub.vn/',
      },
    ],
    creator: 'FinnTVD',
    openGraph: {
      title: tourHaGiangDetail?.metaSeo?.metaTitle,
      description: tourHaGiangDetail?.metaSeo?.metaDescription,
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
      title: tourHaGiangDetail?.metaSeo?.metaTitle,
      description: tourHaGiangDetail?.metaSeo?.metaDescription,
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

export default async function page({ params }) {
  const data = await getData(GET_DETAIL_TOUR, { slug: params?.slug })
  if (!data?.data?.tourHG) return <IndexNotFound />
  return (
    <IndexTourDetail
      data={data}
      allTourHG={data?.data?.allTourHG}
      slug={params?.slug}
    />
  )
}
