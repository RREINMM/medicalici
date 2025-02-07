import { 
  Heart, 
  Brain, 
  Baby, 
  Eye, 
  Bone, 
  Stethoscope,
  Pill,
  Tooth
} from "lucide-react";
import { Card } from "@/components/ui/card";

const specialties = [
  { icon: Heart, name: "Cardiologie", description: "Santé du cœur et système cardiovasculaire" },
  { icon: Brain, name: "Neurologie", description: "Troubles du système nerveux" },
  { icon: Baby, name: "Pédiatrie", description: "Soins médicaux des enfants" },
  { icon: Eye, name: "Ophtalmologie", description: "Santé des yeux" },
  { icon: Bone, name: "Orthopédie", description: "Troubles musculo-squelettiques" },
  { icon: Stethoscope, name: "Médecine Générale", description: "Soins de santé primaires" },
  { icon: Pill, name: "Pharmacie", description: "Médicaments et traitements" },
  { icon: Tooth, name: "Dentisterie", description: "Santé bucco-dentaire" },
];

export const Specialties = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-medical-700">
          Nos Spécialités Médicales
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialties.map((specialty, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <specialty.icon className="w-12 h-12 text-medical-500 mb-4" />
              <h3 className="font-semibold text-xl mb-2">{specialty.name}</h3>
              <p className="text-gray-600">{specialty.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};