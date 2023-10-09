'use client'

import TwitterShare from '../blogDetail/TwitterShare'
import FaceBookShare from '../blogDetail/FaceBookShare'
import LinkedInShare from '../blogDetail/LinkedInShare'
import moment from 'moment'
import { useMediaQuery } from 'react-responsive'
import MenuRes from '../global/MenuRes'
import Nav from '../global/Nav'
import { useState, useEffect } from 'react'
import FeaturesHeader from '../global/FeaturesHeader'
import NavFixed from '../global/NavFixed'
import Image from 'next/image'

function BlogDetail({ data, dataHome, allTourHG }) {
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
          header={dataHome?.header}
          allTourHG={allTourHG}
        />
      </div>

      <NavFixed
        setIsOpen={setIsOpen}
        header={dataHome?.header}
        allTourHG={allTourHG}
      />

      <FeaturesHeader
        header={dataHome?.header}
        allTourHG={allTourHG}
      />

      <div className='relative pt-[11.25rem] pb-[4rem] max-md:px-0 max-md:pt-[49rem]'>
        <Image
          width={1600}
          height={567}
          alt={data?.featuredImage?.node?.altText || data?.featuredImage?.node?.title}
          src={data?.featuredImage?.node?.sourceUrl || '/images/t11.jpg'}
          className='absolute top-0 left-0 w-full h-full object-cover z-[-1]'
        />
        <div className='bg-white bg-opacity-[0.85] absolute w-full h-full left-0 top-0'></div>
        <Image
          width={1600}
          height={435}
          alt='about-us-overlay'
          src='/images/abcloud.png'
          className='absolute bottom-0 left-0 w-full'
        />
        <div
          className={`max-md:text-[16.5rem] relative text-center font-heavitas text-[11.625rem] uppercase leading-[1]`}
          style={{
            backgroundImage: `url(${data?.featuredImage?.node?.sourceUrl || '/images/t11.jpg'})`,
            backgroundRepeat: 'repeat',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundPosition: 'center',
          }}
        >
          {data?.destination?.nodes[0]?.name || data?.categories?.nodes[0]?.name || 'discovery ha giang'}
        </div>
      </div>

      <div>
        <div className='max-md:mx-[4.27rem] mx-[8.12rem] mt-[8rem]'>
          <h2 className=' text-[#171717] max-md:text-[5.867rem] text-[4rem] font-semibold capitalize md:leading-[110%] leading-[120%] '>
            {data?.title}
          </h2>
          <div className='flex items-center md:mt-[1.375rem] mt-[2.13rem]'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='17'
              viewBox='0 0 16 17'
              fill='none'
            >
              <path
                d='M8 10.167C7.76389 10.167 7.56597 10.0871 7.40625 9.92741C7.24653 9.76768 7.16667 9.56977 7.16667 9.33366C7.16667 9.09755 7.24653 8.89963 7.40625 8.73991C7.56597 8.58018 7.76389 8.50032 8 8.50032C8.23611 8.50032 8.43403 8.58018 8.59375 8.73991C8.75347 8.89963 8.83333 9.09755 8.83333 9.33366C8.83333 9.56977 8.75347 9.76768 8.59375 9.92741C8.43403 10.0871 8.23611 10.167 8 10.167ZM4.66667 10.167C4.43056 10.167 4.23264 10.0871 4.07292 9.92741C3.91319 9.76768 3.83333 9.56977 3.83333 9.33366C3.83333 9.09755 3.91319 8.89963 4.07292 8.73991C4.23264 8.58018 4.43056 8.50032 4.66667 8.50032C4.90278 8.50032 5.10069 8.58018 5.26042 8.73991C5.42014 8.89963 5.5 9.09755 5.5 9.33366C5.5 9.56977 5.42014 9.76768 5.26042 9.92741C5.10069 10.0871 4.90278 10.167 4.66667 10.167ZM11.3333 10.167C11.0972 10.167 10.8993 10.0871 10.7396 9.92741C10.5799 9.76768 10.5 9.56977 10.5 9.33366C10.5 9.09755 10.5799 8.89963 10.7396 8.73991C10.8993 8.58018 11.0972 8.50032 11.3333 8.50032C11.5694 8.50032 11.7674 8.58018 11.9271 8.73991C12.0868 8.89963 12.1667 9.09755 12.1667 9.33366C12.1667 9.56977 12.0868 9.76768 11.9271 9.92741C11.7674 10.0871 11.5694 10.167 11.3333 10.167ZM8 13.5003C7.76389 13.5003 7.56597 13.4205 7.40625 13.2607C7.24653 13.101 7.16667 12.9031 7.16667 12.667C7.16667 12.4309 7.24653 12.233 7.40625 12.0732C7.56597 11.9135 7.76389 11.8337 8 11.8337C8.23611 11.8337 8.43403 11.9135 8.59375 12.0732C8.75347 12.233 8.83333 12.4309 8.83333 12.667C8.83333 12.9031 8.75347 13.101 8.59375 13.2607C8.43403 13.4205 8.23611 13.5003 8 13.5003ZM4.66667 13.5003C4.43056 13.5003 4.23264 13.4205 4.07292 13.2607C3.91319 13.101 3.83333 12.9031 3.83333 12.667C3.83333 12.4309 3.91319 12.233 4.07292 12.0732C4.23264 11.9135 4.43056 11.8337 4.66667 11.8337C4.90278 11.8337 5.10069 11.9135 5.26042 12.0732C5.42014 12.233 5.5 12.4309 5.5 12.667C5.5 12.9031 5.42014 13.101 5.26042 13.2607C5.10069 13.4205 4.90278 13.5003 4.66667 13.5003ZM11.3333 13.5003C11.0972 13.5003 10.8993 13.4205 10.7396 13.2607C10.5799 13.101 10.5 12.9031 10.5 12.667C10.5 12.4309 10.5799 12.233 10.7396 12.0732C10.8993 11.9135 11.0972 11.8337 11.3333 11.8337C11.5694 11.8337 11.7674 11.9135 11.9271 12.0732C12.0868 12.233 12.1667 12.4309 12.1667 12.667C12.1667 12.9031 12.0868 13.101 11.9271 13.2607C11.7674 13.4205 11.5694 13.5003 11.3333 13.5003ZM1.75 16.8337C1.41667 16.8337 1.125 16.7087 0.875 16.4587C0.625 16.2087 0.5 15.917 0.5 15.5837V2.66699C0.5 2.33366 0.625 2.04199 0.875 1.79199C1.125 1.54199 1.41667 1.41699 1.75 1.41699H3.10417V0.166992H4.45833V1.41699H11.5417V0.166992H12.8958V1.41699H14.25C14.5833 1.41699 14.875 1.54199 15.125 1.79199C15.375 2.04199 15.5 2.33366 15.5 2.66699V15.5837C15.5 15.917 15.375 16.2087 15.125 16.4587C14.875 16.7087 14.5833 16.8337 14.25 16.8337H1.75ZM1.75 15.5837H14.25V6.62532H1.75V15.5837Z'
                fill='#171717'
              />
            </svg>
            <span className='md:ml-[0.66rem] ml-[1.067rem] text-[#171717] font-manrope md:text-[1rem] md:mr-[1.75rem] mr-[4.8rem] text-[3.2rem] leading-[130%] '>
              {moment(data?.date)?.format('DD MMMM YYYY')}
            </span>
            {/* <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='20'
                            height='21'
                            viewBox='0 0 20 21'
                            fill='none'
                        >
                            <path
                                d='M10.0007 10.4795C9.08398 10.4795 8.33398 10.1878 7.75065 9.60449C7.16732 9.02116 6.87565 8.27116 6.87565 7.35449C6.87565 6.43783 7.16732 5.68783 7.75065 5.10449C8.33398 4.52116 9.08398 4.22949 10.0007 4.22949C10.9173 4.22949 11.6673 4.52116 12.2507 5.10449C12.834 5.68783 13.1257 6.43783 13.1257 7.35449C13.1257 8.27116 12.834 9.02116 12.2507 9.60449C11.6673 10.1878 10.9173 10.4795 10.0007 10.4795ZM3.33398 17.167V15.2087C3.33398 14.6809 3.46593 14.2295 3.72982 13.8545C3.99371 13.4795 4.33398 13.1948 4.75065 13.0003C5.68121 12.5837 6.57357 12.2712 7.42773 12.0628C8.2819 11.8545 9.13954 11.7503 10.0007 11.7503C10.8618 11.7503 11.7159 11.858 12.5632 12.0732C13.4104 12.2885 14.2993 12.5975 15.2298 13.0003C15.6604 13.1948 16.0076 13.4795 16.2715 13.8545C16.5354 14.2295 16.6673 14.6809 16.6673 15.2087V17.167H3.33398Z'
                                fill='#171717'
                            />
                        </svg>
                        <span className='ml-[0.25rem]  text-[#171717] font-manrope md:text-[1rem] text-[3.2rem] leading-[130%] '>
                            Trinh Tran
                        </span> */}
          </div>
          <div className='w-full md:mt-[1.31rem] mt-[5.067rem] h-[1px] bg-[#44444424]'></div>
        </div>
        <div className='mx-[16.19rem] max-md:mx-[4.27rem]'>
          {/* <div className='flex md:gap-[0.5rem] gap-[2.13rem] md:mb-[1rem] max-md:my-[4.27rem] mt-[1.56rem] mb-[1rem]'>
            <div className='md:h-[1.875rem] md:px-[1rem] md:py-[0.25rem] py-[1.067rem] px-[4.27rem] flex items-center justify-center md:gap-[0.625rem] md:rounded-[0.25rem] rounded-[1.067rem] bg-[#FFD220]'>
              <span className='text-[#171717] text-center md:text-[0.75rem] text-[3.2rem] font-medium leading-[150%]'>
                Tip and Review
              </span>
            </div>
            <div className='md:h-[1.875rem] md:px-[1rem] md:py-[0.25rem] py-[1.067rem] px-[4.27rem] flex items-center justify-center md:gap-[0.625rem] md:rounded-[0.25rem] rounded-[1.067rem] bg-[#FFD220]'>
              <span className='text-[#171717] text-center md:text-[0.75rem] text-[3.2rem] font-medium leading-[150%]'>
                Travel
              </span>
            </div>
          </div> */}
          <div
            className='content-detail'
            dangerouslySetInnerHTML={{ __html: `${data?.content}` }}
          ></div>
          <div className='w-full md:mt-[1.31rem] mt-[5.067rem] md:mb-[1.62rem] mb-[3.73rem] h-[1px] bg-[#44444424]'></div>
          <div className='flex items-center justify-end'>
            <span className='text-[#171717]  md:text-[0.875rem] text-[3.73rem] font-bold md:leading-[1.25] leading-[1.42] uppercase md:mr-[0.81rem] mr-[3.47rem]'>
              share on it:
            </span>
            <div className='flex items-center'>
              <TwitterShare
                url={data?.link}
                title={data?.title}
              />
              <FaceBookShare
                url={data?.link}
                title={data?.title}
              />
              <LinkedInShare
                url={data?.link}
                title={data?.title}
              />
            </div>
          </div>
        </div>
      </div>

      {isMobile && (
        <MenuRes
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          header={dataHome?.header}
          allTourHG={allTourHG}
        />
      )}
    </div>
  )
}

export default BlogDetail
