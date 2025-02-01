import {
  FaLaptopCode,
  FaCloud,
  FaShieldAlt,
  FaChartLine,
  FaNetworkWired,
  FaHeadset,
} from "react-icons/fa";
import useData from "../hooks/useData.js";

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

  return (
    <section className="py-12 bg-gray-100 text-center h-fit ">
      <h2 className="text-4xl font-semibold mb-24">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {formattedServices.length > 0 ? (
          formattedServices.map((service, index) => (
            <div
              key={index}
              className="cursor-pointer bg-white p-8 mb-10 rounded-lg shadow-md flex flex-col items-center"
            >
              <div className="text-blue-600 mb-4">
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
