import IndexAboutUs from "@/components/about-us";
import getData from "@/utils/getData";
import { GET_DATA_ABOUT_US, GET_DATA_HOME } from '@/graphql/home/queries'

export async function generateMetadata({ params}) {
	const data = await getData(GET_DATA_ABOUT_US)
    if (!data) return
    const { featuredImage, aboutUs} = data?.data?.page
    return {
        title: aboutUs?.meta?.title,
        description: aboutUs?.meta?.description,
        applicationName: process.env.SITE_NAME,
        openGraph: {
            title: aboutUs?.meta?.title,
            description: aboutUs?.meta?.description,
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
            title: aboutUs?.meta?.title,
            description: aboutUs?.meta?.description,
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
export default async function AboutUs() {
    const data = await getData(GET_DATA_HOME)
    const dataAboutUs = await getData(GET_DATA_ABOUT_US)

    return(
        <IndexAboutUs
            data={data?.data?.page?.homeHG}
            allTourHG={data?.data?.allTourHG}
            dataAboutUs={dataAboutUs?.data?.page?.aboutUs}
        >
        </IndexAboutUs>
    )
}