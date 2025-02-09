
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background gradient and overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/90 via-teal-100/90 to-cyan-50/90" />
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=2000")',
          filter: 'brightness(0.9)',
          zIndex: -1
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 relative">
        <div className="sticky top-4 z-50 flex justify-center mb-12">
          <div className="bg-white/95 p-4 rounded-2xl shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl">
            <img 
              src="/lovable-uploads/e389f900-bbfd-4caa-a7ba-c7b4e1bd4e4b.png" 
              alt="Medicalici Logo" 
              className="h-24 md:h-32 w-auto animate-fade-in hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
        
        <div className="text-center lg:text-left space-y-8 max-w-3xl mx-auto lg:mx-0">
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl space-y-4 transition-all duration-300 hover:shadow-2xl hover:bg-white/90">
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
                Formation Médicale
              </span>
              <br />
              <span className="text-teal-900">
                Continue
              </span>
            </h1>
            <p className="text-xl text-teal-700 max-w-2xl mx-auto lg:mx-0">
              Centre de formation certifié pour les professionnels de santé. Des programmes adaptés à vos besoins et à votre emploi du temps.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button 
                className="bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white rounded-full px-8 py-6 text-lg flex items-center gap-2 transition-all hover:gap-4 shadow-lg hover:shadow-xl"
              >
                Commencer maintenant
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button 
                variant="outline"
                className="rounded-full px-8 py-6 text-lg border-teal-200 hover:bg-teal-50 text-teal-700"
              >
                En savoir plus
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
