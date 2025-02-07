import { Hero } from "@/components/Hero";
import { Specialties } from "@/components/Specialties";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Specialties />
      <Contact />
    </div>
  );
};

export default Index;