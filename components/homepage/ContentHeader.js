import IconTextHeader from '../icons/IconTextHeader'

export default function ContentHeader({ header }) {
    return (
        <div
            id='slogan-header'
            className='absolute top-1/3 left-1/4 max-md:left-[5.38vw]'
        >
            <div
                id='box-slogan'
                className='relative flex flex-col text-white xl:hidden'
                dangerouslySetInnerHTML={{ __html: header?.slogan }}
            />
            <h2 className='text-[4vw] font-heavitas text-white font-normal leading-normal max-md:text-[6.4vw] max-xl:hidden'>
                BACKPACK UP
            </h2>
            <div className='font-tomatoes text-[8vw] max-md:text-[16vw] font-normal leading-normal absolute left-[60%] top-[30%] whitespace-nowrap max-xl:hidden'>
                <IconTextHeader />
            </div>
        </div>
    )
}
