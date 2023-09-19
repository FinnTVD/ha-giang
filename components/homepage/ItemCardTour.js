import Image from 'next/image'
import Button from '../global/Button'

export default function ItemCardTour() {
    return (
        <article className='w-[39.8125vw] w-fit p-[1vw] rounded-[1.5vw] bg-white shadow-itemCardTour'>
            <Image
                className='object-cover w-full h-[21.125vw] rounded-[1vw]'
                src={'/images/item-tour.jpg'}
                alt='item tour'
                width={700}
                height={400}
            />
            <h2
                className='mt-[1.25vw] mb-[0.75vw] text-[1.25vw] font-semibold leading-[1.2] tracking-[0.00188rem] text-gray-scale-80 uppercase line-clamp-1'
                title='HA GIANG LOOP TOUR (3D3N)'
            >
                HA GIANG LOOP TOUR (3D3N)
            </h2>
            <div className='flex items-center line-clamp-1'>
                <span>icon</span>
                <span className='text-[0.875vw] font-semibold leading-[1.57] tracking-[0.00219rem] text-primary-70 ml-[0.37vw] mr-[0.25vw]'>
                    Pick up:
                </span>
                <span className='text-gray-scale-50 text-[0.875vw] font-normal leading-[1.57] tracking-[0.00219rem]'>
                    Hanoi , Sapa, or Ha Giang
                </span>
            </div>
            <div className='flex line-clamp-1 my-[0.5vw]'>
                <span>icon</span>
                <span className='text-[0.875vw] font-semibold leading-[1.57] tracking-[0.00219rem] text-primary-70 ml-[0.37vw] mr-[0.25vw]'>
                    Group size:
                </span>
                <span className='text-gray-scale-50 text-[0.875vw] font-normal leading-[1.57] tracking-[0.00219rem]'>
                    7-9 pax
                </span>
            </div>
            <div className='flex items-center line-clamp-1'>
                <span>icon</span>
                <span className='text-[0.875vw] font-semibold leading-[1.57] tracking-[0.00219rem] text-primary-70 ml-[0.37vw] mr-[0.25vw]'>
                    Transport:
                </span>
                <span className='text-gray-scale-50 text-[0.875vw] font-normal leading-[1.57] tracking-[0.00219rem]'>
                    Sleeper bus & Motorbike with Local easy rider
                </span>
            </div>
            <div className='flex gap-x-[1vw] mt-[1.25vw]'>
                <Button
                    primary={true}
                    content={'book now'}
                />
                <Button content={'read more'} />
            </div>
        </article>
    )
}
