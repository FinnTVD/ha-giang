export default function TittleIcon({ children, title }) {
    return (
        <div className='flex gap-x-[0.37vw] items-center'>
            {children}
            <span className='text-gray-scale-5 text-[0.875vw] font-medium leading-[1.57] tracking-[0.00219rem]'>
                {title}
            </span>
        </div>
    )
}
