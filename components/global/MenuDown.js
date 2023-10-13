import IconEmail from '../icons/IconEmail'
import IconHome from '../icons/IconHome'
import IconMenuV2 from '../icons/IconMenuV2'
import IconMotor from '../icons/IconMotor'
import IconPhoneV2 from '../icons/IconPhoneV2'
import ItemMenu from './ItemMenu'
import { PopupBookNow } from './PopupBookNow'

export default function MenuDown({ allTourHG, header, setIsOpen }) {
  return (
    <div className='fixed bottom-0 left-0 bg-background-elevation-01 w-full h-fit px-[4.27rem] py-[3.2rem] flex justify-between z-[999]'>
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
