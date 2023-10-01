export default function TittleIcon({ children, title }) {
    return (
        <div className='flex gap-x-[0.37vw] max-md:gap-x-[1.6vw] items-center'>
            {children}
            <span className='text-gray-scale-5 text-[0.875vw] font-medium leading-[1.57] tracking-[0.00219vw] max-md:text-[3.467vw] max-md:leading-[1.38]'>
                {title}
            </span>
        </div>
    )
}
