import { Phone, Clock, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";

export const Contact = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-medical-700">
          Informations de Contact
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-6 text-center">
            <Phone className="w-12 h-12 text-medical-500 mx-auto mb-4" />
            <h3 className="font-semibold text-xl mb-2">Urgences</h3>
            <p className="text-2xl font-bold text-medical-500">15</p>
            <p className="text-gray-600 mt-2">24h/24 - 7j/7</p>
          </Card>
          
          <Card className="p-6 text-center">
            <Clock className="w-12 h-12 text-medical-500 mx-auto mb-4" />
            <h3 className="font-semibold text-xl mb-2">Horaires</h3>
            <p className="text-gray-600">Lundi - Vendredi</p>
            <p className="text-gray-600">8h00 - 20h00</p>
          </Card>
          
          <Card className="p-6 text-center">
            <MapPin className="w-12 h-12 text-medical-500 mx-auto mb-4" />
            <h3 className="font-semibold text-xl mb-2">Adresse</h3>
            <p className="text-gray-600">123 Avenue de la Santé</p>
            <p className="text-gray-600">75000 Paris</p>
          </Card>
        </div>
      </div>
    </section>
  );
};