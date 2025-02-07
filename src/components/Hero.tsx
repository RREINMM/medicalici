import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background gradient and overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-medical-50/90 to-medical-100/90" />
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=2000")',
          filter: 'brightness(0.9)',
          zIndex: -1
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 relative">
        <div className="sticky top-4 z-50 flex justify-center mb-12 transition-all duration-300">
          <div className="bg-white/95 p-4 rounded-2xl shadow-lg backdrop-blur-sm">
            <img 
              src="/lovable-uploads/e389f900-bbfd-4caa-a7ba-c7b4e1bd4e4b.png" 
              alt="Medicalici Logo" 
              className="h-24 md:h-32 w-auto animate-fade-in hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
        
        <div className="text-center lg:text-left space-y-8 max-w-3xl mx-auto lg:mx-0 bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
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
    </div>
  );
};