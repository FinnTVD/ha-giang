'use client'
import { useState } from 'react'
import highLightImg from '@/public/icons/hightLight.svg'
import includedImg from '@/public/icons/included.svg'
import pickUpFromImg from '@/public/icons/pickUpFrom.svg'
import transportImg from '@/public/icons/transport.svg'
import excludedImg from '@/public/icons/EXCLUDED.svg'
import Image from 'next/image'
import rowUpImg from '@/public/icons/rowUp.svg'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useMediaQuery } from 'react-responsive'

const list = [
    { name: 'Information', id: 1, to: '' },
    { name: 'Map', id: 2, to: '#mapId' },
    { name: 'Trip detail', id: 3, to: '#tourId' },
    { name: 'Book online', id: 4, to: '#bookingId' },
]
const OverviewMb = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 767.9px)' })
    const param = useParams()
    const [select, setSelect] = useState(1)
    const [show, setShow] = useState(true)

    if (!isMobile) return
    return (
        <div className='hidden max-md:flex flex-col ml-[3.62vw] z-10 mt-[23vw]'>
            <div className='overflow-auto mb-[4.26vw]'>
                <div className='flex gap-[3.2vw] mb-[1.6vw] w-[100vw] '>
                    {list?.map((item) => (
                        <Link
                            href={`/tour/${param.slug}${item.to}`}
                            className={`text-[3.46vw] h-[6.4vw] pb-[1.6vw] w-[24.42vw] font-poppins text-center
          ${
              select === item?.id
                  ? 'text-[#B34B1E] font-semibold border-b-[0.4vw] border-[#B34B1E]'
                  : 'font-normal text-[#898989]'
          }`}
                            key={item.id}
                        >
                            {item?.name}
                        </Link>
                    ))}
                </div>
            </div>
            <div className={`${show ? '' : 'h-[40vw] overflow-hidden'}`}>
                {data?.map((item) =>
                    item.id === select ? (
                        <div>
                            {item?.data?.map((el) => (
                                <div>
                                    <h2 className='text-[3.46vw] flex gap-[1.6vw] mb-[0.53vw] text-[#A1A1A1] uppercase'>
                                        <Image
                                            src={el.icon}
                                            alt='icon'
                                        />
                                        {el?.title}
                                    </h2>
                                    <ul className='pl-[5.86vw] list-disc flex flex-col gap-[0.53vw] mb-[6.4vw]'>
                                        {el?.list.map((i) => (
                                            <li
                                                key={i.id}
                                                className='text-[#2E2E2E]  font-semibold text-[3.73vw]'
                                            >
                                                {i.content}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    ) : null,
                )}
            </div>
            <button
                onClick={() => setShow((pre) => !pre)}
                className='uppercase flex mx-auto items-center gap-[1.3vw] text-[#B34B1E] font-poppins font-medium text-[3.73vw]'
            >
                {show ? 'See less' : 'See more'}
                <Image
                    src={rowUpImg}
                    alt='arrow up'
                    className={show ? '' : 'rotate-180'}
                />
            </button>
        </div>
    )
}

export default OverviewMb
var data = [
    {
        id: 1,
        title: 'Information',
        data: [
            {
                id: 1,
                icon: highLightImg,
                title: 'Highlight:',
                list: [
                    {
                        id: 1,
                        content: 'Off the beaten track',
                    },
                    {
                        id: 2,
                        content: 'Off the beaten track',
                    },
                    {
                        id: 3,
                        content: 'Off the beaten track',
                    },
                    {
                        id: 4,
                        content: 'Off the beaten track',
                    },
                    {
                        id: 5,
                        content: 'Off the beaten track',
                    },
                    {
                        id: 6,
                        content: 'Off the beaten track',
                    },
                ],
            },
            {
                id: 2,
                icon: transportImg,
                title: 'TRANSPORT:',
                list: [
                    {
                        id: 1,
                        content: 'Sleeper bus & Motorbike with Local easy rider',
                    },
                ],
            },
            {
                id: 3,
                icon: pickUpFromImg,
                title: 'PICK UP FROM:',
                list: [
                    {
                        id: 1,
                        content: 'Hanoi, Airport,  Sapa, Cat ba island, Ninh Binh or any hotel in Ha Giang city',
                    },
                ],
            },
            {
                id: 4,
                icon: includedImg,
                title: 'INCLUDED:',
                list: [
                    {
                        id: 1,
                        content: 'Hanoi, Airport,  Sapa, Cat ba island, Ninh Binh or any hotel in Ha Giang city',
                    },
                    {
                        id: 2,
                        content: 'Hanoi, Airport,  Sapa, Cat ba island, Ninh Binh or any hotel in Ha Giang city',
                    },
                    {
                        id: 3,
                        content: 'Hanoi, Airport,  Sapa, Cat ba island, Ninh Binh or any hotel in Ha Giang city',
                    },
                    {
                        id: 4,
                        content: 'Hanoi, Airport,  Sapa, Cat ba island, Ninh Binh or any hotel in Ha Giang city',
                    },
                    {
                        id: 5,
                        content: 'Hanoi, Airport,  Sapa, Cat ba island, Ninh Binh or any hotel in Ha Giang city',
                    },
                    {
                        id: 6,
                        content: 'Hanoi, Airport,  Sapa, Cat ba island, Ninh Binh or any hotel in Ha Giang city',
                    },
                ],
            },
            {
                id: 5,
                icon: excludedImg,
                title: 'EXCLUDED:',
                list: [
                    {
                        id: 1,
                        content: 'Hanoi, Airport,  Sapa, Cat ba island, Ninh Binh or any hotel in Ha Giang city',
                    },
                    {
                        id: 2,
                        content: 'Hanoi, Airport,  Sapa, Cat ba island, Ninh Binh or any hotel in Ha Giang city',
                    },
                ],
            },
        ],
    },
]
