import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import BookingOnlineV2 from '../homepage/BookingOnlineV2'

export function PopupBookNow({ children, allTourHG, tour }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className='w-[90rem] max-w-[90rem] h-fit max-md:h-[80vh] max-md:overflow-y-scroll max-md:p-[4.27rem] max-md:rounded-[2.13rem] z-[999]'>
        <BookingOnlineV2
          allTourHG={allTourHG}
          tour={tour}
        />
      </DialogContent>
    </Dialog>
  )
}
