
import React from 'react';
import AnimatedContainer from './AnimatedContainer';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section id="get-started" className="section-padding bg-primary/10">
      <div className="container">
        <AnimatedContainer className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your <span className="text-gradient">Customer Service</span>?
          </h2>
          <p className="text-lg mb-8">
            Join businesses that are saving time, increasing sales, and improving customer satisfaction with our AI Assistant.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            <div className="bg-white dark:bg-zinc-800 rounded-lg p-5 shadow-card">
              <div className="text-4xl font-bold text-primary mb-2">90%</div>
              <p className="text-sm text-muted-foreground">Reduction in response time</p>
            </div>
            <div className="bg-white dark:bg-zinc-800 rounded-lg p-5 shadow-card">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <p className="text-sm text-muted-foreground">Uninterrupted customer support</p>
            </div>
            <div className="bg-white dark:bg-zinc-800 rounded-lg p-5 shadow-card">
              <div className="text-4xl font-bold text-primary mb-2">35%</div>
              <p className="text-sm text-muted-foreground">Increase in conversion rates</p>
            </div>
          </div>
          <div className="space-y-4 sm:space-y-0 sm:flex sm:items-center sm:justify-center sm:space-x-4">
            <Button size="lg" className="w-full sm:w-auto hover-scale">
              Get Started for Free <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto hover-scale">
              Request a Demo
            </Button>
          </div>
        </AnimatedContainer>
      </div>
    </section>
  );
};

export default CTA;
