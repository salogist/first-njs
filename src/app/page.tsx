import Herosection from "./components/sections/Herosection";
import ContactSection from "./components/sections/ContactSection";
import AboutusSection from "./components/sections/AboutusSection";
import ServiceSection from "./components/sections/ServiceSection";

export default function Home() {
  return(
    <>
    <Herosection />  
    <AboutusSection /> 
    <ServiceSection /> 
    <ContactSection />  
    </>
  );
}