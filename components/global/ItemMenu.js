import Link from 'next/link'

export default function ItemMenu({ children, title, href, onClick }) {
  return (
    <>
      {href ? (
        <Link
          href={href || '/'}
          className='flex flex-col justify-center items-center gap-y-[1rem]'
          onClick={onClick}
        >
          {children}
          <span className='font-poppins inline-block text-[3.46667rem] font-medium leading-[1.6] text-primary-70'>
            {title}
          </span>
        </Link>
      ) : (
        <div
          onClick={onClick}
          className='flex flex-col justify-center items-center gap-y-[1rem] cursor-pointer'
        >
          {children}
          <span className='font-poppins inline-block text-[3.46667rem] font-medium leading-[1.6] text-primary-70'>
            {title}
          </span>
        </div>
      )}
    </>
  )
}
