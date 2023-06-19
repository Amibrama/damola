import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import Project from "./components/Project/Project";
import Facts from "./components/Facts/Facts";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Education />
      <Experience />
      <Project />
      <Facts />
      <Footer />
    </div>
  );
}

export default App;
