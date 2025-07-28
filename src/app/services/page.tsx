import SeoOptimizationCreative from "../components/sections/SeoOptimizationCreative";
import WebDevelopment from "../components/sections/WebDevelopment";
import UiUxDesign from "../components/sections/UiUxDesign";
import ServiceSection from "../components/sections/ServiceSection";

export default function Home() {
  return(
    <>
    <ServiceSection /> 
    <WebDevelopment /> 
    <UiUxDesign /> 
    <SeoOptimizationCreative />   
    </>
  );
}