'use client'
import Banner from './Banner'
import TextInfinite from './TextInfinite'
import Welcome from './Welcome'
import Video from './Video'
import ValueTowards from './ValueTowards'
import { useEffect, useState } from 'react'
import Nav from '../global/Nav'
import MenuRes from '../global/MenuRes'
import { useMediaQuery } from 'react-responsive'
import Family from '../homepage/Family'
import FeaturesHeader from '../global/FeaturesHeader'
import NavFixed from '../global/NavFixed'
import CheersTour from '../homepage/CheersTour'

export default function IndexAboutUs({ data, allTourHG, dataAboutUs }) {
    const { header, section6, section2 } = data
    const { banner, overview, valueTowards, textRun, video } = dataAboutUs
    const isMobile = useMediaQuery({ query: '(max-width: 767.9px)' })
    const [isOpen, setIsOpen] = useState(false)
    useEffect(() => {
        if (!isOpen) {
            document.body.style.overflow = 'auto'
        } else {
            document.body.style.overflow = 'hidden'
        }
    }, [isOpen])
    return (
        <div className='relative'>
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
            />
            <Banner
                bannerData={banner}
                title={banner?.heading}
            ></Banner>
            <Welcome
                overview={overview}
                video={video}
            ></Welcome>
            {isMobile && (
                <CheersTour
                    section2={section2}
                    allTourHG={allTourHG}
                    isOther={true}
                />
            )}
            <ValueTowards valueTowards={valueTowards}></ValueTowards>
            <TextInfinite textRun={textRun}></TextInfinite>
            <Video video={video}></Video>
            <Family section6={section6} />
            {isMobile && (
                <MenuRes
                    setIsOpen={setIsOpen}
                    isOpen={isOpen}
                    header={header}
                    allTourHG={allTourHG}
                />
            )}
        </div>
    )
}
