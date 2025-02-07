import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative bg-medical-500 text-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
          Centre de formation dédié aux professionnels de la santé
        </h1>
        <p className="text-xl mb-8 text-medical-100">
          Nous offrons des programmes de formation de haute qualité, conçus pour répondre aux besoins évolutifs des praticiens et intégrer les dernières avancées médicales.
        </p>
        <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
          <Input
            placeholder="Rechercher une formation..."
            className="bg-white text-gray-900 h-12"
          />
          <Button className="bg-medical-700 hover:bg-medical-600 h-12 px-8">
            <Search className="mr-2 h-4 w-4" />
            Rechercher
          </Button>
        </div>
      </div>
    </div>
  );
};