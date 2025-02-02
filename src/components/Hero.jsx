import hero from "../assets/hero.webp";
const Hero = () => {
  return (
    <section
      className="hero-container px-5 md:px-10  flex flex-row justify-between items-center h-[calc(100vh - 64px)]
       bg-cover bg-center text-center bg-[#F9F6E6] pb-10"
    >
      {/* hero text and head */}
      <div className=" w-full lg:w-[50%] text-left flex flex-col gap-5 justify-center">
        <h1 className="text-6xl tracking-wide leading-16 font-medium pr-20 text-black mb-4">
          Find and close your next deal
        </h1>
        <p className="text-xl tracking-wide text-black mb-6 text-left max-w-2xl">
          We provide expert business solutions to help you scale efficiently and
          effectively. Let us guide you towards success.
        </p>
        <button
          className="bg-yellow-400 text-gray-800 w-fit px-6 py-3 rounded-lg text-lg
             font-medium tracking-wide hover:bg-yellow-300 cursor-pointer
           transition duration-300"
        >
          Book a Call
        </button>
      </div>
      {/* hero image */}
      <div className="lg:w-[50%] hidden lg:block h-full mt-36 relative left-20">
        <img className=" object-cover" src={hero} alt="hero image" />
      </div>
    </section>
  );
};

export default Hero;
