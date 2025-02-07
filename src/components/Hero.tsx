import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-white via-medical-50 to-medical-100 min-h-screen">
      <div className="absolute inset-0 bg-grid-medical-100/25 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative">
        <div className="text-center lg:text-left space-y-8 max-w-3xl mx-auto lg:mx-0">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-medical-600 to-medical-800 bg-clip-text text-transparent">
                Formation Médicale
              </span>
              <br />
              <span className="text-gray-900">
                Continue
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
              Centre de formation certifié pour les professionnels de santé. Des programmes adaptés à vos besoins et à votre emploi du temps.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button 
              className="bg-medical-600 hover:bg-medical-700 text-white rounded-full px-8 py-6 text-lg flex items-center gap-2 transition-all hover:gap-4 shadow-lg hover:shadow-xl"
            >
              Commencer maintenant
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button 
              variant="outline"
              className="rounded-full px-8 py-6 text-lg border-medical-200 hover:bg-medical-50 text-medical-700"
            >
              En savoir plus
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-white to-transparent" />
    </div>
  );
};