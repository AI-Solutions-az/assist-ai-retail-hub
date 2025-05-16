
import React from 'react';
import AnimatedContainer from './AnimatedContainer';
import { MessageSquare, Users, Globe, Zap, ArrowRight, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: <MessageSquare className="h-10 w-10 text-primary" />,
    title: 'Natural Conversations',
    description: 'Engages with customers in human-like conversations, understanding context and nuance.',
    delay: 0
  },
  {
    icon: <Zap className="h-10 w-10 text-primary" />,
    title: 'Instant Responses',
    description: 'Provides immediate answers 24/7, eliminating wait times for your customers.',
    delay: 150
  },
  {
    icon: <Shield className="h-10 w-10 text-primary" />,
    title: 'Knowledge Base',
    description: 'Leverages your custom knowledge base to provide accurate, on-brand information.',
    delay: 300
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: 'Human Handoff',
    description: 'Knows when to escalate complex issues to your human team members seamlessly.',
    delay: 0
  },
  {
    icon: <Globe className="h-10 w-10 text-primary" />,
    title: 'Avito Integration',
    description: 'Seamlessly connects with Avito and other marketplaces for unified customer service.',
    delay: 150
  },
  {
    icon: <ArrowRight className="h-10 w-10 text-primary" />,
    title: 'Conversion Focused',
    description: 'Designed to guide customers through the purchase journey and increase conversions.',
    delay: 300
  }
];

const Features = () => {
  return (
    <section id="features" className="section-padding bg-secondary/50">
      <div className="container">
        <AnimatedContainer className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful Features to <span className="text-gradient">Transform</span> Your Customer Service
          </h2>
          <p className="text-lg text-muted-foreground">
            Our AI Assistant brings cutting-edge technology to help you connect with customers, answer questions instantly, and boost sales.
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
        
        <AnimatedContainer className="text-center mt-16">
          <Button size="lg" className="hover-scale">
            Explore All Features <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </AnimatedContainer>
      </div>
    </section>
  );
};

export default Features;
