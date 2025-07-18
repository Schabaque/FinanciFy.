import { statsData, featuresData } from "@/components/data/landing";
import HeroSection from "@/components/hero";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import React from "react";
const testimonialsData = [
  {
    name: "Sarah Johnson",
    role: "Small Business Owner",
    image: "https://randomuser.me/api/portraits/women/75.jpg",
    quote:
      "Welth has transformed how I manage my business finances. The AI insights have helped me identify cost-saving opportunities I never knew existed.",
  },
  {
    name: "Michael Chen",
    role: "Freelancer",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    quote:
      "The receipt scanning feature saves me hours each month. Now I can focus on my work instead of manual data entry and expense tracking.",
  },
  {
    name: "Emily Rodriguez",
    role: "Financial Advisor",
    image: "https://randomuser.me/api/portraits/women/74.jpg",
    quote:
      "I recommend Welth to all my clients. The multi-currency support and detailed analytics make it perfect for international investors.",
  },
];
export default function Home() {
  return (
    <div className="pt-10">
      <HeroSection />

      {/* Features Section */}
      <section className="relative py-20 bg-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-black"></div>

        {/* Animated background elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-yellow-400/3 rounded-full blur-3xl animate-pulse delay-1000"></div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
              backgroundSize: "20px 20px",
            }}
          ></div>
        </div>
      </div>

    <div className="relative z-10 container">
  {/* Features Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto max-w-7xl py-10">
    {featuresData.map((feature, index) => (
      <Card
        key={index}
        className="group relative h-60 w-80 bg-black hover:border-yellow-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-500/10 backdrop-blur-sm overflow-hidden"
      >
        {/* Card glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/0 via-yellow-500/5 to-yellow-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Top border accent */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        <CardContent className="relative h-full flex flex-col justify-between p-5">
          {/* Top row: title left, icon right */}
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-white group-hover:text-yellow-50 transition-colors duration-300">
              {feature.title}
            </h3>
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 rounded-xl border border-yellow-500/30 group-hover:border-yellow-400/60 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
              {React.cloneElement(feature.icon, {
                className:
                  "w-6 h-6 text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300 transform group-hover:scale-110",
              })}
            </div>
          </div>

          {/* Centered description */}
          <div className="flex-grow flex items-center justify-center text-center">
            <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300 px-2">
              {feature.description}
            </p>
          </div>

          {/* Bottom accent line */}
         
        </CardContent>

        {/* Hover overlay effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      </Card>
    ))}
  </div>

 <section className="py-20">
  <div className="container mx-auto px-4 ">
    <h2 className="text-3xl font-bold text-center text-white mb-12">
      What Our Users Say
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
      {testimonialsData.map((testimonial, index) => (
        <Card key={index} className="p-6">
          <CardContent className="space-y-4 pt-4 flex flex-col items-center text-center">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-16 h-16 rounded-full object-cover mx-auto"
            />
            <h3 className="text-xl font-semibold text-white">{testimonial.name}</h3>
            <p className="text-gray-500 text-sm">{testimonial.role}</p>
            <p className="text-white italic">"{testimonial.quote}"</p>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>
<div className="w-full bg-amber-400 h-[1px]"></div>
<section className="py-20 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Take Control of Your Finances?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of users who are already managing their finances
            smarter with Welth
          </p>
      
            <Button
              size="lg"
              className="bg-white text-yellow-500 hover:bg-blue-50 animate-bounce"
            >
              Start Free Trial
            </Button>
      
        </div>
      </section>
      <div className="w-full bg-amber-400 h-[1px]"></div>
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 text-gray-400 text-sm">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse delay-200"></div>
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse delay-400"></div>
            </div>
            <span>Trusted by thousands of users worldwide</span>
          </div>
        </div>
      </div>

      {/* Bottom section divider */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent"></div>
    </section>
    </div>
  );
}