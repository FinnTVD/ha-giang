import Image from "next/image";
import Nav from "./Nav";
import FeturesHeader from "./FeturesHeader";
import ContentHeader from "../homepage/ContentHeader";

export default function Header() {
  return (
    <header className="w-full h-screen relative">
      <Nav />
      <Image
        className="z-0 object-cover"
        src="/images/bg-header.jpg"
        fill
        sizes="100vw"
        priority
      />
      <ContentHeader />
      <FeturesHeader />
    </header>
  );
}
