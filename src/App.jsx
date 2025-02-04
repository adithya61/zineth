import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Working from "./components/Working";
import Choose from "./components/Choose";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Hero />
      <Services />
      <Working />
      <Choose />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
