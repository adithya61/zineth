import useData from "../hooks/useData.js";

const About = () => {
  const aboutData = useData();

  const aboutEntry = aboutData.find((item) => item[0] === "About us");
  const aboutContent = aboutEntry ? aboutEntry[1] : "";

  return (
    <section className="py-12 bg-[#FFCDB2]">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl mb-16 underline underline-offset-[10px] open-sans-400">
          About Us
        </h2>
        <div className="text-gray-700 text-xl leading-normal">
          {aboutContent.split("\n").map((line, index) => (
            <p key={index} className="mb-4 inter px-6">
              {line}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
