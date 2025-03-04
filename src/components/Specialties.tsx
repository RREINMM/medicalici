
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
    description: "Développement approfondi des compétences en soins, prévention et gestion sanitaire.\nNos formations couvrent les dernières avancées médicales et les protocoles de soins actualisés.\nVous bénéficierez d'une expertise pratique directement applicable dans votre quotidien professionnel.",
    videoSrc: "https://assets.codepen.io/11585453/medical-animation-1.mp4",
    imageAlt: "Animation illustrant les compétences médicales et la spécialisation professionnelle",
    subPoints: [
      "Protocoles de soins avancés",
      "Gestion des urgences médicales",
      "Techniques de prévention modernes"
    ]
  },
  { 
    icon: UserCog, 
    name: "Santé, hygiène et sécurité alimentaire", 
    description: "Formation complète aux bonnes pratiques pour garantir une offre conforme aux exigences de santé publique.\n\nApprenez les protocoles d'hygiène essentiels et les normes de sécurité alimentaire en vigueur dans le secteur médical et paramédical.",
    videoSrc: "https://assets.codepen.io/11585453/medical-animation-2.mp4",
    imageAlt: "Animation illustrant les normes d'hygiène et de sécurité alimentaire en milieu médical",
    subPoints: [
      "Normes HACCP en milieu médical",
      "Sécurité alimentaire des patients",
      "Protocoles d'hygiène spécialisés"
    ]
  },
  { 
    icon: ShieldCheck, 
    name: "Prévention des risques", 
    description: "Programme intensif de formation à la gestion des risques sanitaires, à l'application des normes d'hygiène et au suivi des protocoles qualité.\n\nMaîtrisez les techniques de prévention des infections nosocomiales et la gestion des risques en établissement de santé.",
    videoSrc: "https://assets.codepen.io/11585453/medical-animation-3.mp4",
    imageAlt: "Animation illustrant la prévention des risques sanitaires et la gestion des protocoles de sécurité",
    subPoints: [
      "Prévention des infections nosocomiales",
      "Gestion des risques biologiques",
      "Protocoles de désinfection"
    ]
  },
  { 
    icon: MonitorSmartphone, 
    name: "Accompagnement digital", 
    description: "Modernisez vos pratiques médicales grâce à la digitalisation.\n\nDécouvrez comment intégrer les nouvelles technologies dans votre pratique quotidienne tout en maintenant la qualité des soins et la sécurité des patients.",
    videoSrc: "https://assets.codepen.io/11585453/medical-animation-4.mp4",
    imageAlt: "Animation illustrant l'utilisation des outils numériques dans le secteur médical et paramédical",
    subPoints: [
      "Dossier médical numérique",
      "Téléconsultation",
      "Suivi patient digitalisé"
    ]
  },
];

export const Specialties = () => {
  return (
    <section id="formations" className="py-16 px-4 bg-gradient-to-br from-emerald-50 via-teal-100 to-cyan-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-teal-900">
            Nos Programmes De Formation
          </h2>
          <p className="text-xl text-teal-700 max-w-3xl mx-auto leading-relaxed flex flex-col gap-1">
            <span>
              Des formations conçues par des professionnels de santé, pour des professionnels de santé.
            </span>
            <span>
              Développez vos compétences avec des programmes adaptés aux réalités du terrain.
            </span>
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {formations.map((formation, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:translate-y-[-4px] hover:shadow-xl bg-white"
            >
              <div className="relative h-48 overflow-hidden">
                <video 
                  src={formation.videoSrc} 
                  alt={formation.imageAlt}
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/60 to-transparent" />
                <div className="absolute top-4 left-4 bg-white p-3 rounded-lg shadow-md">
                  <formation.icon aria-hidden="true" className="w-6 h-6 text-teal-600" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-2xl text-teal-900 mb-2">
                  {formation.name}
                </h3>
                <p className="text-teal-600 text-base leading-tight whitespace-pre-line mb-4">
                  {formation.description}
                </p>
                <ul className="space-y-1">
                  {formation.subPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-1.5 text-teal-700 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5" />
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
