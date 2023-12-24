import '@radix-ui/themes/styles.css'
import 'swiper/css'
import 'swiper/css/free-mode'

// import 'aos/dist/aos.css'

import './globals.scss'
import { Poppins } from 'next/font/google'
import localFont from 'next/font/local'
import { Theme } from '@radix-ui/themes'
import Footer from '@/components/global/Footer'
import ApolloWrapper from '@/components/global/ApolloWrapper'
// import AosInit from '@/components/global/AosInit'
// import Script from 'next/script'

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

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
})

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  // Also supported by less commonly used
  // interactiveWidget: 'resizes-visual',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <meta
          name='google-site-verification'
          content='xZu-R_qHMGQVpE1mZc1JuwL4Zj3Hi9ZybbsJfxgzQiQ'
        />
        <meta
          name='DC.title'
          content='Vietnam Cheers Hostel Official Site'
        />
        <meta
          name='geo.region'
          content='VN-HN'
        />
        <meta
          name='geo.placename'
          content='H&agrave; Nội'
        />
        <meta
          name='geo.position'
          content='21.028530680620868;105.84580487600834'
        />
        <meta
          name='ICBM'
          content='21.028530680620868, 105.84580487600834'
        />
      </head>
      <body
        suppressHydrationWarning={true}
        className={`bg-white text-black ${poppins.className} ${heavitas.className} ${tomatoes.className} w-full`}
      >
        <ApolloWrapper>
          <Theme>{children}</Theme>
          {/* <AosInit /> */}
        </ApolloWrapper>
        <Footer />
        {/* <Script
          strategy='lazyOnload'
          src={`https://www.googletagmanager.com/gtag/js?id=G-Z5ZH5N3P8B`}
        ></Script>
        <Script strategy='lazyOnload'>
          {`window.dataLayer = window.dataLayer || [];
							function gtag(){dataLayer.push(arguments);}
							gtag('js', new Date());
							gtag('config', 'G-Z5ZH5N3P8B');`}
        </Script> */}
      </body>
    </html>
  )
}
