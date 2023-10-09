import SubTitle from '../global/SubTitle'
import { AccordionDemoV2 } from '../ui/AccordionDemoV2'

export default function TheTripDetail({ data }) {
  return (
    <section className='px-[6.25rem] mt-[6.25rem]'>
      <SubTitle
        title={'THE TRIP'}
        subTitle={'FAQ ABOUT'}
      />
      <div className='flex gap-x-[1.5rem] mt-[1.87rem]'>
        <AccordionDemoV2
          data={data?.listFaq}
          className={'grid grid-cols-2 gap-x-[1.5rem] max-md:flex max-md:flex-col max-md:gap-y-[5.33rem]'}
        />
      </div>
    </section>
  )
}
