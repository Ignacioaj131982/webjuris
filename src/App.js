import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import "./styles/main.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Contact />
    </>
  );
}

export default App;

