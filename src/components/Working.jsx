import {
  FaLightbulb,
  FaCogs,
  FaUsers,
  FaChartLine,
  FaTools,
  FaHandsHelping,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import useData from "../hooks/useData.js";
import Initial from "../assets/initial_call.jpg";
import Assessment from "../assets/tech_assessment.svg";
import Planning from "../assets/Planning.png";
import Solution from "../assets/solution.png";
import Testing from "../assets/testing_optimize.png";
import Support from "../assets/training_support.svg";
import { FaArrowRight } from "react-icons/fa";

const iconMap = {
  "Initial Consultation": <FaLightbulb size={40} />,
  "Technology Assessment": <FaCogs size={40} />,
  "Strategic Planning": <FaUsers size={40} />,
  "Solution Implementation": <FaChartLine size={40} />,
  "Testing & Optimization": <FaTools size={40} />,
  "Training & Support": <FaHandsHelping size={40} />,
};

const iconColors = [
  "text-black",
  "text-black",
  "text-black",
  "text-black",
  "text-black",
  "text-black",
];

const images = [Initial, Assessment, Planning, Solution, Testing, Support];

const Working = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const workingData = useData();

  const workingEntry = workingData.find((item) => item[0] === "How it works?");
  const workingString = workingEntry ? workingEntry[1] : "";

  const formattedSteps = workingString
    .split("\n")
    .map((item) => {
      const [title, description] = item.split("–");
      if (!title || !description) return null;
      return {
        title: title.trim(),
        description: description.trim(),
      };
    })
    .filter(Boolean);

  return (
    <section className="py-12 text-center bg-[#fff]">
      <h2 className="text-4xl font-semibold mb-16 open-sans underline underline-offset-10">
        How It Works?
      </h2>
      <div className="flex flex-col px-4 md:px-16">
        {formattedSteps.length > 0 ? (
          formattedSteps.map((step, index) => (
            <div
              key={index}
              data-aos="fade-down"
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-[4rem] mb-12`}
            >
              {/* image */}
              <div className="  bg-transparent lg:w-[50%] h-full lg:h-[26rem]">
                <img
                  src={images[index]}
                  alt={step.title}
                  className="rounded-lg  bg-white object-fit aspect-ratio
                   h-full w-full "
                />
              </div>
              {/* image end */}

              {/* second row */}
              <div className="flex flex-col items-center lg:items-start mt-10 w-full text-center lg:text-left lg:w-[50%]">
                <div className="flex justify-center lg:justify-start items-center gap-4">
                  {/* icon */}
                  <div className={`${iconColors[index]} text-gray-700`}>
                    {iconMap[step.title] || <FaLightbulb size={40} />}
                  </div>
                  {/* title */}
                  <h3 className=" text-gary text-3xl md:text-4xl font-medium roboto-mono-400">
                    {step.title}
                  </h3>
                </div>
                {/* description */}
                <p className="text-gray-800 opacity-85 inter leading-[1.75rem] tracking-[4px] text-md pt-5 pr-0 lg:pr-[10%]">
                  {step.description}
                </p>
                {/* Learn more button */}
                <button className=" w-fit group mt-10 flex  items-center gap-3 text-white roboto bg-[#262626] rounded-lg py-3.5 hover:bg-gray-900 cursor-pointer px-[25%] lg:px-7">
                  Learn More{" "}
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">
                    <FaArrowRight />
                  </span>
                </button>
              </div>
              {/* second row end */}
            </div>
          ))
        ) : (
          <p>Loading steps...</p>
        )}
      </div>
    </section>
  );
};

export default Working;
