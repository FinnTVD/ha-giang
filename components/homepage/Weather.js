'use client'
import Image from 'next/image'
import SubTitle from '../global/SubTitle'
import { useState } from 'react'
import SlideWeather from './SlideWeather'

const arr = new Array(12).fill(0)
const getMonthNow = () => {
    let now = new Date()
    let month = now.getMonth() // Tháng được đếm từ 0, nên cần cộng thêm 1
    return Number(month)
}
export default function Weather() {
    const [month, setMonth] = useState(getMonthNow())

    return (
        <section className='relative mt-[6.25vw]'>
            <SubTitle
                title={'Ha Giang'}
                subTitle={'WEATHER FORSCAST OF'}
                titleClass={'text-center'}
                subTitleClass={'text-center'}
            />
            <Image
                className='w-[74.625vw] h-[27.25vw] object-cover rounded-[0.75vw] mx-auto relative max-md:w-[91.46667vw] max-md:h-[54.93333vw] z-[5] mt-[1.88vw] max-md:rounded-[3.2vw]'
                src={'/images/weather.jpg'}
                alt='weather'
                width={1200}
                height={500}
            />
            {/* <div className='flex gap-x-[1vw] mt-[1.5vw] justify-center relative z-[5]'>
                {arr?.map((e, index) => (
                    <div
                        key={index}
                        onClick={() => setMonth(index)}
                        className={`${
                            index === month ? 'bg-primary-70 text-white' : 'bg-[#f9f9f9] text-gray-scale-50'
                        } w-[4.625vw] h-[4.625vw] rounded-full flex justify-center items-center  text-[0.875vw] font-medium leading-[1.57] tracking-[0.00219rem] cursor-pointer`}
                    >
                        JAN
                    </div>
                ))}
            </div> */}
            <SlideWeather />
            <div className='relative z-[5] w-fit mx-auto mt-[1.56vw] max-md:mt-[5.33vw]'>
                <span className=' font-normal leading-[1.57] tracking-[0.00219rem] text-gray-scale-80 max-md:text-[3.73vw] max-md:tracking-[0.00933rem]'>
                    A lovely time to travel. Excellent wildlife viewing.
                </span>
                <div className='flex gap-x-[1vw] mt-[0.75vw] max-md:t-[3.2vw] justify-center'>
                    <div className='flex gap-x-[0.5vw] rounded-[10vw] p-[0.75vw] bg-[#f9f9f9] items-center w-fit'>
                        <Image
                            className='w-[1.5vw] h-[1.5vw] rounded-full'
                            src={'/images/sun.svg'}
                            alt='sun'
                            width={36}
                            height={36}
                        />
                        <span className=' text-[0.875vw] font-normal leading-[1.57] tracking-[0.00219rem] text-gray-scale-50'>
                            27 - 32 degree
                        </span>
                    </div>
                    <div className='flex gap-x-[0.5vw] rounded-[10vw] p-[0.75vw] bg-[#f9f9f9] items-center w-fit'>
                        <Image
                            className='w-[1.5vw] h-[1.5vw] rounded-full'
                            src={'/images/rain.svg'}
                            alt='sun'
                            width={36}
                            height={36}
                        />
                        <span className=' text-[0.875vw] font-normal leading-[1.57] tracking-[0.00219rem] text-gray-scale-50'>
                            65 - 80 mm
                        </span>
                    </div>
                </div>
            </div>
            <Image
                className='z-0 object-cover max-md:hidden'
                src={'/images/mask-weather.png'}
                alt='mask-weather'
                fill
                sizes='100vw'
            />
            <div className='w-full h-[6vw] bg-gradient-travelers2 absolute bottom-0 left-0 z-[1]'></div>
        </section>
    )
}
