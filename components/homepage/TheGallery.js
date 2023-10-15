'use client'
import { useState } from 'react'
import SubTitle from '../global/SubTitle'
import SlideGallery from './SlideGallery'
import PopupGallery from './PopupGallery'

export default function TheGallery({ section4, allTourHG }) {
  const [isOpen, setIsOpen] = useState(false)
  const [indexTab, setIndexTab] = useState(0)
  return (
    <section className='lg:w-[87.5rem] max-lg:w-[95vw] max-md:w-full mt-[6.25rem] max-md:mt-[9rem] mx-auto'>
      <SubTitle
        subTitle={section4?.subtitle}
        title={section4?.title}
        boxClass='max-md:px-[4.27rem]'
      />
      <div data-aos='zoom-in-up'>
        <SlideGallery
          section4={section4}
          setIndexTab={setIndexTab}
          setIsOpen={setIsOpen}
        />
      </div>
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
