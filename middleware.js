import { NextResponse, userAgent } from 'next/server'

export function middleware(request) {
  const url = request.nextUrl
  if (url.pathname.startsWith('/payment-successfull')) {
    if (!request.nextUrl.search?.includes('vpc_TxnResponseCode')) {
      return NextResponse.redirect(new URL('/', request.url))
    }
  }
  const { device } = userAgent(request)
  const viewport = device.type === 'mobile' ? 'mobile' : device.type === 'tablet' ? 'tablet' : 'desktop'
  url.searchParams.set('viewport', viewport)
  return NextResponse.rewrite(url)
}
