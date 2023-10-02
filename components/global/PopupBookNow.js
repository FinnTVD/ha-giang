import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import BookingOnline from '../homepage/BookingOnline'

export function PopupBookNow({ children }) {
    return (
        <Dialog>
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent className='w-[90vw] max-w-[90vw] max-md:h-[80vh] max-md:overflow-y-scroll'>
                <BookingOnline popup={true} />
            </DialogContent>
        </Dialog>
    )
}
