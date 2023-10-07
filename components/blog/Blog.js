'use client'
import React, { useEffect, useRef, useState } from 'react'
import BlogItem from './BlogItem'
import icon from '../../public/images/route-square.svg'
import bgBlog from '../../public/images/bg-blog.jpg'
import Image from 'next/image'
import { useQuery } from '@apollo/client'
import { GET_ALL_BLOG } from '@/graphql/blog/queries'
import { useMediaQuery } from 'react-responsive'
import MenuRes from '../global/MenuRes'
import Nav from '../global/Nav'
import Banner from '../about-us/Banner'
import IconFilterDestination from '../icons/IconFilterDestination'
import FeaturesHeader from '../global/FeaturesHeader'
import NavFixed from '../global/NavFixed'
function Blog({ arrayCateInit, arrayCateSlug, dataHome, dataAboutUs, allTourHG }) {
    const [value, setValue] = useState(arrayCateSlug)
    const eleRef = useRef()
    const handleChange = (e) => {
        if (e.target.value === '') {
            setValue(arrayCateSlug)
        } else {
            setValue(e.target.value)
        }
    }
    const [activePage, setActivePage] = useState(0)
    const { data, refetch, loading } = useQuery(GET_ALL_BLOG, {
        variables: {
            offset: 0,
            size: 12,
            categorySlug: value,
        },
    })
    const handleChangePage = (index) => {
        setActivePage(index)
        refetch({
            offset: index * 12,
            size: 12,
        })
    }

    useEffect(() => {
        eleRef?.current?.scrollIntoView({ behavior: 'smooth' })
    }, [activePage])
    const allBlogData = data?.posts?.nodes
    const pageInfo = data?.posts?.pageInfo?.offsetPagination?.total
    const totalPage = Math.ceil(pageInfo / 12)

    const { header } = dataHome
    const { banner } = dataAboutUs
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
                title={'Our blog'}
            ></Banner>
            <div className='relative'>
                <div className='relative z-10'>
                    {/* <h2 className='md:pt-[9.755vw] pt-[23.53vw] md:mb-0 mb-[4.27vw] px-[8.12vw] max-md:px-[4.27vw] text-[4vw] font-[600] max-md:text-[5.86vw] capitalize'>
              our blog
            </h2> */}
                    {/* Filter */}
                    <div
                        className='mx-[8.12vw] max-md:mx-[4.27vw] flex filter-blog gap-[2.5vw]'
                        ref={eleRef}
                    >
                        <div className='flex flex-col'>
                            <span className='text-[0.875vw] text-[#9B9B9B] uppercase font-[400] max-md:hidden'>
                                Category
                            </span>
                            <div className='flex items-center'>
                                {/* <Image
                                    src={icon}
                                    width={20}
                                    height={20}
                                    className='w-[1.875vw] h-[1.875vw] max-md:w-[3.73vw] max-md:h-[3.73vw]'
                                /> */}
                                <IconFilterDestination className='w-[1.875vw] h-[1.875vw] max-md:w-[3.73vw] max-md:h-[3.73vw]' />
                                <select
                                    name=''
                                    id=''
                                    className='w-max'
                                    onChange={handleChange}
                                >
                                    <option value=''>Category</option>
                                    {arrayCateInit?.map((item, index) => (
                                        <option
                                            value={item?.slug}
                                            key={index}
                                        >
                                            {item?.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                    {/* List Blog */}
                    <div className='grid md:grid-cols-4 md:px-[8.06vw] px-[4.27vw] grid-cols-2 md:gap-x-[2.5vw] md:gap-y-[3vw] gap-x-[4.27vw] gap-y-[6.4vw] md:mt-[4vw] mt-[7.73vw]'>
                        {allBlogData?.map((item, index) => (
                            <BlogItem
                                params='blog'
                                data={item}
                                key={index}
                            />
                        ))}
                    </div>
                    <div className='flex md:gap-[0.75vw] gap-[3.2vw] justify-center items-center relative md:mt-[4.5vw] mt-[8.53vw]'>
                        {Array.from({ length: totalPage }, (_, index) => (
                            <div
                                key={index}
                                onClick={() => handleChangePage(index)}
                                className={`cursor-pointer md:w-[2.125vw] md:h-[2.125vw] w-[9.07vw] h-[9.07vw] rounded-[50%] flex justify-center items-center ${
                                    activePage === index ? 'bg-primary-70 opacity-[1]' : 'bg-orange-400 opacity-[0.2]'
                                }`}
                            >
                                <span
                                    className={`${
                                        activePage === index ? 'text-white' : 'text-[#171717]'
                                    } font-[500] text-[1vw] max-md:text-[4.26vw]`}
                                >
                                    {index + 1}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='absolute inset-0 max-md:hidden'>
                    <Image
                        src={bgBlog}
                        width={1000}
                        height={1000}
                        className='w-full h-full'
                    />
                </div>
            </div>
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

export default Blog
