import Image from 'next/image'
import ItemCardTour from './ItemCardTour'

const arr = new Array(2).fill(0)
export default function GreatTrips() {
    return (
        <section className='mt-[6.25vw] relative h-[49.4vw]'>
            <div className='flex justify-center items-end gap-x-[1.5vw] relative z-10 h-full'>
                {arr?.map((e, index) => (
                    <ItemCardTour key={index} />
                ))}
            </div>
            <Image
                className='object-cover absolute top-0 left-0 w-full h-[38vw] z-0'
                src={'/images/mask-great-trips.png'}
                alt='great trips'
                width={1600}
                height={800}
                quality={100}
            />
        </section>
    )
}
