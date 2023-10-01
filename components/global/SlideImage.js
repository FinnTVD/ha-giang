'use client'
import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

// import required modules
import { FreeMode } from 'swiper/modules'
import Image from 'next/image'
function SlideImage({ listImageSlide }) {
    const swiperRef = useRef(null)
    const handleNextSlide = () => {
        swiperRef.current?.slideNext()
    }
    const handlePrevSlide = () => {
        swiperRef.current?.slidePrev()
    }

    return (
        <div className='relative'>
            <Swiper
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 24,
                    },
                }}
                grabCursor={true}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper
                }}
                modules={[FreeMode]}
            >
                {listImageSlide?.map((image, index) => (
                    <SwiperSlide key={index}>
                        <Image
                            className='md:w-[28.125vw] w-[91.73333vw] h-[63.73333vw] md:h-[19.5625vw] md:rounded-[1vw] rounded-[3.2vw]'
                            src={image?.sourceUrl || '/images/imgSlide1.jpg'}
                            alt={image?.altText || image?.title}
                            width={600}
                            height={400}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className='flex justify-between absolute w-full z-[1] top-[50%] md:px-[1vw] max-md:px-[7.2vw]'>
                <button
                    onClick={handlePrevSlide}
                    className='md:w-[1.8125vw] md:h-[0.81025vw]'
                >
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='29'
                        height='13'
                        viewBox='0 0 29 13'
                        fill='none'
                    >
                        <path
                            d='M0.940433 7.10513C0.353189 6.89787 0.353188 6.06738 0.940435 5.86011L16.0169 0.538997C16.4464 0.387408 16.8968 0.706036 16.8968 1.1615L16.8968 11.8037C16.8968 12.2592 16.4464 12.5778 16.0169 12.4262L0.940433 7.10513Z'
                            fill='#B34B1E'
                            stroke='#B34B1E'
                        />
                        <circle
                            cx='24.3593'
                            cy='6.48432'
                            r='3.64057'
                            stroke='#B34B1E'
                            strokeWidth='2'
                        />
                    </svg>
                </button>

                <button
                    onClick={handleNextSlide}
                    className='md:w-[1.8125vw] md:h-[0.81025vw]'
                >
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='29'
                        height='14'
                        viewBox='0 0 29 14'
                        fill='none'
                    >
                        <path
                            d='M28.0596 7.68325C28.6468 7.47599 28.6468 6.6455 28.0596 6.43824L12.9831 1.11712C12.5536 0.965533 12.1032 1.28416 12.1032 1.73963L12.1032 12.3819C12.1032 12.8373 12.5536 13.156 12.9831 13.0044L28.0596 7.68325Z'
                            fill='#B34B1E'
                            stroke='#B34B1E'
                        />
                        <circle
                            cx='4.64057'
                            cy='4.64057'
                            r='3.64057'
                            transform='matrix(-1 0 0 1 9.28125 2.42188)'
                            stroke='#B34B1E'
                            strokeWidth='2'
                        />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default SlideImage
