import React from 'react'
import AboutTour from '../global/AboutTour'
import Subtitle from '../global/SubTitle'
function TourDetail() {
  return (
    <div className='flex flex-col'>
        <Subtitle
            subTitle={'YOUR'}
            title={'TRIP DETAILS'}
            boxClass={'md:mb-[1.87vw] flex flex-col text-center'}
        />
        <AboutTour title={'Night 1.'} subTitle={'GETTING TO HA GIANG (BY BUS)'} customClass={'md:h-[29.75vw]'} />
    </div>
  )
}

export default TourDetail