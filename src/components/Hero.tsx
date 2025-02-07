import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-white to-beige-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-1/2 space-y-8 text-left">
          <div className="space-y-4">
            <h1 className="text-6xl font-bold">
              <span className="bg-gradient-to-r from-medical-400 to-medical-600 bg-clip-text text-transparent">
                Medical &
              </span>
              <br />
              <span className="bg-gradient-to-r from-medical-600 to-medical-800 bg-clip-text text-transparent">
                Health Care
              </span>
              <br />
              <span className="text-gray-900">Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-xl">
              Centre de formation dédié aux professionnels de la santé. Des programmes de haute qualité pour répondre à vos besoins.
            </p>
          </div>
          <Button 
            className="bg-medical-500 hover:bg-medical-600 text-white rounded-full px-8 py-6 text-lg flex items-center gap-2 transition-all hover:gap-4"
          >
            Commencer maintenant
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
        <div className="lg:w-1/2 mt-12 lg:mt-0">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-72 h-72 bg-medical-200 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
            <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-beige-300 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};