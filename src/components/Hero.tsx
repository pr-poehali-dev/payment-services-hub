import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-600 via-blue-500 to-purple-600 text-white py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=800&fit=crop"
          alt="Офисные услуги"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-5xl font-bold font-montserrat mb-6">
          ПлатёжКопиЦентр
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Все платежи и офисные услуги в одном месте. Оплачивайте счета,
          печатайте документы, покупайте канцелярию.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100"
          >
            <Icon name="CreditCard" className="mr-2" />
            Оплатить услуги
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-blue-600"
          >
            <Icon name="Printer" className="mr-2" />
            Услуги печати
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
