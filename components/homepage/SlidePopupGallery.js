'use client'
import Image from 'next/image'
import { useRef } from 'react'
import { FreeMode, Mousewheel } from 'swiper/modules'
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
                breakpoints={{
                    0: {
                        slidesPerView: 2,
                        spaceBetween: 16,
                        direction: 'vertical',
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 24,
                    },
                }}
                grabCursor={true}
                freeMode={true}
                mousewheel={true}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper
                }}
                modules={[FreeMode, Mousewheel]}
                className='lg:h-[29.08975vw] w-full max-2xl:h-[26vw] max-md:!h-fit'
            >
                {section4?.listGallery[indexTab]?.slidesImage?.map((e, index) => (
                    <SwiperSlide
                        key={index}
                        className='relative max-md:!h-[63.467vw]'
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
