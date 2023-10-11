'use client'
import classes from './WelcomeStyles.module.css'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'

const data = [
  'SUPPORT LOCAL - SUSTAINABLE TRAVEL',
  'SUPPORT LOCAL - SUSTAINABLE TRAVEL',
  'SUPPORT LOCAL - SUSTAINABLE TRAVEL',
]
const description =
  '<p>The 3 Days Epic Ha giang Loop Tour with easy rider organized by Vietnam Cheers Hostel is a must in Vietnam for any traveller. It is considered a highlight of South East Asia. <br> Explore <strong> Ma Pi Leng </strong>, one of The Big Four Passes in Vietnam, through thousands of conical limestone peaks as well as deep and meandering valleys. Party dinner, waterfall and local le at authentic Cheers Du Gia Homestay. will be the unique experience also. This is designed for adventure-seekers — those who want to experience the biggest challenge Vietnam has to offer in a safe environment with our experienced easy riders.</p>'
export default function Welcome({ overview, video }) {
  return (
    <section className='mt-[2.25rem] w-[40.625rem] my-0 mx-auto max-md:mt-[11.2rem] max-md:w-full max-lg:w-[65rem]'>
      <div className='flex flex-col items-center'>
        <h3 className='text-[#B34B1E] font-heavitas text-[1rem] leading-[1] max-md:text-[3.2rem] max-lg:text-[2.08rem]'>
          {overview?.topTitle}
        </h3>
        <h2 className='text-[#B34B1E] font-heavitas text-[3rem] mt-[0.75rem] leading-[1] max-md:text-[6.4rem] max-md:mt-[2.1rem] max-lg:text-[4.25rem]'>
          {overview?.title}
        </h2>
      </div>
      {/* <video playsInline controls src="http://cheers-cms.okhub.tech/wp-content/uploads/2023/09/video2.mp4" className="w-full mt-[5.3rem] md:hidden"></video> */}
      <iframe
        width='375'
        height='210'
        src={video?.video?.url_video || 'https://www.youtube.com/embed/2uBkJJmvots?si=Eil5E2TremgKtxo88'}
        title='YouTube video player'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowfullscreen
        className='object-cover w-full h-[56rem] mt-[5.3rem] md:hidden'
      ></iframe>
      <div
        className={classes['welcome-description']}
        dangerouslySetInnerHTML={{ __html: overview?.contentTop }}
      ></div>
      <div
        className={classes['welcome-description']}
        dangerouslySetInnerHTML={{ __html: overview?.contentBottom }}
      ></div>
      {/* <div className="px-[2.5rem] mt-[6.4rem] md:hidden">
                <Image src="/images/abMap.png" width={324} height={393.14} className="w-full"></Image>
            </div>
            <div className="md:hidden">
                <Swiper
                    slidesPerView={1.1}
                    spaceBetween={5}
                    className="!pl-[2.5rem] mt-[6.4rem]"
                >
                    {data.map((item, index) =>                 
                        <SwiperSlide className="py-[10rem] px-[7rem]" key={index}>
                            <Image src="/icons/vector50.svg" width={82} height={338} className="absolute top-0 left-0 object-contain w-full h-full">
                            </Image>
                            <span className="text-[#FFF9E7] text-[3.7rem] font-bold leading-[1.37] tracking-[0.035] relative z-[2]">{item}</span>
                        </SwiperSlide>
                    )}
                </Swiper>
            </div>
            <div className={classes['welcome-description']} dangerouslySetInnerHTML={{__html: overview?.contentTop}}></div>
            <div className={classes['welcome-description']} dangerouslySetInnerHTML={{__html: overview?.contentBottom}}></div> */}
    </section>
  )
}
