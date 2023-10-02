export default function Price({ price }) {
    return (
        <>
            <div className='flex items-center gap-x-[0.5vw] max-md:gap-x-[2.13vw]'>
                <span className='text-[2.125vw] font-bold leading-[1.18] tracking-[0.00531vw] text-white  max-md:text-[5.33vw] max-md:leading-[1.2] max-md:tracking-[0.008vw]'>
                    ${price?.selfDriving}
                </span>
                <div className='flex w-fit flex-col'>
                    <span className='text-[0.875vw] font-semibold leading-[1.428] tracking-[0.00875vw] text-gray-scale-5 max-md:text-[3.467vw] max-md:leading-[1.38]'>
                        SELF - DRIVING
                    </span>
                    <div className='w-full mt-[0.25vw] max-md:mt-[1.07vw] border-t border-white border-solid opacity-50 max-md:opacity-80'></div>
                </div>
            </div>
            <div className='flex items-center gap-x-[0.5vw] max-md:gap-x-[2.13vw]'>
                <span className='text-[2.125vw] font-bold leading-[1.18] tracking-[0.00531vw] text-white  max-md:text-[5.33vw] max-md:leading-[1.2] max-md:tracking-[0.008vw]'>
                    ${price?.localDriver}
                </span>
                <div className='flex w-fit flex-col'>
                    <span className='text-[0.875vw] font-semibold leading-[1.428] tracking-[0.00875vw] text-gray-scale-5 max-md:text-[3.467vw] max-md:leading-[1.38]'>
                        LOCAL DRIVER
                    </span>
                    <div className='w-full mt-[0.25vw] max-md:mt-[1.07vw] border-t border-white border-solid opacity-50 max-md:opacity-80'></div>
                </div>
            </div>
        </>
    )
}
