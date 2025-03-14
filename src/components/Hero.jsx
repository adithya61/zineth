import hero from "../assets/hero.webp";
import Navbar from "./Navbar";
const Hero = () => {
  return (
    <div className="flex flex-col hero-container">
      <Navbar />
      <section
        className=" px-5 md:px-28  flex flex-row justify-between items-center h-[calc(100vh-64px)]
       bg-cover bg-center text-center bg-transparent pb-10"
      >
        {/* hero text and head */}
        <div className=" w-full lg:w-[50%] text-left flex flex-col gap-5 justify-center">
          <h1 className="hero-text font-serif tracking-normal text-5xl md:text-7xl md:leading-16 font-medium pr-20 text-[#FBF5E5]">
            Find and close your next deal
          </h1>
          <p className="hero-desc text-xl md:text-2xl tracking-normal inter text-[#FBF5E5] mb-6 text-left max-w-2xl">
            We provide expert business solutions to help you scale efficiently
            and effectively. Let us guide you towards success.
          </p>
          <div className="flex gap-8">
            <button
              className="hero-btn--book w-fit px-6 md:px-8 py-3 rounded-lg text-lg
                 font-medium tracking-wide hover:bg-yellow-300 cursor-pointer
               transition duration-300"
            >
              Book a Call
            </button>
            <button
              className="bg-transparent border-2 text-white border-white hover:border-black  text--black w-fit px-6 py-3 rounded-lg text-lg
                 font-medium tracking-wide hover:bg-[#d5d5d5] hover:text-black cursor-pointer
               transition duration-300 "
            >
              Get Demo
            </button>
          </div>
        </div>
        {/* hero image */}
        <div className="lg:w-[50%] hidden lg:block h-full lg:mt-[37%] xl:mt-[30%] relative left-20">
          <img className=" object-cover" src={hero} alt="hero image" />
        </div>
      </section>
    </div>
  );
};

export default Hero;
