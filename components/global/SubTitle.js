export default function SubTitle({ subTitle, title, subTitleClass, titleClass, boxClass }) {
  return (
    <div className={`${boxClass} uppercase text-primary-70 w-full relative z-[5] font-heavitas`}>
      <h3 className={`${subTitleClass} text-[1rem] leading-[1] max-md:text-[3.2rem] mb-[0.75rem] max-md:mb-[2.13rem]`}>
        {subTitle || 'Sub title'}
      </h3>
      <h2 className={`${titleClass} text-[3rem] leading-[1] max-md:text-[6.4rem] max-md:leading-[1.17]`}>
        {title || 'Title'}
      </h2>
    </div>
  )
}
