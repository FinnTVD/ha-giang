'use client'
import { useState } from 'react'
import SubTitle from '../global/SubTitle'
import SlideGallery from './SlideGallery'
import PopupGallery from './PopupGallery'

export default function TheGallery({ section4, allTourHG }) {
  const [isOpen, setIsOpen] = useState(false)
  const [indexTab, setIndexTab] = useState(0)
  return (
    <section className='lg:w-[87.5rem] max-md:w-full mt-[6.25rem] max-md:mt-[16rem] mx-auto'>
      <SubTitle
        subTitle={section4?.subtitle}
        title={section4?.title}
        boxClass='max-md:px-[4.27rem]'
      />
      <SlideGallery
        section4={section4}
        setIndexTab={setIndexTab}
        setIsOpen={setIsOpen}
      />
      <PopupGallery
        section4={section4}
        indexTab={indexTab}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        setIndexTab={setIndexTab}
        allTourHG={allTourHG}
      />
    </section>
  )
}
