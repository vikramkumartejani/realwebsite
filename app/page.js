import Image from "next/image";
import Link from "next/link";
import Chart from "./chart/page.js";
import Hor from "./hallofreal/page.js";

export default function Home() {
  return (
    <>
    <div className="bg-custom-gradient w-full h-screen">
      <div className="px-5 md:px-10 2xl:px-20 h-full">
        {/* Navbar */}
        <div className="flex items-center justify-between py-1">
          <h2 className="text-[#FFFFFF] text-[50px] smtext-[70px] sm:leading-[94.29px] font-odibee font-normal">real.</h2>
          <ul className="flex items-center gap-[15px] sm:gap-[25px] text-white">
            <li><Link href='/about' className="text-[20px] sm:text-[32px] sm:leading-[43.1px] font-normal font-odibee">ABOUT</Link></li>
            <li><Link href='/chart' className="text-[20px] sm:text-[32px] sm:leading-[43.1px] font-normal font-odibee">CHART</Link></li>
            <li><Link href='/tg' className="text-[20px] sm:text-[32px] sm:leading-[43.1px] font-normal font-odibee">TG</Link></li>
            <li><Link href='/twitter' className="text-[20px] sm:text-[32px] sm:leading-[43.1px] font-normal font-odibee">TWITTER</Link></li>
          </ul>
          <div className="md:block hidden"></div>
        </div>

        <div className="flex items-start justify-start w-full mt-[100px]">
          <div className="flex xl:items-center xl:flex-row flex-col justify-between w-full gap-20 xl:gap-5">
            <div className="text-white">
              <h4 className="text-[24px] leading-[23.28px] font-normal mb-1">/rē(ə)l/</h4>
              <h2 className="text-[96px] leading-9 font-normal">re·al<span className="text-[20px]">1</span></h2>
              <p className="text-[32px] leading-[43.1px] font-normal mb-4 xl:w-[400px] 2xl:w-full">not stated, although thought, understood, or felt</p>
              <button className="bg-white rounded min-w-[310px] h-[61px] text-[#000000] text-[32px] leading-[43.1px] font-normal">JOIN THE MOVEMENT</button>
            </div>
            <div className="flex flex-col items-center gap-5 md:items-end">
              <div className="flex items-end justify-end flex-wrap sm:flex-nowrap gap-5 md:mr-20">
                <Image src='/assets/video5.gif' alt="video" width={261} height={346} className="sm:w-[261px] w-full sm:h-[200px] h-full " />
                <Image src='/assets/video4.gif' alt="video" width={261} height={346} className="sm:w-[261px] w-full sm:h-[250px]" />
              </div>
              <div className="flex items-start justify-center flex-wrap gap-5">
                <Image src='/assets/video2.gif' alt="video" width={209} height={255} className="sm:w-[230px] w-full sm:h-[340px]" />
                <Image src='/assets/video1.gif' alt="video" width={209} height={255} className="sm:w-[230px] w-full sm:h-[340px]" />
                <Image src='/assets/video3.gif' alt="video" width={209} height={255} className="sm:w-[210px] w-full sm:h-[340px]" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center flex-col items-center w-full mt-10">
          <h2 className="text-white text-[32px] font-normal leading-[43.1px]">Explore more</h2>
          <Link href='/chart'><Image src='/assets/arrow-down.svg' alt="Arrow" width={50} height={50} className="arrowAnimation" /></Link>
        </div>
      </div>
    </div>
    <Chart />
    <Hor />
    </>
  );
}
