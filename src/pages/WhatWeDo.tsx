import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { HandCoins, Target, Award, Users, Medal, BookOpen, Heart, RibbonIcon, Building2, MedalIcon, BrainIcon, ActivityIcon, GraduationCap } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FeatureCard from '@/components/FeatureCard';
import heroBg from "../assets/what-we-do-2.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const WhatWeDo = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = document.querySelectorAll('.section-animate');
    animatedElements.forEach((el) => observerRef.current?.observe(el));

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  const services = [
    {
      icon: Target,
      title: "Talent Scouting",
      description: "We identify talented para-athletes across India, especially in shooting, and offer them professional-level training and opportunities."
    },
    {
      icon: Building2,
      title: "World-Class Infrastructure",
      description: "We either adopt existing institutions with good sports facilities or establish our own international-standard shooting ranges and training centers to give our athletes the best environment to grow."
    },
    {
      icon: MedalIcon,
      title: "Holistic Athelete Development",
      description: "We take a 360-degree approach — physical fitness, cognitive skills, mental strength, technical training, soft skills, life skills, and emotional wellbeing are all woven into the athlete’s journey."
    },
    {
      icon: BrainIcon,
      title: "Scientific and Proffestional Training",
      description: "Supported by a panel of expert coaches, physiotherapists, nutritionists, psychologists, and sports scientists, PNSPT ensures athletes receive cutting-edge, scientific training methodologies."
    },
    {
      icon: ActivityIcon,
      title: "Performance Tracking",
      description: "Our talent management system records athletes' performances, tracks progress, identifies growth areas, and builds a sustainable feeder system for future excellence."
    },
    {
      icon: GraduationCap,
      title: "Career Building",
      description: "We ensure that athletes and coaches are not left behind after their competitive years — career counseling, professional certifications (like NIS and ISSF), and job placements are part of our long-term support plan."
    },
  ];

  const Benefits = [
    {
      icon: HandCoins,
      title: "100% Tax Benefit Under Section 80G",
      description: "All PNSPT contributions qualify for 100% tax exemption under Section 80G, helping companies maximize CSR funds while gaining strong tax benefits."
    },
    {
      icon: RibbonIcon,
      title: "Enhance Brand Reputation and National Pride",
      description: "Partnering with PNSPT positions your brand as a leader in corporate citizenship, building goodwill while aligning with national pride and India’s sporting aspirations."
    },
    {
      icon: Users,
      title: "Strengthen CSR Engagement and Societal Impact",
      description: "By supporting para athletes through programs and infrastructure, your brand shows real social responsibility, creating measurable impact beyond CSR compliance and shaping a lasting legacy."
    },
  ];


  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              What We Do
            </h1>
            <p className="text-md md:text-md text-muted-foreground max-w-4xl mx-auto animate-slide-up">
              The Prakash Nanjappa Sports Promotion Trust (PNSPT) was founded with a singular vision: to scout, nurture, and empower talented able-bodied and differently-abled athletes and enable them to chase the Indian dream of winning medals at the Paralympic Games and other international sporting events. Under the leadership of Olympian and Arjuna Awardee P.N. Prakash, one of India's most decorated pistol shooters, PNSPT is dedicated to building a strong pipeline of para-athletes who can bring laurels to the nation. We believe that every individual, regardless of physical limitations, has the right to dream, compete, and excel. Our Trust goes beyond traditional coaching by providing holistic support that covers not just training but every aspect critical to an athlete's journey — from world-class facilities, expert coaching, equipment, scientific training, physical and mental conditioning, emotional support, to career development and financial sponsorships. PNSPT is 80G certified, making all contributions tax-deductible and allowing individuals and organizations to meaningfully support India's Paralympic movement
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-24 bg-white bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/assets/hero-bg.png')" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 section-animate">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">What We Stand For</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We provide comprehensive support to para-athletes through our specialized programs and services designed to maximize their potential and achieve sporting excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <FeatureCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                className="section-animate"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Training Programs Section */}
      <section className="py-16 lg:py-24 bg-white bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${heroBg})` }}>
        {/* Overlay */}
        {/* <div className="absolute inset-0 bg-black/60"></div> */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 p-8">
            <div className="section-animate">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-white mb-12 text-center lg:text-left">
                How your support can make a difference
              </h2>

              {/* Responsive 2x2 grid for points */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Point 1 */}
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-white mb-2">
                      Fund Training, Travel, and Competition Expenses
                    </h3>
                    <p className="text-muted-foreground text-gray-200">
                      Your contributions will directly support the day-to-day needs of talented para athletes — including professional coaching fees, sports science support, equipment purchase, physiotherapy, psychological counseling, nutrition guidance, and international exposure trips. This financial backing ensures that no athlete is held back due to lack of resources.
                    </p>
                  </div>
                </div>

                {/* Point 2 */}
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-white mb-2">
                      Build World-Class Sports Infrastructure
                    </h3>
                    <p className="text-muted-foreground text-gray200">
                      By sponsoring or co-funding sports infrastructure such as international-standard shooting ranges, training centers, boarding facilities, and rehabilitation centers, you can help create a solid foundation for long-term athletic development — enabling hundreds of athletes to train with dignity and world-class amenities.
                    </p>
                  </div>
                </div>

                {/* Point 3 */}
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2 text-white">
                      Offer Employment Pathways for Para Athletes
                    </h3>
                    <p className="text-muted-foreground text-gray-200">
                      Skill development and professional certifications (such as NIS and ISSF programs) allow para athletes to pursue careers in coaching, sports management, and mentorship. Your support can fund these programs, ensuring financial independence for athletes even after their sporting careers.
                    </p>
                  </div>
                </div>

                {/* Point 4 */}
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2 text-white">
                      Promote Inclusivity and Drive Social Change
                    </h3>
                    <p className="text-muted-foreground text-gray-200">
                      Supporting para athletes is not just about sports — it's about changing mindsets, breaking societal barriers, and creating a culture of true inclusivity. Through your partnership, you become a catalyst for building an India where everyone, regardless of ability, is given equal opportunity to shine.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/assets/hero-bg.png')" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 section-animate">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Benifits for Partner Organisation</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Partnerships That Pay Back in Purpose and Pride
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Benefits.map((Benefit, index) => (
              <FeatureCard
                key={index}
                icon={Benefit.icon}
                title={Benefit.title}
                description={Benefit.description}
                className="section-animate"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 section-animate">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Our Impact</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Since our inception, PNSPT has made significant contributions to Indian para-sports development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center section-animate">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Athletes Trained</div>
            </div>
            <div className="text-center section-animate">
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">International Medals</div>
            </div>
            <div className="text-center section-animate">
              <div className="text-4xl font-bold text-primary mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Paralympic Qualifiers</div>
            </div>
            <div className="text-center section-animate">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Dedication to Excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Hands Banner Section */}
      <section className="py-16 lg:py-24 ribbon-red">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center section-animate">
            <h2 className="text-white text-3xl lg:text-5xl font-bold mb-6">
              Join Hands with PNSPT
            </h2>
            
            <p className="text-white text-lg lg:text-xl max-w-4xl mx-auto mb-12 leading-relaxed">
              Together, we can create an India where dreams know no boundaries — and where every champion, regardless of ability, has the platform to succeed. We invite you to partner with us, to empower futures, inspire the nation, and make history. Be the change. Support India's para-athlete champions.
            </p>

            {/* Contact Details */}
            <div className="bg-white/20 rounded-2xl p-8 lg:p-12 max-w-2xl mx-auto border-2 border-white/20">
              <h3 className="text-xl lg:text-2xl font-semibold mb-6">
                Get in Touch
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <a 
                    href="mailto:pnspt.olympicsports@gmail.com" 
                    className="transition-colors text-lg font-medium"
                  >
                    pnspt.olympicsports@gmail.com
                  </a>
                </div>
                
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <a 
                    href="tel:+919379845454" 
                    className=" transition-colors text-lg font-medium"
                  >
                    +91 9379845454
                  </a>
                </div>
              </div>
              <a href='/contact'>
                <div className="mt-8">
                  <Button 
                    size="lg" 
                    className="text-white font-semibold px-8 py-3 text-lg"
                  >
                    Partner With Us
                  </Button>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 section-animate">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Find answers to common questions about PNSPT's programs, services, and how we support para-athletes.
            </p>
          </div>

          <div className="section-animate">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left">
                  What is PNSPT?
                </AccordionTrigger>
                <AccordionContent>
                  The Prakash Nanjappa Sports Promotion Trust (PNSPT) is an initiative founded by Olympian and Arjuna Awardee Prakash Nanjappa to promote inclusive sports in India, with a special focus on para, deaf, blind, and underprivileged athletes.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">
                  Who can join PNSPT's training programs?
                </AccordionTrigger>
                <AccordionContent>
                  Our programs are open to differently-abled athletes (para, deaf, blind), as well as underprivileged athletes who show passion and commitment for sports, especially Olympic disciplines like shooting.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left">
                  What kind of support does PNSPT provide to athletes?
                </AccordionTrigger>
                <AccordionContent>
                  PWe offer world-class training, fitness and mental conditioning, access to equipment and infrastructure, career counseling, mentorship, and pathways to certifications and job placements.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left">
                How does PNSPT help athletes beyond training?
                </AccordionTrigger>
                <AccordionContent>
                We go beyond sports performance by guiding athletes through certifications, education, and career placements, ensuring long-term dignity and financial independence.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left">
                  How are athletes selected for PNSPT programs?
                </AccordionTrigger>
                <AccordionContent>
                  Selection is based on talent, commitment, and potential, not background or ability. Our aim is to provide opportunities to those who are motivated to excel in sports.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger className="text-left">
                  What is the cost of joining PNSPT programs?
                </AccordionTrigger>
                <AccordionContent>
                  PNSPT is committed to making high-quality training accessible to deserving athletes. We offer various scholarship programs and financial support based on merit and need. The trust is 80G certified, making all contributions tax-deductible. We work with sponsors and donors to ensure that financial constraints don't prevent talented athletes from accessing our programs.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7">
                <AccordionTrigger className="text-left">
                  How does PNSPT track athlete progress and performance?
                </AccordionTrigger>
                <AccordionContent>
                  We use a comprehensive talent management system that records athletes' performances, tracks progress, and identifies growth areas. Our system includes performance analytics, regular assessments, and progress reports. This helps us build a sustainable feeder system for future excellence and ensures each athlete receives personalized attention and guidance.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8">
                <AccordionTrigger className="text-left">
                  What qualifications do PNSPT coaches have?
                </AccordionTrigger>
                <AccordionContent>
                  Our coaching team includes expert coaches, physiotherapists, nutritionists, psychologists, and sports scientists. Many of our coaches are internationally certified and have experience working with Paralympic athletes. We also have Olympian P.N. Prakash as our lead mentor, providing invaluable insights from his own competitive experience.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-9">
                <AccordionTrigger className="text-left">
                  How can I support PNSPT's mission?
                </AccordionTrigger>
                <AccordionContent>
                  You can support PNSPT through donations, sponsorships, volunteering, or spreading awareness about our mission. As a 80G certified trust, all contributions are tax-deductible. We welcome corporate partnerships, individual donations, and in-kind support. Your contribution directly helps us provide better facilities, equipment, and opportunities for para-athletes.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-10">
                <AccordionTrigger className="text-left">
                  What are PNSPT's future goals and vision?
                </AccordionTrigger>
                <AccordionContent>
                  PNSPT aims to become India's leading institution for para-sports development, particularly in shooting. Our vision includes expanding our reach across India, developing more world-class facilities, creating a robust pipeline of Paralympic medalists, and establishing India as a powerhouse in para-shooting sports. We also plan to extend our programs to other para-sports disciplines in the future.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhatWeDo;