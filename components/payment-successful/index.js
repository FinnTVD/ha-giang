import Link from 'next/link'

const PaymentSuccessFulPage = ({ searchParams }) => {
    return (
        <div className='w-full h-screen flex justify-center items-center bg-primary-5'>
            <div className='w-[60%] h-[60%] flex flex-col justify-center items-center p-[1.5vw] bg-white shadow-btn rounded-[1.25vw] gap-y-[3vw]'>
                <div
                    className={`${
                        searchParams?.vpc_TxnResponseCode === '0' ? 'bg-green-500' : 'bg-red-500'
                    } w-[5vw] h-[5vw] rounded-full flex items-center justify-center`}
                >
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='2.5'
                        stroke='white'
                        class='w-[3.5vw] h-[3.5vw]'
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
                    } text-[2vw] font-heavitas leading-[1] font-normal`}
                >
                    {searchParams?.vpc_TxnResponseCode === '0' ? 'Payment Successfully!' : 'Payment failed!'}
                </h1>
                <Link
                    href={'/'}
                    className='text-[1.25vw] font-heavitas text-primary-70 font-normal leading-[1] w-fit px-[2vw] py-[1vw] flex justify-center rounded-[0.5vw] border border-solid border-primary-70 hover:bg-primary-70 hover:text-white transition-all duration-500 hover:scale-[1.1] active:scale-95'
                >
                    Back Home
                </Link>
            </div>
        </div>
    )
}

export default PaymentSuccessFulPage
