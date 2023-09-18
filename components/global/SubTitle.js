export default function SubTitle({ subTitle, title, subTitleClass, titleClass, boxClass }) {
    return (
        <div className={`${boxClass} uppercase text-primary-70 w-full relative z-[5]`}>
            <h3
                className={`${subTitleClass} text-[1vw] leading-normal max-md:text-[3.2vw] font-extrabold mb-[0.75vw] max-md:mb-[2.13vw]`}
            >
                {subTitle || 'Sub title'}
            </h3>
            <h2
                className={`${titleClass} text-[3vw] font-extrabold leading-[1] max-md:text-[6.4vw] max-md:leading-[1.17]`}
            >
                {title || 'Title'}
            </h2>
        </div>
    )
}
