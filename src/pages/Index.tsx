import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Target, Award, RotateCcw, Medal, Users, Lightbulb, Rocket, Heart, Globe, Leaf } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FeatureCard from '@/components/FeatureCard';
import AthleteCard from '@/components/AthleteCard';
import heroBackground from '@/assets/hero-bg.png';
import athlete1 from '@/assets/athlete1.jpg';
import athlete2 from '@/assets/athlete2.jpg';
import athlete3 from '@/assets/athlete3.jpg';
import founderAwards from '@/assets/founder-awards.png';
import pnsptLogo from '@/assets/pnspt-logo.png';

const Index = () => {
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

  const sdgCards = [
    {
      icon: Heart,
      title: "SDG 4 : Quality Education",
      description: "We provide para athletes with access to professional education, certifications, technical sports training, and skill development programs. Through holistic learning pathways, we equip them with the knowledge and expertise to build long-term, sustainable careers in sports, coaching, and beyond."
    },
    {
      icon: Users,
      title: "SDG 10 : Reduced Inequalities",
      description: "Differently-abled athletes often face systemic challenges and societal barriers. Our programs are designed to level the playing field, ensuring that talent, not disability, defines an athlete's journey. By giving para athletes equal opportunities for training, competition, employment, and recognition, PNSPT actively works toward reducing inequalities in society."
    },
    {
      icon: Globe,
      title: "SDG 8 : Decent Work and Economic Growth",
      description: "We emphasize scientific sports training, physical fitness, mental health support, and injury rehabilitation for our athletes. Our holistic wellness programs help athletes achieve optimal health, enhancing their performance and overall quality of life."
    },
    {
      icon: Medal,
      title: "SDG 5 : Gender Equality",
      description: "Our programs encourage equal participation of women para athletes, promoting leadership, visibility, and empowerment for women in sports. PNSPT is committed to building an ecosystem where both men and women para athletes receive the support and recognition they deserve."
    },
    {
      icon: Leaf,
      title: "SDG 17 : Partnerships for the Goals",
      description: "Through strategic CSR partnerships with corporates, institutions, and individuals, we foster a collaborative approach to achieving our vision. Together with our partners, we maximize our impact, align with national and international development agendas, and amplify our collective contribution toward a better world."
    },
    {
      icon: Target,
      title: "SDG 3 : Good Health AND Well-Being",
      description: "We emphasize scientific sports training, physical fitness, mental health support, and injury rehabilitation for our athletes. Our holistic wellness programs help athletes achieve optimal health, enhancing their performance and overall quality of life."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center text-white"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 hero-overlay"></div>
        <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            Prakash Nanjappa Sports Promotion Trust
          </h1>
          <p className="text-lg md:text-lg lg:text-2xl mb-8 text-gray-200 animate-slide-up max-w-4xl mx-auto">
            The Prakash Nanjappa Sports Promotion Trust (PNSPT) is dedicated to nurturing sporting talent across India with a special focus on inclusivity. Founded by Olympian and Arjuna Awardee Prakash Nanjappa, the trust works to empower para, deaf, blind, and underprivileged athletes in Olympic shooting and beyond. Through structured training, grassroots programs, and coach development initiatives, PNSPT strives to create opportunities, break barriers, and build tomorrow’s champions.
          </p>
          <div className="inline-block w-fit mx-auto bg-primary/60 px-6 py-3 animate-scale-in">
            <span className="text-lg md:text-xl font-medium text-white">
              Empowering Lives Through Sports and Skills
            </span>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
        {/* Background Logo Watermark */}
        <div 
          className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none"
          style={{
            backgroundImage: `url(${pnsptLogo})`,
            backgroundSize: '400px',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 section-animate">
            <div className="flex items-center justify-center mb-4">
              <Target className="h-6 w-6 text-primary mr-2" />
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">About Us</h2>
            </div>
            <div className="mb-6 flex items-center justify-center flex-col ">
              <span className="text-lg text-muted-foreground mb-4">The Prakash Nanjappa Sports Promotion Trust (PNSPT) was founded with a singular vision: </span>
              <span className="block w-fit text-center text-lg font-semibold text-white bg-primary px-3 py-1 rounded">
                to scout, nurture, and empower
              </span>
            </div>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              talented able-bodied and differently-abled athletes and enable them to chase the Indian dream of
              winning medals at the Paralympic Games and other international sporting events.
              Under the leadership of Olympian and Arjuna Awardee P.N. Prakash, one of India's most decorated
              pistol shooters, PNSPT is dedicated to building a strong pipeline of para-athletes who can bring
              laurels to the nation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            <FeatureCard
              icon={RotateCcw}
              title="A Brighter India on the Global sports stage"
              description="We envision India as a global powerhouse in para sports, where athletes trained with resilience and determination proudly raise the national flag at Paralympics, World Championships, and beyond — not by chance, but through design, effort, and belief."
              className="section-animate"
            />
            <FeatureCard
              icon={Award}
              title="Building Champions not just particpants"
              description="We believe differently-abled athletes are defined by spirit, not challenges. Our mission is to break barriers and build champions who inspire generations, celebrated equally for their excellence and achievements."
              className="section-animate"
            />
            <FeatureCard
              icon={Users}
              title="A Sports Ecosystem where every dream matters "
              description="We are building an inclusive sports ecosystem that provides world-class training, holistic support, career security, and dignity — empowering every athlete to grow from a dreamer to a national hero."
              className="section-animate"
            />
            <FeatureCard
              icon={Medal}
              title="Empowering Lives Through Sports"
              description="We don’t just train athletes — we transform lives and empower communities. By uplifting para-athletes, we build resilience, confidence, and a stronger India that leaves no one behind."
              className="section-animate"
            />
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 lg:py-24 ribbon-red text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg lg:text-xl leading-relaxed max-w-3xl">
              At PNSPT, our mission is to create an inclusive sporting ecosystem that empowers para, deaf, blind, and underprivileged athletes with world-class training, holistic support, and equal opportunities. We strive to break barriers, nurture champions, and inspire a culture where every athlete is celebrated for excellence, resilience, and the spirit of representing India on the global stage.
              </p>
            </div>
            <div className="hidden lg:block ml-12">
              <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
                <Rocket className="h-12 w-12 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 lg:py-24 bg-gray-50 relative">
        <div className="absolute top-0 left-0 w-full h-20 bg-primary transform -skew-y-1 origin-top-left"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center justify-between">
            <div className="hidden lg:block mr-12">
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
                <Lightbulb className="h-12 w-12 text-primary" />
              </div>
            </div>
            <div className="flex-1 section-animate">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Our Vision</h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl">
              To see India emerge as a global leader in inclusive sports — where para, deaf, blind, and underprivileged athletes stand on equal footing, breaking records, winning medals, and inspiring generations. We envision a nation where excellence is the only benchmark, and every athlete’s journey is honored with dignity, opportunity, and pride.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SDGs Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 section-animate">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Commitment to Sustainable Development Goals (SDGs)
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              At PNSPT, our mission and activities are closely aligned with the United Nations' Sustainable
              Development Goals (SDGs), ensuring that our work contributes meaningfully to global efforts in
              building a more inclusive, equitable, and sustainable world. Here's how our initiatives support key SDGs:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sdgCards.map((card, index) => (
              <FeatureCard
                key={index}
                icon={card.icon}
                title={card.title}
                description={card.description}
                className="section-animate"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Founder & CEO Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="section-animate">
              <div className="relative">
                <img src={founderAwards} alt="Prakash Nanjappa Awards and Achievements" className="rounded-lg shadow-lg w-full" />
              </div>
            </div>
            
            <div className="section-animate">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Founder & CEO</h2>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                Olympian and Arjuna Awardee Prakash Nanjappa is the Founder and CEO of the Prakash Nanjappa Sports Promotion Trust (PNSPT). A decorated shooter, he has represented India at the Olympics, ISSF World Cup, Asian Games, and Commonwealth Games, winning multiple medals and bringing glory to the nation.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Driven by his belief in giving back to sport, he founded PNSPT to build an inclusive ecosystem that empowers para, deaf, blind, and underprivileged athletes with the same opportunities as their peers. Under his leadership, PNSPT focuses on grassroots development, high-performance training, and athlete welfare, with the vision of transforming India into a global powerhouse in inclusive sports.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Beyond his role as an athlete and administrator, he is a mentor who has coached and guided many young shooters including para and deaf athletes who have gone on to win medals at international competitions. His dedication extends beyond performance to the holistic growth of athletes, ensuring they receive the technical, emotional, and financial support needed to excel in sport and in life.
                </p>
              </div>
              <Button variant="cta" className="mt-6">
                Contact us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Shining Stars */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 section-animate">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Our Shining Stars</h2>
            <p className="text-lg text-muted-foreground">
              At PNSPT, our mission and activities are closely aligned with the United Nations' Sustainable Development Goals (SDGs).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AthleteCard
              image={athlete1}
              name="Sonia Sharma"
              achievement="National Level ABC Medalist"
            />
            <AthleteCard
              image={athlete2}
              name="Shivraj Sankhala"
              achievement="National Level ABC Medalist"
            />
            <AthleteCard
              image={athlete3}
              name="Chetan Hanmant Sapka"
              achievement="National Level ABC Medalist"
            />
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#111111] text-white rounded-2xl px-8 py-12 lg:px-12 lg:py-16">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div className="text-center lg:text-left mb-8 lg:mb-0">
                <h2 className="text-3xl lg:text-5xl font-bold mb-2">
                  Be a part of our <span className="text-primary">Mission</span>
                </h2>
              </div>
              <a href='/contact'>
                <Button variant="cta" size="xl" className="bg-primary hover:bg-primary-hover">
                  Contact Us →
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
