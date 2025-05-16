
import React from 'react';
import AnimatedContainer from './AnimatedContainer';
import { Building, ShoppingBag, Home, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const UseCases = () => {
  return (
    <section id="use-cases" className="section-padding">
      <div className="container">
        <AnimatedContainer className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Идеально для <span className="text-gradient">различных</span> отраслей
          </h2>
          <p className="text-lg text-muted-foreground">
            Наш ИИ-ассистент адаптируется к различным бизнес-потребностям, предоставляя специализированную поддержку для разных отраслей.
          </p>
        </AnimatedContainer>
        
        <Tabs defaultValue="retail" className="max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-3 mb-8">
            <TabsTrigger value="retail" className="text-sm md:text-base">
              <ShoppingBag className="mr-2 h-4 w-4" /> 
              <span className="hidden sm:inline">Магазины одежды</span>
            </TabsTrigger>
            <TabsTrigger value="realestate" className="text-sm md:text-base">
              <Building className="mr-2 h-4 w-4" /> 
              Недвижимость
            </TabsTrigger>
            <TabsTrigger value="marketplace" className="text-sm md:text-base">
              <Home className="mr-2 h-4 w-4" /> 
              Маркетплейсы
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="retail" className="bg-muted/30 rounded-xl p-6 md:p-10 shadow-sm">
            <AnimatedContainer animation="fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Магазины одежды</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="mr-3 bg-primary/10 rounded-full p-1 mt-1">
                        <ArrowRight className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Подбор размера и посадки</p>
                        <p className="text-muted-foreground">Помощь клиентам в выборе идеального размера на основе замеров или предыдущих покупок.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-3 bg-primary/10 rounded-full p-1 mt-1">
                        <ArrowRight className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Рекомендации товаров</p>
                        <p className="text-muted-foreground">Предложение дополнительных товаров и аксессуаров для увеличения средней стоимости заказа.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-3 bg-primary/10 rounded-full p-1 mt-1">
                        <ArrowRight className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Информация о статусе заказа</p>
                        <p className="text-muted-foreground">Предоставление актуальной информации о обработке заказа, доставке и получении.</p>
                      </div>
                    </li>
                  </ul>
                  <Button className="mt-6 hover-scale">
                    Решение для ритейла
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="bg-primary/5 rounded-xl p-6 shadow-inner">
                  <div className="bg-white dark:bg-zinc-900 rounded-lg p-5 shadow-sm">
                    <p className="text-sm font-medium mb-3">Пример диалога с клиентом:</p>
                    <div className="space-y-3 text-sm">
                      <div className="bg-muted/50 p-3 rounded-lg max-w-[80%]">
                        <p>У вас есть этот свитер в темно-синем цвете размера M?</p>
                      </div>
                      <div className="bg-primary/10 p-3 rounded-lg ml-auto max-w-[80%]">
                        <p>Да! У нас есть темно-синий свитер размера M. Судя по вашим предыдущим заказам, этот размер должен вам подойти. Хотите добавить его в корзину?</p>
                      </div>
                      <div className="bg-muted/50 p-3 rounded-lg max-w-[80%]">
                        <p>Отлично! Да, добавьте. Что бы вы рекомендовали носить с ним?</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedContainer>
          </TabsContent>
          
          <TabsContent value="realestate" className="bg-muted/30 rounded-xl p-6 md:p-10 shadow-sm">
            <AnimatedContainer animation="fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Агентства недвижимости</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="mr-3 bg-primary/10 rounded-full p-1 mt-1">
                        <ArrowRight className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Подбор объектов</p>
                        <p className="text-muted-foreground">Помощь клиентам в поиске объектов недвижимости, соответствующих их требованиям и бюджету.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-3 bg-primary/10 rounded-full p-1 mt-1">
                        <ArrowRight className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Запись на просмотр</p>
                        <p className="text-muted-foreground">Автоматическое планирование просмотров объектов и координация с агентами.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-3 bg-primary/10 rounded-full p-1 mt-1">
                        <ArrowRight className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Информация о рынке</p>
                        <p className="text-muted-foreground">Предоставление сведений о районах, ценовых тенденциях и инфраструктуре.</p>
                      </div>
                    </li>
                  </ul>
                  <Button className="mt-6 hover-scale">
                    Решение для недвижимости
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="bg-primary/5 rounded-xl p-6 shadow-inner">
                  <div className="bg-white dark:bg-zinc-900 rounded-lg p-5 shadow-sm">
                    <p className="text-sm font-medium mb-3">Пример диалога с клиентом:</p>
                    <div className="space-y-3 text-sm">
                      <div className="bg-muted/50 p-3 rounded-lg max-w-[80%]">
                        <p>Ищу двухкомнатную квартиру с парковкой рядом с центром, бюджет около 90 000 руб/месяц.</p>
                      </div>
                      <div className="bg-primary/10 p-3 rounded-lg ml-auto max-w-[80%]">
                        <p>Я нашел 5 квартир, соответствующих вашим критериям! Все имеют 2 комнаты, находятся в пределах 2 км от центра, включают парковку, и стоят от 85 000 до 95 000 руб/месяц. Хотите посмотреть фотографии этих объектов?</p>
                      </div>
                      <div className="bg-muted/50 p-3 rounded-lg max-w-[80%]">
                        <p>Да, пожалуйста! И можно ли запланировать просмотры на эти выходные?</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedContainer>
          </TabsContent>
          
          <TabsContent value="marketplace" className="bg-muted/30 rounded-xl p-6 md:p-10 shadow-sm">
            <AnimatedContainer animation="fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Avito и маркетплейсы</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="mr-3 bg-primary/10 rounded-full p-1 mt-1">
                        <ArrowRight className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Управление объявлениями</p>
                        <p className="text-muted-foreground">Создание, обновление и управление объявлениями на маркетплейсе через простые диалоги.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-3 bg-primary/10 rounded-full p-1 mt-1">
                        <ArrowRight className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Коммуникация покупатель-продавец</p>
                        <p className="text-muted-foreground">Обеспечение эффективного общения между покупателями и продавцами с автоматическими ответами.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-3 bg-primary/10 rounded-full p-1 mt-1">
                        <ArrowRight className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Поддержка транзакций</p>
                        <p className="text-muted-foreground">Сопровождение пользователей в процессах безопасных платежей и логистических решений.</p>
                      </div>
                    </li>
                  </ul>
                  <Button className="mt-6 hover-scale">
                    Решение для маркетплейсов
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="bg-primary/5 rounded-xl p-6 shadow-inner">
                  <div className="bg-white dark:bg-zinc-900 rounded-lg p-5 shadow-sm">
                    <p className="text-sm font-medium mb-3">Пример диалога с клиентом:</p>
                    <div className="space-y-3 text-sm">
                      <div className="bg-muted/50 p-3 rounded-lg max-w-[80%]">
                        <p>Этот iPhone ещё доступен? Какую скидку можете предложить?</p>
                      </div>
                      <div className="bg-primary/10 p-3 rounded-lg ml-auto max-w-[80%]">
                        <p>Да, iPhone 13 Pro (128GB) ещё доступен! Указанная цена продавца 50 000 руб., но он готов рассмотреть разумные предложения. Телефон в отличном состоянии с 90% ресурса батареи. Хотите сделать предложение?</p>
                      </div>
                      <div className="bg-muted/50 p-3 rounded-lg max-w-[80%]">
                        <p>Примет ли он 45 000 руб.? И можно забрать завтра?</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedContainer>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default UseCases;
