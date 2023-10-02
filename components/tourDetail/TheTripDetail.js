import SubTitle from '../global/SubTitle'
import { AccordionDemoV2 } from '../ui/AccordionDemoV2'

export default function TheTripDetail({ data }) {
    return (
        <section className='px-[6.25vw] mt-[6.25vw]'>
            <SubTitle
                title={'THE TRIP'}
                subTitle={'FAQ ABOUT'}
            />
            <div className='flex gap-x-[1.5vw] mt-[1.87vw]'>
                <AccordionDemoV2
                    data={data?.listFaq}
                    className={'grid grid-cols-2 gap-x-[1.5vw] max-md:flex max-md:flex-col max-md:gap-y-[5.33vw]'}
                />
            </div>
        </section>
    )
}
