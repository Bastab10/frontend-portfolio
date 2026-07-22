import { Suspense, lazy } from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import TechStack from "../components/TechStack/TechStack";

const Projects = lazy(() => import("../components/Projects/Projects"));
const Contact = lazy(() => import("../components/Contact/Contact"));

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Suspense fallback={<div className="h-64 bg-neutral-50" />}> 
          <Projects />
          <Contact />
        </Suspense>
      </main>
    </>
  );
}

export default Home;
