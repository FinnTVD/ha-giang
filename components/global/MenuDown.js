'use client'
import { useEffect, useState } from 'react'
import IconEmail from '../icons/IconEmail'
import IconHome from '../icons/IconHome'
import IconMenuV2 from '../icons/IconMenuV2'
import IconMotor from '../icons/IconMotor'
import IconPhoneV2 from '../icons/IconPhoneV2'
import ItemMenu from './ItemMenu'
import { PopupBookNow } from './PopupBookNow'

export default function MenuDown({ allTourHG, header, setIsOpen, isHome }) {
  const [scrollY, setScrollY] = useState(0)
  const [heightBanner, setHeightBanner] = useState(500)

  useEffect(() => {
    if (typeof window === 'undefined') return
    // Define a function to handle the scroll event
    const heightBanner = document.querySelector('#banner-home')
    if (!heightBanner) return
    setHeightBanner(heightBanner?.clientHeight + 50)
    const handleScroll = () => {
      // Update the state with the current scroll position
      setScrollY(window.scrollY)
    }
    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <div
      className={`${
        isHome ? (scrollY >= heightBanner ? 'flex' : 'hidden') : 'flex'
      } fixed bottom-0 left-0 bg-background-elevation-01 w-full h-fit px-[4.27rem] py-[3.2rem] flex justify-between z-[999]`}
    >
      <ItemMenu
        href='/'
        title={'Home'}
      >
        <IconHome className='w-[4.733rem] h-[4.733rem]' />
      </ItemMenu>
      <ItemMenu
        href='/#great-trips-mb'
        title={'Tour'}
      >
        <IconMotor className='w-[4.733rem] h-[4.733rem]' />
      </ItemMenu>
      <ItemMenu
        href={`tel:${header?.phoneNumber}`}
        title={'WhatsApp'}
      >
        <IconPhoneV2 className='w-[4.733rem] h-[4.733rem]' />
      </ItemMenu>
      <PopupBookNow allTourHG={allTourHG}>
        <ItemMenu title={'Book Now'}>
          <IconEmail className='w-[4.733rem] h-[4.733rem]' />
        </ItemMenu>
      </PopupBookNow>
      <ItemMenu
        onClick={() => setIsOpen((prev) => !prev)}
        title={'Menu'}
      >
        <IconMenuV2 className='w-[4.733rem] h-[4.733rem]' />
      </ItemMenu>
    </div>
  )
}
