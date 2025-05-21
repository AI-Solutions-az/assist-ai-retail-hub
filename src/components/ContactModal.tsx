
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
      
      // Send data to email service (can be replaced with a proper email API)
      const response = await fetch("https://formsubmit.co/ajax/info@aisol.az", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          email: email,
          phone: phone,
          _subject: "Новая заявка с сайта AISOL",
        }),
      });
      
      if (!response.ok) {
        throw new Error('Не удалось отправить заявку');
      }
      
      toast.success("Спасибо! Мы свяжемся с вами в ближайшее время.");
      closeModal();
      setName('');
      setEmail('');
      setPhone('');
      
    } catch (error) {
      console.error('Error sending form:', error);
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
