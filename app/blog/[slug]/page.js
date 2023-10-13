import BlogDetail from '@/components/blog/BlogDetail'
import { GET_BLOG_DETAIL, GET_OTHER_POST } from '@/graphql/blog/queries'
import getDataDetail from '@/utils/getDataDetail'
import React from 'react'
import { GET_DATA_HOME } from '@/graphql/home/queries'
import getData from '@/utils/getData'
import GreatTrips from '@/components/homepage/GreatTrips'
import OtherArticle from '@/components/blog/OtherArticle'
import IndexNotFound from '@/components/not-found'

export async function generateMetadata({ params: { slug } }) {
  const data = await getDataDetail(GET_BLOG_DETAIL, slug)
  if (!data) return
  const dataTour = data?.data?.post
  return {
    title: dataTour?.title,
    description: dataTour?.excerpt,
    applicationName: process.env.SITE_NAME,
    openGraph: {
      title: dataTour?.title,
      description: dataTour?.excerpt,
      url: process.env.DOMAIN,
      siteName: process.env.SITE_NAME,
      images: [
        {
          url: dataTour?.featuredImage?.node?.sourceUrl,
          alt: dataTour?.featuredImage?.node?.altText || dataTour?.featuredImage?.node?.title,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: dataTour?.title,
      description: dataTour?.excerpt,
      creator: process.env.SITE_NAME,
      images: [
        {
          url: dataTour?.featuredImage?.node?.sourceUrl,
          alt: dataTour?.featuredImage?.node?.altText || dataTour?.featuredImage?.node?.title,
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

async function page({ params: { slug } }) {
  const data = await getDataDetail(GET_BLOG_DETAIL, slug)
  const dataHome = await getData(GET_DATA_HOME)
  const dataOtherPost = await getData(GET_OTHER_POST)
  if (!data?.data?.post) return <IndexNotFound />
  const dataTour = data?.data?.post
  return (
    <div>
      <BlogDetail
        data={dataTour}
        dataHome={dataHome?.data?.page?.homeHG}
        allTourHG={dataHome?.data?.allTourHG}
      />
      <OtherArticle
        dataOtherPost={dataOtherPost?.data?.posts?.nodes}
        slug={slug}
        category='blog'
      />
      <GreatTrips
        allTourHG={dataHome?.data?.allTourHG}
        section3={{
          subtitle: 'our',
          title: 'great trips',
        }}
      />
    </div>
  )
}

export default page
