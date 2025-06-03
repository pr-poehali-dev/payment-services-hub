import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Contact = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-montserrat mb-4">
            Контакты и режим работы
          </h2>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Мы работаем для вас каждый день. Приходите за услугами или звоните
            для консультации.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardHeader className="text-center">
              <Icon
                name="MapPin"
                className="mx-auto mb-4 text-yellow-300"
                size={32}
              />
              <CardTitle>Наш адрес</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="mb-2">ул. Центральная, д. 15</p>
              <p className="text-blue-100">Остановка "Центр", рядом с почтой</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardHeader className="text-center">
              <Icon
                name="Clock"
                className="mx-auto mb-4 text-green-300"
                size={32}
              />
              <CardTitle>Режим работы</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="mb-2">Пн-Пт: 8:00 - 20:00</p>
              <p className="mb-2">Сб: 9:00 - 18:00</p>
              <p className="text-blue-100">Вс: 10:00 - 16:00</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardHeader className="text-center">
              <Icon
                name="Phone"
                className="mx-auto mb-4 text-pink-300"
                size={32}
              />
              <CardTitle>Связь с нами</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-3">
              <p>+7 (999) 123-45-67</p>
              <p className="text-blue-100 text-sm">info@platezh-kopi.ru</p>
              <Button className="bg-white text-blue-600 hover:bg-blue-50">
                <Icon name="MessageCircle" className="mr-2" size={16} />
                Написать в WhatsApp
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-4">💳 Принимаем к оплате</h3>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white/20 px-3 py-1 rounded">Наличные</span>
              <span className="bg-white/20 px-3 py-1 rounded">
                Банковские карты
              </span>
              <span className="bg-white/20 px-3 py-1 rounded">СБП</span>
              <span className="bg-white/20 px-3 py-1 rounded">Переводы</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
