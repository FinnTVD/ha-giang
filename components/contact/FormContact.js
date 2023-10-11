'use client'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import SubTitle from '../global/SubTitle'

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
    <div className='flex-1 h-auto max-md:mt-[16rem]'>
      <SubTitle
        boxClass={'flex flex-col-reverse gap-y-[1rem] max-md:gap-y-[3.27rem]'}
        title={'SEND US A MESSAGE'}
        subTitle={'WE RESPOND YOU IN 1 HOUR'}
        subTitleClass={'mb-[1.25rem]'}
      />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='font-poppins'
      >
        <div className='flex gap-x-[0.75rem] max-lg:gap-x-[1.75rem] max-md:flex-col max-md:gap-y-[3.2rem]'>
          <input
            className='text-[0.8125rem] rounded-[0.5rem] max-lg:text-[1.8125rem] max-lg:placeholder:text-[1.8125rem] max-lg:px-[2rem] max-lg:py-[1.25rem] outline-none flex-1 h-fit bg-background-elevation-01 text-gray-scale-80 font-normal leading-[1.38] py-[0.75rem] px-[1rem] placeholder:text-[0.8125rem] placeholder:leading-[1.38] placeholder:font-normal max-md:text-[3.46667rem] max-md:font-normal max-md:leading-[1.38] max-md:px-[4.27rem] max-md:py-[3.2rem] max-md:placeholder:text-[3.46667rem] max-md:rounded-[2.13rem]'
            placeholder='Full Name *'
            {...register('name')}
          />
          <input
            className='text-[0.8125rem] rounded-[0.5rem] max-lg:text-[1.8125rem] max-lg:placeholder:text-[1.8125rem] max-lg:px-[2rem] max-lg:py-[1.25rem] outline-none flex-1 h-fit bg-background-elevation-01 text-gray-scale-80 font-normal leading-[1.38] py-[0.75rem] px-[1rem] placeholder:text-[0.8125rem] placeholder:leading-[1.38] placeholder:font-normal max-md:text-[3.46667rem] max-md:font-normal max-md:leading-[1.38] max-md:px-[4.27rem] max-md:py-[3.2rem] max-md:placeholder:text-[3.46667rem] max-md:rounded-[2.13rem]'
            placeholder='Address *'
            {...register('address')}
          />
        </div>
        <div className='flex gap-x-[0.75rem] max-lg:gap-x-[1.75rem] max-md:flex-col max-md:gap-y-[3.2rem] max-lg:my-[1.75rem] my-[0.75rem] max-md:my-[3.2rem]'>
          <input
            className='text-[0.8125rem] rounded-[0.5rem] max-lg:text-[1.8125rem] max-lg:placeholder:text-[1.8125rem] max-lg:px-[2rem] max-lg:py-[1.25rem] outline-none flex-1 h-fit bg-background-elevation-01 text-gray-scale-80 font-normal leading-[1.38] py-[0.75rem] px-[1rem] placeholder:text-[0.8125rem] placeholder:leading-[1.38] placeholder:font-normal max-md:text-[3.46667rem] max-md:font-normal max-md:leading-[1.38] max-md:px-[4.27rem] max-md:py-[3.2rem] max-md:placeholder:text-[3.46667rem] max-md:rounded-[2.13rem]'
            placeholder='Phone (Whatsapp) *'
            {...register('phone')}
          />
          <input
            className='text-[0.8125rem] max-lg:text-[1.8125rem] max-lg:placeholder:text-[1.8125rem] max-lg:px-[2rem] max-lg:py-[1.25rem] rounded-[0.5rem] outline-none flex-1 h-fit bg-background-elevation-01 text-gray-scale-80 font-normal leading-[1.38] py-[0.75rem] px-[1rem] placeholder:text-[0.8125rem] placeholder:leading-[1.38] placeholder:font-normal max-md:text-[3.46667rem] max-md:font-normal max-md:leading-[1.38] max-md:px-[4.27rem] max-md:py-[3.2rem] max-md:placeholder:text-[3.46667rem] max-md:rounded-[2.13rem]'
            placeholder='Email *'
            {...register('email')}
          />
        </div>
        <textarea
          className='h-[5.5625rem] w-full text-[0.8125rem] rounded-[0.5rem] max-lg:text-[1.8125rem] max-lg:placeholder:text-[1.8125rem] max-lg:px-[2rem] max-lg:py-[1.25rem] outline-none bg-background-elevation-01 text-gray-scale-80 font-normal leading-[1.38] py-[0.75rem] px-[1rem] placeholder:text-[0.8125rem] placeholder:leading-[1.38] placeholder:font-normal max-md:text-[3.46667rem] max-md:font-normal max-md:leading-[1.38] max-md:px-[4.27rem] max-md:py-[3.2rem] max-md:placeholder:text-[3.46667rem] max-md:rounded-[2.13rem] max-md:h-[23.33rem]'
          placeholder='Contact content'
          {...register('message')}
        ></textarea>
        <button className='uppercase mt-[0.75rem] max-lg:mt-[2rem] max-lg:mb-[2rem] mb-[1.25rem] text-[0.8125rem] max-lg:text-[1.8125rem] font-bold leading-[1.53] flex justify-center items-center w-[11.125rem] max-lg:w-[14.125rem] max-lg:h-[5rem] h-[3rem] bg-primary-70 rounded-[0.5rem] text-white max-md:w-full max-md:py-[4.27rem] max-md:rounded-[2.13rem] max-md:text-[3.4667rem] max-md:h-fit max-md:my-[3rem]'>
          send
        </button>
      </form>
      <p className='text-[0.875rem] max-lg:text-[1.875rem] font-normal leading-[1.57] tracking-[0.00219rem] w-[32.5625rem] max-lg:w-[47rem] text-gray-scale-50 max-md:w-full max-md:text-[3.7333rem] max-md:tracking-[0.00933rem]'>
        <strong className='text-gray-scale-80'>Your information is not public !</strong> From the very time that you
        contact us, our personalized consultant who is an expert of the region, will assist you by his/her well-trained
        skills for first-hand advice and suggestions
      </p>
    </div>
  )
}
