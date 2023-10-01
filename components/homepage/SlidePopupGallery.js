'use client'
import Image from 'next/image'
import { useRef } from 'react'
import { FreeMode } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function SlidePopupGallery({ section4, indexTab }) {
    const swiperRef = useRef(null)

    const handleNextSlide = () => {
        swiperRef.current?.slideNext()
    }

    const handlePrevSlide = () => {
        swiperRef.current?.slidePrev()
    }
    return (
        <div className='relative w-full h-fit'>
            <Swiper
                spaceBetween={24}
                slidesPerView={2}
                grabCursor={true}
                freeMode={true}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper
                }}
                modules={[FreeMode]}
                className='h-[29.08975vw] w-full'
            >
                {section4?.listGallery[indexTab]?.slidesImage?.map((e, index) => (
                    <SwiperSlide
                        key={index}
                        className='relative'
                    >
                        <Image
                            className='object-cover w-full h-full rounded-[1vw]'
                            src={e?.sourceUrl || '/images/gallery.jpg'}
                            alt={e?.altText || e?.title}
                            fill
                            sizes='100vw'
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            {section4?.listGallery[indexTab]?.slidesImage?.length > 2 && (
                <>
                    <button
                        onClick={handlePrevSlide}
                        className='p-[1.5vw] absolute left-[-4.5vw] top-1/2 -translate-y-1/2 z-[5]'
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
                        className='p-[1.5vw] absolute right-[-4.5vw] top-1/2 -translate-y-1/2 z-[5]'
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
