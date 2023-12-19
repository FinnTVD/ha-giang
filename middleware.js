import { NextResponse, userAgent } from 'next/server'

export function middleware(request) {
  const url = request.nextUrl
  if (url.pathname.startsWith('/payment-successfull')) {
    if (!request.nextUrl.search?.includes('vpc_TxnResponseCode')) {
      return NextResponse.redirect(new URL('/', request.url))
    }
  }
  const { device, isBot } = userAgent(request)
  const viewport = device.type === 'mobile' ? 'mobile' : device.type === 'tablet' ? 'tablet' : 'desktop'
  url.searchParams.set('viewport', viewport)
  url.searchParams.set('type', device.type)
  url.searchParams.set('type', device.type)
  url.searchParams.set('isBot', isBot)
  return NextResponse.rewrite(url)
}
