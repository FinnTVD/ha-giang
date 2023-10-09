import calendar from '@/public/images/calendar_blogItem.svg'
import img from '@/public/images/left-down.jpg'
import moment from 'moment'
import Image from 'next/image'
import Link from 'next/link'

function BlogItem({ data, params }) {
  return (
    <Link
      href={`${params}/${encodeURIComponent(data?.slug)}`}
      className='blog-item'
    >
      <div className={`w-full font-poppins`}>
        <div className='relative image'>
          <div className='thumb md:rounded-[0.5rem] rounded-[2.13333rem]'>
            <Image
              src={data?.featuredImage?.node?.sourceUrl || img}
              width={1000}
              height={1000}
              alt='img'
              className={`md:!h-[16.3125rem] h-[43.73rem] object-cover md:rounded-[0.5rem] rounded-[2.13333rem]`}
            />
          </div>
          {/* <span
                        className='absolute md:top-[1.62rem] top-[3.69rem] md:left-[-0.375rem] left-[-1.67rem] md:px-[1rem] md:py-[0.25rem] px-[4.27rem] py-[1.07rem] bg-[#FFD220] md:text-[0.75rem] 
          text-[2.66667rem] font-[500] rounded-r-[0.25rem] tip-review'
                    >
                        Tip and Review
                    </span> */}
        </div>
        <div className='flex items-center md:gap-x-[0.64rem] gap-x-[1.07rem] mt-[2.67rem] md:mt-[1rem] info'>
          <Image
            src={calendar}
            width={100}
            height={100}
            alt='calendar'
            className='md:w-[0.84375rem] opacity-60 w-[2.4rem] h-[2.66667rem] md:h-[0.9375rem] object-cover'
          />
          <span className='md:text-[0.875rem] opacity-60 text-[2.66667rem] leading-none'>
            {moment(data?.date)?.format('DD MMMM YYYY')}
          </span>
        </div>
        <h4 className='md:text-[1.25rem] text-[3.73333rem] line-clamp-2 font-[700] leading-[1.4] md:mt-[0.78rem] mt-[1.07rem] title'>
          {data?.title}
        </h4>
        <div
          className='md:text-[0.875rem] text-ellipsis line-clamp-2 opacity-60 text-[2.66667rem] font-[500] desc leading-normal md:mt-[0.5rem] mt-[1.07rem]'
          dangerouslySetInnerHTML={{ __html: `${data?.excerpt}` }}
        ></div>
      </div>
    </Link>
  )
}

export default BlogItem
