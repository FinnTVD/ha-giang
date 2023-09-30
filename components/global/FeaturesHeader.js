'use client'
export default function FeaturesHeader() {
    const scrollToTop = () => {
        if (typeof window === 'undefined') return
        window.scrollTo(0, 0, { behavior: 'smooth' })
    }
    return (
        <article
            id='feature-header'
            className='flex flex-col gap-y-[1.37vw] max-md:gap-y-[5.33vw] items-center fixed bottom-[10vw] right-[3vw] max-md:right-[4.27vw] z-[10]'
        >
            <svg
                xmlns='http://www.w3.org/2000/svg'
                width='34'
                height='49'
                viewBox='0 0 34 49'
                fill='none'
                onClick={scrollToTop}
                className='w-[2.125vw] h-[3.0625vw] max-md:w-[8vw] max-md:h-[11.53vw] cursor-pointer'
            >
                <path
                    d='M17.8438 13.645C17.5629 12.785 16.4371 12.785 16.1562 13.645L12.0518 26.2088C11.8463 26.8378 12.2782 27.4973 12.8956 27.4973L21.1044 27.4973C21.7218 27.4973 22.1537 26.8378 21.9482 26.2088L17.8438 13.645Z'
                    fill='#FC692A'
                />
                <path
                    d='M17.0013 36.164C18.3545 36.164 19.5808 34.9545 19.5808 33.2968C19.5808 31.6392 18.3545 30.4297 17.0013 30.4297C15.6481 30.4297 14.4219 31.6392 14.4219 33.2968C14.4219 34.9545 15.6481 36.164 17.0013 36.164Z'
                    stroke='#FC692A'
                    strokeWidth='2'
                />
                <rect
                    x='0.5'
                    y='0.5'
                    width='33'
                    height='48'
                    rx='16.5'
                    stroke='#FC692A'
                />
            </svg>
            <div className='cursor-pointer w-[3.5vw] text-[0.75vw] font-black leading-[1.08] tracking-[0.03125rem] h-[3.5vw] rounded-full text-white flex text-center justify-center items-center bg-primary-50 border-[1.5px] border-solid border-white max-md:w-[10.67vw] max-md:h-[10.67vw] max-md:text-[2.56vw] max-md:tracking-[0.10667rem]'>
                BOOK NOW
            </div>
            <div className='relative'>
                {/* <div className='box-phone absolute bottom-0 left-0 z-0 w-[2.5vw] h-[2.5vw] rounded-full'></div> */}

                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='58'
                    height='56'
                    viewBox='0 0 58 56'
                    fill='none'
                    className='z-[1] '
                >
                    <path
                        d='M0.902344 54.1105L3.5994 44.2747C1.93967 41.3985 1.06266 38.1262 1.06266 34.7878C1.06266 24.3202 9.58763 15.8047 20.0458 15.8047C25.1287 15.8047 29.891 17.785 33.4745 21.3686C37.058 24.9521 39.0289 29.7238 39.0289 34.7973C39.0289 45.2649 30.504 53.7804 20.0458 53.7804H20.0364C16.8584 53.7804 13.7369 52.9788 10.9644 51.47L0.902344 54.1105Z'
                        fill='#E56026'
                    />
                    <path
                        d='M0.214844 54.7943L3.00621 44.6096C1.28989 41.6296 0.375158 38.2441 0.384589 34.7832C0.384589 23.9384 9.21133 15.1211 20.0561 15.1211C25.3182 15.1211 30.2597 17.1675 33.9658 20.883C37.6813 24.5985 39.7277 29.54 39.7183 34.7927C39.7183 45.6375 30.8915 54.4548 20.0467 54.4548H20.0373C16.7461 54.4548 13.5115 53.6249 10.6353 52.0595L0.214844 54.7943ZM11.1257 48.4948L11.7198 48.8532C14.2282 50.3432 17.1045 51.1259 20.0373 51.1353H20.0467C29.0526 51.1353 36.3894 43.808 36.3894 34.7927C36.3894 30.4264 34.6919 26.3243 31.6082 23.2311C28.5245 20.138 24.4129 18.4406 20.0467 18.4406C11.0314 18.4406 3.69462 25.7679 3.69462 34.7832C3.69462 37.8669 4.55277 40.8752 6.19364 43.4779L6.58028 44.1003L4.92998 50.1263L11.1257 48.4948Z'
                        fill='white'
                    />
                    <path
                        className='phone-icon'
                        d='M15.1321 26.5535C14.7643 25.733 14.3777 25.7142 14.0287 25.7047C13.7458 25.6953 13.4158 25.6953 13.0857 25.6953C12.7557 25.6953 12.2276 25.8179 11.7749 26.3083C11.3223 26.7987 10.0586 27.9869 10.0586 30.4105C10.0586 32.8246 11.8221 35.1633 12.0672 35.4934C12.3124 35.8234 15.4716 40.9441 20.4602 42.915C24.6095 44.5559 25.4582 44.2258 26.3541 44.1409C27.2594 44.0561 29.2586 42.9527 29.6736 41.8022C30.0791 40.6517 30.0791 39.671 29.9565 39.4635C29.8339 39.256 29.5038 39.1335 29.0134 38.8883C28.5231 38.6431 26.1089 37.4549 25.6563 37.2851C25.2036 37.1154 24.8736 37.0399 24.5529 37.5303C24.2229 38.0207 23.2798 39.124 22.9969 39.4541C22.714 39.7841 22.4217 39.8219 21.9313 39.5767C21.4409 39.3315 19.8567 38.8128 17.98 37.1342C16.5183 35.8329 15.5282 34.2203 15.2452 33.7299C14.9623 33.2395 15.217 32.9755 15.4621 32.7303C15.679 32.5134 15.9525 32.1551 16.1977 31.8721C16.4429 31.5892 16.5278 31.3818 16.6881 31.0517C16.8484 30.7216 16.7729 30.4387 16.6504 30.1936C16.5278 29.9484 15.5659 27.5248 15.1321 26.5535Z'
                        fill='white'
                    />
                    <g
                        className='animate-pulse'
                        filter='url(#filter0_d_6709_2470)'
                    >
                        <circle
                            cx='42'
                            cy='16'
                            r='6'
                            fill='#14FF00'
                        />
                    </g>
                    <defs>
                        <filter
                            id='filter0_d_6709_2470'
                            x='26'
                            y='0'
                            width='32'
                            height='32'
                            filterUnits='userSpaceOnUse'
                            colorInterpolationFilters='sRGB'
                        >
                            <feFlood
                                floodOpacity='0'
                                result='BackgroundImageFix'
                            />
                            <feColorMatrix
                                in='SourceAlpha'
                                type='matrix'
                                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                                result='hardAlpha'
                            />
                            <feOffset />
                            <feGaussianBlur stdDeviation='5' />
                            <feComposite
                                in2='hardAlpha'
                                operator='out'
                            />
                            <feColorMatrix
                                type='matrix'
                                values='0 0 0 0 0.305882 0 0 0 0 0.94902 0 0 0 0 0.25098 0 0 0 0.6 0'
                            />
                            <feBlend
                                mode='normal'
                                in2='BackgroundImageFix'
                                result='effect1_dropShadow_6709_2470'
                            />
                            <feBlend
                                mode='normal'
                                in='SourceGraphic'
                                in2='effect1_dropShadow_6709_2470'
                                result='shape'
                            />
                        </filter>
                    </defs>
                </svg>
            </div>
        </article>
    )
}
