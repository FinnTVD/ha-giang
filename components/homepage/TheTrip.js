'use client'
import { useState } from 'react'
import Button from '../global/Button'
import SubTitle from '../global/SubTitle'
import { useMediaQuery } from 'react-responsive'
import { AccordionDemo } from '../ui/AccordionDemo'

export default function TheTrip() {
    const [active,setActive] = useState(1)
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

    return (
        <section className='md:pl-[6.25vw] md:pr-[6.31vw] flex justify-between mt-[16vw] md:mt-[6.25vw] max-md:flex-col max-md:gap-[8vw] pr-[4.53333vw] pl-[4.26667vw]'>
            <div>
                <SubTitle
                    title={'The Trip'}
                    subTitle={'faq about'}
                />
                <Button
                    primary={true}
                    content={'BOOK NOW'}
                    className={'mt-[1.87vw]'}
                />
            </div>
            {/* <div className='flex md:gap-x-[5vw] max-md:justify-between '>
                <div className='md:w-[26.375vw]'> 
                    <div className='mb-[1.5vw]'>
                        <h3 className='mb-[0.75vw] md:text-[1.625vw] text-[4.26667vw] md:font-semibold font-bold md:leading-[1.23] leading-[6.4vw] max-md:tracking-[0.05333vw] font-poppins text-gray-scale-80'>
                            NATURE
                        </h3>
                        <p className=' text-[0.875vw] font-normal leading-[1.57] tracking-[0.00219rem] text-gray-scale-50'>
                            Browse our full service agency services and prices or contact us for custom quotes.
                        </p>
                    </div>
                    <AccordionDemo />
                </div>
                <div className='md:w-[26.375vw]'>
                    <div className='mb-[1.5vw]'>
                        <h3 className='mb-[0.75vw] md:text-[1.625vw] text-[4.26667vw] md:font-semibold font-bold md:leading-[1.23] leading-[6.4vw] max-md:tracking-[0.05333vw] font-poppins text-gray-scale-80'>
                            JOURNEY
                        </h3>
                        <p className='text-[0.875vw] font-normal leading-[1.57] tracking-[0.00219rem] text-gray-scale-50'>
                            Find inspiration and discover amazing knowledge for successful site building.
                        </p>
                    </div>
                    <AccordionDemo />
                </div>
            </div> */}
            <div className='flex flex-col md:gap-[0.75vw] gap-[4.27vw]'>
                <div className='flex md:gap-[5vw] max-md:justify-between'>
                    <div  onClick={()=>setActive(1)}  className='max-md:text-center max-md:w-[43.73333vw]'>
                        <h3 className={`md:text-[1.625vw] md:w-[26.375vw] text-[4.26667vw] md:font-semibold font-bold md:leading-[1.23] leading-[6.4vw] max-md:tracking-[0.05333vw] font-poppins text-[#B7B7B7] md:text-gray-scale-80 ${active === 1 ? '!text-[#B34B1E] border-b border-[#B34B1E] ' : ''}`}>
                            NATURE
                        </h3>
                    </div>
                    <div  onClick={()=>setActive(2)}  className='max-md:text-center max-md:w-[43.73333vw]'>
                    <h3 className={`md:text-[1.625vw] md:w-[26.375vw] text-[4.26667vw] md:font-semibold font-bold md:leading-[1.23] leading-[6.4vw] max-md:tracking-[0.05333vw] font-poppins text-[#B7B7B7] md:text-gray-scale-80 ${active === 2 ? '!text-[#B34B1E] border-b border-[#B34B1E] ' : ''}`}>
                            JOURNEY
                        </h3>
                    </div>
                </div>
                <div className='flex md:gap-[5vw]'>
                    {
                        (active === 1 && isMobile || !isMobile) && (<div className='md:w-[26.375vw] w-full'>
                        <p className='md:text-[0.875vw] text-[3.73333vw] font-normal  leading-[5.86667vw] md:leading-[1.57] md:mb-[1.5vw] tracking-[0.00219rem] text-gray-scale-50'>
                            Find inspiration and discover amazing knowledge for successful site building.
                        </p>
                        <AccordionDemo />
                    </div>)
                    }
                    {
                        (active === 2 && isMobile || !isMobile) && (<div className='md:w-[26.375vw] w-full'>
                        <p className='md:text-[0.875vw] text-[3.73333vw] font-normal  leading-[5.86667vw] md:leading-[1.57] md:mb-[1.5vw] tracking-[0.00219rem] text-gray-scale-50'>
                            Browse our full service agency services and prices or contact us for custom quotes.
                        </p>
                        <AccordionDemo />
                    </div>)
                    }
                </div>
            </div>
        </section>
    )
}
