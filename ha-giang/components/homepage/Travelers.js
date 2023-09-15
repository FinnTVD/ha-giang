import Image from "next/image";
import SubTitle from "../global/SubTitle";
import SlideTravelers from "./SlideTravelers";

export default function Travelers() {
  return (
    <section
    className="w-full relative h-[500px] mt-[6.25vw] px-[12.75vw]"
    >
        <Image className="object-cover z-0" src={'/images/bg-traveller.png'} fill sizes="100vw"/>
        <div className="w-full h-[8vw] bg-gradient-travelers absolute top-0 left-0 z-[1]">
        </div>
        <SubTitle title="Travelers" subTitle={"from our"} titleClass={'text-center'} subTitleClass={'text-center'}/>
        <SlideTravelers/>
    </section>
  )
}
