import Footer from '@/components/global/Footer'
import './globals.scss'
import { Poppins, Roboto } from 'next/font/google'
import Header from '@/components/global/Header'
import localFont from 'next/font/local'
import { Theme } from '@radix-ui/themes'

import '@radix-ui/themes/styles.css'
import 'swiper/css'
import 'swiper/css/free-mode'

const heavitas = localFont({
    src: [
        {
            path: '../font/Heavitas.ttf',
            weight: '400',
            style: 'normal',
        },
    ],
    display: 'swap',
})

const tomatoes = localFont({
    src: [
        {
            path: '../font/Tomatoes.ttf',
            weight: '400',
            style: 'normal',
        },
    ],
    display: 'swap',
})

const roboto = Roboto({
    weight: ['300', '400', '500', '700', '900'],
    subsets: ['latin'],
})

const poppins = Poppins({
    weight: ['300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
})

export const metadata = {
    title: 'Home | Cheers Tour',
    description: 'Ha Giang Tour',
}

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body
                className={`bg-white text-black ${heavitas.className} ${tomatoes.className} ${roboto.className} ${poppins.className} `}
            >
                <Theme>
                    {children}
                    <Footer />
                </Theme>
            </body>
        </html>
    )
}
