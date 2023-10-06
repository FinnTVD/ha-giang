'use client'
import Image from "next/image"
import { useRef, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"

const data= [{picture: "/images/value1.png", icon: "/icons/safe.svg", title: "SAFE AND COMFORTABLE", description:"Nature cannot be overlooked when trekking, camping, or motorbike tours, which are tourism activities with many potential risks and challenges. What Travel Up always tries its best to do is to ensure maximum safety so that each trip can be fully experienced. That goal requires us to improve our knowledge every day, be meticulous in each program, as well as equip the tourists on the tour with not only necessary items but also a spirit of vigilance. and ready to conquer."},
{picture: "/images/value2.png", icon: "/icons/profess.svg", title: "SAFE AND COMFORTABLE", description:"Nature cannot be overlooked when trekking, camping, or motorbike tours, which are tourism activities with many potential risks and challenges. What Travel Up always tries its best to do is to ensure maximum safety so that each trip can be fully experienced. That goal requires us to improve our knowledge every day, be meticulous in each program, as well as equip the tourists on the tour with not only necessary items but also a spirit of vigilance. and ready to conquer."},
{picture: "/images/value3.png", icon: "/icons/cloud.svg", title: "SAFE AND COMFORTABLE", description:"Nature cannot be overlooked when trekking, camping, or motorbike tours, which are tourism activities with many potential risks and challenges. What Travel Up always tries its best to do is to ensure maximum safety so that each trip can be fully experienced. That goal requires us to improve our knowledge every day, be meticulous in each program, as well as equip the tourists on the tour with not only necessary items but also a spirit of vigilance. and ready to conquer."},
{picture: "/images/value4.png", icon: "/icons/connect.svg", title: "SAFE AND COMFORTABLE", description:"Nature cannot be overlooked when trekking, camping, or motorbike tours, which are tourism activities with many potential risks and challenges. What Travel Up always tries its best to do is to ensure maximum safety so that each trip can be fully experienced. That goal requires us to improve our knowledge every day, be meticulous in each program, as well as equip the tourists on the tour with not only necessary items but also a spirit of vigilance. and ready to conquer."},
]
export default function ValueTowards({valueTowards}){
    const swiper1 = useRef();
    const swiper2 = useRef();
    const swiper3 = useRef();
    const [indexSlider, setIndexSlider] = useState(0)
    const handleSlideChange = (swiper) => {
        const index = swiper.realIndex
        setIndexSlider(swiper.realIndex)
        swiper1.current.slideToLoop(index)
        swiper2.current.slideToLoop(index)
        swiper3.current.slideToLoop(index)
    }
    let dupData = []
    if(valueTowards){
        for(let i=0; i<2; i++){
            valueTowards?.content?.forEach((item,index) => {
                dupData.push(item)
            })
        }
    }
    return(
        <section className="mt-[6.25vw] px-[6.25vw] max-md:px-0">
            <div className="flex flex-col items-center">
                <h3 className="text-[#B34B1E] font-heavitas text-[1vw] leading-[1] max-md:text-[3.2vw]"> {valueTowards?.topTitle} </h3>
                <h2 className="text-[#B34B1E] font-heavitas text-[3vw] mt-[0.75vw] leading-[1] max-md:text-[6.4vw] max-md:mt-[2.1vw]"> {valueTowards?.title} </h2>
            </div>
            <div className="mt-[2.5vw] flex flex-col gap-[8.375vw] max-md:hidden">
                {valueTowards?.content.map((item, index) => 
                    <div className={`${index%2==0 ? "flex-row" : "flex-row-reverse"} flex gap-[4.75vw]`} key={index}>
                        <Image alt="value-towards-picture" src={item?.image?.sourceUrl} width={688} height={431} className="w-[43vw] flex-1 h-[26.9375vw] rounded-[1vw] object-cover"></Image>
                        <div className="flex relative flex-1 items-start mt-[4.43vw]">
                            <div className="flex justify-center items-center w-[13.625vw] h-[13.625vw] rounded-[50%] flex-shrink-0" style={{background: 'linear-gradient(180deg, rgba(246, 185, 0, 0.60) 7.88%, rgba(255, 255, 255, 0.00) 98.49%)', backdropFilter: 'blur(1.6vw)'}}>
                                <Image alt="vale-towards-icon" src={item?.icon?.sourceUrl} width={218} height={218} className="h-[6.25vw] w-auto"></Image>
                            </div>
                            <div className="pt-[5vw] ml-[-2vw] relative z-[2]">
                                <h3 className="text-[#05320C] text-[1.625vw] font-bold leading-[1.23] font-poppins">{item?.title}</h3>
                                <p className="mt-[1.25vw] text-[#727272] text-[0.875vw] leading-[1.57] tracking-[0.035] font-poppins">{item?.content}</p>
                            </div>
                            {(index+1 <= data.length-1 && index%2===0 ) && 
                                <svg className="absolute top-[12.625vw] right-[31.5125vw] h-auto w-[48.3125vw]" xmlns="http://www.w3.org/2000/svg" width="777" height="360" viewBox="0 0 777 360" fill="none">
                                    <path d="M775 0V205.466C775 209.884 771.418 213.466 767 213.466H9.99999C5.58171 213.466 2 217.048 2 221.466V286.733V360" stroke="#FED35F" stroke-width="3" stroke-dasharray="24 24"/>
                                </svg>          
                            }
                            {(index+1 <= data.length-1 && index%2!==0 ) && 
                                <svg className="absolute top-[12.625vw] left-[6.6125vw] h-auto w-[48.3125vw]" xmlns="http://www.w3.org/2000/svg" width="777" height="360" viewBox="0 0 777 360" fill="none">
                                    <path d="M2 0V205.17C2 209.588 5.58172 213.17 10 213.17H767C771.418 213.17 775 216.751 775 221.17V286.335V359.5" stroke="#FED35F" stroke-width="3" stroke-dasharray="24 24"/>
                                </svg>
                            }
                        </div>
                    </div>
                )}
            </div>
            <div className="md:hidden mt-[5.3vw]">
                <Swiper 
                    loop
                    onBeforeInit={(swiper) => {
                        swiper1.current = swiper
                    }}
                    onSlideChange={handleSlideChange}
                    className="h-[57.3vw]"
                >
                    {dupData?.map((item, index) => 
                        <SwiperSlide className="px-[2.5vw]" key={index}>
                            <Image src={item?.image?.sourceUrl} width={343} height={215} className="w-full h-full object-cover rounded-[2vw]"></Image>
                        </SwiperSlide>
                    )}                  
                </Swiper>
                <Swiper 
                    loop
                    onBeforeInit={(swiper) => {
                        swiper2.current = swiper
                    }}
                    onSlideChange={handleSlideChange}
                    slidesPerView={2.2}
                    spaceBetween={20}
                    className="!pl-[2.5vw] mt-[5.3vw]"
                >
                    {dupData?.map((item, index) => 
                        <SwiperSlide className="!flex flex-col items-center" key={index}>
                            <div className="flex justify-center items-center w-[34vw] h-[34vw] rounded-[50%]" style={{background: index===indexSlider && 'linear-gradient(180deg, rgba(246, 185, 0, 0.60) 7.88%, rgba(255, 255, 255, 0.00) 98.49%)', backdropFilter: 'blur(6.9vw)'}}>
                                <Image src={item?.icon?.sourceUrl} width={128} height={128} className="w-auto h-[12.2vw] object-cover"></Image>
                            </div>
                            <h3 className="text-[#05320C] text-[3.7vw] font-bold leading-[1.23] font-poppins mt-[-4vw] text-center relative z-[2]">{item?.title}</h3>
                        </SwiperSlide>
                    )}
                </Swiper>
                <Swiper 
                    loop
                    onBeforeInit={(swiper) => {
                        swiper3.current = swiper
                    }}
                    onSlideChange={handleSlideChange}
                    className="mt-[5.3vw]"
                >
                    {dupData.map((item, index) => 
                        <SwiperSlide className="px-[2.5vw]" key={index}>
                            <p className="text-[#727272] text-[3.7vw] leading-[1.57] tracking-[0.035] font-poppins text-center">{item?.content}</p>
                        </SwiperSlide>
                    )}
                </Swiper>
            </div>
        </section>
    )
}