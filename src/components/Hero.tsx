
import { ArrowRight, GraduationCap, Clock, Building2, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Header Sticker */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-sky-600/95 to-blue-600/95 text-white py-2 backdrop-blur-sm shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <p className="text-sm font-medium flex items-center gap-2">
            Formation médicale continue certifiée
            <Building2 className="w-5 h-5" style={{ stroke: '#D946EF' }} />
          </p>
          <Button 
            variant="ghost" 
            className="text-white hover:text-white/90 text-sm px-4 py-1"
          >
            Contactez-nous
          </Button>
        </div>
      </div>

      {/* Background gradient and overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50/90 via-blue-100/90 to-cyan-50/90" />
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=2000")',
          filter: 'brightness(0.9)',
          zIndex: -1
        }}
      />
      
      {/* Main content with adjusted top padding to account for header sticker */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-16 relative">
        <div className="sticky top-16 z-40 flex justify-center mb-12">
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
              <span className="bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
                Formation Médicale
              </span>
              <br />
              <span className="text-blue-900">
                Continue <GraduationCap className="inline-block w-12 h-12" style={{ stroke: '#F97316' }} />
              </span>
            </h1>
            <p className="text-xl text-blue-700 max-w-2xl mx-auto lg:mx-0 flex items-center justify-center lg:justify-start gap-2 flex-wrap">
              Centre de formation certifié pour les professionnels de santé 
              <Users className="w-6 h-6" style={{ stroke: '#8B5CF6' }} />
              <br />
              Des programmes adaptés à vos besoins et à votre emploi du temps
              <Clock className="w-6 h-6" style={{ stroke: '#0EA5E9' }} />
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button 
                className="bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-700 hover:to-blue-700 text-white rounded-full px-8 py-6 text-lg flex items-center gap-2 transition-all hover:gap-4 shadow-lg hover:shadow-xl"
              >
                Commencer maintenant
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button 
                variant="outline"
                className="rounded-full px-8 py-6 text-lg border-blue-200 hover:bg-blue-50 text-blue-700"
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

