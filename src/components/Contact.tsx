
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici vous pourriez ajouter la logique pour envoyer le message à un serveur
    console.log("Formulaire soumis:", formData);
    
    // Afficher le toast de confirmation
    toast({
      title: "Message envoyé !",
      description: "Nous vous répondrons dans les plus brefs délais.",
      variant: "default",
    });
    
    // Réinitialiser le formulaire
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

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
            onSubmit={handleSubmit}
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
                  value={formData.name}
                  onChange={handleChange}
                  required
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
                  value={formData.email}
                  onChange={handleChange}
                  required
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
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <Textarea 
                placeholder="Message" 
                id="message"
                className="h-24 sm:h-32 border-teal-200 focus-visible:ring-teal-500" 
                aria-required="true"
                value={formData.message}
                onChange={handleChange}
                required
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
          <div className="flex flex-col items-center space-y-5">
            {/* Qualiopi certification logo */}
            <div className="bg-white/90 p-4 sm:p-5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 mb-4">
              <div className="flex flex-col items-center gap-2">
                <img 
                  src="/lovable-uploads/68c324aa-25cf-4680-9d69-3f942d2a8da6.png" 
                  alt="Certification Qualiopi - Processus certifié" 
                  className="h-16 sm:h-20 w-auto"
                />
                <p className="text-xs sm:text-sm text-gray-600 font-medium text-center">
                  Notre centre de formation est certifié Qualiopi
                </p>
              </div>
            </div>
            
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
