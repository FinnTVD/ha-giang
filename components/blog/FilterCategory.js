'use client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import IconFilterDestination from '../icons/IconFilterDestination'

export default function FilterCategory({ categories }) {
  const router = useRouter()
  const pathName = usePathname()
  const searchParams = useSearchParams()

  const handleChange = (e) => {
    const params = new URLSearchParams(searchParams)
    params.set('category', e.target.value)

    router.replace(pathName + '?' + params.toString(), {
      scroll: false,
    })
  }
  return (
    <div className='mx-[8.12rem] max-md:mx-[4.27rem] flex filter-blog gap-[2.5rem] max-lg:mx-[3.2rem]'>
      <div className='flex flex-col'>
        <span className='text-[0.875rem] text-[#9B9B9B] uppercase font-[400] max-lg:hidden'>Category</span>
        <div className='flex items-center'>
          <IconFilterDestination className='w-[1.875rem] h-[1.875rem] max-md:w-[3.73rem] max-md:h-[3.73rem] max-lg:w-[3rem] max-lg:h-[3rem]' />
          <select
            name=''
            id=''
            className='bg-white cursor-pointer w-max'
            onChange={handleChange}
            defaultValue={searchParams.get('category') || ''}
          >
            <option value=''>All</option>
            {categories?.map((item, index) => (
              <option
                value={item?.slug}
                key={index}
              >
                {item?.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}
