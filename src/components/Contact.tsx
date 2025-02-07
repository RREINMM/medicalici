import { Phone, Clock, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";

export const Contact = () => {
  return (
    <section className="bg-gradient-to-b from-white to-medical-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-medical-600 to-medical-800 bg-clip-text text-transparent">
          Informations de Contact
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 bg-white/50 backdrop-blur-sm border border-medical-100">
            <Phone className="w-12 h-12 text-medical-600 mx-auto mb-4" />
            <h3 className="font-semibold text-xl mb-2 text-gray-900">Urgences</h3>
            <p className="text-2xl font-bold text-medical-600">15</p>
            <p className="text-gray-600 mt-2">24h/24 - 7j/7</p>
          </Card>
          
          <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 bg-white/50 backdrop-blur-sm border border-medical-100">
            <Clock className="w-12 h-12 text-medical-600 mx-auto mb-4" />
            <h3 className="font-semibold text-xl mb-2 text-gray-900">Horaires</h3>
            <p className="text-gray-600">Lundi - Vendredi</p>
            <p className="text-gray-600">8h00 - 20h00</p>
          </Card>
          
          <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 bg-white/50 backdrop-blur-sm border border-medical-100">
            <MapPin className="w-12 h-12 text-medical-600 mx-auto mb-4" />
            <h3 className="font-semibold text-xl mb-2 text-gray-900">Adresse</h3>
            <p className="text-gray-600">123 Avenue de la Santé</p>
            <p className="text-gray-600">75000 Paris</p>
          </Card>
        </div>
      </div>
    </section>
  );
};