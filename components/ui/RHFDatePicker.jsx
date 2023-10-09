'use client'
import { useEffect, useState } from 'react'
import DatePicker from 'react-datepicker'
import dateImg from '@/public/images/date.svg'

import 'react-datepicker/dist/react-datepicker.css'
import Image from 'next/image'

const RHFDatePicker = ({ selected, onChange, ...other }) => {
    const [formattedDate, setFormattedDate] = useState()
    useEffect(() => {
        const currentDate = new Date()
        const day = String(currentDate.getDate()).padStart(2, '0') // Ensure two digits for the day
        const month = String(currentDate.getMonth() + 1).padStart(2, '0') // Months are 0-based, so add 1 and ensure two digits
        const year = currentDate.getFullYear()
        setFormattedDate(`${day}/${month}/${year}`)
    }, [])

    return (
        <div className='relative !cursor-pointer'>
            <DatePicker
                className='bg-[#F2F2F2] w-full rounded-[0.5rem] h-[2.5rem] max-md:h-[10.66rem] text-[0.875rem] leading-[1.42] tracking-[0.00875rem] px-[1rem] py-[0.75rem] outline-0 max-md:rounded-[2.13rem] max-md:px-[4.26rem] !cursor-pointer max-md:w-full max-md:text-[3.467rem] font-normal max-md:leading-[1.38] text-gray-scale-20'
                selected={selected}
                onChange={onChange}
                placeholderText={formattedDate}
                // dateFormat="dd/MM/yyyy"
                defaultValue={formattedDate}
                {...other}
            />
            <Image
                className='absolute top-1/2 max-md:right-[4.26rem] right-[1rem] translate-y-[-50%] pointer-events-none'
                src={dateImg}
            />
        </div>
    )
}

export default RHFDatePicker
