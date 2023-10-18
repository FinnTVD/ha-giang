import Link from 'next/link'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '../ui/hover-card'

export function PopupNav({ children, allTourHG }) {
  return (
    <HoverCard openDelay={100}>
      <HoverCardTrigger asChild>{children}</HoverCardTrigger>
      <HoverCardContent className='w-fit flex flex-col'>
        {allTourHG?.nodes?.map((e, index) => (
          <Link
            key={index}
            href={e?.slug ? '/' + e?.slug : '/'}
            className='py-[0.5rem] relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:border-b-[2px] before:border-den-2 before:scale-x-0 before:origin-right before:transition-transform before:duration-300 hover:before:scale-x-100 hover:before:origin-left'
          >
            {e?.title}
          </Link>
        ))}
      </HoverCardContent>
    </HoverCard>
  )
}
