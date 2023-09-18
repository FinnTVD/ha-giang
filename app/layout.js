import Footer from '@/components/global/Footer'
import './globals.scss'
import { Poppins, Roboto } from 'next/font/google'
import Header from '@/components/global/Header'
import 'swiper/css'
import 'swiper/css/free-mode'

const poppins = Poppins({
    weight: ['300', '400', '500', '600', '700', '800', '900'],
    subsets: ['devanagari'],
})
const roboto = Roboto({
    weight: ['300', '400', '500', '700', '900'],
    subsets: ['latin'],
})

export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body className={`bg-white text-black ${roboto.className} ${poppins.className}`}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    )
}
