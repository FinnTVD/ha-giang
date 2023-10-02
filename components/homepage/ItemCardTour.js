import Image from 'next/image'
import Button from '../global/Button'
import Price from './Price'
import IconHome from '../icons/IconHome'
import IconPeople from '../icons/IconPeople'
import IconBus from '../icons/IconBus'
import Link from 'next/link'

export default function ItemCardTour({ data }) {
    return (
        <article className='w-full p-[1vw] max-md:p-[3.2vw] rounded-[1.5vw] max-md:rounded-[4.267vw] bg-white shadow-itemCardTour'>
            <div className='w-full h-fit relative '>
                <Link
                    href={'/' + data?.slug}
                    className='block w-full h-fit'
                >
                    <Image
                        className='object-cover w-full h-[21.125vw] max-md:h-[59.2vw] rounded-[1vw] max-md:rounded-[3.2vw]'
                        src={data?.featuredImage?.node?.sourceUrl || '/images/item-tour.jpg'}
                        alt='item tour'
                        width={700}
                        height={400}
                    />
                </Link>
                <div className='bg-gradient-itemCardTour absolute top-0 left-0 w-full h-full rounded-[1vw] max-md:rounded-[3.2vw]'></div>
                <div className='absolute w-fit h-fit bottom-[1vw] max-md:bottom-[3.47vw] left-[1.44vw] max-md:left-[4.27vw] flex max-md:flex-col max-md:gap-y-[2.13vw] gap-x-[2.5vw]'>
                    <Price price={data?.tourHaGiangDetail?.price} />
                </div>
            </div>
            <Link
                href={'/' + data?.slug}
                className='block w-full h-fit'
            >
                <h2
                    className='mt-[1.25vw] max-md:mt-[3.2vw] max-md:mb-[2.13vw] mb-[0.75vw] text-[1.25vw] font-semibold leading-[1.2] tracking-[0.00188vw] text-gray-scale-80 uppercase line-clamp-1 max-md:text-[3.733vw] max-md:font-bold max-md:leading-[1.42] max-md:tracking-[0.03733vw]'
                    title='HA GIANG LOOP TOUR (3D3N)'
                >
                    {data?.title}
                </h2>
            </Link>
            <div className='flex items-center'>
                <IconHome className={'w-[1vw] h-[1vw] max-md:w-[7vw] max-md:h-[4.267vw]'} />
                <span className='text-[0.875vw] whitespace-nowrap font-semibold leading-[1.57] max-md:text-[3.467vw] max-md:font-semibold tracking-[0.00219vw] text-primary-70 ml-[0.37vw] mr-[0.25vw] max-md:ml-[1.6vw] max-md:mr-[1.07vw]'>
                    Pick up:
                </span>
                <span className='text-gray-scale-50 text-[0.875vw] line-clamp-1 font-normal max-md:text-[3.467vw] max-md:leading-[1.38] max-md:text-[#898989] leading-[1.57] tracking-[0.00219vw]'>
                    {data?.tourHaGiangDetail?.header?.pickUpFrom}
                </span>
            </div>
            <div className='flex items-center my-[0.5vw] max-md:my-[2.13vw]'>
                <IconPeople className={'w-[1vw] h-[1vw] max-md:w-[4.267vw] max-md:h-[4.267vw]'} />
                <span className='text-[0.875vw] font-semibold leading-[1.57] max-md:text-[3.467vw] max-md:font-semibold tracking-[0.00219vw] text-primary-70 ml-[0.37vw] mr-[0.25vw] max-md:ml-[1.6vw] max-md:mr-[1.07vw]'>
                    Group size:
                </span>
                <span className='text-gray-scale-50 text-[0.875vw] line-clamp-1 font-normal max-md:text-[3.467vw] max-md:leading-[1.38] max-md:text-[#898989] leading-[1.57] tracking-[0.00219vw]'>
                    {data?.tourHaGiangDetail?.header?.groupSize}
                </span>
            </div>
            <div className='flex items-center'>
                <IconBus className={'w-[1vw] h-[1vw] max-md:w-[4.267vw] max-md:h-[4.267vw]'} />
                <span className='text-[0.875vw] font-semibold leading-[1.57] max-md:text-[3.467vw] max-md:font-semibold tracking-[0.00219vw] text-primary-70 ml-[0.37vw] mr-[0.25vw] max-md:ml-[1.6vw] max-md:mr-[1.07vw]'>
                    Transport:
                </span>
                <span className='text-gray-scale-50 text-[0.875vw] line-clamp-1 font-normal max-md:text-[3.467vw] max-md:leading-[1.38] max-md:text-[#898989] leading-[1.57] tracking-[0.00219vw]'>
                    {data?.tourHaGiangDetail?.header?.transport}
                </span>
            </div>
            <div className='flex gap-x-[1vw] max-md:gap-x-[3.2vw] mt-[1.25vw] max-md:mt-[3.2vw]'>
                <Button
                    primary={true}
                    content={'book now'}
                    href={'/' + data?.slug}
                    className={
                        'my-[0.87vw] w-[9.4375vw] h-[3vw] max-md:rounded-[2.133vw] max-md:flex-1 max-md:h-[11.73vw]'
                    }
                />
                <Button
                    content={'read more'}
                    className={
                        'my-[0.87vw] w-[9.4375vw] h-[3vw] max-md:rounded-[2.133vw] max-md:flex-1 max-md:h-[11.73vw]'
                    }
                />
            </div>
        </article>
    )
}
