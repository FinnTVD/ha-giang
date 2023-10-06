import IndexAboutUs from "@/components/about-us";
import getData from "@/utils/getData";
import { GET_DATA_ABOUT_US, GET_DATA_HOME } from '@/graphql/home/queries'

export async function generateMetadata({ params}) {
	return {
		title: 'About Us | Cheers Tour',
		description: 'The 3 Days Epic Ha giang Loop Tour with easy rider organized by Vietnam Cheers Hostel is a must in Vietnam for any traveller. It is considered a highlight of South East Asia.',
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