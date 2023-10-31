'use client'
import { useState } from 'react'
import SubTitle from '../global/SubTitle'
import SlideGallery from './SlideGallery'
import PopupGallery from './PopupGallery'

// const handleArrayImg = (arr) => {
//   if (Array.isArray(arr)) return 'bac'
//   const a = []
//   for (let index = 0; index < arr.length; index++) {
//     a.concat(arr[index]?.slidesImage)
//     console.log(
//       '🚀 ~ file: TheGallery.js:12 ~ handleArrayImg ~ a.concat(arr[index]?.slidesImage):',
//       a.concat(arr[index]?.slidesImage),
//     )
//   }
//   return a
// }

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
      {/* <div
        className={`lg:h-[29.08975rem] md:h-[34rem] w-full max-2xl:h-[26rem] max-md:h-[121rem] max-md:rounded-[4.267rem] hidden`}
      >
        {section4?.listGallery[indexTab]?.slidesImage?.map((e, index) => (
          <div
            key={index}
            className='relative h-full w-ful'
          >
            <Image
              className='object-cover w-full h-full rounded-[1rem] max-md:rounded-[4.267rem]'
              src={e?.sourceUrl || '/images/gallery.jpg'}
              alt={e?.altText || e?.title}
              fill
              sizes='100vw'
            />
          </div>
        ))}
      </div> */}
    </section>
  )
}
