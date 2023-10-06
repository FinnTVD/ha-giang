

const array  = new Array(6).fill(0)
export default function TextInfinite (){
    return(
        <section className="flex flex-nowrap w-full h-[2.5vw] overflow-hidden relative mt-[6.1vw] max-md:hidden">
            <div className="absolute left-0 top-0 whitespace-nowrap w-full h-full">
                <div className="animate-scrollInfinite flex w-fit">
                    {array.map((item) => 
                    <div className="flex items-center">
                        <div className="text-[#5FB01C] font-heavitas text-[2.625vw] leading-[1]"> BEST LOOP IN VIET NAM </div>
                        <div className="px-[1.875vw]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none" className="w-[1.125vw] h-auto">
                                <circle cx="9.74609" cy="9.29688" r="9.20312" fill="#5FB01C"/>
                            </svg>
                        </div>
                    </div>
                    )}
                </div>
            </div>
        </section>
    )
}