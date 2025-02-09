
import { 
  Stethoscope,
  UserCog,
  ShieldCheck,
  MonitorSmartphone
} from "lucide-react";
import { Card } from "@/components/ui/card";

const formations = [
  { 
    icon: Stethoscope, 
    name: "Compétences métier et spécialisation", 
    description: "Développement des compétences en soins, prévention et gestion sanitaire",
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=800&q=80"
  },
  { 
    icon: UserCog, 
    name: "Santé, hygiène et sécurité alimentaire", 
    description: "Apprentissage des bonnes pratiques pour garantir une offre conforme aux exigences de santé publique",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80"
  },
  { 
    icon: ShieldCheck, 
    name: "Prévention des risques", 
    description: "Formation à la gestion des risques, à l'application des normes d'hygiène et au suivi des protocoles qualité",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80"
  },
  { 
    icon: MonitorSmartphone, 
    name: "Accompagnement digital", 
    description: "Adaptation des services aux évolutions du secteur et digitalisation des pratiques de santé",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80"
  },
];

export const Specialties = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-green-400/90 via-blue-400/80 to-blue-500/70">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Nos Programmes De Formation
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Des formations conçues pour les professionnels de la santé, de la prévention et de l'hygiène
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {formations.map((formation, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:translate-y-[-4px] bg-white"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={formation.image} 
                  alt={formation.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-400/20 to-blue-400/10" />
                <div className="absolute top-4 left-4 bg-white p-3 rounded-lg shadow">
                  <formation.icon className="w-6 h-6 text-green-500" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-xl text-slate-800 mb-3">
                  {formation.name}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {formation.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
