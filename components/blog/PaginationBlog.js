'use client'

import { sizeBlog } from '@/utils'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export default function PaginationBlog({ blogs }) {
  const router = useRouter()
  const pathName = usePathname()
  const searchParams = useSearchParams()
  const page = searchParams.get('page') || 1

  const handleChangePage = (index) => {
    const params = new URLSearchParams(searchParams)
    params.set('page', index)
    router.replace(pathName + '?' + params.toString(), {
      scroll: true,
    })
  }
  return (
    <div className='flex md:gap-[0.75rem] gap-[3.2rem] justify-center items-center relative md:mt-[4.5rem] mt-[8.53rem]'>
      {Array.from({ length: Math.ceil(blogs?.pageInfo?.offsetPagination?.total / sizeBlog) }, (_, index) => (
        <div
          key={index}
          onClick={() => handleChangePage(index + 1)}
          className={`cursor-pointer lg:w-[2.125rem] lg:h-[2.125rem] w-[9.07rem] h-[9.07rem] rounded-[50%] flex justify-center items-center md:w-[4rem] md:h-[4rem] ${
            Number(page) === index + 1 ? 'bg-primary-70 opacity-[1]' : 'bg-orange-400 opacity-[0.2]'
          }`}
        >
          <span
            className={`${
              Number(page) === index + 1 ? 'text-white' : 'text-[#171717]'
            } font-[500] text-[1rem] max-md:text-[4.26rem] max-lg:text-[2.5rem]`}
          >
            {index + 1}
          </span>
        </div>
      ))}
    </div>
  )
}
