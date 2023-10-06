import Image from 'next/image'
import SubTitle from '../global/SubTitle'
import ItemCardTour from '../homepage/ItemCardTour'

export default function Another({ allTourHG, slug, data }) {
    return (
        <section className='mt-[6.25vw] relative h-[47.4vw] max-md:h-fit flex flex-col items-center pt-[5vw] max-md:pt-[16.5vw]'>
            {/* <SubTitle
                subTitle={'another'}
                title={'GREAT TRIPS'}
                titleClass={'text-center'}
                subTitleClass={'text-center'}
            /> */}
            <SubTitle
                subTitle={data?.subtitle}
                title={data?.title}
                boxClass={'flex flex-col text-center'}
            />
            <div className='flex justify-center mt-[2.625vw] relative z-[1] gap-x-[1.5vw] max-md:mt-[8vw] max-md:px-[4.27vw]'>
                {allTourHG?.nodes
                    ?.filter((e) => e?.slug !== slug)
                    ?.map((e, index) => (
                        <ItemCardTour
                            data={e}
                            key={index}
                        />
                    ))}
            </div>
            <Image
                className='object-cover absolute top-0 left-0 w-full h-[38vw] z-0 max-md:h-[120vw] '
                src={'/images/anTrip.png'}
                alt='great trips'
                width={1600}
                height={800}
                quality={100}
            />
        </section>
    )
}
