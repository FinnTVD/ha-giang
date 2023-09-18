import Image from 'next/image'
import SubTitle from '../global/SubTitle'
import SlideTravelers from './SlideTravelers'

export default function Travelers() {
    return (
        <section className='w-full relative h-fit mt-[6.25vw] px-[12.75vw]'>
            <Image
                className='object-cover z-0'
                src={'/images/bg-traveller.png'}
                fill
                sizes='100vw'
            />
            <div className='w-full h-[8vw] bg-gradient-travelers absolute top-0 left-0 z-[1]'></div>
            <SubTitle
                title='Travelers'
                subTitle={'from our'}
                titleClass={'text-center'}
                subTitleClass={'text-center'}
            />
            <SlideTravelers />
            <div className=' flex flex-col items-center relative z-[5] gap-y-[0.5vw] mt-[1.88vw]'>
                <span className='font-poppins text-[0.875vw] font-normal leading-[1.57] tracking-[0.00219rem]'>
                    View us on:
                </span>
                <div className='flex gap-x-[0.75vw]'>
                    <button className='w-[9.25vw] shadow-btnTravel h-[3vw] rounded-[0.5vw] bg-white flex justify-center items-center'>
                        <Image
                            className='object-cover w-[7vw] h-[1.5vw]'
                            src={'/images/tri.svg'}
                            width={110}
                            height={30}
                        />
                    </button>
                    <button className='w-[9.25vw] shadow-btnTravel h-[3vw] rounded-[0.5vw] bg-white flex justify-center items-center'>
                        <Image
                            className='object-cover w-[7vw] h-[1.5vw]'
                            src={'/images/trus.svg'}
                            width={110}
                            height={30}
                        />
                    </button>
                </div>
            </div>
            <div className='w-full h-[14vw] bg-gradient-travelers2 absolute bottom-0 left-0 z-[1]'></div>
        </section>
    )
}
