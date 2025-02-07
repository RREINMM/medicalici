import { 
  UserRound,
  Users,
  BookOpen,
  GraduationCap
} from "lucide-react";
import { Card } from "@/components/ui/card";

const formations = [
  { 
    icon: UserRound, 
    name: "Médecine Générale", 
    description: "Gestion des urgences médicales, prévention des maladies chroniques, techniques de consultation" 
  },
  { 
    icon: Users, 
    name: "Spécialités Médicales", 
    description: "Cardiologie, Dermatologie, Gynécologie, Neurologie, Ophtalmologie, Pédiatrie" 
  },
  { 
    icon: BookOpen, 
    name: "Déontologie et Réglementation", 
    description: "Éthique professionnelle, réglementation et fiscalité" 
  },
  { 
    icon: GraduationCap, 
    name: "Formation Continue", 
    description: "Gestion des risques médicaux, nutrition et diététique clinique, soins palliatifs" 
  },
];

export const Specialties = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-medical-600 to-medical-800 bg-clip-text text-transparent">
            Nos Programmes De Formation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Medicalici est un centre de formation certifié Qualiopi, spécialisé dans la formation continue pour les professionnels de la santé.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {formations.map((formation, index) => (
            <Card 
              key={index} 
              className="p-8 hover:shadow-xl transition-all duration-300 group bg-white hover:bg-gradient-to-br hover:from-medical-50 hover:to-medical-100 border border-medical-100"
            >
              <div className="bg-gradient-to-br from-medical-100 to-medical-200 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:from-medical-200 group-hover:to-medical-300 transition-colors duration-300">
                <formation.icon className="w-8 h-8 text-medical-600 group-hover:text-medical-700" />
              </div>
              <h3 className="font-semibold text-xl mb-4 text-gray-900">{formation.name}</h3>
              <p className="text-gray-600 leading-relaxed">{formation.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};