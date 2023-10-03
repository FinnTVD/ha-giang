import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import BookingOnlineV2 from '../homepage/BookingOnlineV2'

export function PopupBookNow({ children }) {
    return (
        <Dialog>
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent className='w-[90vw] max-w-[90vw] h-fit max-md:h-[80vh] max-md:overflow-y-scroll'>
                <BookingOnlineV2 />
            </DialogContent>
        </Dialog>
    )
}
