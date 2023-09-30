import AboutTour from '../global/AboutTour'
import Subtitle from '../global/SubTitle'
import homeLocation from '@/public/images/homeLocation.svg'
import imgSlide1 from '@/public/images/imgSlide1.png'
import imgSlide2 from '@/public/images/imgSlide2.png'

function TourDetail() {
    const listTourDetail = [
        {
            title: 'Night 1.',
            subTitle: 'GETTING TO HA GIANG (BY BUS)',
            content:
                '8:00 PM: Everyone meets at Cheers Hostel Hanoi. Keep your bags here and have Free tea, coffee here all day. (No. 05 Au Trieu Str„ Hoan Kiem, Hanoi).8:30 PM: Get on best comfort Sleeper bus to Ha Giang. Checking in our Hotel in Ha Giang City in early morning around 3 AM and offering yourself a nap and breakfast before the tour starts.',
            categories: [
                {
                    category: 'From Hanoi',
                    icon: homeLocation,
                    slides: [imgSlide1, imgSlide2, imgSlide1, imgSlide2],
                },
                {
                    category: 'Noi Bai Airport',
                    icon: homeLocation,
                    slides: [imgSlide1, imgSlide1, imgSlide1, imgSlide1],
                },
                {
                    category: 'Sapa',
                    icon: homeLocation,
                    slides: [imgSlide1, imgSlide2, imgSlide2, imgSlide1],
                },
                {
                    category: 'From Hanoi',
                    icon: homeLocation,
                    slides: [imgSlide1, imgSlide2, imgSlide1, imgSlide2],
                },
                {
                    category: 'Noi Bai Airport',
                    icon: homeLocation,
                    slides: [imgSlide1, imgSlide1, imgSlide1, imgSlide1],
                },
            ],
        },
        {
            title: 'Night 1.',
            subTitle: 'GETTING TO HA GIANG (BY BUS)',
            content:
                '8:00 PM: Everyone meets at Cheers Hostel Hanoi. Keep your bags here and have Free tea, coffee here all day. (No. 05 Au Trieu Str„ Hoan Kiem, Hanoi).8:30 PM: Get on best comfort Sleeper bus to Ha Giang. Checking in our Hotel in Ha Giang City in early morning around 3 AM and offering yourself a nap and breakfast before the tour starts.',
            categories: [
                {
                    category: 'From Hanoi',
                    icon: homeLocation,
                    slides: [imgSlide1, imgSlide2, imgSlide1, imgSlide2],
                },
                {
                    category: 'Noi Bai Airport',
                    icon: homeLocation,
                    slides: [imgSlide1, imgSlide2, imgSlide2, imgSlide1],
                },
                {
                    category: 'Sapa',
                    icon: homeLocation,
                    slides: [imgSlide1, imgSlide2, imgSlide1, imgSlide2],
                },
                {
                    category: 'From Hanoi',
                    icon: homeLocation,
                    slides: [imgSlide1, imgSlide2, imgSlide1, imgSlide2],
                },
                {
                    category: 'Noi Bai Airport',
                    icon: homeLocation,
                    slides: [imgSlide1, imgSlide1, imgSlide1, imgSlide1],
                },
            ],
        },
        {
            title: 'Night 1.',
            subTitle: 'GETTING TO HA GIANG (BY BUS)',
            content:
                '8:00 PM: Everyone meets at Cheers Hostel Hanoi. Keep your bags here and have Free tea, coffee here all day. (No. 05 Au Trieu Str„ Hoan Kiem, Hanoi).8:30 PM: Get on best comfort Sleeper bus to Ha Giang. Checking in our Hotel in Ha Giang City in early morning around 3 AM and offering yourself a nap and breakfast before the tour starts.',
            categories: [
                {
                    category: 'From Hanoi',
                    icon: homeLocation,
                    slides: [imgSlide1, imgSlide2, imgSlide1, imgSlide2],
                },
                {
                    category: 'Noi Bai Airport',
                    icon: homeLocation,
                    slides: [imgSlide2, imgSlide1, imgSlide1, imgSlide2],
                },
                {
                    category: 'Sapa',
                    icon: homeLocation,
                    slides: [imgSlide1, imgSlide2, imgSlide1, imgSlide2],
                },
                {
                    category: 'From Hanoi',
                    icon: homeLocation,
                    slides: [imgSlide1, imgSlide2, imgSlide1, imgSlide2],
                },
                {
                    category: 'Noi Bai Airport',
                    icon: homeLocation,
                    slides: [imgSlide1, imgSlide1, imgSlide1, imgSlide1],
                },
            ],
        },
        {
            title: 'Night 1.',
            subTitle: 'GETTING TO HA GIANG (BY BUS)',
            content:
                '8:00 PM: Everyone meets at Cheers Hostel Hanoi. Keep your bags here and have Free tea, coffee here all day. (No. 05 Au Trieu Str„ Hoan Kiem, Hanoi).8:30 PM: Get on best comfort Sleeper bus to Ha Giang. Checking in our Hotel in Ha Giang City in early morning around 3 AM and offering yourself a nap and breakfast before the tour starts.',
            categories: [
                {
                    category: 'From Hanoi',
                    icon: homeLocation,
                    slides: [imgSlide1, imgSlide2],
                },
                {
                    category: 'Noi Bai Airport',
                    icon: homeLocation,
                    slides: [imgSlide1, imgSlide2],
                },
                {
                    category: 'Sapa',
                    icon: homeLocation,
                    slides: [imgSlide1, imgSlide2],
                },
            ],
        },
    ]
    return (
        <section className='flex flex-col mt-[6.25vw]' id='tourId'>
            <Subtitle
                subTitle={'YOUR'}
                title={'TRIP DETAILS'}
                boxClass={'md:mb-[1.87vw] flex flex-col md:text-center max-md:pl-[4.27vw]'}
            />
            <div className='flex flex-col md:gap-[2.5vw] max-md:mt-[4.68vw]'>
                {listTourDetail?.map((tour, index) => (
                    <AboutTour
                        key={index}
                        title={tour?.title}
                        subTitle={tour?.subTitle}
                        content={tour?.content}
                        categories={tour?.categories}
                    />
                ))}
            </div>
        </section>
    )
}

export default TourDetail
