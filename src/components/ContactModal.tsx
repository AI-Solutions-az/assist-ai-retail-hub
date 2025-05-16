
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useContactModal } from '../hooks/useContactModal';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';

const ContactModal = () => {
  const { isOpen, closeModal } = useContactModal();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !phone) {
      toast.error("Пожалуйста, заполните все поля");
      return;
    }
    
    try {
      setIsSubmitting(true);
      
      // Replace TOKEN with your actual token when implementing
      const response = await fetch(`https://api.telegram.org/botTOKEN/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: '-1001234567890', // Replace with your chat ID
          parse_mode: 'HTML',
          text: `<b>Новая заявка с сайта:</b>\n\n<b>Имя:</b> ${name}\n<b>Email:</b> ${email}\n<b>Телефон:</b> ${phone}`,
        }),
      });
      
      if (!response.ok) {
        throw new Error('Не удалось отправить сообщение в Telegram');
      }
      
      toast.success("Спасибо! Мы свяжемся с вами в ближайшее время.");
      closeModal();
      setName('');
      setEmail('');
      setPhone('');
      
    } catch (error) {
      console.error('Error sending message to Telegram:', error);
      toast.error("Произошла ошибка. Пожалуйста, попробуйте еще раз позже.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={closeModal}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Связаться с нами</DialogTitle>
          <DialogDescription>
            Оставьте свои контактные данные, и мы свяжемся с вами в ближайшее время
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name">Имя</Label>
            <Input 
              id="name" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              placeholder="Введите ваше имя" 
              required 
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input 
              id="email" 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="your@email.com" 
              required 
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone">Телефон</Label>
            <Input 
              id="phone" 
              type="tel" 
              value={phone} 
              onChange={(e) => setPhone(e.target.value)} 
              placeholder="+7 (___) ___-__-__" 
              required 
            />
          </div>
          
          <div className="flex justify-end">
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Отправка...
                </>
              ) : 'Отправить заявку'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
