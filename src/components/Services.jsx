import {
  FaLaptopCode,
  FaCloud,
  FaShieldAlt,
  FaChartLine,
  FaNetworkWired,
  FaHeadset,
} from "react-icons/fa";
import useData from "../hooks/useData.js";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const iconMap = {
  "IT Strategy & Consulting": <FaLaptopCode size={40} />,
  "Cloud Solutions": <FaCloud size={40} />,
  //prettier-ignore
  "Cybersecurity": <FaShieldAlt size={40} />,
  "Software Development & Integration": <FaChartLine size={40} />,
  "IT Infrastructure & Networking": <FaNetworkWired size={40} />,
  "AI & Data Analytics": <FaHeadset size={40} />,
};

const Services = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const servicesData = useData();

  const servicesEntry = servicesData.find((item) => item[0] === "services");
  const servicesString = servicesEntry ? servicesEntry[1] : "";

  const formattedServices = servicesString
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

  const iconColors = [
    "text-black",
    "text-green-600",
    "text-purple-600",
    "text-red-600",
    "text-blue-600",
    "text-yellow-500",
  ];

  return (
    <section className=" px-16 py-12 bg-white text-left h-fit ">
      <h2 className="text-4xl font-semibold mb-16 open-sans px-4">
        Our Services
      </h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {formattedServices.length > 0 ? (
          formattedServices.map((service, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className="cursor-pointer bg-white p-8 mb-10 rounded-lg flex flex-col items-center"
            >
              <div className={`${iconColors[index]} mb-4`}>
                {iconMap[service.title] || <FaLaptopCode size={40} />}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))
        ) : (
          <p>Loading services...</p>
        )}
      </div>
    </section>
  );
};

export default Services;
