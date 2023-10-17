import '@radix-ui/themes/styles.css'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'react-toastify/dist/ReactToastify.css'
import 'aos/dist/aos.css'
import 'react-datepicker/dist/react-datepicker.css'

import './globals.scss'

import { Poppins, Roboto } from 'next/font/google'
import localFont from 'next/font/local'
// import Header from '@/components/global/Header'
import { Theme } from '@radix-ui/themes'
import Footer from '@/components/global/Footer'
import ApolloWrapper from '@/components/global/ApolloWrapper'
import AosInit from '@/components/global/AosInit'

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

// const kanit = Kanit({
//   weight: ['500'],
//   subsets: ['latin'],
// })
export const metadata = {
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1', // <-- now here
}
export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <ApolloWrapper>
        <body
          suppressHydrationWarning={true}
          className={`bg-white text-black ${poppins.className} ${heavitas.className} ${tomatoes.className} ${roboto.className} w-full`}
        >
          <AosInit />
          <Theme>
            {children}
            <Footer />
          </Theme>
        </body>
      </ApolloWrapper>
    </html>
  )
}
