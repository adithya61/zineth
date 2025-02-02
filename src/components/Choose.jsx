import {
  FaUserShield,
  FaCogs,
  FaLightbulb,
  FaShieldAlt,
  FaHeadset,
  FaMoneyBillAlt,
} from "react-icons/fa";
import useData from "../hooks/useData.js";
import Illustration from "../assets/why.svg";

const iconMap = {
  "Experienced Team": <FaUserShield size={40} />,
  "Custom Solutions": <FaCogs size={40} />,
  "Cutting-Edge Technology": <FaLightbulb size={40} />,
  "Security First Approach": <FaShieldAlt size={40} />,
  "24/7 Support": <FaHeadset size={40} />,
  "Cost-Effective": <FaMoneyBillAlt size={40} />,
};

const iconColors = ["text-yellow-500", "text-red-500", "text-sky-500"];

const Choose = () => {
  const chooseData = useData();

  const chooseEntry = chooseData.find((item) => item[0] === "Why choose us?");
  const chooseString = chooseEntry ? chooseEntry[1] : "";

  const formattedReasons = chooseString
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
    <section className="py-12 bg-stone-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-semibold text-center mb-12 open-sans">
          Why Choose Us?
        </h2>

        <div className="flex flex-col md:flex-row gap-8 mb-16">
          <div className="flex-1 grid grid-cols-1 gap-8">
            {formattedReasons.length > 0 ? (
              formattedReasons.slice(0, 3).map((reason, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-4"
                >
                  <div className={`${iconColors[index]} flex-shrink-0`}>
                    {iconMap[reason.title] || <FaUserShield size={40} />}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4 tracking-wide">
                      {reason.title}
                    </h3>
                    <p className="text-gray-600 font-medium tracking-wide">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p>Loading reasons...</p>
            )}
          </div>

          <div className="flex-1 flex items-center justify-center">
            <img
              src={Illustration}
              alt="Why Choose Us Illustration"
              className="w-full h-auto rounded-lg hidden md:block bg-white shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Choose;
