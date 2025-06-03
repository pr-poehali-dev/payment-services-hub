import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const DesignServices = () => {
  const services = [
    {
      title: "Визитные карточки",
      description: "Дизайн и печать на премиум бумаге",
      price: "от 500₽ за 100 шт",
      features: [
        "Индивидуальный дизайн",
        "Глянцевая бумага",
        "Быстрое изготовление",
      ],
      icon: "CreditCard",
      image:
        "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=300&h=200&fit=crop",
    },
    {
      title: "Логотипы",
      description: "Создание фирменного стиля для бизнеса",
      price: "от 3000₽",
      features: ["3 варианта концепции", "Векторные файлы", "Фирменные цвета"],
      icon: "Palette",
      image:
        "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=300&h=200&fit=crop",
    },
    {
      title: "Карточки товаров",
      description: "Профессиональные карточки для магазинов",
      price: "от 50₽ за шт",
      features: ["Штрих-коды", "Цветная печать", "Разные размеры"],
      icon: "Tag",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&h=200&fit=crop",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-montserrat mb-4">
            Дизайн-услуги
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Создаём уникальный дизайн для вашего бизнеса. От визиток до
            логотипов — всё на высшем уровне.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-2xl transition-all group"
            >
              <div className="relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-white rounded-full p-2">
                  <Icon
                    name={service.icon as any}
                    className="text-purple-600"
                    size={20}
                  />
                </div>
              </div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {service.title}
                  <span className="text-lg font-bold text-purple-600">
                    {service.price}
                  </span>
                </CardTitle>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm"
                    >
                      <Icon
                        name="Star"
                        className="text-yellow-500 mr-2"
                        size={14}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  <Icon name="MessageCircle" className="mr-2" size={16} />
                  Заказать
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignServices;
