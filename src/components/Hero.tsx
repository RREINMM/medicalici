
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Header Sticker */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-teal-600/95 to-emerald-600/95 text-white py-2 backdrop-blur-sm shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <p className="text-xs sm:text-sm font-medium">
            Formation médicale continue certifiée <span className="text-[#0EA5E9]">🏥</span> <span className="text-[#F97316]">✨</span>
          </p>
          <Button 
            variant="ghost" 
            className="text-white hover:text-white/90 text-xs sm:text-sm px-2 sm:px-4 py-1"
          >
            Contactez-nous
          </Button>
        </div>
      </div>

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
      
      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-16 relative">
        <div className="sticky top-16 z-40 flex justify-center mb-8 sm:mb-12">
          <div className="bg-white/95 p-3 sm:p-4 rounded-2xl shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl">
            <img 
              src="/lovable-uploads/e389f900-bbfd-4caa-a7ba-c7b4e1bd4e4b.png" 
              alt="Medicalici Logo" 
              className="h-16 sm:h-24 md:h-32 w-auto animate-fade-in hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
        
        <div className="text-center lg:text-left space-y-6 sm:space-y-8 max-w-3xl mx-auto lg:mx-0">
          <div className="bg-white/80 backdrop-blur-sm p-4 sm:p-8 rounded-2xl shadow-xl space-y-3 sm:space-y-4 transition-all duration-300 hover:shadow-2xl hover:bg-white/90">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent flex flex-wrap justify-center lg:justify-start items-center gap-1">
                Formation Médicale <span className="text-[#F97316] inline-block">🎓</span>
              </span>
              <span className="text-teal-900 flex flex-wrap justify-center lg:justify-start items-center gap-1">
                Continue <span className="text-[#8B5CF6] inline-block">🚀</span>
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-teal-700 max-w-2xl mx-auto lg:mx-0 flex flex-col gap-0.5">
              <span>
                Centre de formation certifié pour les professionnels de santé <span className="text-[#0EA5E9]">👨‍⚕️</span>
              </span>
              <span>
                Des programmes adaptés à vos besoins et à votre emploi du temps <span className="text-[#D946EF]">⏰</span>
              </span>
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start pt-2 sm:pt-4">
              <Button 
                className="bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white rounded-full px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg flex items-center gap-2 transition-all hover:gap-4 shadow-lg hover:shadow-xl w-full sm:w-auto"
                onClick={() => window.open("https://medicalici.catalogueformpro.com/", "_blank")}
              >
                Commencer maintenant <span className="text-[#F97316]">💫</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
              <Button 
                variant="outline"
                className="rounded-full px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg border-teal-200 hover:bg-teal-50 text-teal-700 w-full sm:w-auto"
              >
                En savoir plus <span className="text-[#8B5CF6]">ℹ️</span>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Qualiopi certification logo */}
        <div className="mt-12 sm:mt-20 flex justify-center">
          <div className="bg-white/90 p-4 sm:p-5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
            <div className="flex flex-col items-center gap-2">
              <img 
                src="/lovable-uploads/68c324aa-25cf-4680-9d69-3f942d2a8da6.png" 
                alt="Certification Qualiopi - Processus certifié" 
                className="h-16 sm:h-20 w-auto"
              />
              <p className="text-xs sm:text-sm text-gray-600 font-medium text-center">
                Notre centre de formation est certifié Qualiopi
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
