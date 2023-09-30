'use client'
import React, { useEffect, useState } from 'react'
import DatePicker from 'react-datepicker'
import dateImg from '@/public/images/date.svg'

import 'react-datepicker/dist/react-datepicker.css'
import Image from 'next/image'

const RHFDatePicker = ({ selected, onChange, ...other }) => {
    const [formattedDate, setFormattedDate] = useState();
    useEffect(() => {
        const currentDate = new Date();
        const day = String(currentDate.getDate()).padStart(2, '0'); // Ensure two digits for the day
        const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are 0-based, so add 1 and ensure two digits
        const year = currentDate.getFullYear();
        setFormattedDate(`${day}/${month}/${year}`)
    }, []);

    return (
        <div className='relative'>
            <DatePicker
                className='bg-[#F2F2F2] w-full rounded-[0.5vw] h-[2.5vw] max-md:h-[10.66vw] text-sm px-[1vw] py-[0.75vw] outline-0 
                max-md:rounded-[2.13vw] max-md:px-[4.26vw]'
                selected={selected}
                onChange={onChange}
                placeholderText={formattedDate}
                // dateFormat="dd/MM/yyyy"
                defaultValue={formattedDate} 
                {...other}
            />
            <Image className='absolute top-1/2 max-md:right-[4.26vw] right-[1vw] translate-y-[-50%] ' src={dateImg} />
        </div>
    )
}

export default RHFDatePicker
