
import React from 'react';
import AnimatedContainer from './AnimatedContainer';
import { Button } from '@/components/ui/button';
import { useContactModal } from '../hooks/useContactModal';

const CTA = () => {
  const { openModal } = useContactModal();
  
  return (
    <section id="get-started" className="section-padding bg-primary/10">
      <div className="container">
        <AnimatedContainer className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Готовы трансформировать свой <span className="text-gradient">клиентский сервис</span>?
          </h2>
          <p className="text-lg mb-8">
            Присоединяйтесь к компаниям, которые экономят время, увеличивают продажи и улучшают удовлетворенность клиентов с нашим ИИ-ассистентом.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            <div className="bg-white dark:bg-zinc-800 rounded-lg p-5 shadow-card">
              <div className="text-4xl font-bold text-primary mb-2">90%</div>
              <p className="text-sm text-muted-foreground">Сокращение времени ответа</p>
            </div>
            <div className="bg-white dark:bg-zinc-800 rounded-lg p-5 shadow-card">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <p className="text-sm text-muted-foreground">Непрерывная поддержка клиентов</p>
            </div>
            <div className="bg-white dark:bg-zinc-800 rounded-lg p-5 shadow-card">
              <div className="text-4xl font-bold text-primary mb-2">35%</div>
              <p className="text-sm text-muted-foreground">Увеличение конверсии</p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Button size="lg" className="w-full sm:w-auto hover-scale" onClick={openModal}>
              Начать бесплатно
            </Button>
          </div>
        </AnimatedContainer>
      </div>
    </section>
  );
};

export default CTA;
