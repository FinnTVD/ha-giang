import BookingOnline from '../homepage/BookingOnline'
import OverviewMb from '../homepage/OverviewMb'
import Another from './Another'
import BestTripEver from './BestTripEver'
import TheTripDetail from './TheTripDetail'
import TourDetail from './TourDetail'

export default function IndexTourDetail() {
    return (
        <main>
            <OverviewMb />
            <BestTripEver />
            <TourDetail />
            <TheTripDetail />
            <BookingOnline />
            <Another />
        </main>
    )
}
