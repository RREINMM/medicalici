
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const Contact = () => {
  return (
    <section className="bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
            Contactez-nous
          </h2>
          <div className="max-w-3xl mx-auto flex flex-col gap-1">
            <p className="text-xl text-teal-700">
              Contactez-nous dès aujourd'hui pour échanger sur votre projet.
            </p>
            <p className="text-lg text-teal-700 flex flex-col gap-1">
              <span>
                Rejoignez MEDICALICI et développez vos compétences.
              </span>
              <span>
                Répondez aux enjeux de santé et de prévention d'aujourd'hui et de demain.
              </span>
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <form className="space-y-6 bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input type="text" placeholder="Nom" className="border-teal-200 focus-visible:ring-teal-500" />
              <Input type="email" placeholder="Email" className="border-teal-200 focus-visible:ring-teal-500" />
            </div>
            <Input type="text" placeholder="Sujet" className="border-teal-200 focus-visible:ring-teal-500" />
            <Textarea placeholder="Message" className="h-32 border-teal-200 focus-visible:ring-teal-500" />
            <div className="text-center">
              <Button className="bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
                Envoyer
              </Button>
            </div>
          </form>
        </div>

        <footer className="mt-16 border-t border-teal-200 pt-8">
          <div className="flex flex-col items-center space-y-1">
            <div className="text-center text-teal-700 flex flex-col gap-0.5">
              <p>N° SIRET : 92476373300012</p>
              <p>Code NAF : 8559A - Formation continue d'adultes</p>
              <p>Numéro de déclaration d'activité : 11756984975</p>
            </div>
            <div className="text-center text-teal-600 text-sm mt-1">
              <p>© 2024 Medicalici. Tous droits réservés.</p>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

