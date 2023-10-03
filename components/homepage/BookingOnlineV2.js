'use client'
import { ACCESS_CODE, BASE_URL, MERCHANT_ID, ONEPAY_HOST, SECRET_KEY_HASH } from '@/config-global'
import { convertStr2URL, fCurrency, fDate } from '@/lib/utils'
import { yupResolver } from '@hookform/resolvers/yup'
import { Select, Separator, TextArea, TextField } from '@radix-ui/themes'
import CryptoJS from 'crypto-js'
import { pickBy } from 'lodash'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Form, useForm } from 'react-hook-form'
import * as Yup from 'yup'
import Button from '../global/Button'
import RHFDatePicker from '../ui/RHFDatePicker'
import { useMediaQuery } from 'react-responsive'
import motoImg from '@/public/images/motobikeMobile.svg'
import IconEnjoin from '../icons/IconEnjoin'
import { exchangeRate } from '@/utils'

const defaultValues = {
    selfDriving: 0,
    localDriver: 0,
    name: '',
    email: '',
    phone: '',
    message: '',
    phone: '',
    pickup: '',
    departureDate: '',
    pickupAddress: '',
    droff: '',
    endDate: '',
    droffAddress: '',
}
const inputStyle = {
    height: '2.5vw',
    outline: 'none',
    borderRadius: '0.5vw',
    border: 'none',
    backgroundColor: '#F2F2F2',
    padding: '0.75vw 1vw',
    fontSize: '0.875vw',
}
const inputMobileStyle = {
    height: '10.66vw',
    fontSize: '3.46vw',
    backgroundColor: '#F2F2F2',
    height: '10.66vw',
    borderRadius: '2.1vw',
    padding: '4.26vw 3.2vw',
}

