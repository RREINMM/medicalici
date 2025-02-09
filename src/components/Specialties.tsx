
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
    name: "Compétences métier et spécialisation 🔬", 
    description: "Développement approfondi des compétences en soins, prévention et gestion sanitaire. Nos formations couvrent les dernières avancées médicales et les protocoles de soins actualisés. Vous bénéficierez d'une expertise pratique directement applicable dans votre quotidien professionnel.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
    subPoints: [
      "Protocoles de soins avancés",
      "Gestion des urgences médicales",
      "Techniques de prévention modernes"
    ]
  },
  { 
    icon: UserCog, 
    name: "Santé, hygiène et sécurité alimentaire 🧬", 
    description: "Formation complète aux bonnes pratiques pour garantir une offre conforme aux exigences de santé publique. Apprenez les protocoles d'hygiène essentiels et les normes de sécurité alimentaire en vigueur dans le secteur médical et paramédical.",
    image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=800&q=80",
    subPoints: [
      "Normes HACCP en milieu médical",
      "Sécurité alimentaire des patients",
      "Protocoles d'hygiène spécialisés"
    ]
  },
  { 
    icon: ShieldCheck, 
    name: "Prévention des risques 🛡️", 
    description: "Programme intensif de formation à la gestion des risques sanitaires, à l'application des normes d'hygiène et au suivi des protocoles qualité. Maîtrisez les techniques de prévention des infections nosocomiales et la gestion des risques en établissement de santé.",
    image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&w=800&q=80",
    subPoints: [
      "Prévention des infections nosocomiales",
      "Gestion des risques biologiques",
      "Protocoles de désinfection"
    ]
  },
  { 
    icon: MonitorSmartphone, 
    name: "Accompagnement digital 💻", 
    description: "Modernisez vos pratiques médicales grâce à la digitalisation. Découvrez comment intégrer les nouvelles technologies dans votre pratique quotidienne tout en maintenant la qualité des soins et la sécurité des patients.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    subPoints: [
      "Dossier médical numérique",
      "Téléconsultation",
      "Suivi patient digitalisé"
    ]
  },
];

export const Specialties = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-sky-50 via-blue-100 to-cyan-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-blue-900">
            Nos Programmes De Formation 📚
          </h2>
          <p className="text-xl text-blue-700 max-w-3xl mx-auto leading-relaxed">
            Des formations conçues par des professionnels de santé, pour des professionnels de santé. 
            Développez vos compétences avec des programmes adaptés aux réalités du terrain 🎯
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {formations.map((formation, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:translate-y-[-4px] hover:shadow-xl bg-white"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={formation.image} 
                  alt={formation.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent" />
                <div className="absolute top-4 left-4 bg-white p-3 rounded-lg shadow-md">
                  <formation.icon className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-bold text-2xl text-blue-900 mb-4">
                  {formation.name}
                </h3>
                <p className="text-blue-600 text-lg leading-relaxed mb-6">
                  {formation.description}
                </p>
                <ul className="space-y-3">
                  {formation.subPoints.map((point, idx) => (
                    <li key={idx} className="flex items-center text-blue-700">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mr-3" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
