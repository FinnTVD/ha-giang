import Image from 'next/image'
import InfoFooter from './InfoFooter'
import phoneIcon from '@/public/images/FooterPhoneIcon.svg'
import mailIcon from '@/public/images/FooterMailIcon.svg'
import homeIcon from '@/public/images/FooterHomeIcon.svg'
import worldIcon from '@/public/images/FooterWorldIcon.svg'
import transportIcon from '@/public/images/FooterTransportIcon.svg'
import locationIcon from '@/public/images/FooterLocationIcon.svg'
import getData from '@/utils/getData'
import { GET_DATA_FOOTER } from '@/graphql/home/queries'
import Link from 'next/link'
import BgFooter from '../icons/BgFooter'

export default async function Footer() {
    const data = await getData(GET_DATA_FOOTER)
    const { footer } = data?.data?.page?.homeHG
    if (!footer) return
    return (
        <footer className='relative overflow-hidden'>
            <BgFooter className='w-full md:h-[58.5625vw] h-full absolute top-0 left-0 z-0 max-md:inset-0' />
            <div className='md:h-screen max-md:h-auto w-full relative md:px-[6.25vw] pb-[74.6vw]'>
                <Image
                    className='z-0 max-md:h-[153.6vw] h-full absolute md:inset-0 bottom-0 w-full object-cover'
                    alt={footer?.background?.altText || footer?.background?.title}
                    src={footer?.background?.sourceUrl || '/images/bg-footer.png'}
                    sizes='100vw'
                    quality={100}
                    priority
                    width={100}
                    height={100}
                    object-cover
                />
                <div className='flex justify-between items-center w-full relative z-[1] max-md:px-[4.27vw] max-md:flex-col'>
                    <Link
                        href='/'
                        className='w-fit h-fit block'
                    >
                        <Image
                            className='md:w-[12.75vw] w-[34.67493vw] md:h-[12.05vw] h-[30.4vw] md:mt-[9.13vw] mt-[14vw] object-cover'
                            alt={footer?.logo?.altText || footer?.logo?.title}
                            src={footer?.logo?.sourceUrl || '/images/logo-footer.png'}
                            width={220}
                            height={200}
                        />
                    </Link>
                    <div className='flex md:gap-x-[9.47vw] md:mt-[9.13vw] mt-[8vw] max-md:flex-col gap-[8vw] max-md:text-center'>
                        <div className='max-md:flex justify-center flex-col'>
                            <h2 className='md:text-[0.875vw] md:font-[700] font-[600] md:leading-[1.25vw] leading-[4.8vw] md:tracking-[0.00875vw] text-[3.46667vw] '>
                                CONTACT US
                            </h2>
                            <div className='flex flex-col md:gap-[0.75vw] gap-[2.13vw] md:mt-[1vw] mt-[2.13vw]'>
                                {/* <InfoFooter
                                    icon={phoneIcon}
                                    text={'+84 98 3333 986 (Miss. Linette)'}
                                    subText={'+84 989 655 995 (Mr. Chinh)'}
                                /> */}
                                <div className='flex gap-x-[0.5vw] max-md:gap-x-[2.13vw]'>
                                    <Image
                                        src={phoneIcon}
                                        alt='icon'
                                        className='md:w-[1vw] md:h-[1vw] w-[3.73333vw] h-[3.73333vw] mt-[0.19vw] max-md:mt-[0.53vw]'
                                    />
                                    <ul className='flex flex-col gap-y-[0.25vw] max-md:gap-y-[2.67vw]'>
                                        {footer?.contactUs?.peopleContact?.map((e, index) => (
                                            <li
                                                key={index}
                                                className='text-[0.875vw] font-normal leading-[1.57] tracking-[0.00219vw] text-gray-scale-50 max-md:text-[3.467vw] max-md:leading-[1.38]'
                                            >
                                                {e?.numberPhone + ' (' + e?.name + ')'}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <InfoFooter
                                    icon={mailIcon}
                                    text={footer?.contactUs?.email}
                                    href={'mailTo:' + footer?.contactUs?.email}
                                />
                                <InfoFooter
                                    icon={homeIcon}
                                    text={footer?.contactUs?.address}
                                />
                                <InfoFooter
                                    icon={worldIcon}
                                    text={footer?.contactUs?.global}
                                />
                            </div>
                        </div>
                        <div className='max-md:flex justify-center flex-col'>
                            <h2 className='md:text-[0.875vw] md:font-[700] font-[600] md:leading-[1.25vw] leading-[4.8vw] md:tracking-[0.00875vw] text-[3.46667vw] '>
                                ALL TOUR
                            </h2>
                            <div className='flex flex-col md:gap-[0.75vw] gap-[2.13vw] md:mt-[1vw] mt-[2.13vw]'>
                                {data?.data?.allTourHG?.nodes?.map((e, index) => (
                                    <InfoFooter
                                        icon={transportIcon}
                                        text={e?.title}
                                        href={e?.slug ? '/' + e?.slug : '/'}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className='max-md:flex justify-center flex-col'>
                            <h2 className='md:text-[0.875vw] md:font-[700] font-[600] md:leading-[1.25vw] leading-[4.8vw] md:tracking-[0.00875vw] text-[3.46667vw] '>
                                CHEERS TOURS
                            </h2>
                            <div className='flex flex-col md:gap-[0.75vw] gap-[2.13vw] md:mt-[1vw] mt-[2.13vw]'>
                                {footer?.cheersTour?.map((e, index) => (
                                    <InfoFooter
                                        key={index}
                                        icon={locationIcon}
                                        text={e?.nameTour}
                                        href={e?.linkTour?.url}
                                        className=''
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
