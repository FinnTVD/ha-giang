'use client'
import Image from 'next/image'
import { memo } from 'react'
import { FreeMode } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const SlideGallery = ({ section4, setIsOpen, setIndexTab }) => {
    return (
        <Swiper
            breakpoints={{
                0: {
                    slidesPerView: 'auto',
                    spaceBetween: 16,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 24,
                },
            }}
            freeMode={true}
            modules={[FreeMode]}
            className='h-[28.75vw] mt-[1.88vw] max-md:mt-[5.33vw] max-md:h-[114.13333vw] max-md:!px-[4.27vw]'
        >
            {section4?.listGallery?.map((e, index) => (
                <SwiperSlide
                    key={index}
                    className='cursor-pointer group max-md:!w-[82.4vw]'
                    onClick={() => {
                        setIsOpen(true)
                        setIndexTab(index)
                    }}
                >
                    <div className='w-full h-full relative rounded-[1vw] overflow-hidden max-md:rounded-[3.2vw]'>
                        <Image
                            className='object-cover z-0 group-hover:scale-110 transition-all duration-500'
                            src={e?.thumnail?.sourceUrl || '/images/gallery.jpg'}
                            alt={e?.thumnail?.altText || e?.thumnail?.title}
                            fill
                            sizes='50vw'
                        />
                        <svg
                            className='w-[11vw] h-[11vw] absolute top-1/2 left-1/2 -translate-x-1/2 z-[1] -translate-y-1/2 group-hover:opacity-0 transition-all duration-300 max-md:hidden'
                            xmlns='http://www.w3.org/2000/svg'
                            width='176'
                            height='176'
                            viewBox='0 0 176 176'
                            fill='none'
                        >
                            <circle
                                cx='88'
                                cy='88'
                                r='87'
                                stroke='white'
                                strokeWidth='2'
                                strokeLinejoin='round'
                                strokeDasharray='10 10'
                            />
                        </svg>
                        <div className='w-[11vw] h-[11vw] x-[2] absolute lg:top-1/2 left-1/2 -translate-x-1/2 lg:-translate-y-1/2 group-hover:opacity-100 opacity-0 transition-all duration-300 bg-[#CDE82B99] backdrop-blur-[3px] rounded-full max-md:w-[73.6vw] max-md:h-[73.6vw] max-md:bottom-[-44.8vw] max-md:opacity-100'></div>
                        <span className='absolute lg:top-1/2 capitalize left-1/2 -translate-x-1/2 lg:-translate-y-1/2 text-white z-[5] text-[1.25vw] font-semibold leading-[1.2] tracking-[0.00188vw] max-md:bottom-[8vw] max-md:text-[5.33vw] max-md:leading-[1.2] max-md:tracking-[0.008vw]'>
                            {e?.category}
                        </span>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default memo(SlideGallery)
