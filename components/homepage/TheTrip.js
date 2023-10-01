'use client'
import { useState } from 'react'
import Button from '../global/Button'
import SubTitle from '../global/SubTitle'
import { useMediaQuery } from 'react-responsive'
import { AccordionDemo } from '../ui/AccordionDemo'

export default function TheTrip({ section8 }) {
    const [active, setActive] = useState(0)
    const isMobile = useMediaQuery({ query: '(max-width: 767.9px)' })

    return (
        <section className='md:pl-[6.25vw] md:pr-[6.31vw] flex justify-between mt-[16vw] md:mt-[6.25vw] max-md:flex-col max-md:gap-[8vw] pr-[4.53333vw] pl-[4.26667vw]'>
            <div>
                <SubTitle
                    title={section8?.title}
                    subTitle={section8?.subtitle}
                />
                <Button
                    primary={true}
                    content={'BOOK NOW'}
                    className={'mt-[1.87vw] max-md:hidden'}
                />
            </div>
            <div className='flex flex-col md:gap-[0.75vw] gap-[4.27vw]'>
                <div className='flex md:gap-[5vw] max-md:justify-between'>
                    {section8?.listCategory?.map((e, index) => (
                        <div
                            onClick={() => setActive(index)}
                            className='max-md:text-center max-md:w-[43.73333vw]'
                        >
                            <h3
                                className={`md:text-[1.625vw] md:w-[26.375vw] text-[4.26667vw] md:font-semibold font-bold md:leading-[1.23] leading-[6.4vw] max-md:tracking-[0.05333vw] font-poppins text-[#B7B7B7] md:text-gray-scale-80 max-md:pb-[1.07vw] ${
                                    isMobile && active === index
                                        ? '!text-[#B34B1E] border-b max-md:border-b-[2px] border-[#B34B1E] '
                                        : ''
                                }`}
                            >
                                {e?.category}
                            </h3>
                        </div>
                    ))}
                </div>
                <div className='flex md:gap-[5vw]'>
                    {section8?.listCategory?.map((e, index) => (
                        <div
                            key={index}
                            className={`${
                                (isMobile && active === index) || !isMobile ? '' : 'hidden'
                            } md:w-[26.375vw] w-full`}
                        >
                            <p className='md:text-[0.875vw] text-[3.73333vw] font-normal leading-[1.57] md:leading-[1.57] md:mb-[1.5vw] tracking-[0.00933vw] text-gray-scale-50'>
                                {e?.description}
                            </p>
                            <AccordionDemo data={e?.listInfo} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
