import AboutGoldenToday from "./Aboutgolden";
import BenifitsSection from "./Benifits";
import AurvedicKit from "./AurvedicKit";
import Hero from "./Hero";
import ProductCarousel from "./Products";
import IncomePlan from "./IncomePlan";
import Testimonial from "./Testimonial";

const MainSection = () => {
  return (
    <div>
      <Hero />
      <AboutGoldenToday />
      <ProductCarousel />
      <BenifitsSection />
      <AurvedicKit />
      <IncomePlan />
      <Testimonial />
    </div>
  );
};

export default MainSection;
