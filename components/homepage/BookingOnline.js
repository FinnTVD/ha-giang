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

export default function BookingOnline() {
    const [ip, setIp] = useState('')
    const router = useRouter()

    const BookingSchema = Yup.object({
        selfDriving: Yup.number(),
        localDriver: Yup.string(),
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
    });

    const methods = useForm({
        resolver: yupResolver(BookingSchema),
        defaultValues
    })

    const {
        register,
        watch,
        setValue,
        formState: { errors },
        handleSubmit,
    } = methods

    const values = watch()

    const selfPrice = 169
    const localPrice = 169
    const selfCost = values.selfDriving * selfPrice * 25000
    const localCose = values.localDriver * localPrice * 25000
    const totalPrice = selfCost + localCose
    const servicePrice = totalPrice * 0.03
    const totalAmount = totalPrice + servicePrice

    const getIp = async () => {
        try {
            const response = await fetch('https://api.ipify.org?format=json')
            const data = await response.json()
            if (data) {
                console.log(data);
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
            vpc_Amount: totalAmount + "00",
            vpc_Command: 'pay',
            vpc_Currency: 'VND',
            vpc_Locale: 'vn',
            vpc_MerchTxnRef: 'hg_' + Math.floor(Date.now()/1000),
            vpc_Merchant: MERCHANT_ID,
            vpc_OrderInfo: data.name,
            vpc_ReturnURL: BASE_URL + '/payment-successful',
            vpc_TicketNo: ip,
            vpc_Version: "2",
        }
        if (pickVpc) {
            const pickParams = pickBy(reqParam, (_, key) => key.startsWith('vpc_') || key.startsWith('user_'))

            return convertStr2URL(pickParams)
        }
        return convertStr2URL(reqParam)
    }

    const onSubmit = async (data) => {
        console.log("data", generateParams(data));
        const params = generateParams(data, true)
        console.log({ params });
        const secretWordArray = CryptoJS.enc.Hex.parse(SECRET_KEY_HASH);
        const hash = CryptoJS.HmacSHA256(params, secretWordArray)
        const vpc_SecureHash = hash.toString(CryptoJS.enc.Hex).toUpperCase()
        console.log({ vpc_SecureHash });
        router.push(`${ONEPAY_HOST}?${generateParams(data)}&vpc_SecureHash=${vpc_SecureHash}`)
    }

    return (
        <section className='pl-[6.25vw] pr-[6.31vw] flex flex-col justify-between mt-[6.25vw]'>
            <div>
                <SubTitle
                    title={'ONLINE BOOKING'}
                    subTitle={'EASY'}
                />
            </div>
            <Form onSubmit={handleSubmit(onSubmit)} {...methods}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-x-[3vw]'>
                    <div>
                        <div>Type of tour:</div>
                        <div className='rounded-[0.5vw] bg-gray-300 p-[1vw]'>
                            <div className='flex justify-between'>
                                <div>3 days of self-driving</div>
                                <div>
                                    <TextField.Root>
                                        <TextField.Slot className='bg-white rounded-l-md'>$169</TextField.Slot>
                                        <TextField.Input
                                            className='input-right !bg-white rounded-r-md'
                                            type='number'
                                            {...register("selfDriving")}
                                            variant="soft"
                                            placeholder="0"
                                            min={0}
                                        />
                                    </TextField.Root>
                                </div>
                            </div>
                            <div className='flex justify-between mt-[0.75vw]'>
                                <div>3 days with local driver</div>
                                <div>
                                    <TextField.Root>
                                        <TextField.Slot className='bg-white rounded-l-md'>$199</TextField.Slot>
                                        <TextField.Input
                                            className='input-right !bg-white rounded-r-md'
                                            type='number'
                                            {...register("localDriver")}
                                            variant="soft"
                                            placeholder="0"
                                            min={0}
                                        />
                                    </TextField.Root>
                                </div>
                            </div>
                            <Separator my="3" size="4" />
                            <div className='flex justify-between'>
                                <div>Total</div>
                                <div>{(values.selfDriving * selfPrice + values.localDriver * localPrice) || 0}</div>
                            </div>
                        </div>

                        <div className='mt-[1vw]'>Customer information:</div>
                        <div className='grid grid-cols-2 gap-[0.75vw]'>
                            <div className='col-span-2'>
                                <TextField.Input className='col-span-2' {...register("name")} variant="soft" placeholder="Name *" />
                            </div>
                            <TextField.Input {...register("email")} variant="soft" placeholder="Email *" />
                            <TextField.Input {...register("phone")} variant="soft" placeholder="Phone(Whatsapp) *" />
                            <div className='col-span-2'>
                                <TextArea {...register("message")} variant="soft" placeholder="Message *" />
                            </div>
                        </div>
                        <div className='relative grid grid-cols-4 gap-[0.75vw] mt-[1vw]'>
                            <LineTrip className="absolute top-[1.5vw] -left-[1.5vw] w-[108%]" dayAmount="3 days" />
                            <div>
                                <div>Pick up</div>
                                <Select.Root onValueChange={value => setValue("pickup", value)}>
                                    <Select.Trigger className='w-full' variant="soft" placeholder="Pick up…" />
                                    <Select.Content>
                                        <Select.Item value="Hanoi">Hanoi</Select.Item>
                                        <Select.Item value="Bacninh">Bacninh</Select.Item>
                                    </Select.Content>
                                </Select.Root>
                            </div>
                            <div>
                                <div className='truncate'>Departure date</div>
                                <RHFDatePicker selected={values.departureDate} onChange={(date) => setValue('departureDate', date)} />
                            </div>
                            <div className='col-span-2'>
                                <div>Address *</div>
                                <TextField.Input className='col-span-2' {...register("pickupAddress")} variant="soft" placeholder="Address *" />
                            </div>
                        </div>
                        <div className='grid grid-cols-4 gap-[0.75vw] mt-[3.5vw]'>
                            <div>
                                <div>Droff</div>
                                <Select.Root className="w-full" onValueChange={value => setValue("droff", value)}>
                                    <Select.Trigger className='w-full' variant="soft" placeholder="Droff…" />
                                    <Select.Content>
                                        <Select.Item value="Hanoi">Hanoi</Select.Item>
                                        <Select.Item value="Bacninh">Bacninh</Select.Item>
                                    </Select.Content>
                                </Select.Root>
                            </div>
                            <div>
                                <div>End date</div>
                                <RHFDatePicker minDate={values.departureDate} selected={values.endDate} onChange={(date) => setValue('endDate', date)} />
                            </div>
                            <div className='col-span-2'>
                                <div>Address *</div>
                                <TextField.Input className='col-span-2' {...register("droffAddress")} variant="soft" placeholder="Address *" />
                            </div>
                        </div>
                    </div>
                    <div className='mt-[1.87vw] md:mt-0'>
                        <div>CONFIRMED TOUR BOOKING:</div>
                        <div className='rounded-[0.5vw] border-gray-50 bg-[#F8FDFF]'>
                            <div className='flex border-b border-gray-50'>
                                <div className='w-[10vw] p-[1vw]'>Type of tour</div>
                                <div className='p-[1vw]'>HA GIANG LOOP TOUR</div>
                            </div>
                            <div className='flex border-b border-gray-50'>
                                <div className='w-[10vw] flex-none p-[1vw]'>Name</div>
                                <div className='p-[1vw]'>{values.name}</div>
                            </div>
                            <div className='flex border-b border-gray-50'>
                                <div className='w-[10vw] flex-none p-[1vw]'>Contact Infor</div>
                                <div className='p-[1vw]'>{values.email} - {values.phone}</div>
                            </div>
                            <div className='flex border-b border-gray-50'>
                                <div className='w-[10vw] flex-none p-[1vw]'>Pick up</div>
                                <div className='p-[1vw]'>{values.departureDate && fDate(values.departureDate)} from {values.pickup} at {values.pickupAddress}</div>
                            </div>
                            <div className='flex border-b border-gray-50'>
                                <div className='w-[10vw] flex-none p-[1vw]'>Tour duration</div>
                                <div className='p-[1vw]'>3 Days</div>
                            </div>
                            <div className='flex border-b border-gray-50'>
                                <div className='w-[10vw] flex-none p-[1vw]'>Droff off</div>
                                <div className='p-[1vw]'>{values.endDate && fDate(values.endDate)} from {values.droff} at {values.droffAddress}</div>
                            </div>
                            <div className='flex border-b border-gray-50'>
                                <div className='w-[10vw] flex-none p-[1vw]'>Self-driving</div>
                                <div className='p-[1vw]'>{values.selfDriving && `${values.selfDriving} x $169 (${fCurrency(selfCost) || 0} VND)`}</div>
                            </div>
                            <div className='flex border-b border-gray-50'>
                                <div className='w-[10vw] flex-none p-[1vw]'>Local driver</div>
                                <div className='p-[1vw]'>{values.localDriver && `${values.localDriver} x $199 (${fCurrency(localCose) || 0} VND)`}</div>
                            </div>
                            <div className='flex border-b border-gray-50'>
                                <div className='w-[10vw] flex-none p-[1vw]'>Message</div>
                                <div className='p-[1vw]'>{values.message}</div>
                            </div>
                        </div>

                        <div className='p-[1vw] bg-[#0F515D] rounded-[0.5vw] mt-[0.75vw]'>
                            <div className='flex justify-between text-[#D9D9D9]'>
                                <div>Provisional:</div>
                                <div>{fCurrency(totalPrice) || 0} VND</div>
                            </div>
                            <div className='flex justify-between text-[#D9D9D9]'>
                                <div>Service Charge 3%:</div>
                                <div>{fCurrency(totalPrice * 0.03) || 0} VND</div>
                            </div>
                            <Separator my="3" size="4" />
                            <div className='flex justify-between text-white'>
                                <div>Total amount:</div>
                                <h5>{fCurrency(totalPrice + servicePrice) || 0} VND</h5>
                            </div>
                        </div>

                        <div className='flex items-center mt-[1vw] gap-[1.88vw]'>
                            <Button
                                primary={true}
                                content={'book now'}
                                type='submit'
                            />
                            <div className='flex gap-[0.5vw]'>
                                <Image
                                    className='w-[2.28vw] h-[1.38vw] object-cover'
                                    src='/images/visa-card.svg'
                                    width={80}
                                    height={70}
                                />
                                <Image
                                    className='w-[2.28vw] h-[1.38vw] object-cover'
                                    src='/images/master-card.svg'
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
