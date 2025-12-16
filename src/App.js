import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import WhatsappFloat from "./components/WhatsappFloat";
import "./styles/main.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
      <ScrollToTop />
      <WhatsappFloat />
    </>
  );
}

export default App;

