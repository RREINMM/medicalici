
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const Contact = () => {
  return (
    <section className="bg-gradient-to-br from-sky-50 via-blue-100 to-cyan-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-sky-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Contactez-nous
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-xl text-blue-700">
              Contactez-nous dès aujourd'hui pour échanger sur votre projet.
            </p>
            <p className="text-lg text-blue-700">
              Rejoignez MEDICALICI et développez vos compétences pour répondre aux enjeux de santé et de prévention d'aujourd'hui et de demain.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <form className="space-y-6 bg-gradient-to-br from-white/90 via-sky-50/50 to-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input type="text" placeholder="Nom" className="border-blue-200 focus-visible:ring-blue-500" />
              <Input type="email" placeholder="Email" className="border-blue-200 focus-visible:ring-blue-500" />
            </div>
            <Input type="text" placeholder="Sujet" className="border-blue-200 focus-visible:ring-blue-500" />
            <Textarea placeholder="Message" className="h-32 border-blue-200 focus-visible:ring-blue-500" />
            <div className="text-center">
              <Button className="bg-gradient-to-r from-sky-600 via-blue-600 to-cyan-600 hover:from-sky-700 hover:via-blue-700 hover:to-cyan-700 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
                Envoyer
              </Button>
            </div>
          </form>
        </div>

        <footer className="mt-16 border-t border-blue-200 pt-8">
          <div className="flex flex-col items-center space-y-6">
            <div className="text-center text-blue-700 space-y-2">
              <p>N° SIRET : 92476373300012</p>
              <p>Code NAF : 8559A - Formation continue d'adultes</p>
              <p>Numéro de déclaration d'activité : 11756984975</p>
            </div>
            <div className="text-center text-blue-600 text-sm mt-4">
              <p>© 2024 Medicalici. Tous droits réservés.</p>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};
