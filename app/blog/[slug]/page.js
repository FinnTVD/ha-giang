import BlogDetail from '@/components/blog/BlogDetail';
import { GET_BLOG_DETAIL } from '@/graphql/blog/queries'
import getDataDetail from '@/utils/getDataDetail'
import React from 'react'

export async function generateMetadata({ params: {slug } }) {
  const data = await getDataDetail(GET_BLOG_DETAIL,slug)
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

async function page({ params: {slug } }) {
  const data = await getDataDetail(GET_BLOG_DETAIL,slug)
  const dataTour = data?.data?.post
  return (
    <div>
      <BlogDetail data={dataTour}/>
    </div>
  )
}

export default page