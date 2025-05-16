
import React from 'react';
import { Button } from '@/components/ui/button';
import AnimatedContainer from './AnimatedContainer';
import { MessageSquare } from 'lucide-react';
import { useContactModal } from '../hooks/useContactModal';

const Hero = () => {
  const { openModal } = useContactModal();
  
  return (
    <section className="pt-32 md:pt-40 pb-16 md:pb-24 relative overflow-hidden">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedContainer animation="fade-in" className="space-y-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <span className="animate-pulse-subtle mr-2">●</span> AI-помощник для клиентского сервиса
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Интеллектуальный <span className="text-gradient">ИИ-ассистент</span> для вашего бизнеса
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-md">
              Автоматизируйте поддержку клиентов с помощью ИИ-ассистента, который понимает ваш бизнес и легко интегрируется с Avito и другими площадками.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="hover-scale" onClick={openModal}>
                Начать бесплатно <MessageSquare className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </AnimatedContainer>
          
          <AnimatedContainer animation="fade-in-right" delay={300} className="relative">
            <div className="bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-2xl p-1">
              <div className="bg-white dark:bg-zinc-900 rounded-xl shadow-xl p-6 md:p-8">
                <div className="flex items-start mb-6">
                  <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <div className="ml-4">
                    <p className="font-medium">ИИ-ассистент</p>
                    <p className="text-sm text-muted-foreground">Онлайн</p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="bg-muted/50 p-4 rounded-lg max-w-[80%]">
                    <p className="text-sm">Здравствуйте! Я ищу двухкомнатную квартиру в центре города. У вас есть что-нибудь доступное?</p>
                  </div>
                  
                  <div className="bg-primary/10 p-4 rounded-lg ml-auto max-w-[80%]">
                    <p className="text-sm">Здравствуйте! Да, у нас есть 3 доступные двухкомнатные квартиры в центре города по цене от 90 000 до 120 000 рублей в месяц. Хотели бы вы посмотреть фотографии?</p>
                  </div>
                  
                  <div className="bg-muted/50 p-4 rounded-lg max-w-[80%]">
                    <p className="text-sm">Да, пожалуйста! А разрешены ли домашние животные?</p>
                  </div>
                  
                  <div className="bg-primary/10 p-4 rounded-lg ml-auto max-w-[80%]">
                    <p className="text-sm">В двух из них разрешены домашние животные! Вот фотографии наших доступных квартир...</p>
                  </div>
                </div>
                
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Введите ваше сообщение..."
                    className="w-full rounded-full border border-input bg-background px-4 py-2 text-sm"
                  />
                  <Button size="sm" className="absolute right-1 top-1 rounded-full h-6 w-6 p-0 flex items-center justify-center">
                    <MessageSquare className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </div>
          </AnimatedContainer>
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default Hero;
