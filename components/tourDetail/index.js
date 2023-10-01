import BookingOnline from '../homepage/BookingOnline'
import OverviewMb from '../homepage/OverviewMb'
import Another from './Another'
import BestTripEver from './BestTripEver'
import BoxVideo from './BoxVideo'
import HeaderDetail from './HeaderDetail'
import TheTripDetail from './TheTripDetail'
import TourDetail from './TourDetail'

export default function IndexTourDetail({ data }) {
    const { section1, tripDetails, faq } = data?.data?.tourHG?.tourHaGiangDetail
    return (
        <>
            <HeaderDetail data={data} />
            <main>
                <OverviewMb data={data} />
                <BestTripEver data={section1} />
                <BoxVideo data={section1} />
                <TourDetail data={tripDetails} />
                <BookingOnline />
                <TheTripDetail data={faq} />
                <Another />
            </main>
        </>
    )
}
