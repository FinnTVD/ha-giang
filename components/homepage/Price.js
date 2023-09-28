export default function Price({ price, self }) {
    return (
        <div className='flex items-center gap-x-[0.5vw]'>
            <span className='text-[2.125vw] font-bold leading-[1.18] tracking-[0.00531rem] text-white'>${price}</span>
            <div className='flex w-fit flex-col'>
                <span className='text-[0.875vw] font-semibold leading-[1.428] tracking-[0.00875rem] text-gray-scale-5'>
                    {self ? 'SELF - DRIVING' : 'LOCAL DRIVER'}
                </span>
                <div className='w-full mt-[0.25vw] border-t border-white border-solid opacity-50'></div>
            </div>
        </div>
    )
}
