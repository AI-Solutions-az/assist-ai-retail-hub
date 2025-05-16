
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
            Perfect for <span className="text-gradient">Various</span> Industries
          </h2>
          <p className="text-lg text-muted-foreground">
            Our AI Assistant adapts to different business needs, providing specialized support for various industries.
          </p>
        </AnimatedContainer>
        
        <Tabs defaultValue="retail" className="max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-3 mb-8">
            <TabsTrigger value="retail" className="text-sm md:text-base">
              <ShoppingBag className="mr-2 h-4 w-4" /> 
              <span className="hidden sm:inline">Clothing</span> Retail
            </TabsTrigger>
            <TabsTrigger value="realestate" className="text-sm md:text-base">
              <Building className="mr-2 h-4 w-4" /> 
              Real Estate
            </TabsTrigger>
            <TabsTrigger value="marketplace" className="text-sm md:text-base">
              <Home className="mr-2 h-4 w-4" /> 
              Marketplaces
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="retail" className="bg-muted/30 rounded-xl p-6 md:p-10 shadow-sm">
            <AnimatedContainer animation="fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Clothing & Retail Stores</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="mr-3 bg-primary/10 rounded-full p-1 mt-1">
                        <ArrowRight className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Size and Fit Guidance</p>
                        <p className="text-muted-foreground">Help customers find their perfect size and fit based on measurements or previous purchases.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-3 bg-primary/10 rounded-full p-1 mt-1">
                        <ArrowRight className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Product Recommendations</p>
                        <p className="text-muted-foreground">Suggest complementary items and accessories to increase average order value.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-3 bg-primary/10 rounded-full p-1 mt-1">
                        <ArrowRight className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Order Status Updates</p>
                        <p className="text-muted-foreground">Provide real-time information about order processing, shipping, and delivery.</p>
                      </div>
                    </li>
                  </ul>
                  <Button className="mt-6 hover-scale">
                    Retail Solution
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="bg-primary/5 rounded-xl p-6 shadow-inner">
                  <div className="bg-white dark:bg-zinc-900 rounded-lg p-5 shadow-sm">
                    <p className="text-sm font-medium mb-3">Customer Conversation Example:</p>
                    <div className="space-y-3 text-sm">
                      <div className="bg-muted/50 p-3 rounded-lg max-w-[80%]">
                        <p>Do you have this sweater in navy blue in size medium?</p>
                      </div>
                      <div className="bg-primary/10 p-3 rounded-lg ml-auto max-w-[80%]">
                        <p>Yes! We have the navy blue sweater in size medium. Based on your previous orders, this should fit you well. Would you like me to add it to your cart?</p>
                      </div>
                      <div className="bg-muted/50 p-3 rounded-lg max-w-[80%]">
                        <p>Great! Yes, please add it. What would you recommend to wear with it?</p>
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
                  <h3 className="text-2xl font-bold mb-4">Real Estate Agencies</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="mr-3 bg-primary/10 rounded-full p-1 mt-1">
                        <ArrowRight className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Property Matching</p>
                        <p className="text-muted-foreground">Help clients find properties that match their specific requirements and budget.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-3 bg-primary/10 rounded-full p-1 mt-1">
                        <ArrowRight className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Viewing Scheduling</p>
                        <p className="text-muted-foreground">Schedule property viewings and coordinate with agents automatically.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-3 bg-primary/10 rounded-full p-1 mt-1">
                        <ArrowRight className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Market Information</p>
                        <p className="text-muted-foreground">Provide insights about neighborhoods, pricing trends, and local amenities.</p>
                      </div>
                    </li>
                  </ul>
                  <Button className="mt-6 hover-scale">
                    Real Estate Solution
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="bg-primary/5 rounded-xl p-6 shadow-inner">
                  <div className="bg-white dark:bg-zinc-900 rounded-lg p-5 shadow-sm">
                    <p className="text-sm font-medium mb-3">Customer Conversation Example:</p>
                    <div className="space-y-3 text-sm">
                      <div className="bg-muted/50 p-3 rounded-lg max-w-[80%]">
                        <p>I'm looking for a 2-bedroom apartment with parking near downtown, budget around $1,500/month.</p>
                      </div>
                      <div className="bg-primary/10 p-3 rounded-lg ml-auto max-w-[80%]">
                        <p>I found 5 apartments that match your criteria! All have 2 bedrooms, are within 2 miles of downtown, include parking, and range from $1,350-$1,600/month. Would you like to see photos of these properties?</p>
                      </div>
                      <div className="bg-muted/50 p-3 rounded-lg max-w-[80%]">
                        <p>Yes, please! And could I schedule viewings for this weekend?</p>
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
                  <h3 className="text-2xl font-bold mb-4">Avito & Marketplaces</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="mr-3 bg-primary/10 rounded-full p-1 mt-1">
                        <ArrowRight className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Listing Management</p>
                        <p className="text-muted-foreground">Create, update and manage marketplace listings through natural conversations.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-3 bg-primary/10 rounded-full p-1 mt-1">
                        <ArrowRight className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Buyer-Seller Communication</p>
                        <p className="text-muted-foreground">Facilitate smooth communication between buyers and sellers with automated responses.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-3 bg-primary/10 rounded-full p-1 mt-1">
                        <ArrowRight className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Transaction Support</p>
                        <p className="text-muted-foreground">Guide users through secure payment processes and logistics arrangements.</p>
                      </div>
                    </li>
                  </ul>
                  <Button className="mt-6 hover-scale">
                    Marketplace Solution
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="bg-primary/5 rounded-xl p-6 shadow-inner">
                  <div className="bg-white dark:bg-zinc-900 rounded-lg p-5 shadow-sm">
                    <p className="text-sm font-medium mb-3">Customer Conversation Example:</p>
                    <div className="space-y-3 text-sm">
                      <div className="bg-muted/50 p-3 rounded-lg max-w-[80%]">
                        <p>Is this iPhone still available? What's the lowest price you can offer?</p>
                      </div>
                      <div className="bg-primary/10 p-3 rounded-lg ml-auto max-w-[80%]">
                        <p>Yes, the iPhone 13 Pro (128GB) is still available! The seller's listed price is $650, but they're willing to consider reasonable offers. The phone is in excellent condition with 90% battery health. Are you interested in making an offer?</p>
                      </div>
                      <div className="bg-muted/50 p-3 rounded-lg max-w-[80%]">
                        <p>Would they accept $600? And can I pick it up tomorrow?</p>
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
