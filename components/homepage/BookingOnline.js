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
import SubTitle from '../global/SubTitle'
import LineTrip from '../icons/LineTrip'
import RHFDatePicker from '../ui/RHFDatePicker'
import { useMediaQuery } from 'react-responsive'
import motoImg from '@/public/images/motobikeMobile.svg'
import { exchangeRate } from '@/utils'
import useStore from '@/app/(store)/store'
import ScrollTrigger from 'react-scroll-trigger'

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
  height: '2.5rem',
  outline: 'none',
  borderRadius: '0.5rem',
  border: 'none',
  backgroundColor: '#F2F2F2',
  padding: '0.75rem 1rem',
  fontSize: '0.875rem',
}
const inputMobileStyle = {
  height: '10.66rem',
  fontSize: '3.46rem',
  backgroundColor: '#F2F2F2',
  height: '10.66rem',
  borderRadius: '2.1rem',
  padding: '4.26rem 3.2rem',
}

export default function BookingOnline({ data, title }) {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' })
  const router = useRouter()

  const [ip, setIp] = useState('')
  const setIndexTab = useStore((state) => state.setIndexTab)
  const [selfDriving, setSelfDriving] = useState(0)
  const [localDriver, setLocalDriver] = useState(0)

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
  const selfCost = selfDriving * Number(data?.selfDriving) * exchangeRate
  const localCose = localDriver * Number(data?.localDriver) * exchangeRate
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

  const onSubmit = async (e) => {
    if (totalAmount <= 0) {
      setError('root', {
        message: 'Please choose at least a type of tour',
      })
      return
    }
    const formData = {
      nameTour: title,
      name: e?.name + ' - ' + (selfDriving + localDriver) + ' pax',
      contactInfo: e?.email + ' - ' + e?.phone,
      pickUp: fDate(e.departureDate) + ' from ' + e.pickup + ' at ' + e.pickupAddress,
      tourDuration: data?.longTimeTourDay + ' Days',
      droffOf: fDate(e.endDate) + ' from ' + e.droff + ' at ' + e.droffAddress,
      selfDriving: selfDriving + ' x $169 (' + fCurrency(selfCost) + ' VND)',
      localDriver: localDriver + ' x $199 (' + fCurrency(localCose) + ' VND)',
      message: e?.message,
      provisional: fCurrency(totalPrice) + ' VND',
      serviceCharge: fCurrency(totalPrice * 0.03) + ' VND',
      total: fCurrency(totalPrice + servicePrice) + ' VND',
    }
    localStorage.setItem('formDataPayment', JSON.stringify(formData))

    const params = generateParams(e, true)
    const secretWordArray = CryptoJS.enc.Hex.parse(SECRET_KEY_HASH)
    const hash = CryptoJS.HmacSHA256(params, secretWordArray)
    const vpc_SecureHash = hash.toString(CryptoJS.enc.Hex).toUpperCase()
    router.push(`${ONEPAY_HOST}?${generateParams(e)}&vpc_SecureHash=${vpc_SecureHash}`)
  }

  return (
    <section
      className={`lg:w-[87.5rem] md:w-[95rem] w-[91.46667rem] mx-auto mt-[6.25rem] font-poppins flex flex-col justify-between`}
      id='bookingId'
    >
      <div className={`mb-[1.88rem] max-md:mb-[5.3rem]`}>
        <SubTitle
          title={'ONLINE BOOKING'}
          subTitle={'EASY'}
        />
      </div>
      <Form
        onSubmit={handleSubmit(onSubmit)}
        {...methods}
      >
        <div className='grid grid-cols-1 md:grid-cols-2 md:gap-x-[1.5rem] lg:gap-x-[4.49rem] font-poppins text-[#727272]'>
          <div>
            <div className='text-[0.875rem] font-bold leading-[150%] mb-[0.5rem] max-md:text-[3.46rem] max-lg:text-[1.875rem] text-gray-scale-50'>
              Type of tour:
            </div>
            <div className='rounded-[0.5rem] bg-[#F2F2F2] p-[1rem] max-lg:p-[1.5rem] max-md:flex max-md:rounded-[2.13rem] max-md:flex-col max-md:gap-[3.2rem] max-md:p-[4.26rem]'>
              <div className='flex items-center justify-between'>
                <span className='text-[0.875rem] max-lg:text-[1.875rem] font-medium leading-[1.57] text-gray-scale-50 max-md:text-[3.467rem] max-md:leading-[1.38]'>
                  {data?.longTimeTourDay} days of self-driving
                </span>
                <div className='flex items-center'>
                  <span className='text-[0.875rem] max-lg:text-[1.875rem] text-gray-scale-50 font-semibold lading-[1.57] max-md:text-[3.733rem] max-lg:mr-[1.75rem] max-md:mr-[3.2rem] max-md:tracking-[0.00933rem] tracking-[0.00219rem] block mr-[0.75rem]'>
                    ${data?.selfDriving}
                  </span>
                  <div
                    onClick={() => {
                      if (selfDriving === 0) return
                      setSelfDriving(selfDriving - 1)
                    }}
                    className='w-[2.25rem] h-[2.25rem] max-md:w-[9.6rem] max-lg:w-[3.5rem] max-lg:h-[3.5rem] max-lg:text-[2.5rem] select-none cursor-pointer max-md:h-[9.6rem] max-md:text-[6.5rem] text-[1.5rem] active:scale-90 shadow-btn rounded-full flex justify-center items-center'
                  >
                    -
                  </div>
                  <span className='flex items-center mx-[0.5rem] text-[0.875rem] max-lg:text-[1.875rem] font-bold leading-[1.57] max-lg:mx-[1.5rem] max-md:mx-[2.13rem] max-md:text-[3.733rem] max-md:tracking-[0.00933rem] tracking-[0.00219rem]'>
                    {selfDriving === 0 ? '00' : selfDriving > 9 ? selfDriving : '0' + selfDriving}
                  </span>
                  <div
                    onClick={() => {
                      setSelfDriving(selfDriving + 1)
                    }}
                    className='w-[2.25rem] h-[2.25rem] max-md:w-[9.6rem] max-lg:w-[3.5rem] max-lg:h-[3.5rem] max-lg:text-[2.5rem] select-none cursor-pointer max-md:h-[9.6rem] max-md:text-[6.5rem] text-[1.5rem] active:scale-90 shadow-btn rounded-full flex justify-center items-center'
                  >
                    +
                  </div>
                </div>
              </div>
              <div className='flex justify-between my-[0.75rem] max-lg:mt-[0.75rem] max-lg:mb-[1.75rem] h-[2.5rem] max-lg:h-[5.5rem] items-center max-md:my-0 max-md:h-[10.66rem]'>
                <span className='text-[0.875rem] max-lg:text-[1.875rem] font-medium leading-[1.57] text-gray-scale-50 whitespace-nowrap max-md:text-[3.467rem] max-md:leading-[1.38]'>
                  {data?.longTimeTourDay} days with local driver
                </span>
                <div className='flex items-center'>
                  <span className='text-[0.875rem] max-lg:text-[1.875rem] text-gray-scale-50 font-semibold lading-[1.57] max-md:text-[3.733rem] max-lg:mr-[1.75rem] max-md:mr-[3.2rem] max-md:tracking-[0.00933rem] tracking-[0.00219rem] block mr-[0.75rem]'>
                    ${data?.localDriver}
                  </span>
                  <div
                    onClick={() => {
                      if (localDriver === 0) return
                      setLocalDriver(localDriver - 1)
                    }}
                    className='w-[2.25rem] h-[2.25rem] max-md:w-[9.6rem] max-lg:w-[3.5rem] max-lg:h-[3.5rem] max-lg:text-[2.5rem] select-none cursor-pointer max-md:h-[9.6rem] max-md:text-[6.5rem] text-[1.5rem] active:scale-90 shadow-btn rounded-full flex justify-center items-center'
                  >
                    -
                  </div>
                  <span className='flex items-center mx-[0.5rem] max-lg:mx-[1.5rem] text-[0.875rem] max-lg:text-[1.875rem] font-bold leading-[1.57] max-md:mx-[2.13rem] max-md:text-[3.733rem] max-md:tracking-[0.00933rem] tracking-[0.00219rem]'>
                    {localDriver === 0 ? '00' : localDriver > 9 ? localDriver : '0' + localDriver}
                  </span>
                  <div
                    onClick={() => {
                      setLocalDriver(localDriver + 1)
                    }}
                    className='w-[2.25rem] h-[2.25rem] max-md:w-[9.6rem] max-lg:w-[3.5rem] max-lg:h-[3.5rem] max-lg:text-[2.5rem] select-none cursor-pointer max-md:h-[9.6rem] max-md:text-[6.5rem] text-[1.5rem] active:scale-90 shadow-btn rounded-full flex justify-center items-center'
                  >
                    +
                  </div>
                </div>
              </div>
              <Separator
                my={isMobile ? '0' : '3'}
                size='4'
                className='bg-[#d9d9d9] opacity-60 '
              />
              <div className='flex justify-between items-center h-[2.5rem] max-lg:h-[6.5rem] max-md:h-[10.66rem] mt-[0.75rem]'>
                <div className='text-[#B34B1E] text-[1rem] max-lg:text-[2rem] font-semibold max-md:text-[4.26rem]'>
                  Total:{' '}
                </div>
                <div className='text-[#B34B1E] font-bold text-center flex leading-[2.5rem] justify-center rounded-[0.5rem] text-[1.25rem] w-[12.1875rem] max-lg:w-[14.1875rem] h-[2.5rem] bg-white max-md:text-[5.33rem] max-lg:text-[2.25rem] max-lg:h-[5.5rem] items-center max-md:rounded-[2.13rem] max-md:max-md:w-[30.13rem] max-md:h-[10.66rem] max-md:items-center'>
                  ${selfDriving * Number(data?.selfDriving) + localDriver * Number(data?.localDriver) || 0}
                </div>
              </div>
            </div>

            <ScrollTrigger onEnter={() => setIndexTab(4)}>
              <div className='mt-[1rem] max-md:mt-[4.27rem] text-[0.875rem] max-lg:text-[1.875rem] font-semibold leading-[150%] mb-[0.5rem] max-md:mb-[1.6rem] max-md:text-[3.46rem]'>
                Customer information:
              </div>
            </ScrollTrigger>
            <div className='grid grid-cols-2 gap-[0.75rem] max-md:gap-[3.2rem]'>
              <div className='col-span-2'>
                <TextField.Input
                  style={isMobile ? inputMobileStyle : inputStyle}
                  className='col-span-2 rounded-[0.5rem] md:!text-[1.875rem] lg:!text-[0.875rem] !h-fit'
                  {...register('name')}
                  variant='soft'
                  placeholder='Name *'
                />
              </div>
              <div className='hidden col-span-2 max-md:block'>
                <TextField.Input
                  {...register('email')}
                  style={isMobile ? inputMobileStyle : inputStyle}
                  className='rounded-[0.5rem] max-md:col-span-2 px-[1rem] bg-[#B7B7B7 md:!text-[1.875rem] lg:!text-[0.875rem] !h-fit'
                  variant='soft'
                  placeholder='Email *'
                />
              </div>
              <div className='hidden col-span-2 max-md:block'>
                <TextField.Input
                  {...register('phone')}
                  style={isMobile ? inputMobileStyle : inputStyle}
                  className='rounded-[0.5rem] md:!text-[1.875rem] lg:!text-[0.875rem] !h-fit'
                  variant='soft'
                  placeholder='Phone(Whatsapp) *'
                />
              </div>
              {!isMobile && (
                <TextField.Input
                  {...register('email')}
                  style={isMobile ? { display: 'none' } : inputStyle}
                  className='rounded-[0.5rem] px-[1rem] bg-[#B7B7B7] md:!text-[1.875rem] lg:!text-[0.875rem] !h-fit'
                  variant='soft'
                  placeholder='Email *'
                />
              )}
              {!isMobile && (
                <TextField.Input
                  {...register('phone')}
                  style={isMobile ? { display: 'none' } : inputStyle}
                  className='rounded-[0.5rem] md:!text-[1.875rem] lg:!text-[0.875rem] !h-fit'
                  variant='soft'
                  placeholder='Phone(Whatsapp) *'
                />
              )}
              <div className='col-span-2'>
                <TextArea
                  {...register('message')}
                  style={
                    isMobile ? { ...inputMobileStyle, height: '5.5625rem' } : { ...inputStyle, height: '5.5625rem' }
                  }
                  className='rounded-[0.5rem] md:!text-[1.875rem] lg:!text-[0.875rem] !h-[12rem] max-md:!h-[30rem]'
                  variant='soft'
                  placeholder='Message *'
                />
              </div>
            </div>
            <div className='relative grid grid-cols-4 gap-[0.75rem] max-md:gap-[3.2rem] mt-[1rem] max-md:mt-[4.2rem]'>
              <LineTrip
                className='absolute top-[3rem] max-lg:top-[6rem] -left-[1.5rem] max-lg:w-[105%] max-md:hidden w-[108%] z-[-1]'
                dayAmount={data?.longTimeTourDay + ' days'}
              />
              <div className='max-md:col-span-2'>
                <div className='truncate font-semibold mb-[0.5rem] text-[0.875rem] max-md:text-[3.46rem] max-lg:text-[1.875rem]'>
                  Pick up
                </div>
                <Select.Root onValueChange={(value) => setValue('pickup', value)}>
                  <Select.Trigger
                    className='w-full md:!text-[1.875rem] lg:!text-[0.875rem] !h-fit'
                    style={isMobile ? inputMobileStyle : inputStyle}
                    variant='soft'
                    placeholder='Pick up…'
                  />
                  <Select.Content className='z-[99]'>
                    {data?.pickUp?.map((e, index) => (
                      <Select.Item
                        key={index}
                        value={e?.province}
                        className='cursor-pointer hover:bg-gray-scale-5 md:!text-[1.875rem] lg:!text-[0.875rem] !h-fit max-md:!h-[7rem]'
                      >
                        {e?.province}
                      </Select.Item>
                    ))}
                  </Select.Content>
                </Select.Root>
              </div>
              <div className='max-md:col-span-2 '>
                <div className='truncate font-semibold text-[0.875rem] mb-[0.5rem] max-md:text-[3.46rem] max-lg:text-[1.875rem]'>
                  Departure date
                </div>
                <RHFDatePicker
                  selected={values.departureDate}
                  style={isMobile ? inputMobileStyle : inputStyle}
                  onChange={(date) => {
                    const originalDate = new Date(date)
                    const day = data?.longTimeTourDay

                    const updatedDate = new Date(originalDate.getTime() + (day + 1) * 24 * 60 * 60 * 1000)

                    setValue('departureDate', date)
                    setValue('endDate', updatedDate)
                  }}
                />
              </div>
              <div className='col-span-2 max-md:col-span-4'>
                <div className='mb-[0.5rem] font-semibold text-[0.875rem] max-lg:text-[1.875rem] max-md:text-[3.46rem]'>
                  Address *
                </div>
                <Select.Root onValueChange={(value) => setValue('pickupAddress', value)}>
                  <Select.Trigger
                    className='w-full md:!text-[1.875rem] lg:!text-[0.875rem] !h-fit'
                    style={isMobile ? inputMobileStyle : inputStyle}
                    variant='soft'
                    placeholder='Address *'
                  />
                  <Select.Content className='z-[99]'>
                    {values?.pickup &&
                      data?.pickUp
                        ?.find((e) => e?.province === values?.pickup)
                        ?.listAddress?.map((e, index) => (
                          <Select.Item
                            key={index}
                            value={e?.address}
                            className='cursor-pointer hover:bg-gray-scale-5 md:!text-[1.875rem] lg:!text-[0.875rem] !h-fit max-md:!h-[7rem]'
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
              className='my-[6.4rem] max-md:block hidden'
            />
            <div className='grid grid-cols-4 gap-[0.75rem] mt-[3.5rem] max-md:gap-[3.2rem] max-md:mt-[4.2rem] max-lg:mt-[7.5rem]'>
              <div className='max-md:max-md:col-span-2'>
                <div className='font-semibold mb-[0.5rem] max-lg:text-[1.875rem] text-[0.875rem] max-md:text-[3.46rem]'>
                  Droff
                </div>
                <Select.Root
                  className='w-full'
                  onValueChange={(value) => setValue('droff', value)}
                >
                  <Select.Trigger
                    className='w-full md:!text-[1.875rem] lg:!text-[0.875rem] !h-fit'
                    style={isMobile ? inputMobileStyle : inputStyle}
                    variant='soft'
                    placeholder='Droff…'
                  />
                  <Select.Content className='z-[99]'>
                    {data?.droff?.map((e, index) => (
                      <Select.Item
                        key={index}
                        value={e?.province}
                        className='cursor-pointer hover:bg-gray-scale-5 md:!text-[1.875rem] lg:!text-[0.875rem] !h-fit max-md:!h-[7rem]'
                      >
                        {e?.province}
                      </Select.Item>
                    ))}
                  </Select.Content>
                </Select.Root>
              </div>
              <div className='max-md:max-md:col-span-2'>
                <div className='mb-[0.5rem] font-semibold max-lg:text-[1.875rem] text-[0.875rem] max-md:text-[3.46rem]'>
                  End date
                </div>
                <RHFDatePicker
                  end={true}
                  long={data?.longTimeTourDay}
                  style={isMobile ? inputMobileStyle : inputStyle}
                  minDate={values.departureDate}
                  selected={values.endDate}
                  onChange={(date) => {
                    const originalDate = new Date(date)
                    const day = data?.longTimeTourDay

                    const updatedDate = new Date(originalDate.getTime() - (day + 1) * 24 * 60 * 60 * 1000)

                    setValue('departureDate', updatedDate)
                    setValue('endDate', date)
                  }}
                />
              </div>
              <div className='col-span-2 max-md:col-span-4'>
                <div className='mb-[0.5rem] font-semibold max-lg:text-[1.875rem] text-[0.875rem] max-md:text-[3.46rem]'>
                  Address *
                </div>
                <Select.Root onValueChange={(value) => setValue('droffAddress', value)}>
                  <Select.Trigger
                    className='w-full md:!text-[1.875rem] lg:!text-[0.875rem] !h-fit'
                    style={isMobile ? inputMobileStyle : inputStyle}
                    variant='soft'
                    placeholder='Address *'
                  />
                  <Select.Content className='z-[99]'>
                    {values?.droff &&
                      data?.droff
                        ?.find((e) => e?.province === values?.droff)
                        ?.listAddress?.map((e, index) => (
                          <Select.Item
                            key={index}
                            value={e?.address}
                            className='cursor-pointer hover:bg-gray-scale-5 md:!text-[1.875rem] lg:!text-[0.875rem] !h-fit max-md:!h-[7rem]'
                          >
                            {e?.address}
                          </Select.Item>
                        ))}
                  </Select.Content>
                </Select.Root>
              </div>
            </div>
          </div>
          <div className='mt-[1.87rem] md:mt-0 max-md:mt-[8rem]'>
            <div className='text-[1.25rem] max-lg:text-[2.25rem] mb-[0.75rem] font-semibold text-[#2E2E2E] max-md:mb-[2.1rem] max-md:text-[4.26rem]'>
              CONFIRMED TOUR BOOKING:
            </div>
            <div className='rounded-[0.5rem] text-[#2E2E2E] border-[#287c0023] border-[0.5px] bg-[#F8FDFF] max-md:rounded-[2.13rem]'>
              <div className='flex h-[2.5rem] max-lg:h-[5.5rem] border-b border-[#EEE] items-center text-[0.875rem] max-md:h-[9.06rem]'>
                <div className='w-[12.1875rem] max-lg:w-[14.1875rem] border-r-[#EEE] border-r-[0.5px] flex-none font-medium text-[0.875rem] max-lg:text-[1.875rem] py-[0.5rem] px-[1rem] max-md:w-[29.3rem] max-md:flex max-md:items-center max-md:ml-[4.26rem] max-md:text-[3.46rem] max-md:h-[9.06rem]'>
                  Type of tour
                </div>
                <div className='py-[0.5rem] px-[1rem] text-[0.875rem] max-lg:text-[1.875rem] max-md:ml-[4.26rem] max-md:text-[3.46rem]'>
                  {title}
                </div>
              </div>
              <div className='flex border-b h-[2.5rem] max-lg:h-[5.5rem] border-[#EEE] items-center text-[0.875rem] max-md:h-[9.06rem]'>
                <div className='w-[12.1875rem] max-lg:w-[14.1875rem] border-r-[#EEE] border-r-[0.5px] flex-none  font-medium  py-[0.5rem] px-[1rem] text-[0.875rem] max-lg:text-[1.875rem] max-md:w-[29.3rem] max-md:flex max-md:items-center max-md:ml-[4.26rem] max-md:text-[3.46rem] max-md:h-[9.06rem]'>
                  Name
                </div>
                <div className='py-[0.5rem] px-[1rem] max-md:ml-[4.26rem] text-[0.875rem] max-lg:text-[1.875rem] max-md:text-[3.46rem]'>
                  {values.name ? values.name + ' - ' + (selfDriving + localDriver) + ' pax' : ''}
                </div>
              </div>
              <div className='flex border-b h-[2.5rem] max-lg:h-[5.5rem] border-[#EEE] items-center text-[0.875rem] max-md:h-[13.866rem]'>
                <div className='w-[12.1875rem] max-lg:w-[14.1875rem] border-r-[#EEE] border-r-[0.5px] flex-none  font-medium  py-[0.5rem] px-[1rem] text-[0.875rem] max-lg:text-[1.875rem] max-md:w-[29.3rem] max-md:flex max-md:items-center max-md:ml-[4.26rem] max-md:text-[3.46rem] max-md:h-[13.866rem]'>
                  Contact Info
                </div>
                <div className='py-[0.5rem] px-[1rem] text-[0.875rem] max-lg:text-[1.875rem] max-md:ml-[4.26rem] max-md:text-[3.46rem]'>
                  {values.email} - {values.phone}
                </div>
              </div>
              <div className='flex border-b h-[3.5rem] border-[#EEE] items-center text-[0.875rem] max-md:h-[23.46rem]'>
                <div className='w-[12.1875rem] max-lg:w-[14.1875rem] border-r-[#EEE] border-r-[0.5px] flex-none font-medium  py-[0.5rem] px-[1rem] text-[0.875rem] max-lg:text-[1.875rem] max-md:w-[29.3rem] max-md:flex max-md:items-center max-md:ml-[4.26rem] max-md:text-[3.46rem] max-md:h-[23.46rem]'>
                  Pick up
                </div>
                <div className='py-[0.5rem] px-[1rem] max-md:ml-[4.26rem] text-[0.875rem] max-lg:text-[1.875rem] max-md:text-[3.46rem]'>
                  {values.departureDate && fDate(values.departureDate)} from {values.pickup} at {values.pickupAddress}
                </div>
              </div>
              <div className='flex border-b h-[2.5rem] max-lg:h-[5.5rem] border-[#EEE] items-center text-[0.875rem] max-md:h-[9.06rem]'>
                <div className='w-[12.1875rem] max-lg:w-[14.1875rem] border-r-[#EEE] border-r-[0.5px] flex-none  font-medium  py-[0.5rem] px-[1rem] text-[0.875rem] max-lg:text-[1.875rem] max-md:w-[29.3rem] max-md:ml-[4.26rem] max-md:border-r-[0.5rem] max-md:flex max-md:items-center max-md:h-[9.06rem] max-md:text-[3.46rem]'>
                  Tour duration
                </div>
                <div className='py-[0.5rem] px-[1rem] max-md:ml-[4.26rem] text-[0.875rem] max-lg:text-[1.875rem] max-md:text-[3.46rem]'>
                  {data?.longTimeTourDay} Days
                </div>
              </div>
              <div className='flex border-b h-[3.5rem] border-[#EEE] items-center text-[0.875rem] max-md:h-[23.46rem]'>
                <div className='w-[12.1875rem] max-lg:w-[14.1875rem] border-r-[#EEE] border-r-[0.5px] flex-none  font-medium  py-[0.5rem] px-[1rem] text-[0.875rem] max-lg:text-[1.875rem] max-md:w-[29.3rem] max-md:flex max-md:items-center max-md:ml-[4.26rem] max-md:text-[3.46rem] max-md:h-[23.46rem]'>
                  Droff off
                </div>
                <div className='py-[0.5rem] px-[1rem] max-md:ml-[4.26rem] max-md:text-[3.46rem] text-[0.875rem] max-lg:text-[1.875rem]'>
                  {values.endDate && fDate(values.endDate)} from {values.droff} at {values.droffAddress}
                </div>
              </div>
              <div className='flex border-b h-[2.5rem] max-lg:h-[5.5rem] border-[#EEE] items-center text-[0.875rem] max-md:h-[9.06rem]'>
                <div className='w-[12.1875rem] max-lg:w-[14.1875rem] border-r-[#EEE] border-r-[0.5px] flex-none  font-medium  py-[0.5rem] px-[1rem] max-md:w-[29.3rem] max-md:flex max-md:items-center max-md:ml-[4.26rem] max-md:text-[3.46rem] max-md:h-[9.06rem] text-[0.875rem] max-lg:text-[1.875rem]'>
                  Self-driving
                </div>
                <div className='py-[0.5rem] px-[1rem] max-md:ml-[4.26rem] max-md:text-[3.46rem] text-[0.875rem] max-lg:text-[1.875rem]'>
                  {selfDriving && `${selfDriving} x $${data?.selfDriving} (${fCurrency(selfCost) || 0} VND)`}
                </div>
              </div>
              <div className='flex border-b h-[2.5rem] max-lg:h-[5.5rem] border-[#EEE] items-center text-[0.875rem] max-md:h-[9.06rem]'>
                <div className='w-[12.1875rem] max-lg:w-[14.1875rem] border-r-[#EEE] border-r-[0.5px] flex-none  font-medium py-[0.5rem] px-[1rem] max-md:w-[29.3rem] max-md:flex max-md:items-center max-md:ml-[4.26rem] max-md:text-[3.46rem] max-md:h-[9.06rem] text-[0.875rem] max-lg:text-[1.875rem]'>
                  Local driver
                </div>
                <div className='py-[0.5rem] px-[1rem] max-md:ml-[4.26rem] max-md:text-[3.46rem] text-[0.875rem] max-lg:text-[1.875rem]'>
                  {localDriver && `${localDriver} x $${data?.localDriver} (${fCurrency(localCose) || 0} VND)`}
                </div>
              </div>
              <div className='flex border-b h-[2.5rem] max-lg:h-[5.5rem] border-[#EEE] items-center text-[0.875rem] max-md:h-[13.86rem]'>
                <div className='w-[12.1875rem] max-lg:w-[14.1875rem] border-r-[#EEE] border-r-[0.5px] flex-none  font-medium  py-[0.5rem] px-[1rem] text-[0.875rem] max-lg:text-[1.875rem] max-md:w-[29.3rem] max-md:flex max-md:items-center max-md:ml-[4.26rem] max-md:text-[3.46rem] max-md:h-[13.86rem]'>
                  {' '}
                  Message
                </div>
                <div className='py-[0.5rem] px-[1rem] max-md:ml-[4.26rem] text-[0.875rem] max-lg:text-[1.875rem] max-md:text-[3.46rem]'>
                  {values.message}
                </div>
              </div>
            </div>

            <div className='px-[1rem] py-[0.75rem] max-lg:px-[2rem] max-lg:py-[1.75rem] bg-[#0F515D] rounded-[0.5rem] mt-[1rem] max-md:rounded-[2.13rem] max-md:p-[3.2rem] max-md:mt-[3.2rem]'>
              <div className='flex justify-between mb-[0.5rem] max-md:mb-[2.1rem] h-[1.5rem] max-lg:h-[3.5rem] max-md:h-auto text-[#D9D9D9]'>
                <div className='text-[0.875rem] max-lg:text-[1.875rem] max-md:text-[3.46rem]'>Provisional:</div>
                <div className='text-[1rem] max-lg:text-[2rem] font-semibold max-md:text-[3.46rem]'>
                  {fCurrency(totalPrice) || 0} VND
                </div>
              </div>
              <div className='flex justify-between h-[1.5rem] max-lg:h-[3.5rem] max-md:mb-[2.1rem] my-[0.5rem] max-md:h-auto text-[#D9D9D9]'>
                <div className='text-[0.875rem] max-lg:text-[1.875rem] max-md:text-[3.46rem]'>Service Charge 3%:</div>
                <div className='text-[1rem] max-lg:text-[2rem] font-semibold max-md:text-[3.46rem]'>
                  {fCurrency(totalPrice * 0.03) || 0} VND
                </div>
              </div>
              <Separator
                my='3'
                size='4'
                color='mint'
              />
              <div className='flex justify-between items-center mt-[0.5rem] h-[2rem] max-md:h-auto text-white max-lg:h-[5rem] max-lg:mt-[1.5rem]'>
                <div className='text-[1rem] max-lg:text-[2rem] font-bold mt-[0.75rem] max-md:text-[3.73rem]'>
                  Total amount:
                </div>
                <h5 className='text-[1.625rem] max-lg:text-[3.625rem] font-bold max-md:text-[3.73rem]'>
                  {fCurrency(totalPrice + servicePrice) || 0} VND
                </h5>
              </div>
            </div>

            <p>{errors.root?.message}</p>

            <div className='flex items-center mt-[1rem] gap-[1.88rem] max-md:gap-[2.13rem] max-md:mt-[3.2rem] max-md:flex-col'>
              <Button
                className='lg:w-[12.1875rem] max-lg:w-[14.1875rem] md:w-fit py-[1rem] px-[2rem] text-[0.875rem] 
                            font-bold max-md:text-[3.46rem] 
                            max-md:w-full max-md:px-[8.52rem] max-md:py-[4.26rem] max-md:rounded-[2.1rem] whitespace-nowrap'
                primary={true}
                content={'BOOK & PAY NOW'}
                type='submit'
              />
              <div className='flex lg:gap-[0.5rem] md:gap-[1.5rem] max-md:gap-[3.1rem]'>
                <Image
                  className='w-[2.28rem] h-[1.38rem] max-lg:h-[3.38rem] max-lg:w-[4.38rem] object-cover max-md:w-[11.3rem] max-md:h-[7.84rem]'
                  src='/images/visa-card.svg'
                  alt='visa card'
                  width={80}
                  height={70}
                />
                <Image
                  className='w-[2.28rem] h-[1.38rem] max-lg:h-[3.38rem] max-lg:w-[4.38rem] object-cover max-md:w-[11.3rem] max-md:h-[7.84rem]'
                  src='/images/master-card.svg'
                  alt='master card'
                  width={80}
                  height={70}
                />
              </div>
            </div>
          </div>
        </div>
      </Form>
    </section>
  )
}
