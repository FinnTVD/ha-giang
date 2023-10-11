import Link from 'next/link'
import SubTitle from '../global/SubTitle'
import IconPhone from '../icons/IconPhone'
import IconMail from '../icons/IconMail'
import IconHome from '../icons/IconHome'
import IconGlobal from '../icons/IconGlobal'
import FormContact from './FormContact'

export default function MapContact({ data, footer }) {
  if (!data) return
  const { section1 } = data

  return (
    <section className='w-[87.5rem] mx-auto h-fit mb-[6.25rem] max-md:w-[91.46667rem] max-md:gap-y-[8rem] max-md:mt-[13rem] font-poppins'>
      <div className='flex w-full h-fit'>
        <div className='flex-1'>
          <SubTitle
            boxClass={'flex flex-col-reverse gap-y-[1rem] max-md:gap-y-[4.27rem]'}
            title={section1?.title}
            subTitle={section1?.subtitle}
          />
          <div className='mt-[4.44rem]'>
            <div className='flex gap-x-[0.5rem] max-md:flex-col max-md:items-center max-md:gap-y-[2.13rem]'>
              <IconPhone className={'w-[1rem] h-[1rem] max-md:w-[4.267rem] max-md:h-[4.267rem] mt-[0.4rem]'} />
              <ul className='flex flex-col gap-y-[0.25rem] max-md:gap-y-[1.07rem]'>
                {footer?.contactUs?.peopleContact?.map((e, index) => (
                  <li key={index}>
                    <Link
                      className='font-normal text-[0.875rem] max-lg:text-[1.875rem] leading-[1.57] tracking-[0.00219rem] text-gray-scale-50 max-md:text-[3.733rem] max-md:tracking-[0.00933rem]'
                      href={`tel:${e?.numberPhone}`}
                    >
                      {e?.numberPhone + ' (' + e?.name + ')'}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className='w-full border-t border-solid border-[#d9d9d966] my-[2rem] max-md:my-[5.33rem]'></div>
            <div className='flex items-center gap-x-[0.5rem] max-md:flex-col max-md:items-center max-md:gap-y-[2.13rem]'>
              <IconMail className='w-[1rem] h-[1rem] max-md:w-[4.267rem] max-md:h-[4.267rem]' />
              <Link
                className='font-normal text-[0.875rem] max-lg:text-[1.875rem] leading-[1.57] tracking-[0.00219rem] text-gray-scale-50 max-md:text-[3.733rem] max-md:tracking-[0.00933rem]'
                href={`mailto:${footer?.contactUs?.email}`}
              >
                {footer?.contactUs?.email}
              </Link>
            </div>
            <div className='w-full border-t border-solid border-[#d9d9d966] my-[2rem] max-md:my-[5.33rem]'></div>
            <div className='flex items-center gap-x-[0.5rem] max-md:flex-col max-md:items-center max-md:gap-y-[2.13rem]'>
              <IconHome className='w-[1rem] h-[1rem] max-md:w-[4.267rem] max-md:h-[4.267rem]' />
              <span className='font-normal text-[0.875rem] max-lg:text-[1.875rem] leading-[1.57] tracking-[0.00219rem] text-gray-scale-50 max-md:text-[3.733rem] max-md:tracking-[0.00933rem]'>
                {footer?.contactUs?.address}
              </span>
            </div>
            <div className='w-full border-t border-solid border-[#d9d9d966] my-[2rem] max-md:my-[5.33rem]'></div>
            <div className='flex items-center gap-x-[0.5rem] max-md:flex-col max-md:items-center max-md:gap-y-[2.13rem]'>
              <IconGlobal className='w-[1rem] h-[1rem] max-md:w-[4.267rem] max-md:h-[4.267rem]' />
              <span className='font-normal text-[0.875rem] max-lg:text-[1.875rem] leading-[1.57] tracking-[0.00219rem] text-gray-scale-50 max-md:text-[3.733rem] max-md:tracking-[0.00933rem]'>
                {footer?.contactUs?.global}
              </span>
            </div>
          </div>
        </div>
        <FormContact />
      </div>
      <div
        id='boxMap'
        className='!w-[50.4275] flex justify-center max-md:!h-[90vh] max-lg:!w-[56rem] max-md:!w-full h-full rounded-[0.75rem] max-md:rounded-[4.267rem] overflow-hidden mt-[6.25rem]'
        dangerouslySetInnerHTML={{ __html: `${section1?.map}` }}
      />
    </section>
  )
}
