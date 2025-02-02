import useData from "../hooks/useData.js";

const About = () => {
  const aboutData = useData();

  const aboutEntry = aboutData.find((item) => item[0] === "About us");
  const aboutContent = aboutEntry ? aboutEntry[1] : "";

  return (
    <section className="py-12 bg-[#F9F6E6]">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-semibold mb-16 open-sans">About Us</h2>
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
