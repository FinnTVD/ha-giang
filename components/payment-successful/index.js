import Link from 'next/link'

const PaymentSuccessFulPage = ({ searchParams }) => {
  return (
    <div className='w-full h-screen flex justify-center items-center bg-primary-5'>
      <div className='w-[60%] h-[60%] flex flex-col justify-center items-center p-[1.5rem] bg-white shadow-btn rounded-[1.25rem] gap-y-[3rem]'>
        <div
          className={`${
            searchParams?.vpc_TxnResponseCode === '0' ? 'bg-green-500' : 'bg-red-500'
          } w-[5rem] h-[5rem] rounded-full flex items-center justify-center`}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='2.5'
            stroke='white'
            class='w-[3.5rem] h-[3.5rem]'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M4.5 12.75l6 6 9-13.5'
            />
          </svg>
        </div>
        <h1
          className={`${
            searchParams?.vpc_TxnResponseCode === '0' ? 'text-secondary-green-600' : 'text-red-500'
          } text-[2rem] font-heavitas leading-[1] font-normal`}
        >
          {searchParams?.vpc_TxnResponseCode === '0' ? 'Payment Successfully!' : 'Payment failed!'}
        </h1>
        <Link
          href={'/'}
          className='text-[1.25rem] font-heavitas text-primary-70 font-normal leading-[1] w-fit px-[2rem] py-[1rem] flex justify-center rounded-[0.5rem] border border-solid border-primary-70 hover:bg-primary-70 hover:text-white transition-all duration-500 hover:scale-[1.1] active:scale-95'
        >
          Back Home
        </Link>
      </div>
    </div>
  )
}

export default PaymentSuccessFulPage
