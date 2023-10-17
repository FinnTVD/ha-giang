import BookingOnline from '../homepage/BookingOnline'
import OverviewMb from '../homepage/OverviewMb'
import Another from './Another'
import BestTripEver from './BestTripEver'
import BoxVideo from './BoxVideo'
import HeaderDetail from './HeaderDetail'
import TheTripDetail from './TheTripDetail'
import TourDetail from './TourDetail'

export default function IndexTourDetail({ data, allTourHG, slug }) {
  return (
    <>
      <HeaderDetail
        data={data}
        allTourHG={allTourHG}
        slug={slug}
      />
      <main>
        <OverviewMb data={data?.data?.tourHG?.tourHaGiangDetail?.header} />
        <div className='max-md:flex max-md:flex-col-reverse overflow-hidden'>
          <BestTripEver data={data?.data?.tourHG?.tourHaGiangDetail?.section1} />
          <BoxVideo data={data?.data?.tourHG?.tourHaGiangDetail?.section1} />
        </div>
        <TourDetail data={data?.data?.tourHG?.tourHaGiangDetail?.tripDetails} />
        <BookingOnline
          data={data?.data?.tourHG?.tourHaGiangDetail?.price}
          title={data?.data?.tourHG?.title}
        />
        <TheTripDetail data={data?.data?.tourHG?.tourHaGiangDetail?.faq} />
        <Another
          allTourHG={allTourHG}
          slug={slug}
          data={data?.data?.tourHG?.tourHaGiangDetail?.anotherGreatTrips}
        />
      </main>
    </>
  )
}
