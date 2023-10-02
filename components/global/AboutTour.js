'use client'
import Image from 'next/image'
import { useState } from 'react'
import moon from '@/public/images/moon.svg'
import btn from '@/public/images/btnEscape.svg'
import SlideImage from './SlideImage'
import IconMarker from '../icons/IconMarker'
import IconHome from '../icons/IconHome'
import IconBus from '../icons/IconBus'
import IconMeal from '../icons/IconMeal'

// From Hanoi
// Noi Bai Airport
// Sapa
// Cat Ba Island
// Ninh Binh
// Ha Giang city
// Highlight on loop
// Meal
// Transport
// Accommondation

function AboutTour({ data }) {
    const [activeCate, setActiveCate] = useState(0)
    const [content, setContent] = useState(data?.listCheckin[0])
    const [isShow, setIsShow] = useState(false)

    const handleCheckIcon = (category) => {
        if (!category) return
        if (category?.includes('From Hanoi')) return <IconMarker />
        if (category?.includes('Noi Bai Airport')) return <IconBus />
        if (category?.includes('Meal')) return <IconMeal />
        return '/images/homeLocation.svg'
    }
    return (
        <section
            className={`${
                isShow ? 'h-[11vw] max-md:h-[15vw] overflow-hidden' : ''
            } flex flex-col md:gap-[1vw] md:px-[6.31vw] about-tour relative transition-all duration-500`}
        >
            <div className='flex justify-between max-md:px-[4.27vw] items-center max-md:mb-[1.87vw]'>
                <div className='flex md:gap-[0.625vw] gap-[2.34vw] items-center max-md:flex-row-reverse'>
                    <Image
                        src={moon}
                        alt='moon'
                        quality={100}
                        className='md:w-[1.75vw] md:h-[1.75vw] w-[4.68384vw] h-[4.68384vw]'
                    />
                    <h3 className='md:text-[2.125vw] text-[4.68384vw]  font-[600] leading-[2.5vw] tracking-[0.00531vw] font-poppins text-gray-scale-80'>
                        {data?.step}
                    </h3>
                </div>
                <div
                    className='cursor-pointer relative z-[50]'
                    onClick={() => setIsShow(!isShow)}
                >
                    <Image
                        alt='btn'
                        src={btn}
                        className='md:w-[1.75vw] md:h-[1.75vw]'
                    />
                </div>
            </div>

            {/* info */}
            <div className='flex gap-[4.27vw] max-md:flex-col'>
                {/* ------------content-left------------ */}
                <div className='flex relative'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='6'
                        height='551'
                        viewBox='0 0 6 551'
                        fill='none'
                        className='h-full absolute top-0 left-[0.88vw] max-md:hidden'
                    >
                        <path
                            d='M0.333333 548C0.333333 549.473 1.52724 550.667 3 550.667C4.47276 550.667 5.66667 549.473 5.66667 548C5.66667 546.527 4.47276 545.333 3 545.333C1.52724 545.333 0.333333 546.527 0.333333 548ZM2.5 0V548H3.5V0H2.5Z'
                            fill='#B34B1E'
                        />
                    </svg>
                    <div className='ml-[0.88vw] pr-[1.5vw] md:block hidden'></div>
                    <div className='flex flex-col md:w-[25.125vw] gap-[1vw] max-md:px-[4.27vw]'>
                        <h4 className='text-[1vw] leading-normal tracking-[0.0125vw] font-[600] font-poppins text-gray-scale-80 max-md:text-[3.733vw] max-md:leading-[1.42] max-md:tracking-[0.03733vw]'>
                            {data?.heading}
                        </h4>
                        <div
                            id='content-trip-details'
                            className='md:text-[0.875vw] text-[3.27869vw] font-poppins font-[400] md:leading-[1.375vw] leading-[5.15222vw] md:tracking-[0.00219vw] tracking-[0.0082vw] text-gray-scale-50'
                            dangerouslySetInnerHTML={{ __html: content?.content }}
                        />
                    </div>
                </div>

                {/* ------------content-right----------- */}
                <div className='flex flex-col md:gap-[1vw] gap-[4.27vw] justify-start'>
                    <div className='flex md:gap-[0.75vw] gap-[3.2vw] max-md:overflow-x-auto max-md:px-[4.27vw] max-md:pb-[1vw] whitespace-nowrap slideCategory'>
                        {data?.listCheckin?.map((item, index) => (
                            <div
                                key={index}
                                className={`flex md:gap-[0.5vw] gap-[2.13vw] cursor-pointer flex-shrink-0 md:rounded-[0.5vw] rounded-[2.13vw] shadow-md items-center md:px-[0.75vw] px-[3.2vw] py-[1.6vw] md:py-[0.375vw] ${
                                    index === activeCate ? 'bg-[#FFF0EA]' : 'bg-[#fff]'
                                }`}
                                onClick={() => {
                                    setContent(data?.listCheckin[index])
                                    setActiveCate(index)
                                }}
                            >
                                <Image
                                    alt='icon'
                                    src={'/images/homeLocation.svg'}
                                    quality={100}
                                    width={30}
                                    height={30}
                                    className='md:w-[1vw] md:h-[1vw]'
                                />
                                <h5 className='md:text-[0.875vw] text-[3.73333vw] text-primary-70 md:font-[500] md:leading-[1.25vw] md:tracking-[0.00875vw] '>
                                    {item?.category}
                                </h5>
                            </div>
                        ))}
                    </div>

                    {/* slide image */}
                    <div className='md:w-[54.95vw] max-md:px-[4.27vw]'>
                        <SlideImage listImageSlide={content?.gallery} />
                    </div>
                    {/* sub description */}
                    <div className='flex md:px-[0.75vw] max-md:mb-[4.27vw] px-[3.2vw] max-md:mx-[4.27vw] md:py-[0.625vw] py-[2.66667vw] self-stretch md:rounded-[0.75vw] rounded-[3.2vw] bg-[#FFF0EA]'>
                        <h5 className='md:text-[0.875vw] text-[3.73333vw] font-[500] leading-[5.86667vw] md:leading-[1.375vw] tracking-[0.00933vw] text-[#6A2C12] md:tracking-[0.00219vw] '>
                            {content?.slogan}
                        </h5>
                    </div>
                </div>
            </div>
            <div
                className={`${
                    isShow ? 'z-10 opacity-100' : 'z-[-1] opacity-0'
                } w-full h-[14vw] max-md:h-[16vw] bg-gradient-travelers2 max-md:bg-gradient-detailTourRes absolute bottom-0 left-0 transition-all duration-150`}
            ></div>
        </section>
    )
}

export default AboutTour
