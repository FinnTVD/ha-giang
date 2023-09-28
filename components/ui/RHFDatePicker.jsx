import React from 'react'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'

const RHFDatePicker = ({ selected, onChange, ...other }) => {
    return (
        <DatePicker
            className='bg-[#B7B7B7] w-full h-8 rounded-sm text-sm px-[1vw] py-[0.75vw] outline-0'
            selected={selected}
            onChange={onChange}
            placeholderText="Choose a date"
            // dateFormat="dd/MM/yyyy"
            {...other}
        />
    )
}

export default RHFDatePicker
