'use client'
import Banner from './Banner'
import TextInfinite from './TextInfinite'
import Welcome from './Welcome'
import Video from './Video'
import ValueTowards from './ValueTowards'
import { useEffect, useState } from 'react'
import Nav from '../global/Nav'
import MenuRes from '../global/MenuRes'
import Family from '../homepage/Family'
import FeaturesHeader from '../global/FeaturesHeader'
import NavFixed from '../global/NavFixed'
import CheersTour from '../homepage/CheersTour'
import MenuDown from '../global/MenuDown'

export default function IndexAboutUs({ data, allTourHG, dataAboutUs, viewport }) {
  const header = data?.header
  const section6 = data?.section6
  const section2 = data?.section2
  const banner = dataAboutUs?.banner
  const overview = dataAboutUs?.overview
  const valueTowards = dataAboutUs?.valueTowards
  const textRun = dataAboutUs?.textRun
  const video = dataAboutUs?.video

  const isMobile = viewport?.includes('tablet')
  const isMobile2 = viewport?.includes('mobile')

  const [isOpen, setIsOpen] = useState(false)
  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = 'auto'
    } else {
      document.body.style.overflow = 'hidden'
    }
  }, [isOpen])
  return (
    <>
      <header className='relative'>
        <div className='absolute top-0 left-0 w-full'>
          <Nav
            setIsOpen={setIsOpen}
            header={header}
            allTourHG={allTourHG}
          />
        </div>
        <NavFixed
          setIsOpen={setIsOpen}
          header={header}
          allTourHG={allTourHG}
        />
        <FeaturesHeader
          header={header}
          allTourHG={allTourHG}
          viewport={viewport}
        />
        <Banner
          bannerData={banner}
          title={banner?.heading}
        ></Banner>
        {isMobile && (
          <MenuRes
            setIsOpen={setIsOpen}
            isOpen={isOpen}
            header={header}
            allTourHG={allTourHG}
          />
        )}

        {isMobile2 && (
          <MenuDown
            allTourHG={allTourHG}
            header={header}
            setIsOpen={setIsOpen}
            viewport={viewport}
          />
        )}
      </header>
      <main>
        <Welcome
          overview={overview}
          video={video}
        ></Welcome>

        <CheersTour
          section2={section2}
          allTourHG={allTourHG}
          isOther={true}
          viewport={viewport}
        />

        <ValueTowards valueTowards={valueTowards}></ValueTowards>
        <TextInfinite textRun={textRun}></TextInfinite>
        <Video video={video}></Video>
        <Family
          section6={section6}
          viewport={viewport}
        />
      </main>
    </>
  )
}
