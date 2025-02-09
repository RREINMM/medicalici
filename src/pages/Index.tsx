
import { Hero } from "@/components/Hero";
import { Specialties } from "@/components/Specialties";
import { Contact } from "@/components/Contact";
import { WhyChooseUs } from "@/components/WhyChooseUs";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Specialties />
      <WhyChooseUs />
      <Contact />
    </div>
  );
};

export default Index;
