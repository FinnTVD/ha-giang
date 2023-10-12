import './globals.scss'
import '@radix-ui/themes/styles.css'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'react-toastify/dist/ReactToastify.css'
import { Poppins, Roboto } from 'next/font/google'
import localFont from 'next/font/local'
// import Header from '@/components/global/Header'
import { Theme } from '@radix-ui/themes'
import Footer from '@/components/global/Footer'
import ApolloWrapper from '@/components/global/ApolloWrapper'

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

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <ApolloWrapper>
        <Theme>
          <body
            suppressHydrationWarning={true}
            className={`bg-white text-black ${poppins.className} ${heavitas.className} ${tomatoes.className} ${roboto.className} w-full h-[100vh] overflow-y-scroll`}
          >
            {children}
            <Footer />
          </body>
        </Theme>
      </ApolloWrapper>
    </html>
  )
}
