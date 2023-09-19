import Button from '../global/Button'
import SubTitle from '../global/SubTitle'
import { AccordionDemo } from '../ui/AccordionDemo'

export default function TheTrip() {
    return (
        <section className='pl-[6.25vw] pr-[6.31vw] flex justify-between mt-[6.25vw]'>
            <div>
                <SubTitle
                    title={'The Trip'}
                    subTitle={'faq about'}
                />
                <Button
                    primary={true}
                    content={'BOOK NOW'}
                    className={'mt-[1.87vw]'}
                />
            </div>
            <div className='flex gap-x-[5vw]'>
                <div>
                    <div className='mb-[1.5vw]'>
                        <h3 className='mb-[0.75vw] font-poppins text-[1.625vw] font-semibold leading-[1.23] text-gray-scale-80'>
                            NATURE
                        </h3>
                        <p className='font-poppins text-[0.875vw] font-normal leading-[1.57] tracking-[0.00219rem]'>
                            Browse our full service agency services and prices or contact us for custom quotes.
                        </p>
                    </div>
                    <AccordionDemo />
                </div>
                <div>
                    <div className='mb-[1.5vw]'>
                        <h3 className='mb-[0.75vw] font-poppins text-[1.625vw] font-semibold leading-[1.23] text-gray-scale-80'>
                            JOURNEY
                        </h3>
                        <p className='font-poppins text-[0.875vw] font-normal leading-[1.57] tracking-[0.00219rem]'>
                            Find inspiration and discover amazing knowledge for successful site building.
                        </p>
                    </div>
                    <AccordionDemo />
                </div>
            </div>
        </section>
    )
}
