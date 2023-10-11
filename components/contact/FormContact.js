'use client'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import SubTitle from '../global/SubTitle'
import Button from '../global/Button'

//-----------------------------

const schema = yup
  .object({
    name: yup.string().required('Vui lòng điền họ tên!'),
    phone: yup
      .string()
      .test('is-number', 'Số điện thoại không hợp lệ!', (value) => {
        if (value && isNaN(value)) {
          return false
        }
        return true
      })
      .required('Vui lòng điền số điện thoại!'),
    email: yup
      .string()
      .required('Vui lòng điền email!')
      .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Email không hợp lệ!'),
    message: yup.string().required(),
    address: yup.string().required(),
  })
  .required()

export default function FormContact() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })
  const name = watch('name')

  const onSubmit = (data) => {
    console.log('data form contact', data)
  }
  return (
    <div className='flex-1 h-auto '>
      <SubTitle
        boxClass={'flex flex-col-reverse gap-y-[1rem] max-md:gap-y-[4.27rem]'}
        title={'SEND US A MESSAGE'}
        subTitle={'WE RESPOND YOU IN 1 HOUR'}
      />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='font-poppins'
      >
        <div className='flex gap-x-[0.75rem]'>
          <input
            className='text-[0.8125rem] rounded-[0.5rem] outline-none flex-1 h-fit bg-background-elevation-01 text-gray-scale-20 font-normal leading-[1.38] py-[0.75rem] px-[1rem] placeholder:text-[0.8125rem] placeholder:leading-[1.38] placeholder:font-normal'
            placeholder='Full Name *'
            {...register('name')}
          />
          <input
            className='text-[0.8125rem] rounded-[0.5rem] outline-none flex-1 h-fit bg-background-elevation-01 text-gray-scale-20 font-normal leading-[1.38] py-[0.75rem] px-[1rem] placeholder:text-[0.8125rem] placeholder:leading-[1.38] placeholder:font-normal'
            placeholder='Address *'
            {...register('name')}
          />
        </div>
        <div className='flex gap-x-[0.75rem] my-[0.75rem]'>
          <input
            className='text-[0.8125rem] rounded-[0.5rem] outline-none flex-1 h-fit bg-background-elevation-01 text-gray-scale-20 font-normal leading-[1.38] py-[0.75rem] px-[1rem] placeholder:text-[0.8125rem] placeholder:leading-[1.38] placeholder:font-normal'
            placeholder='Phone (Whatsapp) *'
            {...register('name')}
          />
          <input
            className='text-[0.8125rem] rounded-[0.5rem] outline-none flex-1 h-fit bg-background-elevation-01 text-gray-scale-20 font-normal leading-[1.38] py-[0.75rem] px-[1rem] placeholder:text-[0.8125rem] placeholder:leading-[1.38] placeholder:font-normal'
            placeholder='Email *'
            {...register('name')}
          />
        </div>
        <textarea
          className='h-[5.5625rem] w-full text-[0.8125rem] rounded-[0.5rem] outline-none bg-background-elevation-01 text-gray-scale-20 font-normal leading-[1.38] py-[0.75rem] px-[1rem] placeholder:text-[0.8125rem] placeholder:leading-[1.38] placeholder:font-normal'
          placeholder='Contact content'
          {...register('message')}
        ></textarea>
        <Button
          content={'send'}
          primary
          className={'w-[11.125rem] h-[3rem] mt-[1rem]'}
        />
      </form>
      <p className='text-[0.875rem] mt-[1.25rem] font-normal leading-[1.57] tracking-[0.00219rem] w-[32.5625rem]'>
        <strong>Your information is not public !</strong> From the very time that you contact us, our personalized
        consultant who is an expert of the region, will assist you by his/her well-trained skills for first-hand advice
        and suggestions
      </p>
    </div>
  )
}
