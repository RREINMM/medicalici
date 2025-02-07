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
    name: "Formation Continue et Perfectionnement", 
    description: "Gestion des risques médicaux, nutrition et diététique clinique, soins palliatifs" 
  },
];

export const Specialties = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4 text-medical-700">
          Explorez Nos Programmes De Formation
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Medicalici est un centre de formation certifié Qualiopi, spécialisé dans la formation continue pour les professionnels de la santé.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {formations.map((formation, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <formation.icon className="w-12 h-12 text-medical-500 mb-4" />
              <h3 className="font-semibold text-xl mb-2 text-medical-600">{formation.name}</h3>
              <p className="text-gray-600">{formation.description}</p>
            </Card>
          ))}
        </div>
        <p className="text-center text-gray-600 mt-12 max-w-3xl mx-auto">
          Nous nous engageons à fournir des formations enrichissantes et pertinentes, animées par des formateurs qualifiés et reconnus.
        </p>
      </div>
    </section>
  );
};