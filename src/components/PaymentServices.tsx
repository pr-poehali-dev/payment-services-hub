import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const PaymentServices = () => {
  const services = [
    {
      title: "Банковские кредиты",
      description: "Погашение кредитов всех банков России",
      icon: "Building2",
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "ЖКХ услуги",
      description: "Оплата коммунальных платежей",
      icon: "Home",
      color: "bg-green-50 text-green-600",
    },
    {
      title: "Штрафы ГИБДД",
      description: "Быстрая оплата штрафов с проверкой",
      icon: "Car",
      color: "bg-red-50 text-red-600",
    },
    {
      title: "Мобильная связь",
      description: "Пополнение счета всех операторов",
      icon: "Smartphone",
      color: "bg-purple-50 text-purple-600",
    },
    {
      title: "Интернет",
      description: "Оплата интернет-провайдеров",
      icon: "Wifi",
      color: "bg-orange-50 text-orange-600",
    },
    {
      title: "Другие услуги",
      description: "Госуслуги, налоги, страхование",
      icon: "FileText",
      color: "bg-gray-50 text-gray-600",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-montserrat mb-4">
            Платёжные услуги
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Оплачивайте любые услуги быстро и безопасно. Комиссия от 1%. Все
            платежи проходят мгновенно.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div
                  className={`w-12 h-12 rounded-lg ${service.color} flex items-center justify-center mb-3`}
                >
                  <Icon name={service.icon as any} size={24} />
                </div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full">
                  <Icon name="ArrowRight" className="ml-2" size={16} />
                  Оплатить
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Icon name="CreditCard" className="mr-2" />
            Все платёжные услуги
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PaymentServices;
