import BlogDetail from '@/components/blog/BlogDetail'
import OtherArticle from '@/components/blog/OtherArticle'
import GreatTrips from '@/components/homepage/GreatTrips'
import { GET_DESTINATION_DETAIL, GET_OTHER_DESTINATIONS } from '@/graphql/destinantion/queries'
import { GET_DATA_HOME } from '@/graphql/home/queries'
import getData from '@/utils/getData'
import getDataDetail from '@/utils/getDataDetail'

export async function generateMetadata({ params: { slug } }) {
    const data = await getDataDetail(GET_DESTINATION_DETAIL, slug)
    if (!data) return
    const dataDestination = data?.data?.destinations
    return {
        title: dataDestination?.title,
        description: dataDestination?.excerpt,
        applicationName: process.env.SITE_NAME,
        openGraph: {
            title: dataDestination?.title,
            description: dataDestination?.excerpt,
            url: process.env.DOMAIN,
            siteName: process.env.SITE_NAME,
            images: [
                {
                    url: dataDestination?.featuredImage?.node?.sourceUrl,
                    alt: dataDestination?.featuredImage?.node?.altText || dataDestination?.featuredImage?.node?.title,
                },
            ],
            locale: 'en_US',
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: dataDestination?.title,
            description: dataDestination?.excerpt,
            creator: process.env.SITE_NAME,
            images: [
                {
                    url: dataDestination?.featuredImage?.node?.sourceUrl,
                    alt: dataDestination?.featuredImage?.node?.altText || dataDestination?.featuredImage?.node?.title,
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
    const data = await getDataDetail(GET_DESTINATION_DETAIL, slug)
    const dataHome = await getData(GET_DATA_HOME)
    const dataOtherDestinations = await getData(GET_OTHER_DESTINATIONS)
    const dataDestination = data?.data?.destinations

    return (
        <>
            <BlogDetail
                data={dataDestination}
                dataHome={dataHome?.data?.page?.homeHG}
                allTourHG={dataHome?.data?.allTourHG}
            />
            <OtherArticle
                dataOtherPost={dataOtherDestinations?.data?.allDestinations?.nodes}
                slug={slug}
                category='destinations'
            />
            <GreatTrips
                allTourHG={dataHome?.data?.allTourHG}
                section3={{
                    subtitle: 'our',
                    title: 'great trips',
                }}
            />
        </>
    )
}

export default page