export default function BookingOnlineV2({ tour = '', allTourHG }) {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
    const [ip, setIp] = useState('')
    const [selfDriving, setSelfDriving] = useState(0)
    const [localDriver, setLocalDriver] = useState(0)
    const [pick, setPick] = useState(
        tour?.tour?.tourHaGiangDetail?.price?.pickUp || allTourHG?.nodes[0]?.tourHaGiangDetail?.price?.pickUp,
    )
    const [droff, setDroff] = useState(
        tour?.tour?.tourHaGiangDetail?.price?.droff || allTourHG?.nodes[0]?.tourHaGiangDetail?.price?.droff,
    )
    const [selfPrice, setSelfPrice] = useState(
        tour?.tour?.tourHaGiangDetail?.price?.selfDriving || allTourHG?.nodes[0]?.tourHaGiangDetail?.price?.selfDriving,
    )
    const [localPrice, setLocalPrice] = useState(
        tour?.tour?.tourHaGiangDetail?.price?.localDriver || allTourHG?.nodes[0]?.tourHaGiangDetail?.price?.localDriver,
    )
    const router = useRouter()

    useEffect(() => {
        if (!tour) return
        setSelfDriving(tour?.countSelf)
        setLocalDriver(tour?.countDriver)
    }, [])

    const BookingSchema = Yup.object({
        name: Yup.string().required(),
        email: Yup.string().required().email(),
        phone: Yup.string().required(),
        message: Yup.string().required(),
        phone: Yup.string().required(),
        pickup: Yup.string(),
        departureDate: Yup.string(),
        pickupAddress: Yup.string().required(),
        droff: Yup.string(),
        typeTour: Yup.string(),
        endDate: Yup.string(),
        droffAddress: Yup.string().required(),
    })

    const methods = useForm({
        resolver: yupResolver(BookingSchema),
        defaultValues,
    })

    const {
        register,
        watch,
        setValue,
        setError,
        formState: { errors },
        handleSubmit,
    } = methods

    const values = watch()

    const selfCost = selfDriving * selfPrice * exchangeRate
    const localCose = localDriver * localPrice * exchangeRate
    const totalPrice = selfCost + localCose
    const servicePrice = totalPrice * 0.03
    const totalAmount = totalPrice + servicePrice

    const getIp = async () => {
        try {
            const response = await fetch('https://api.ipify.org?format=json')
            const data = await response.json()
            if (data) {
                setIp(data.ip)
            }
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getIp()
    }, [])

    const generateParams = (data, pickVpc = false) => {
        const reqParam = {
            AgainLink: BASE_URL,
            Title: 'Ha Giang Tour Payment',
            vpc_AccessCode: ACCESS_CODE,
            vpc_Amount: totalAmount + '00',
            vpc_CardList: 'INTERNATIONAL',
            vpc_Command: 'pay',
            vpc_Currency: 'VND',
            vpc_Locale: 'en',
            vpc_MerchTxnRef: Math.floor(Date.now() / 1000) + '_hgtour',
            vpc_Merchant: MERCHANT_ID,
            vpc_OrderInfo: data?.name,
            vpc_ReturnURL: BASE_URL + '/payment-successful',
            vpc_TicketNo: ip,
            vpc_Version: '2',
        }
        if (pickVpc) {
            const pickParams = pickBy(reqParam, (_, key) => key.startsWith('vpc_') || key.startsWith('user_'))
            return convertStr2URL(pickParams)
        }
        return convertStr2URL(reqParam)
    }

    const onSubmit = async (data) => {
        if (totalAmount <= 0) {
            setError('root', {
                message: 'Please choose at least a type of tour',
            })
            return
        }
        const params = generateParams(data, true)
        const secretWordArray = CryptoJS.enc.Hex.parse(SECRET_KEY_HASH)
        const hash = CryptoJS.HmacSHA256(params, secretWordArray)
        const vpc_SecureHash = hash.toString(CryptoJS.enc.Hex).toUpperCase()
        router.push(`${ONEPAY_HOST}?${generateParams(data)}&vpc_SecureHash=${vpc_SecureHash}`)
    }

    return (
        <section
            className={`font-poppins flex flex-col justify-start`}
            id='bookingId'
        >
            <div className={`mb-[1vw]`}>
                <div className={` uppercase text-primary-70 w-full relative z-[5] font-heavitas`}>
                    <h2 className={` text-[2vw] font-extrabold leading-[1] max-md:text-[6.4vw] max-md:leading-[1.17]`}>
                        BOOK TOUR
                    </h2>
                </div>
            </div>
            <Form
                onSubmit={handleSubmit(onSubmit)}
                {...methods}
            >
                <div className='flex gap-x-[1.5vw]'>
                    <div className='w-fit'>
                        <div className='flex gap-x-[0.75vw]'>
                            <div className='w-[21vw]'>
                                <div className='mb-[1.88vw]'>
                                    <div className='truncate font-bold mb-[0.5vw] text-[0.875vw] max-md:text-[3.46vw] text-gray-scale-50'>
                                        Tour
                                    </div>
                                    <Select.Root
                                        defaultValue={tour?.tour?.title || allTourHG?.nodes[0]?.title}
                                        onValueChange={(value) => {
                                            setValue('typeTour', value)
                                            setSelfPrice(
                                                allTourHG?.nodes?.find((e) => e?.title === value)?.tourHaGiangDetail
                                                    ?.price?.selfDriving,
                                            )
                                            setLocalPrice(
                                                allTourHG?.nodes?.find((e) => e?.title === value)?.tourHaGiangDetail
                                                    ?.price?.localDriver,
                                            )
                                            setPick(
                                                allTourHG?.nodes?.find((e) => e?.title === value)?.tourHaGiangDetail
                                                    ?.price?.pickUp,
                                            )
                                            setDroff(
                                                allTourHG?.nodes?.find((e) => e?.title === value)?.tourHaGiangDetail
                                                    ?.price?.droff,
                                            )
                                        }}
                                    >
                                        <Select.Trigger
                                            className='w-full !p-[1vw] !h-[3.375vw] text-[0.875vw] font-bold leading-[1.57] text-gray-scale-80'
                                            style={isMobile ? inputMobileStyle : inputStyle}
                                            variant='soft'
                                            placeholder='Select tour…'
                                        />
                                        <Select.Content className='z-[99]'>
                                            {allTourHG?.nodes?.map((e, index) => (
                                                <Select.Item
                                                    key={index}
                                                    className='text-[0.875vw] font-bold leading-[1.57] cursor-pointer text-gray-scale-80'
                                                    value={e?.title}
                                                >
                                                    {e?.title}
                                                </Select.Item>
                                            ))}
                                        </Select.Content>
                                    </Select.Root>
                                </div>
                                <div className='text-[0.875vw] font-bold leading-[150%] mb-[0.5vw] max-md:text-[3.46vw] text-gray-scale-50'>
                                    Type of tour:
                                </div>
                                <div className='rounded-[0.5vw] bg-[#F2F2F2] p-[1vw] max-md:flex max-md:rounded-[2.13vw] max-md:flex-col max-md:gap-[3.2vw] max-md:p-[4.26vw]'>
                                    <div className='flex justify-between items-center'>
                                        <span className='text-[0.75vw] font-medium leading-[1.33] text-gray-scale-50 uppercase'>
                                            self - driving
                                        </span>
                                        <div className='flex items-center'>
                                            <span className='text-[0.875vw] text-gray-scale-50 font-semibold lading-[1.57] tracking-[0.00219vw] block mr-[0.75vw]'>
                                                ${selfPrice}
                                            </span>
                                            <button
                                                onClick={() => {
                                                    if (selfDriving === 0) return
                                                    setSelfDriving(selfDriving - 1)
                                                }}
                                                className='w-[2.25vw] h-[2.25vw] text-[1.5vw] active:scale-90 select-none shadow-btn rounded-full flex justify-center items-center'
                                            >
                                                -
                                            </button>
                                            <span className='flex items-center mx-[0.5vw] text-[0.875vw] font-bold leading-[1.57] tracking-[0.00219vw]'>
                                                {selfDriving === 0
                                                    ? '00'
                                                    : selfDriving > 9
                                                    ? selfDriving
                                                    : '0' + selfDriving}
                                            </span>
                                            <button
                                                onClick={() => {
                                                    setSelfDriving(selfDriving + 1)
                                                }}
                                                className='w-[2.25vw] h-[2.25vw] text-[1.5vw] active:scale-90 select-none shadow-btn rounded-full flex justify-center items-center'
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                    <div className='flex justify-between my-[0.75vw] h-[2.5vw] items-center max-md:my-0 max-md:h-[10.66vw]'>
                                        <span className='text-[0.75vw] font-medium leading-[1.33] text-gray-scale-50 uppercase whitespace-nowrap'>
                                            PRIVATE DRIVER
                                        </span>
                                        <div className='flex items-center'>
                                            <span className='text-[0.875vw] text-gray-scale-50 font-semibold lading-[1.57] tracking-[0.00219vw] block mr-[0.75vw]'>
                                                ${localPrice}
                                            </span>
                                            <button
                                                onClick={() => {
                                                    if (localDriver === 0) return
                                                    setLocalDriver(localDriver - 1)
                                                }}
                                                className='w-[2.25vw] h-[2.25vw] text-[1.5vw] active:scale-90 shadow-btn rounded-full flex justify-center items-center'
                                            >
                                                -
                                            </button>
                                            <span className='flex items-center mx-[0.5vw] text-[0.875vw] font-bold leading-[1.57] tracking-[0.00219vw]'>
                                                {localDriver === 0
                                                    ? '00'
                                                    : localDriver > 9
                                                    ? localDriver
                                                    : '0' + localDriver}
                                            </span>
                                            <button
                                                onClick={() => {
                                                    setLocalDriver(localDriver + 1)
                                                }}
                                                className='w-[2.25vw] h-[2.25vw] text-[1.5vw] active:scale-90 shadow-btn rounded-full flex justify-center items-center'
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                    <Separator
                                        my={isMobile ? '0' : '3'}
                                        size='4'
                                        className='bg-[#d9d9d9] opacity-60 '
                                    />
                                    <div className='flex justify-between items-center h-[2.5vw] max-md:h-[10.66vw] mt-[0.75vw]'>
                                        <div className='text-[#E56026] text-[1vw] font-semibold max-md:text-[4.26vw]'>
                                            Total:{' '}
                                        </div>
                                        <div
                                            className='text-[#E56026] font-bold text-center flex leading-[2.5vw] justify-center rounded-[0.5vw] text-[1.25vw] w-[12.1875vw] h-[2.5vw] bg-white max-md:text-[5.33vw] 
                                max-md:rounded-[2.13vw] max-md:max-md:w-[30.13vw] max-md:h-[10.66vw] max-md:items-center'
                                        >
                                            ${selfDriving * selfPrice + localDriver * localPrice || 0}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-[21vw]'>
                                <div className='truncate font-semibold mb-[0.5vw] text-[0.875vw] max-md:text-[3.46vw]'>
                                    Customer information:
                                </div>
                                <div className='flex flex-col gap-[0.75vw] max-md:gap-[3.2vw]'>
                                    <div className=''>
                                        <TextField.Input
                                            style={isMobile ? inputMobileStyle : inputStyle}
                                            className=' rounded-[0.5vw] px-[1vw] py-[0.75vw]'
                                            {...register('name')}
                                            variant='soft'
                                            placeholder='Name *'
                                        />
                                    </div>
                                    {/*<div className=' hidden max-md:block'>
                                        <TextField.Input
                                            {...register('email')}
                                            style={isMobile ? inputMobileStyle : inputStyle}
                                            className='rounded-[0.5vw] px-[1vw] py-[0.75vw] bg-[#B7B7B7]'
                                            variant='soft'
                                            placeholder='Email *'
                                        />
                                    </div>
                                    <div className=' hidden max-md:block'>
                                        <TextField.Input
                                            {...register('phone')}
                                            style={isMobile ? inputMobileStyle : inputStyle}
                                            className='rounded-[0.5vw] px-[1vw] py-[0.75vw]'
                                            variant='soft'
                                            placeholder='Phone(Whatsapp) *'
                                        />
                                    </div> */}
                                    {!isMobile && (
                                        <TextField.Input
                                            {...register('email')}
                                            style={isMobile ? { display: 'none' } : inputStyle}
                                            className='rounded-[0.5vw] px-[1vw] py-[0.75vw]'
                                            variant='soft'
                                            placeholder='Email *'
                                        />
                                    )}
                                    {!isMobile && (
                                        <TextField.Input
                                            {...register('phone')}
                                            style={isMobile ? { display: 'none' } : inputStyle}
                                            className='rounded-[0.5vw] px-[1vw] py-[0.75vw]'
                                            variant='soft'
                                            placeholder='Phone (Whatsapp) *'
                                        />
                                    )}
                                    <div className=''>
                                        <TextArea
                                            {...register('message')}
                                            style={
                                                isMobile
                                                    ? { ...inputMobileStyle, height: '5.5625vw' }
                                                    : { ...inputStyle, height: '8.9vw' }
                                            }
                                            className='rounded-[0.5vw] px-[1vw] py-[0.75vw]'
                                            variant='soft'
                                            placeholder='Message *'
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='relative grid grid-cols-4 gap-[0.75vw] w-[42.75vw] max-md:gap-[3.2vw] mt-[1vw] max-md:mt-[4.2vw]'>
                            <IconEnjoin className='absolute top-[4.5vw] left-0 max-md:hidden w-full' />
                            <div className='max-md:col-span-2'>
                                <div className='truncate font-semibold mb-[0.5vw] text-[0.875vw] max-md:text-[3.46vw]'>
                                    Pick up
                                </div>
                                <Select.Root onValueChange={(value) => setValue('pickup', value)}>
                                    <Select.Trigger
                                        className='w-full'
                                        style={isMobile ? inputMobileStyle : inputStyle}
                                        variant='soft'
                                        placeholder='Pick up…'
                                    />
                                    <Select.Content className='z-[99]'>
                                        {pick?.map((e, index) => (
                                            <Select.Item
                                                key={index}
                                                value={e?.province}
                                                className='cursor-pointer hover:bg-gray-scale-5'
                                            >
                                                {e?.province}
                                            </Select.Item>
                                        ))}
                                    </Select.Content>
                                </Select.Root>
                            </div>
                            <div className='max-md:col-span-2 '>
                                <div className='truncate font-semibold text-[0.875vw] mb-[0.5vw] max-md:text-[3.46vw]'>
                                    Departure date
                                </div>
                                <RHFDatePicker
                                    selected={values.departureDate}
                                    style={isMobile ? inputMobileStyle : inputStyle}
                                    onChange={(date) => setValue('departureDate', date)}
                                />
                            </div>
                            <div className='col-span-2 max-md:col-span-4'>
                                <div className='mb-[0.5vw] font-semibold text-[0.875vw] max-md:text-[3.46vw]'>
                                    Address *
                                </div>
                                <Select.Root onValueChange={(value) => setValue('pickupAddress', value)}>
                                    <Select.Trigger
                                        className='w-full'
                                        style={isMobile ? inputMobileStyle : inputStyle}
                                        variant='soft'
                                        placeholder='Address *'
                                    />
                                    <Select.Content className='z-[99]'>
                                        {values?.pickup &&
                                            pick
                                                ?.find((e) => e?.province === values?.pickup)
                                                ?.listAddress?.map((e, index) => (
                                                    <Select.Item
                                                        key={index}
                                                        value={e?.address}
                                                        className='cursor-pointer hover:bg-gray-scale-5'
                                                    >
                                                        {e?.address}
                                                    </Select.Item>
                                                ))}
                                    </Select.Content>
                                </Select.Root>
                            </div>
                        </div>
                        <Image
                            src={motoImg}
                            alt='moto'
                            className='my-[6.4vw] max-md:block hidden'
                        />
                        <div className='grid grid-cols-4 gap-[0.75vw] mt-[3.5vw] max-md:gap-[3.2vw] max-md:mt-[4.2vw] w-[42.75vw]'>
                            <div className='max-md:max-md:col-span-2'>
                                <div className='font-semibold mb-[0.5vw] text-[0.875vw] max-md:text-[3.46vw]'>
                                    Droff
                                </div>
                                <Select.Root
                                    className='w-full'
                                    onValueChange={(value) => setValue('droff', value)}
                                >
                                    <Select.Trigger
                                        className='w-full'
                                        style={isMobile ? inputMobileStyle : inputStyle}
                                        variant='soft'
                                        placeholder='Droff…'
                                    />
                                    <Select.Content className='z-[99]'>
                                        {droff?.map((e, index) => (
                                            <Select.Item
                                                key={index}
                                                value={e?.province}
                                                className='cursor-pointer hover:bg-gray-scale-5'
                                            >
                                                {e?.province}
                                            </Select.Item>
                                        ))}
                                    </Select.Content>
                                </Select.Root>
                            </div>
                            <div className='max-md:max-md:col-span-2'>
                                <div className='mb-[0.5vw] font-semibold text-[0.875vw] max-md:text-[3.46vw]'>
                                    End date
                                </div>
                                <RHFDatePicker
                                    style={isMobile ? inputMobileStyle : inputStyle}
                                    minDate={values.departureDate}
                                    selected={values.endDate}
                                    onChange={(date) => setValue('endDate', date)}
                                />
                            </div>
                            <div className='col-span-2 max-md:col-span-4'>
                                <div className='mb-[0.5vw] font-semibold text-[0.875vw] max-md:text-[3.46vw]'>
                                    Address *
                                </div>
                                <Select.Root onValueChange={(value) => setValue('droffAddress', value)}>
                                    <Select.Trigger
                                        className='w-full'
                                        style={isMobile ? inputMobileStyle : inputStyle}
                                        variant='soft'
                                        placeholder='Address *'
                                    />
                                    <Select.Content className='z-[99]'>
                                        {values?.droff &&
                                            droff
                                                ?.find((e) => e?.province === values?.droff)
                                                ?.listAddress?.map((e, index) => (
                                                    <Select.Item
                                                        key={index}
                                                        value={e?.address}
                                                        className='cursor-pointer hover:bg-gray-scale-5'
                                                    >
                                                        {e?.address}
                                                    </Select.Item>
                                                ))}
                                    </Select.Content>
                                </Select.Root>
                            </div>
                        </div>
                    </div>
                    <div className='flex-1'>
                        <div className='mt-[1.87vw] md:mt-0 max-md:mt-[8vw]'>
                            <div className='text-[1.25vw] mb-[0.75vw] font-semibold text-[#2E2E2E] max-md:mb-[2.1vw] max-md:text-[4.26vw]'>
                                CONFIRMED TOUR BOOKING:
                            </div>
                            <div className='rounded-[0.5vw] text-[#2E2E2E] border-[#287c0023] border-[0.5px] bg-[#F8FDFF] max-md:rounded-[2.13vw]'>
                                <div className='flex h-[2.5vw] border-b border-[#EEE] items-center text-[0.8125vw] max-md:h-[9.06vw]'>
                                    <div
                                        className='w-[12.1875vw] border-r-[#EEE] border-r-[0.5px] flex-none font-medium text-[0.8125vw] py-[0.5vw] px-[1vw]
                                max-md:w-[29.3vw] max-md:flex max-md:items-center max-md:ml-[4.26vw] max-md:text-[3.46vw] max-md:h-[9.06vw]'
                                    >
                                        Type of tour
                                    </div>
                                    <div className='py-[0.5vw] px-[1vw] max-md:ml-[4.26vw] max-md:text-[3.46vw]'>
                                        {values.typeTour || '...'}
                                    </div>
                                </div>
                                <div className='flex border-b h-[2.5vw] border-[#EEE] items-center text-[0.8125vw] max-md:h-[9.06vw]'>
                                    <div
                                        className='w-[12.1875vw] border-r-[#EEE] border-r-[0.5px] flex-none  font-medium  py-[0.5vw] px-[1vw]
                                max-md:w-[29.3vw] max-md:flex max-md:items-center max-md:ml-[4.26vw] max-md:text-[3.46vw] max-md:h-[9.06vw]'
                                    >
                                        Name
                                    </div>
                                    <div className='py-[0.5vw] px-[1vw] max-md:ml-[4.26vw] max-md:text-[3.46vw]'>
                                        {values.name || '...'}
                                    </div>
                                </div>
                                <div className='flex border-b h-[2.5vw] border-[#EEE] items-center text-[0.8125vw] max-md:h-[13.866vw]'>
                                    <div
                                        className='w-[12.1875vw] border-r-[#EEE] border-r-[0.5px] flex-none  font-medium  py-[0.5vw] px-[1vw]
                                max-md:w-[29.3vw] max-md:flex max-md:items-center max-md:ml-[4.26vw] max-md:text-[3.46vw] max-md:h-[13.866vw]'
                                    >
                                        Contact Info
                                    </div>
                                    <div className='py-[0.5vw] px-[1vw] max-md:ml-[4.26vw] max-md:text-[3.46vw]'>
                                        {values.email || '...'} - {values.phone || '...'}
                                    </div>
                                </div>
                                <div className='flex border-b h-[3.5vw] border-[#EEE] items-center text-[0.8125vw] max-md:h-[23.46vw]'>
                                    <div
                                        className='w-[12.1875vw] border-r-[#EEE] border-r-[0.5px] flex-none font-medium  py-[0.5vw] px-[1vw]
                                max-md:w-[29.3vw] max-md:flex max-md:items-center max-md:ml-[4.26vw] max-md:text-[3.46vw] max-md:h-[23.46vw]'
                                    >
                                        Pick up
                                    </div>
                                    <div className='py-[0.5vw] px-[1vw] max-md:ml-[4.26vw] max-md:text-[3.46vw]'>
                                        {values.departureDate && fDate(values.departureDate)} from {values.pickup} at{' '}
                                        {values.pickupAddress}
                                    </div>
                                </div>
                                <div className='flex border-b h-[2.5vw] border-[#EEE] items-center text-[0.8125vw] max-md:h-[9.06vw]'>
                                    <div
                                        className='w-[12.1875vw] border-r-[#EEE] border-r-[0.5px] flex-none  font-medium  py-[0.5vw] px-[1vw]
                                max-md:w-[29.3vw] max-md:ml-[4.26vw] max-md:border-r-[0.5vw] max-md:flex max-md:items-center max-md:h-[9.06vw] max-md:text-[3.46vw]'
                                    >
                                        Tour duration
                                    </div>
                                    <div className='py-[0.5vw] px-[1vw] max-md:ml-[4.26vw] max-md:text-[3.46vw]'>
                                        {
                                            allTourHG?.nodes?.find(
                                                (e) =>
                                                    e?.title ===
                                                    (values.typeTour ||
                                                        tour?.tour?.title ||
                                                        allTourHG?.nodes[0]?.title),
                                            )?.tourHaGiangDetail?.price?.longTimeTourDay
                                        }{' '}
                                        Days
                                    </div>
                                </div>
                                <div className='flex border-b h-[3.5vw] border-[#EEE] items-center text-[0.8125vw] max-md:h-[23.46vw]'>
                                    <div
                                        className='w-[12.1875vw] border-r-[#EEE] border-r-[0.5px] flex-none  font-medium  py-[0.5vw] px-[1vw]
                                max-md:w-[29.3vw] max-md:flex max-md:items-center max-md:ml-[4.26vw] max-md:text-[3.46vw] max-md:h-[23.46vw]'
                                    >
                                        Droff off
                                    </div>
                                    <div className='py-[0.5vw] px-[1vw] max-md:ml-[4.26vw] max-md:text-[3.46vw]'>
                                        {values.endDate && fDate(values.endDate)} from {values.droff} at{' '}
                                        {values.droffAddress}
                                    </div>
                                </div>
                                <div className='flex border-b h-[2.5vw] border-[#EEE] items-center text-[0.8125vw] max-md:h-[9.06vw]'>
                                    <div
                                        className='w-[12.1875vw] border-r-[#EEE] border-r-[0.5px] flex-none  font-medium  py-[0.5vw] px-[1vw]
                                max-md:w-[29.3vw] max-md:flex max-md:items-center max-md:ml-[4.26vw] max-md:text-[3.46vw] max-md:h-[9.06vw]'
                                    >
                                        Self-driving
                                    </div>
                                    <div className='py-[0.5vw] px-[1vw] max-md:ml-[4.26vw] max-md:text-[3.46vw]'>
                                        {values.selfDriving &&
                                            `${values.selfDriving} x $169 (${fCurrency(selfCost) || 0} VND)`}
                                    </div>
                                </div>
                                <div className='flex border-b h-[2.5vw] border-[#EEE] items-center text-[0.8125vw] max-md:h-[9.06vw]'>
                                    <div
                                        className='w-[12.1875vw] border-r-[#EEE] border-r-[0.5px] flex-none  font-medium  py-[0.5vw] px-[1vw]
                                max-md:w-[29.3vw] max-md:flex max-md:items-center max-md:ml-[4.26vw] max-md:text-[3.46vw] max-md:h-[9.06vw]'
                                    >
                                        Local driver
                                    </div>
                                    <div className='py-[0.5vw] px-[1vw] max-md:ml-[4.26vw] max-md:text-[3.46vw]'>
                                        {values.localDriver &&
                                            `${values.localDriver} x $199 (${fCurrency(localCose) || 0} VND)`}
                                    </div>
                                </div>
                                <div className='flex border-b h-[2.5vw] border-[#EEE] items-center text-[0.8125vw] max-md:h-[13.86vw]'>
                                    <div
                                        className='w-[12.1875vw] border-r-[#EEE] border-r-[0.5px] flex-none  font-medium  py-[0.5vw] px-[1vw]
                                max-md:w-[29.3vw] max-md:flex max-md:items-center max-md:ml-[4.26vw] max-md:text-[3.46vw] max-md:h-[13.86vw]'
                                    >
                                        {' '}
                                        Message
                                    </div>
                                    <div className='py-[0.5vw] px-[1vw] max-md:ml-[4.26vw] max-md:text-[3.46vw]'>
                                        {values.message}
                                    </div>
                                </div>
                            </div>

                            <div className='px-[1vw] py-[0.75vw] bg-[#0F515D] rounded-[0.5vw] mt-[1vw] max-md:rounded-[2.13vw] max-md:p-[3.2vw] max-md:mt-[3.2vw]'>
                                <div className='flex justify-between mb-[0.5vw] max-md:mb-[2.1vw] h-[1.5vw] max-md:h-auto text-[#D9D9D9]'>
                                    <div className='text-[0.875vw] max-md:text-[3.46vw]'>Provisional:</div>
                                    <div className='text-[1vw] font-semibold max-md:text-[3.46vw]'>
                                        {fCurrency(totalPrice) || 0} VND
                                    </div>
                                </div>
                                <div className='flex justify-between h-[1.5vw] max-md:mb-[2.1vw] my-[0.5vw] max-md:h-auto text-[#D9D9D9]'>
                                    <div className='text-[0.875vw] max-md:text-[3.46vw]'>Service Charge 3%:</div>
                                    <div className='text-[1vw] font-semibold max-md:text-[3.46vw]'>
                                        {fCurrency(totalPrice * 0.03) || 0} VND
                                    </div>
                                </div>
                                <Separator
                                    my='3'
                                    size='4'
                                    color='mint'
                                />
                                <div className='flex justify-between items-center mt-[0.5vw] h-[2vw] max-md:h-auto text-white'>
                                    <div className='text-[1vw] font-bold mt-[0.75vw] max-md:text-[3.73vw]'>
                                        Total amount:
                                    </div>
                                    <h5 className='text-[1.625vw] font-bold max-md:text-[3.73vw]'>
                                        {fCurrency(totalPrice + servicePrice) || 0} VND
                                    </h5>
                                </div>
                            </div>

                            <p>{errors.root?.message}</p>

                            <div className='flex items-center mt-[1vw] gap-[1.88vw] max-md:gap-[2.13vw] max-md:mt-[3.2vw] max-md:flex-col'>
                                <Button
                                    className='w-[12.1875vw] py-[1vw] px-[2vw] text-[0.8125vw] 
                            font-bold max-md:text-[3.46vw] 
                            max-md:w-full max-md:px-[8.52vw] max-md:py-[4.26vw] max-md:rounded-[2.1vw]'
                                    primary={true}
                                    content={'BOOK & PAY NOW'}
                                    type='submit'
                                />
                                <div className='flex gap-[0.5vw] max-md:gap-[2.1vw]'>
                                    <Image
                                        className='w-[2.28vw] h-[1.38vw] object-cover max-md:w-[9.3vw] max-md:h-[5.84vw]'
                                        src='/images/visa-card.svg'
                                        width={80}
                                        height={70}
                                    />
                                    <Image
                                        className='w-[2.28vw] h-[1.38vw] object-cover max-md:w-[9.3vw] max-md:h-[5.84vw]'
                                        src='/images/master-card.svg'
                                        width={80}
                                        height={70}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Form>
        </section>
    )
}
