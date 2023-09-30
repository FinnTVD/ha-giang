import BookingOnline from '../homepage/BookingOnline'
import OverviewMb from '../homepage/OverviewMb'
import Another from './Another'
import BestTripEver from './BestTripEver'
import BoxVideo from './BoxVideo'
import HeaderDetail from './HeaderDetail'
import TheTripDetail from './TheTripDetail'
import TourDetail from './TourDetail'

export default function IndexTourDetail() {
    return (
        <>
            <HeaderDetail />
            <main>
                <OverviewMb />
                <BestTripEver />
                <BoxVideo />
                <TourDetail />
                <BookingOnline />
                <TheTripDetail />
                <Another />
            </main>
        </>
    )
}
