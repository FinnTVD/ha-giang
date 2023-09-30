'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCreative, FreeMode } from 'swiper/modules'

const arr = new Array(8).fill(0)
const style1= {width: '35.625vw', transform: 'translateX(0)'}
const style2= {width: 'calc((50.5vw - 35.625vw - 48px) / 2)', transform: 'translateX(24px)'}
const style3= {width: 'calc((50.5vw - 35.625vw - 48px) / 2)', transform:'translateX(calc((16.8333vw - 7.4375vw) + 24px)'}
const style4= {width: 'calc((50.5vw - 35.625vw - 48px) / 2)', transform:'translateX(calc((16.8333vw - 7.4375vw) * 2 + 24px)'}
export default function SlideFamily() {
    const swiperRef = useRef()
    const [indexSlider, setIndexSlider] = useState(0)
    console.log('🚀 ~ file: SlideFamily.js:12 ~ SlideFamily ~ indexSlider:', indexSlider)
    const handleSlideChange = (swiper) => {
        setIndexSlider(swiper.realIndex)
        // swiper.translate = (37.125 * window.innerWidth) / 100
    }

    const handleNextSlide = () => {
        swiperRef.current.slideNext()
    }

    const handlePrevSlide = () => {
        swiperRef.current.slidePrev()
    }

    useEffect(() => {
        const slideImg = document.querySelectorAll('.slideCheers img')
        const slide = document.querySelectorAll('.slideCheers')
        slideImg.forEach((item, index) => {
            if(indexSlider===Number(slide[index].dataset.swiperSlideIndex)){
                item.style.width = style1.width
                item.style.transform = style1.transform
                item.style.opacity = '1'
            }
            else{
                item.style.opacity = '0.6'
                if((indexSlider===slide.length-1 && Number(slide[index].dataset.swiperSlideIndex)===0) || Math.abs(indexSlider-Number(slide[index].dataset.swiperSlideIndex))===1){
                    item.style.width = style4.width
                    item.style.transform = style4.transform
                }
                else if((indexSlider===slide.length-1 && Number(slide[index].dataset.swiperSlideIndex)===1) || Math.abs(indexSlider-Number(slide[index].dataset.swiperSlideIndex))===2){
                    item.style.width = style3.width
                    item.style.transform = style3.transform
                }
                else if((indexSlider===slide.length-2 && Number(slide[index].dataset.swiperSlideIndex)===slide.length-1) || Math.abs(indexSlider-Number(slide[index].dataset.swiperSlideIndex))===2){
                    item.style.width = style4.width
                    item.style.transform = style4.transform
                }
                else if((indexSlider===slide.length-2 && Number(slide[index].dataset.swiperSlideIndex)===0) || Math.abs(indexSlider-Number(slide[index].dataset.swiperSlideIndex))===2){
                    item.style.width = style3.width
                    item.style.transform = style3.transform
                }
                else{
                    item.style.width = style2.width
                    item.style.transform = style2.transform
                }
            }
        })
    }, [indexSlider])

    return (
        <div
            id='box-slide-family'
            className='w-fit h-fit relative'
        >
            <Swiper
                loop={true}
                spaceBetween={0}
                slidesPerView={3}
                // centerInsufficientSlides={true}
                // centeredSlidesBounds={true}
                // freeMode={true}
                grabCursor={true}
                speed={1000}
                // virtualTranslate={true}
                onSlideChange={handleSlideChange}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper
                }}
                className='h-[25.825vw] w-[50.5vw]'
            >
                {arr?.map((e, index) => (
                    <SwiperSlide
                        className="!h-full rounded-[1vw] transition-all duration-1000 relative slideCheers"
                        key={index}
                        onClick={() => setIndexSlider(index)}
                    >
                        {({ isActive }) => (
                            <Image
                                className='max-w-[35.625vw] object-cover h-full rounded-[1vw] absolute top-0 left-0 transition-all duration-1000'
                                src={index % 2 === 0 ? '/images/item-tour.jpg' : '/images/weather.jpg'}
                                width={500}
                                height={500}
                            />
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>
            {arr?.length > 3 && (
                <>
                    <button
                        onClick={handlePrevSlide}
                        className='p-[1.5vw] absolute left-[-0.5vw] top-1/2 -translate-y-1/2 z-[5] brightness-0 invert'
                    >
                        <Image
                            className='object-contain w-[1.82vw] h-[0.82vw]'
                            src={'/images/btn-left.svg'}
                            alt='btn-slide'
                            width={36}
                            height={18}
                        />
                    </button>
                    <button
                        onClick={handleNextSlide}
                        className='p-[1.5vw] absolute right-[-0.5vw] top-1/2 -translate-y-1/2 z-[5] brightness-0 invert'
                    >
                        <Image
                            className='object-contain w-[1.82vw] h-[0.82vw] rotate-180'
                            src={'/images/btn-left.svg'}
                            alt='btn-slide'
                            width={36}
                            height={18}
                        />
                    </button>
                </>
            )}
        </div>
    )
}
