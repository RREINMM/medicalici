
import { Building2, GraduationCap, Globe, Users, Leaf, Sprout } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-sky-50 via-blue-100 to-green-50/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex justify-center gap-3 mb-4">
            <Leaf className="w-8 h-8 text-green-500 animate-bounce" />
            <Sprout className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-sky-600 via-blue-600 to-green-600 bg-clip-text text-transparent">
            Pourquoi choisir MEDICALICI ? 🌱
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          <Card className="bg-gradient-to-br from-white/90 via-sky-50/30 to-white/90 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8 flex flex-col h-full">
              <div className="mb-6">
                <Building2 className="w-12 h-12 bg-gradient-to-br from-sky-600 to-blue-600 bg-clip-text text-transparent" />
              </div>
              <h3 className="text-2xl font-semibold bg-gradient-to-r from-sky-700 to-blue-700 bg-clip-text text-transparent mb-4">
                Un centre de formation pensé pour les professionnels 🏢
              </h3>
              <p className="text-blue-700">
                Nous comprenons les besoins des professionnels, qu'ils soient soignants, responsables d'hygiène, restaurateurs ou acteurs du secteur sanitaire, et proposons des formations pratiques, ciblées et applicables immédiatement.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-white/90 via-sky-50/30 to-white/90 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8 flex flex-col h-full">
              <div className="mb-6">
                <GraduationCap className="w-12 h-12 bg-gradient-to-br from-sky-600 to-blue-600 bg-clip-text text-transparent" />
              </div>
              <h3 className="text-2xl font-semibold bg-gradient-to-r from-sky-700 to-blue-700 bg-clip-text text-transparent mb-4">
                Des formateurs experts et en exercice 👩‍⚕️
              </h3>
              <p className="text-blue-700">
                Nos intervenants sont des professionnels qualifiés, issus du secteur médical et sanitaire, apportant leur expérience du terrain et les bonnes pratiques adaptées à votre métier.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-white/90 via-sky-50/30 to-white/90 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8 flex flex-col h-full">
              <div className="mb-6">
                <Globe className="w-12 h-12 bg-gradient-to-br from-sky-600 to-blue-600 bg-clip-text text-transparent" />
              </div>
              <h3 className="text-2xl font-semibold bg-gradient-to-r from-sky-700 to-blue-700 bg-clip-text text-transparent mb-4">
                Des formations adaptées aux évolutions du secteur 🚀
              </h3>
              <p className="text-blue-700">
                Nous intégrons les nouvelles pratiques et technologies pour accompagner les professionnels dans la transition vers des modèles plus performants et respectueux des normes sanitaires.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-white/90 via-sky-50/30 to-white/90 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8 flex flex-col h-full">
              <div className="mb-6">
                <Users className="w-12 h-12 bg-gradient-to-br from-sky-600 to-blue-600 bg-clip-text text-transparent" />
              </div>
              <h3 className="text-2xl font-semibold bg-gradient-to-r from-sky-700 to-blue-700 bg-clip-text text-transparent mb-4">
                Un accompagnement humain et sur mesure 🤝
              </h3>
              <p className="text-blue-700">
                Nos formations sont interactives, pédagogiques et adaptées aux contraintes professionnelles, pour garantir un apprentissage efficace et valorisant.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
