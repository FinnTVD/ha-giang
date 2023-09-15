
export default function SubTitle({subTitle,title,subTitleClass, titleClass, boxClass}) {
    return (
        <div className={`${boxClass} uppercase text-primary-70 w-full relative z-[5]`}>
            <h3 className={`${subTitleClass}  text-[1vw] leading-normal font-extrabold mb-[0.75vw]`}>{subTitle || "Sub title"}</h3>
            <h2 className={`${titleClass} text-[3vw] font-extrabold leading-[1]`}>{title || "Title"}</h2>
        </div>
    )
}
