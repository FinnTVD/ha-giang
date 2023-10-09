import IconTextHeader from '../icons/IconTextHeader'

export default function ContentHeader({ header }) {
  return (
    <div
      id='slogan-header'
      className='absolute top-1/3 left-1/4 max-md:left-[5.38rem]'
    >
      <div
        id='box-slogan'
        className='relative flex flex-col text-white xl:hidden'
        dangerouslySetInnerHTML={{ __html: header?.slogan }}
      />
      <h2 className='text-[4rem] font-heavitas text-white font-normal leading-normal max-md:text-[6.4rem] max-xl:hidden'>
        BACKPACK UP
      </h2>
      <div className='font-tomatoes text-[8rem] max-md:text-[16rem] font-normal leading-normal absolute left-[60%] top-[30%] whitespace-nowrap max-xl:hidden'>
        <IconTextHeader />
      </div>
    </div>
  )
}
