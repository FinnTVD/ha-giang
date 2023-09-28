import SubTitle from '../global/SubTitle'
import { AccordionDemo } from '../ui/AccordionDemo'

export default function TheTripDetail() {
    return (
        <section className='px-[6.25vw] mt-[6.25vw]'>
            <SubTitle
                title={'THE TRIP'}
                subTitle={'FAQ ABOUT'}
            />
            <div className='flex gap-x-[1.5vw] mt-[1.87vw]'>
                <AccordionDemo />
                <AccordionDemo className="max-md:hidden" />
            </div>
        </section>
    )
}
