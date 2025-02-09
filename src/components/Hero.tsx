
import { ArrowRight, GraduationCap, Heart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background gradient and overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-sky-100/95 via-blue-200/90 to-green-100/95" />
      <div 
        className="fixed inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=2000")',
          filter: 'brightness(0.9)',
          zIndex: -1
        }}
      />
      
      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        <div className="fixed top-8 left-1/2 transform -translate-x-1/2 z-40 flex justify-center mb-12">
          <div className="bg-gradient-to-br from-white/95 to-blue-50/95 p-4 rounded-2xl shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl border border-blue-100/50">
            <img 
              src="/lovable-uploads/e389f900-bbfd-4caa-a7ba-c7b4e1bd4e4b.png" 
              alt="Medicalici Logo" 
              className="h-24 md:h-32 w-auto animate-fade-in hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
        
        <div className="pt-48 text-center lg:text-left space-y-8 max-w-3xl mx-auto lg:mx-0">
          <div className="bg-gradient-to-br from-white/90 via-blue-50/80 to-green-50/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl space-y-4 transition-all duration-300 hover:shadow-2xl hover:bg-white/90 border border-blue-100/50">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
              <GraduationCap className="w-8 h-8 text-blue-600 animate-bounce" />
              <Star className="w-6 h-6 text-yellow-500" />
              <Heart className="w-6 h-6 text-rose-500" />
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-green-500 bg-clip-text text-transparent">
                Formation Médicale
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-900 via-blue-700 to-green-700 bg-clip-text text-transparent">
                Continue <span className="text-yellow-500">🎓</span>
              </span>
            </h1>
            <p className="text-xl bg-gradient-to-r from-blue-700 via-sky-600 to-green-600 bg-clip-text text-transparent max-w-2xl mx-auto lg:mx-0">
              Centre de formation certifié pour les professionnels de santé <span className="text-blue-500">⚕️</span>
              <br />
              Des programmes adaptés à vos besoins et à votre emploi du temps <span className="text-green-500">⏰</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button 
                className="bg-gradient-to-r from-blue-600 via-sky-500 to-green-500 hover:from-blue-700 hover:via-sky-600 hover:to-green-600 text-white rounded-full px-8 py-6 text-lg flex items-center gap-2 transition-all hover:gap-4 shadow-lg hover:shadow-xl"
              >
                Commencer maintenant
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button 
                variant="outline"
                className="rounded-full px-8 py-6 text-lg border-blue-200 hover:bg-gradient-to-r hover:from-blue-50 hover:to-green-50 text-blue-700 flex items-center gap-2"
              >
                En savoir plus
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

