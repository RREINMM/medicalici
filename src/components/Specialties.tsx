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
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800"
  },
  { 
    icon: Syringe, 
    name: "Spécialités Médicales", 
    description: "Cardiologie, Dermatologie, Gynécologie, Neurologie, Ophtalmologie, Pédiatrie",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800"
  },
  { 
    icon: BookOpen, 
    name: "Déontologie et Réglementation", 
    description: "Éthique professionnelle, réglementation et fiscalité",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=800"
  },
  { 
    icon: GraduationCap, 
    name: "Formation Continue", 
    description: "Gestion des risques médicaux, nutrition et diététique clinique, soins palliatifs",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800"
  },
];

export const Specialties = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-white to-medical-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-medical-600 to-medical-800 bg-clip-text text-transparent">
            Nos Programmes De Formation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Medicalici est spécialisé dans la formation continue pour les professionnels de la santé.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {formations.map((formation, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-2xl"
            >
              <div className="absolute inset-0">
                <img 
                  src={formation.image} 
                  alt={formation.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-medical-900/90 to-medical-900/40" />
              </div>
              <div className="relative p-8 text-white">
                <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <formation.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-xl mb-4">{formation.name}</h3>
                <p className="leading-relaxed text-white/90">{formation.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};