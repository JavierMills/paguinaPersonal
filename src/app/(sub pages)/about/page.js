import Image from "next/image";
import bg from "../../../../public/background/aboutPages.png";
import RenderModel from "../../components/RenderModel";
import HatModel from "../../components/models/HatModel";
import AboutDetails from "@/app/components/models/about";
// import dynamic from "next/dynamic";

// const HatModel = dynamic(() => import("../../components/models/HatModel"), {ssr:false})


export default function Home() {
  return (
    <>
      <Image
      priority sizes="100vw" 
        src={bg}
        alt="background-image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-25"
      ></Image>

      <div className="w-full h-3/5 xs:h-3/4 sm:h-screen absolute top-1/2 -translate-y-1/2 left-0 z-10">
        <RenderModel>
          <HatModel />
        </RenderModel>
      </div>
      <div className="relative w-full h-screen flex flex-col items-center justify-center">
        <div className="absolute flex flex-col items-center text-center top-1/2 sm:top-[60%] left-1/2 -translate-y-1/2 -translate-x-1/2">
          <h1 className="font-bold text-6xl xs:text-7xl sm:text-8xl lg:text-9xl text-accent w-full overflow-hidden border-r-4 border-solid border-accent" 
          style={{
            filter : 'drop-shadow(0 0 10px rgb(254 254 91)) drop-shadow(0 0 35px rgb(254 254 91))',
            animation: `animate 3s linear infinite`}}>JavierMills</h1>
          <p className="font-light text-foreground text-ls">
            Meet the brilliant behind this portfolio
          </p>
        </div>
      </div>

      <AboutDetails />
    </>
  );
}
