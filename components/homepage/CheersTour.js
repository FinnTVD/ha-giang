import Image from "next/image";
import SubTitle from "../global/SubTitle";

const arr = new Array(4).fill(0)

export default function CheersTour() {
  return (
    <section className="mt-[6.25vw] md:flex md:flex-row-reverse">
          <SubTitle boxClass={'absolute top-0 left-0'} subTitle={'start with'} title={'ha giang tour cheers tour'} titleClass={'w-[26.875vw]'}/>
        <div className="relative w-[35.4375vw] h-fit">
            <Image src="/images/mapvn.png" fill sizes="100vw" className="object-cover"/>
        </div>
        <ul>
            {Array.isArray(arr) && arr?.map((e,index)=>(
              <li ></li>
            ))}
        </ul>
    </section>
  )
}
