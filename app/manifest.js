export default function manifest() {
  return {
    name: 'Ha Giang Cheers Tour',
    short_name: 'Cheers Tour',
    description: 'Cheers Tour',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
