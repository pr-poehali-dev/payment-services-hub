import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const OfficeSupplies = () => {
  const categories = [
    {
      title: "Письменные принадлежности",
      items: [
        { name: "Ручки шариковые", price: "от 15₽", stock: "В наличии" },
        { name: "Карандаши простые", price: "от 8₽", stock: "В наличии" },
        { name: "Маркеры цветные", price: "от 120₽", stock: "Мало" },
        { name: "Корректоры", price: "от 45₽", stock: "В наличии" },
      ],
      icon: "PenTool",
    },
    {
      title: "Бумажная продукция",
      items: [
        { name: "Тетради 48 листов", price: "от 35₽", stock: "В наличии" },
        { name: "Блокноты А5", price: "от 85₽", stock: "В наличии" },
        { name: "Бумага А4 (500 л.)", price: "от 320₽", stock: "В наличии" },
        { name: "Стикеры цветные", price: "от 25₽", stock: "В наличии" },
      ],
      icon: "FileText",
    },
    {
      title: "Папки и файлы",
      items: [
        { name: "Папки-скоросшиватели", price: "от 25₽", stock: "В наличии" },
        { name: "Файлы А4 (100 шт)", price: "от 180₽", stock: "В наличии" },
        { name: "Папки с кольцами", price: "от 150₽", stock: "Мало" },
        { name: "Разделители", price: "от 40₽", stock: "В наличии" },
      ],
      icon: "Folder",
    },
  ];

  const getStockColor = (stock: string) => {
    switch (stock) {
      case "В наличии":
        return "bg-green-100 text-green-800";
      case "Мало":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-montserrat mb-4">
            Канцелярские товары
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Всё необходимое для офиса и учёбы. Качественные товары по доступным
            ценам.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mr-3">
                    <Icon name={category.icon as any} size={20} />
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="flex items-center justify-between p-3 bg-white rounded-lg border"
                  >
                    <div className="flex-1">
                      <p className="font-medium text-sm">{item.name}</p>
                      <p className="text-blue-600 font-bold">{item.price}</p>
                    </div>
                    <Badge className={getStockColor(item.stock)}>
                      {item.stock}
                    </Badge>
                  </div>
                ))}
                <Button className="w-full mt-4" variant="outline">
                  <Icon name="ShoppingCart" className="mr-2" size={16} />
                  Смотреть все товары
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Card className="max-w-md mx-auto bg-gradient-to-r from-green-500 to-blue-500 text-white">
            <CardContent className="p-6">
              <Icon name="Truck" className="mx-auto mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">Доставка от 500₽</h3>
              <p className="text-sm opacity-90">
                Бесплатная доставка по городу при заказе от 1500₽
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default OfficeSupplies;
