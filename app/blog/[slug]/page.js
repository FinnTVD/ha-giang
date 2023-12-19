import BlogDetail from '@/components/blog/BlogDetail'
import { GET_BLOG_DETAIL, GET_OTHER_POST } from '@/graphql/blog/queries'
import getDataDetail from '@/utils/getDataDetail'
import React from 'react'
import { GET_DATA_HOME } from '@/graphql/home/queries'
import getData from '@/utils/getData'
import GreatTrips from '@/components/homepage/GreatTrips'
import OtherArticle from '@/components/blog/OtherArticle'
import IndexNotFound from '@/components/not-found'

const GET_PARAMS_ALL_BLOG = `{
  posts(first:100){
    nodes{
      slug
    }
  }
}`

export async function generateStaticParams() {
  const { data } = await getData(GET_PARAMS_ALL_BLOG)

  const posts = data?.posts?.nodes || []

  return posts.map((post) => ({
    slug: post?.slug || undefined,
  }))
}

export async function generateMetadata({ params: { slug } }) {
  const data = await getDataDetail(GET_BLOG_DETAIL, slug)
  if (!data) return
  const dataTour = data?.data?.post
  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL),
    title: dataTour?.title,
    description: dataTour?.excerpt,
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
  }
}

async function page({ params: { slug }, searchParams: { viewport } }) {
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
        viewport={viewport}
      />
      <OtherArticle
        dataOtherPost={dataOtherPost?.data?.posts?.nodes}
        slug={slug}
        category='blog'
      />
      <GreatTrips
        viewport={viewport}
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
