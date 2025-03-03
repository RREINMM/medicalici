
import { Building2, GraduationCap, Globe, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const WhyChooseUs = () => {
  return (
    <section id="pourquoi-nous-choisir" className="py-12 sm:py-24 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-teal-900">
            Pourquoi Choisir MEDICALICI
          </h2>
          <p className="text-base sm:text-xl text-teal-700 max-w-3xl mx-auto leading-relaxed flex flex-col gap-1">
            <span>
              Des formations conçues par des professionnels de santé, pour des professionnels de santé.
            </span>
            <span>
              Développez vos compétences avec des programmes adaptés aux réalités du terrain.
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 max-w-7xl mx-auto">
          <Card className="bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
            <CardContent className="p-4 sm:p-8 flex flex-col h-full">
              <div className="mb-4 sm:mb-6">
                <Building2 aria-hidden="true" className="w-8 sm:w-12 h-8 sm:h-12 text-teal-600" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-teal-800 mb-3 sm:mb-4">
                Un centre de formation pensé pour les professionnels
              </h3>
              <p className="text-sm sm:text-base text-teal-700 flex flex-col gap-2 sm:gap-4">
                <span>
                  Nous comprenons les besoins des professionnels, qu'ils soient soignants, responsables d'hygiène, restaurateurs ou acteurs du secteur sanitaire.
                </span>
                <span>
                  Nous proposons des formations pratiques, ciblées et applicables immédiatement.
                </span>
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
            <CardContent className="p-4 sm:p-8 flex flex-col h-full">
              <div className="mb-4 sm:mb-6">
                <GraduationCap aria-hidden="true" className="w-8 sm:w-12 h-8 sm:h-12 text-teal-600" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-teal-800 mb-3 sm:mb-4">
                Des formateurs experts et en exercice
              </h3>
              <p className="text-sm sm:text-base text-teal-700 flex flex-col gap-2 sm:gap-4">
                <span>
                  Nos intervenants sont des professionnels qualifiés, issus du secteur médical et sanitaire.
                </span>
                <span>
                  Ils apportent leur expérience du terrain et les bonnes pratiques adaptées à votre métier.
                </span>
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
            <CardContent className="p-4 sm:p-8 flex flex-col h-full">
              <div className="mb-4 sm:mb-6">
                <Globe aria-hidden="true" className="w-8 sm:w-12 h-8 sm:h-12 text-teal-600" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-teal-800 mb-3 sm:mb-4">
                Des formations adaptées aux évolutions du secteur
              </h3>
              <p className="text-sm sm:text-base text-teal-700 flex flex-col gap-2 sm:gap-4">
                <span>
                  Nous intégrons les nouvelles pratiques et technologies pour accompagner les professionnels dans la transition vers des modèles plus performants.
                </span>
                <span>
                  Nous respectons les normes sanitaires (digitalisation des services, respect des protocoles alimentaires, prévention des infections).
                </span>
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
            <CardContent className="p-4 sm:p-8 flex flex-col h-full">
              <div className="mb-4 sm:mb-6">
                <Users aria-hidden="true" className="w-8 sm:w-12 h-8 sm:h-12 text-teal-600" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-teal-800 mb-3 sm:mb-4">
                Un accompagnement humain et sur mesure
              </h3>
              <p className="text-sm sm:text-base text-teal-700 flex flex-col gap-2 sm:gap-4">
                <span>
                  Nos formations sont interactives et pédagogiques.
                </span>
                <span>
                  Elles sont adaptées aux contraintes professionnelles, pour garantir un apprentissage efficace et valorisant.
                </span>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
