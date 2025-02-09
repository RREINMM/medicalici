
import { 
  Stethoscope,
  Syringe,
  BookOpen,
  GraduationCap
} from "lucide-react";
import { Card } from "@/components/ui/card";

const formations = [
  { 
    icon: Stethoscope, 
    name: "Médecine Générale", 
    description: "Gestion des urgences médicales, prévention des maladies chroniques, techniques de consultation",
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=800&q=80"
  },
  { 
    icon: Syringe, 
    name: "Spécialités Médicales", 
    description: "Cardiologie, Dermatologie, Gynécologie, Neurologie, Ophtalmologie, Pédiatrie",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80"
  },
  { 
    icon: BookOpen, 
    name: "Déontologie et Réglementation", 
    description: "Éthique professionnelle, réglementation et fiscalité",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80"
  },
  { 
    icon: GraduationCap, 
    name: "Formation Continue", 
    description: "Gestion des risques médicaux, nutrition et diététique clinique, soins palliatifs",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80"
  },
];

export const Specialties = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-[#F2FCE2] via-[#F8FFF0] to-[#E8F8D4]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-[#2A5A27]">
            Nos Programmes De Formation
          </h2>
          <p className="text-xl text-[#2A5A27]/80 max-w-3xl mx-auto">
            Medicalici est spécialisé dans la formation continue pour les professionnels de la santé.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {formations.map((formation, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden rounded-2xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 bg-white/80 backdrop-blur-sm border-[#2A5A27]/20"
            >
              <div className="absolute inset-0">
                <img 
                  src={formation.image} 
                  alt={formation.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2A5A27]/95 via-[#2A5A27]/85 to-[#2A5A27]/50" />
              </div>
              <div className="relative p-8 text-white h-full flex flex-col justify-between min-h-[380px]">
                <div className="space-y-6">
                  <div className="bg-white/20 backdrop-blur-lg w-20 h-20 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 border border-white/30">
                    <formation.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-semibold text-2xl tracking-wide leading-tight">
                      {formation.name}
                    </h3>
                    <p className="leading-relaxed text-white/90 text-base tracking-wide">
                      {formation.description}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

