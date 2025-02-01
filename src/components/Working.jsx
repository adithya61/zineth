import {
  FaLightbulb,
  FaCogs,
  FaUsers,
  FaChartLine,
  FaTools,
  FaHandsHelping,
} from "react-icons/fa";
import useData from "../hooks/useData.js";
import Image1 from "../assets/initial_call.svg";
import Image2 from "../assets/tech_assessment.svg";
import Image3 from "../assets/Planning.png";
import Image4 from "../assets/solution.png";
import Image5 from "../assets/testing_optimize.png";
import Image6 from "../assets/training_support.svg";

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
  "text-green-600",
  "text-purple-600",
  "text-red-600",
  "text-orange-600",
  "text-yellow-600",
];

const images = [Image1, Image2, Image3, Image4, Image5, Image6];

const Working = () => {
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
    <section className="py-12 text-center bg-[#F9F6E6]">
      <h2 className="text-4xl font-semi mb-24">How It Works?</h2>
      <div className="max-w-6xl mx-auto px-4">
        {formattedSteps.length > 0 ? (
          formattedSteps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-8 mb-22`}
            >
              <div className="flex-1 items-center ">
                <img
                  src={images[index]}
                  alt={step.title}
                  className="rounded-lg border-[1px] bg-white object-cover lg:w-[99%] w-[87%]
                   h-full md:p-3 border-stone-200 shadow-md"
                />
              </div>

              <div className="flex-1 text-left mt-10">
                <div className={`${iconColors[index]} mb-4`}>
                  {iconMap[step.title] || <FaLightbulb size={40} />}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
                <p className="text-black leading-10 tracking-wide font-semibold text-md">
                  {step.description}
                </p>
              </div>
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
