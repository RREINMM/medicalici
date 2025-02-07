import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const Contact = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-medical-600 to-medical-800 bg-clip-text text-transparent">
            Contactez-nous
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Vous souhaitez en savoir plus sur nos formations ou vous inscrire ? N'hésitez pas à nous contacter.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input type="text" placeholder="Nom" />
              <Input type="email" placeholder="Email" />
            </div>
            <Input type="text" placeholder="Sujet" />
            <Textarea placeholder="Message" className="h-32" />
            <div className="text-center">
              <Button className="bg-medical-600 hover:bg-medical-700 text-white px-8 py-2">
                Envoyer
              </Button>
            </div>
          </form>
        </div>

        <footer className="mt-16 border-t pt-8">
          <div className="flex flex-col items-center space-y-6">
            <img 
              src="/lovable-uploads/4c6f8f6d-5a43-48f9-bf9c-4b92afcbf3f0.png" 
              alt="MedicalICI Logo" 
              className="h-16 w-auto"
            />
            <div className="text-center text-gray-600 space-y-2">
              <p>N° SIRET : 92476373300012</p>
              <p>Code NAF : 8559A - Formation continue d'adultes</p>
              <p>Numéro de déclaration d'activité : 11756984975</p>
            </div>
            <div className="text-center text-gray-500 text-sm mt-4">
              <p>© 2024 MedicalICI. Tous droits réservés.</p>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};