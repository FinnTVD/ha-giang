import Image from "next/image";

export default function Footer() {
  return (
    <footer className="h-screen w-full relative px-[6.25vw]">
      <Image className="z-0" src="/images/bg-footer.png" sizes="100vw" fill />
      <div className="flex justify-between items-center w-full relative z-[1]">
        <Image
          className="w-[12.75vw] h-[12.05vw] object-cover"
          src="/images/logo-footer.png"
          width={220}
          height={200}
        />
        <div className="flex gap-x-[9.47vw]">
          <div>
            <h2>CONTACT US</h2>
          </div>
          <div>
            <h2>CONTACT US</h2>
          </div>
          <div>
            <h2>CONTACT US</h2>
          </div>
        </div>
      </div>
    </footer>
  );
}
