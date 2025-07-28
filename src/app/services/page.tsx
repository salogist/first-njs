import SeoOptimizationCreative from "../components/sections/SeoOptimizationCreative";
import WebDevelopment from "../components/sections/WebDevelopment";
import UiUxDesign from "../components/sections/UiUxDesign";
import ServiceSection from "../components/sections/ServiceSection";

// حالت اول - مستقیم اکسپورت در تعریف
export default function Serv() {
    return(
      <>
        <ServiceSection /> 
        <WebDevelopment /> 
        <UiUxDesign /> 
        <SeoOptimizationCreative />   
      </>
    );
  }
  