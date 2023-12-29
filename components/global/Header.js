import Image from 'next/image'
import Nav from './Nav'
import FeaturesHeader from './FeaturesHeader'
import ContentHeader from '../homepage/ContentHeader'
import BookNowHeader from '../homepage/BookNowHeader'
import MenuRes from './MenuRes'
import NavFixed from './NavFixed'
import MenuDown from './MenuDown'

export default function Header({ header, allTourHG, isHome, viewport }) {
  const isMobile = viewport?.includes('tablet')
  const isMobile2 = viewport?.includes('mobile')

  return (
    <header className='relative w-full h-screen max-md:h-[90vh] overflow-hidden'>
      <div className='max-md:h-[70vh] max-lg:h-[80vh] h-screen relative'>
        <Nav
          header={header}
          allTourHG={allTourHG}
        />
        <NavFixed
          header={header}
          allTourHG={allTourHG}
        />
        <Image
          className='z-0 object-cover max-md:hidden max-lg:h-[80vh] h-screen'
          src={header?.background?.sourceUrl || '/images/bg-header.jpg'}
          alt={'background cheer tour'}
          fill
          sizes='100vw'
          priority
        />
        <Image
          className='z-0 object-cover md:hidden max-md:h-[70vh]'
          src={header?.backgroundMobile?.sourceUrl || '/images/bg-header.jpg'}
          alt={'background cheer tour'}
          fill
          sizes='100vw'
          priority
        />
        <h1 className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-[-1] text-white'>Ha Giang Tour</h1>
        <div
          style={{ background: 'linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)' }}
          className='absolute bottom-[-0.5rem] left-0 z-0 object-cover w-full h-[26vh] lg:hidden'
        ></div>
        <ContentHeader header={header} />
        <FeaturesHeader
          header={header}
          allTourHG={allTourHG}
          isHome={isHome}
          viewport={viewport}
        />
        <BookNowHeader
          allTourHG={allTourHG}
          viewport={viewport}
        />
      </div>
      {isMobile && (
        <MenuRes
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          header={header}
          allTourHG={allTourHG}
        />
      )}
      {isMobile2 && (
        <MenuDown
          allTourHG={allTourHG}
          header={header}
          setIsOpen={setIsOpen}
          isHome={isHome}
          viewport={viewport}
        />
      )}
    </header>
  )
}
