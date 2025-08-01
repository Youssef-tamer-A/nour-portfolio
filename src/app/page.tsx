import React from 'react';

import Image from 'next/image';

import Header from '@/components/header';
import About from '@/components/about';
import Skills from '@/components/skills';
import Projects from '@/components/projects';
import Experience from '@/components/experience';
import Contact from '@/components/contact';
import ScrollToTop from '@/components/scroll-to-top';
import './globals.css';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />
      
      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-4 md:space-y-6 animate-fade-in order-2 lg:order-1">
              <div className="overflow-hidden">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight animate-slide-in-left">
                  Hi, I&apos;m{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 animate-bounce-in">
                    Nour Ahmed
                  </span>
                </h1>
              </div>
              <div className="overflow-hidden">
                <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-700 font-medium animate-slide-in-left" style={{animationDelay: '0.2s'}}>
                  Data Scientist & Analytics Expert
                </h2>
              </div>
              <div className="overflow-hidden">
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-lg animate-slide-in-left" style={{animationDelay: '0.4s'}}>
                  Transforming data into actionable insights. Specialized in machine learning, 
                  statistical analysis, and data visualization to drive business decisions.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-slide-in-left" style={{animationDelay: '0.6s'}}>
                <a 
                  href="#projects"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl text-center btn-primary text-sm sm:text-base"
                >
                  View My Work
                </a>
                <a 
                  href="#contact"
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 sm:px-8 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105 text-center text-sm sm:text-base"
                >
                  Get In Touch
                </a>
              </div>
            </div>
            
            <div className="flex justify-center animate-slide-in-right order-1 lg:order-2 mb-8 lg:mb-0">
              <div className="relative animate-float">
                {/* Background gradient circles */}
                <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20"></div>
                
                {/* Profile image container */}
                <div className="absolute inset-3 sm:inset-4 bg-white rounded-full shadow-2xl flex items-center justify-center hover-lift overflow-hidden">
                  <div className="relative w-full h-full rounded-full overflow-hidden">
                    <Image 
                      src="/images/upscalemedia-transformed-copy.png" 
                      alt="Nour Ahmed - Data Scientist" 
                      fill
                      className="object-cover object-center rounded-full scale-110 hover:scale-115 transition-transform duration-300"
                      priority
                      sizes="(max-width: 640px) 240px, (max-width: 768px) 280px, 320px"
                    />
                    {/* Overlay gradient for better integration */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full"></div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 bg-blue-500 rounded-full animate-bounce opacity-70"></div>
                <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 w-4 h-4 sm:w-6 sm:h-6 bg-purple-500 rounded-full animate-bounce opacity-70" style={{animationDelay: '0.5s'}}></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <About />
      
      {/* Skills Section */}
      <Skills />
      
      {/* Projects Section */}
      <Projects />
      
      {/* Experience Section */}
      <Experience />
      
      {/* Contact Section */}
      <Contact />
      
      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
}
