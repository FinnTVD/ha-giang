export default function ContentHeader({ header }) {
    return (
        <div className='absolute top-1/3 left-1/4 max-md:left-[5.38vw]'>
            <div
                id='box-slogan'
                className='relative flex flex-col text-white'
                dangerouslySetInnerHTML={{ __html: header?.slogan }}
            />
            {/* <h1 className='text-[4vw] font-heavitas font-normal leading-normal max-md:text-[6.4vw]'>BACKPACK UP</h1>
                <h2 className='font-tomatoes text-[8vw] max-md:text-[16vw] font-normal leading-normal absolute left-[60%] top-[30%] whitespace-nowrap'>
                    and go
                </h2> */}
        </div>
    )
}
