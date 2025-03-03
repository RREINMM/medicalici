
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const Contact = () => {
  return (
    <section id="contact" className="bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
            Contactez-nous
          </h2>
          <div className="max-w-3xl mx-auto flex flex-col gap-1">
            <p className="text-lg sm:text-xl text-teal-700">
              Contactez-nous dès aujourd'hui pour échanger sur votre projet.
            </p>
            <p className="text-base sm:text-lg text-teal-700 flex flex-col gap-1">
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
          <form 
            className="space-y-4 sm:space-y-6 bg-white/80 backdrop-blur-sm p-4 sm:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
            aria-labelledby="contact-form"
          >
            <div className="sr-only" id="contact-form">Formulaire de contact</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label htmlFor="name" className="sr-only">Nom</label>
                <Input 
                  type="text" 
                  id="name"
                  placeholder="Nom" 
                  className="border-teal-200 focus-visible:ring-teal-500" 
                  aria-required="true"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <Input 
                  type="email" 
                  id="email"
                  placeholder="Email" 
                  className="border-teal-200 focus-visible:ring-teal-500" 
                  aria-required="true"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="sr-only">Sujet</label>
              <Input 
                type="text" 
                id="subject"
                placeholder="Sujet" 
                className="border-teal-200 focus-visible:ring-teal-500" 
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <Textarea 
                placeholder="Message" 
                id="message"
                className="h-24 sm:h-32 border-teal-200 focus-visible:ring-teal-500" 
                aria-required="true"
              />
            </div>
            <div className="text-center">
              <Button 
                type="submit"
                className="w-full sm:w-auto bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
                aria-label="Envoyer le message de contact"
              >
                Envoyer
              </Button>
            </div>
          </form>
        </div>

        <footer className="mt-8 sm:mt-16 border-t border-teal-200 pt-6 sm:pt-8">
          <div className="flex flex-col items-center space-y-1">
            <div className="text-center text-teal-700 flex flex-col gap-0.5">
              <p className="text-sm sm:text-base">N° SIRET : 92476373300012</p>
              <p className="text-sm sm:text-base">Code NAF : 8559A - Formation continue d'adultes</p>
              <p className="text-sm sm:text-base">Numéro de déclaration d'activité : 11756984975</p>
            </div>
            <div className="text-center text-teal-600 text-xs sm:text-sm mt-1">
              <p>© 2024 Medicalici. Tous droits réservés.</p>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};
