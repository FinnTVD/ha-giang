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
  const [activePage, setActivePage] = useState(0)
  const { data, refetch, loading } = useQuery(GET_ALL_BLOG, {
    variables: {
      offset: 0,
      size: 12,
      categorySlug: value,
    },
  })

  useEffect(() => {
    if (activePage === 0) return
    eleRef?.current?.scrollIntoView({ behavior: 'smooth' })
  }, [activePage])

  const handleChange = (e) => {
    if (e.target.value === '') {
      setValue(arrayCateSlug)
    } else {
      setValue(e.target.value)
    }
  }

  const handleChangePage = (index) => {
    setActivePage(index)
    refetch({
      offset: index * 12,
      size: 12,
    })
  }

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
    <div className='relative font-poppins'>
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
          {/* <h2 className='md:pt-[9.755rem] pt-[23.53rem] md:mb-0 mb-[4.27rem] px-[8.12rem] max-md:px-[4.27rem] text-[4rem] font-[600] max-md:text-[5.86rem] capitalize'>
              our blog
            </h2> */}
          {/* Filter */}
          <div
            className='mx-[8.12rem] max-md:mx-[4.27rem] flex filter-blog gap-[2.5rem] max-lg:mx-[3.2rem]'
            ref={eleRef}
          >
            <div className='flex flex-col'>
              <span className='text-[0.875rem] text-[#9B9B9B] uppercase font-[400] max-lg:hidden'>Category</span>
              <div className='flex items-center'>
                {/* <Image
                                    src={icon}
                                    width={20}
                                    height={20}
                                    className='w-[1.875rem] h-[1.875rem] max-md:w-[3.73rem] max-md:h-[3.73rem]'
                                /> */}
                <IconFilterDestination className='w-[1.875rem] h-[1.875rem] max-md:w-[3.73rem] max-md:h-[3.73rem] max-lg:w-[3rem] max-lg:h-[3rem]' />
                <select
                  name=''
                  id=''
                  className='w-max'
                  onChange={handleChange}
                >
                  <option value=''>All</option>
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
          <div className='grid lg:grid-cols-4 md:px-[8.06rem] px-[4.27rem] grid-cols-2 lg:gap-x-[2.5rem] md:gap-y-[3rem] gap-x-[4.27rem] gap-y-[6.4rem] md:mt-[4rem] mt-[7.73rem] md:px-[3.2rem]'>
            {allBlogData?.map((item, index) => (
              <BlogItem
                params='blog'
                data={item}
                key={index}
              />
            ))}
          </div>
          <div className='flex md:gap-[0.75rem] gap-[3.2rem] justify-center items-center relative md:mt-[4.5rem] mt-[8.53rem]'>
            {Array.from({ length: totalPage }, (_, index) => (
              <div
                key={index}
                onClick={() => handleChangePage(index + 1)}
                className={`cursor-pointer lg:w-[2.125rem] lg:h-[2.125rem] w-[9.07rem] h-[9.07rem] rounded-[50%] flex justify-center items-center md:w-[4rem] md:h-[4rem] ${
                  activePage === index ? 'bg-primary-70 opacity-[1]' : 'bg-orange-400 opacity-[0.2]'
                }`}
              >
                <span
                  className={`${
                    activePage === index ? 'text-white' : 'text-[#171717]'
                  } font-[500] text-[1rem] max-md:text-[4.26rem] max-lg:text-[2.5rem]`}
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
