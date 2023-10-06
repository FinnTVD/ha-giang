import Image from 'next/image'
import Link from 'next/link'

function InfoFooter({ icon, text, href, className }) {
    return (
        <div className='md:text-[0.875vw] text-[3.46667vw] md:leading-[1.375vw] leading-[4.8vw] tracking-[0.00219vw] text-[#727272]'>
            {href ? (
                <Link
                    className='flex md:gap-[0.5vw] gap-[2.13vw] md:w-[16.6875vw] items-center max-md:justify-center md:mb-[0.25vw]'
                    href={href || '/'}
                >
                    <div>
                        <Image
                            src={icon}
                            alt='icon'
                            className='md:w-[1vw] md:h-[1vw] w-[3.73333vw] h-[3.73333vw]'
                        />
                    </div>
                    <p className={className}>{text}</p>
                </Link>
            ) : (
                <div className='flex md:gap-[0.5vw] gap-[2.13vw] md:w-[16.6875vw] items-center max-md:justify-center md:mb-[0.25vw]'>
                    <div>
                        <Image
                            src={icon}
                            alt='icon'
                            className='md:w-[1vw] md:h-[1vw] w-[3.73333vw] h-[3.73333vw]'
                        />
                    </div>
                    <p className={className}>{text}</p>
                </div>
            )}
        </div>
    )
}

export default InfoFooter
