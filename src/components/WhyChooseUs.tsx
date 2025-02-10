
import { Building2, GraduationCap, Globe, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
            Pourquoi choisir MEDICALICI ?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          <Card className="bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8 flex flex-col h-full">
              <div className="mb-6">
                <Building2 className="w-12 h-12 text-teal-600" />
              </div>
              <h3 className="text-2xl font-semibold text-teal-800 mb-4">
                Un centre de formation pensé pour les professionnels
              </h3>
              <p className="text-teal-700">
                Nous comprenons les besoins des professionnels, qu'ils soient soignants, responsables d'hygiène, restaurateurs ou acteurs du secteur sanitaire, et proposons des formations pratiques, ciblées et applicables immédiatement.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8 flex flex-col h-full">
              <div className="mb-6">
                <GraduationCap className="w-12 h-12 text-teal-600" />
              </div>
              <h3 className="text-2xl font-semibold text-teal-800 mb-4">
                Des formateurs experts et en exercice
              </h3>
              <p className="text-teal-700">
                Nos intervenants sont des professionnels qualifiés, issus du secteur médical et sanitaire, apportant leur expérience du terrain et les bonnes pratiques adaptées à votre métier.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8 flex flex-col h-full">
              <div className="mb-6">
                <Globe className="w-12 h-12 text-teal-600" />
              </div>
              <h3 className="text-2xl font-semibold text-teal-800 mb-4">
                Des formations adaptées aux évolutions du secteur
              </h3>
              <p className="text-teal-700">
                Nous intégrons les nouvelles pratiques et technologies pour accompagner les professionnels dans la transition vers des modèles plus performants et respectueux des normes sanitaires (digitalisation des services, respect des protocoles alimentaires, prévention des infections).
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8 flex flex-col h-full">
              <div className="mb-6">
                <Users className="w-12 h-12 text-teal-600" />
              </div>
              <h3 className="text-2xl font-semibold text-teal-800 mb-4">
                Un accompagnement humain et sur mesure
              </h3>
              <p className="text-teal-700">
                Nos formations sont interactives, pédagogiques et adaptées aux contraintes professionnelles, pour garantir un apprentissage efficace et valorisant.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
