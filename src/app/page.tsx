import Herosection from "./components/sections/Herosection";
import ContactSection from "./components/sections/ContactSection";
import AboutusSection from "./components/sections/AboutusSection";
import ServiceSection from "./components/sections/ServiceSection";
import WebDevelopment from "./components/sections/WebDevelopment";
import UiUxDesign from "./components/sections/UiUxDesign";
import SeoOptimizationCreative from "./components/sections/SeoOptimizationCreative";

export default function Home() {
  return(
    <>
    <Herosection />  
    <AboutusSection /> 
    <ServiceSection /> 
    <WebDevelopment /> 
    <UiUxDesign /> 
    <SeoOptimizationCreative /> 
    <ContactSection />  
    </>
  );
}