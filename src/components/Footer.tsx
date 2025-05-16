
import React from 'react';
import { MessageSquare, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-zinc-50 dark:bg-zinc-900 pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4 text-gradient">AIvito Ассистент</h3>
            <p className="text-muted-foreground mb-4">
              ИИ-ассистент для клиентского сервиса на Avito и других маркетплейсах.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Продукт</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-muted-foreground hover:text-primary">Возможности</a></li>
              <li><a href="#use-cases" className="text-muted-foreground hover:text-primary">Применение</a></li>
              <li><a href="#integration" className="text-muted-foreground hover:text-primary">Интеграция</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary mr-3" />
                <a href="mailto:info@aisol.az" className="text-muted-foreground hover:text-primary">
                  info@aisol.az
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground mb-4 md:mb-0">
              © 2025 AIvito Ассистент. Все права защищены.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary">Политика конфиденциальности</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary">Условия использования</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary">Политика cookie</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
