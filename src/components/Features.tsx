
import React from 'react';
import AnimatedContainer from './AnimatedContainer';
import { MessageSquare, Users, Globe, Zap, Shield } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: <MessageSquare className="h-10 w-10 text-primary" />,
    title: 'Естественное общение',
    description: 'Общается с клиентами как человек, понимая контекст и нюансы разговора.',
    delay: 0
  },
  {
    icon: <Zap className="h-10 w-10 text-primary" />,
    title: 'Мгновенные ответы',
    description: 'Предоставляет немедленные ответы 24/7, устраняя время ожидания для ваших клиентов.',
    delay: 150
  },
  {
    icon: <Shield className="h-10 w-10 text-primary" />,
    title: 'База знаний',
    description: 'Использует вашу собственную базу знаний для предоставления точной информации в соответствии с брендом.',
    delay: 300
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: 'Переключение на человека',
    description: 'Знает, когда следует передать сложные вопросы вашим сотрудникам.',
    delay: 0
  },
  {
    icon: <Globe className="h-10 w-10 text-primary" />,
    title: 'Интеграция с Avito',
    description: 'Легко подключается к Avito и другим маркетплейсам для унифицированного обслуживания клиентов.',
    delay: 150
  },
  {
    icon: <Zap className="h-10 w-10 text-primary" />,
    title: 'Ориентирован на конверсии',
    description: 'Разработан для сопровождения клиентов по пути покупки и увеличения конверсий.',
    delay: 300
  }
];

const Features = () => {
  return (
    <section id="features" className="section-padding bg-secondary/50">
      <div className="container">
        <AnimatedContainer className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Мощные функции для <span className="text-gradient">трансформации</span> вашего клиентского сервиса
          </h2>
          <p className="text-lg text-muted-foreground">
            Наш ИИ-ассистент предлагает передовые технологии, чтобы помочь вам связаться с клиентами, мгновенно отвечать на вопросы и увеличивать продажи.
          </p>
        </AnimatedContainer>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <AnimatedContainer 
              key={index} 
              animation="slide-up" 
              delay={feature.delay}
              className="h-full"
            >
              <Card className="shadow-card h-full border-0">
                <CardHeader>
                  <div className="bg-primary/10 p-3 rounded-lg w-fit">
                    {feature.icon}
                  </div>
                  <CardTitle className="mt-5">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </AnimatedContainer>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
