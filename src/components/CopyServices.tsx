import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const CopyServices = () => {
  const services = [
    {
      title: "Ксерокопия и печать",
      items: [
        "Чёрно-белая печать от 2₽",
        "Цветная печать от 8₽",
        "Двусторонняя печать",
        "Печать А3, А4, А5",
      ],
      icon: "Printer",
      badge: "Популярно",
    },
    {
      title: "Сканирование",
      items: [
        "Сканирование в PDF",
        "Отправка на email",
        "Обработка документов",
        "Архивное качество",
      ],
      icon: "Scan",
      badge: "Быстро",
    },
    {
      title: "Ламинирование",
      items: ["А4 от 50₽", "А3 от 80₽", "Плотная защита", "Глянцевое покрытие"],
      icon: "Shield",
      badge: "Качество",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-montserrat mb-4">
            Услуги копицентра
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Профессиональная печать, сканирование и ламинирование документов.
            Работаем с любыми форматами.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="relative overflow-hidden hover:shadow-xl transition-all"
            >
              {service.badge && (
                <Badge className="absolute top-4 right-4 bg-purple-600">
                  {service.badge}
                </Badge>
              )}
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={service.icon as any} size={32} />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center">
                      <Icon
                        name="Check"
                        className="text-green-500 mr-3 flex-shrink-0"
                        size={16}
                      />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CopyServices;
