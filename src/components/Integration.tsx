
import React from 'react';
import AnimatedContainer from './AnimatedContainer';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckSquare } from 'lucide-react';

const integrationSteps = [
  "Create your account and configure your knowledge base",
  "Connect your Avito store or marketplace with our simple API",
  "Customize the assistant's personality and responses",
  "Test the integration with sample customer queries",
  "Go live and let the AI handle customer inquiries"
];

const Integration = () => {
  return (
    <section id="integration" className="section-padding bg-gradient-to-b from-white to-secondary/30 dark:from-background dark:to-background">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedContainer>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Seamless <span className="text-gradient">Integration</span> with Avito and Marketplaces
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our AI Assistant works perfectly with Avito and other marketplaces, providing a unified customer service experience across all platforms.
            </p>
            
            <div className="space-y-4 mb-8">
              {integrationSteps.map((step, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 mr-3 text-primary">
                    <CheckSquare className="h-6 w-6" />
                  </div>
                  <p className="font-medium">{step}</p>
                </div>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="hover-scale">
                Start Integration <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="hover-scale">
                View Documentation
              </Button>
            </div>
          </AnimatedContainer>
          
          <AnimatedContainer animation="slide-up" className="relative">
            <div className="bg-white dark:bg-zinc-800 rounded-xl shadow-xl p-6 md:p-8 relative z-10">
              <div className="flex items-center mb-6">
                <div className="h-3 w-3 rounded-full bg-red-500 mr-2"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500 mr-2"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                <div className="ml-4 flex-1 bg-muted h-6 rounded"></div>
              </div>
              
              <div className="space-y-4 text-sm">
                <div className="bg-muted/80 rounded p-3">
                  <span className="text-primary font-mono"># Initialize the AI Assistant</span>
                  <pre className="mt-2 overflow-x-auto"><code>{`import AIAssistant from 'aivito-assistant'

const assistant = new AIAssistant({
  apiKey: 'your_api_key',
  storeId: 'your_store_id',
  knowledgeBase: 'your_kb_id'
})`}</code></pre>
                </div>
                
                <div className="bg-muted/80 rounded p-3">
                  <span className="text-primary font-mono"># Connect to Avito Marketplace</span>
                  <pre className="mt-2 overflow-x-auto"><code>{`await assistant.connect({
  platform: 'avito',
  credentials: {
    clientId: 'your_client_id',
    clientSecret: 'your_client_secret'
  },
  webhooks: {
    newMessage: 'https://your-api.com/webhook'
  }
})`}</code></pre>
                </div>
                
                <div className="bg-muted/80 rounded p-3">
                  <span className="text-primary font-mono"># Handle customer messages</span>
                  <pre className="mt-2 overflow-x-auto"><code>{`assistant.on('message', async (message) => {
  // AI processes message automatically
  if (message.needsHumanAttention) {
    await assistant.escalateToHuman(message)
  }
})`}</code></pre>
                </div>
              </div>
              
              <div className="mt-6 p-3 bg-primary/10 rounded-lg border border-primary/20">
                <p className="text-sm font-medium flex items-center">
                  <CheckSquare className="h-4 w-4 mr-2 text-primary" />
                  Integration ready to handle customer queries!
                </p>
              </div>
            </div>
            
            {/* Background design elements */}
            <div className="absolute top-6 left-6 w-full h-full bg-primary/10 rounded-xl -z-10"></div>
            <div className="absolute top-3 left-3 w-full h-full bg-primary/5 rounded-xl -z-20"></div>
          </AnimatedContainer>
        </div>
      </div>
    </section>
  );
};

export default Integration;
