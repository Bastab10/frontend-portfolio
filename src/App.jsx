import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import TechStack from "./components/TechStack/TechStack";
import Projects from "./components/Projects/Projects";
// import Experience from "./components/Experience/Experience";
// import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
// import Footer from "./components/Footer/Footer"

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      {/* <Experience /> */}
      {/* <Education /> */}
      <Contact />
      {/* <Footer /> */}
    </>
  );
}

export default App;
