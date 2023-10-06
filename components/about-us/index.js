'use client'
import Banner from "./Banner"
import TextInfinite from "./TextInfinite"
import Welcome from "./Welcome"
import Video from "./Video"
import ValueTowards from "./ValueTowards"
import Header from "../global/Header"
import { useEffect, useState } from "react"
import Nav from "../global/Nav"
import MenuRes from "../global/MenuRes"
import { useMediaQuery } from "react-responsive"
import Family from "../homepage/Family"

export default function IndexAboutUs({ data, allTourHG, dataAboutUs }){
    const { header, section6 } = data
    const {banner, overview,valueTowards, textRun, video,  } = dataAboutUs
    const isMobile = useMediaQuery({ query: '(max-width: 767.9px)' })
    const [isOpen, setIsOpen] = useState(false)
    useEffect(() => {
        if (!isOpen) {
            document.body.style.overflow = 'auto'
        } else {
            document.body.style.overflow = 'hidden'
        }
    }, [isOpen])
    return(
        <div className="relative">
            <div className="absolute w-full top-0 left-0">
                <Nav
                    setIsOpen={setIsOpen}
                    header={header}
                    allTourHG={allTourHG}
                />
            </div>
            <Banner bannerData={banner}></Banner>
            <Welcome overview={overview} video={video}></Welcome>
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