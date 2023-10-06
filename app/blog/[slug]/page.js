import BlogDetail from '@/components/blog/BlogDetail';
import { GET_BLOG_DETAIL } from '@/graphql/blog/queries'
import getDataDetail from '@/utils/getDataDetail'
import React from 'react'
import { GET_DATA_HOME, GET_DATA_ABOUT_US } from '@/graphql/home/queries'
import getData from '@/utils/getData';

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
  const dataHome = await getData(GET_DATA_HOME)
  const dataAboutUs = await getData(GET_DATA_ABOUT_US)
  return (
    <div>
      <BlogDetail data={dataTour} dataHome={dataHome?.data?.page?.homeHG} allTourHG={dataHome?.data?.allTourHG} dataAboutUs={dataAboutUs?.data?.page?.aboutUs}/>
    </div>
  )
}

export default page