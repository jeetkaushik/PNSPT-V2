import React, { useEffect, useRef, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { X } from 'lucide-react';
import athlete1 from '@/assets/athlete1.jpg';
import athlete2 from '@/assets/athlete2.jpg';
import athlete3 from '@/assets/athlete3.jpg';
import founder from '@/assets/founder.jpg';
import p1 from '@/assets/P10.jpeg'; 
import p2 from '@/assets/P11.jpeg'; 
import p3 from '@/assets/P12.jpeg'; 
import p4 from '@/assets/P13.jpeg'; 
import p5 from '@/assets/P14.jpeg'; 
import p6 from '@/assets/P20.jpeg'; 
import p7 from '@/assets/P24.jpeg'; 
import p8 from '@/assets/P25.jpeg'; 
import p9 from '@/assets/Pi3.jpeg'; 
import p10 from '@/assets/Pi4.jpeg'; 
import p11 from '@/assets/Pi5.jpeg'; 
import p12 from '@/assets/Pi6.jpeg'; 
import p13 from '@/assets/Pi7.jpeg'; 
import p14 from '@/assets/Pi8.jpeg'; 
import p15 from '@/assets/Pi9.jpeg'; 
import p16 from '@/assets/Pi15.jpeg'; 
import p17 from '@/assets/Pi17.jpeg'; 
import heroBackground from '@/assets/hero-bg.png';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
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

  const galleryImages = [
    { src: heroBackground, alt: "Training Facility", category: "Facilities" },
    { src: heroBackground, alt: "Competition Arena", category: "Events" },
    { src: p1, alt: "Training Session", category: "Training" },
    { src: p2, alt: "Award Ceremony", category: "Awards" },
    { src: p3, alt: "Award Ceremony", category: "Awards" },
    { src: p4, alt: "Award Ceremony", category: "Training" },
    { src: p5, alt: "Award Ceremony", category: "Training" },
    { src: p6, alt: "Award Ceremony", category: "Training" },
    { src: p7, alt: "Award Ceremony", category: "Training" },
    { src: p8, alt: "Award Ceremony", category: "Training" },
    { src: p9, alt: "Award Ceremony", category: "Events" },
    { src: p10, alt: "Award Ceremony", category: "Facilities" },
    { src: p11, alt: "Award Ceremony", category: "Facilities" },
    { src: p12, alt: "Award Ceremony", category: "Facilities" },
    { src: p13, alt: "Award Ceremony", category: "Facilities" },
    { src: p14, alt: "Award Ceremony", category: "Athletes" },
    { src: p15, alt: "Award Ceremony", category: "Athletes" },
    { src: p16, alt: "Award Ceremony", category: "Events" },
    { src: p17, alt: "Award Ceremony", category: "Events" },



  ];

  const categories = ["All", "Athletes", "Training", "Awards", "Facilities"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = galleryImages.filter(image => 
    activeCategory === "All" || image.category === activeCategory
  );

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              Gallery
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
              Explore our journey through images capturing the spirit, dedication, and achievements of PNSPT athletes and our community.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="section-animate group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => setSelectedImage(image.src)}
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-end">
                    <div className="p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="font-semibold">{image.alt}</h3>
                      <p className="text-sm opacity-80">{image.category}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            <img
              src={selectedImage}
              alt="Gallery Image"
              className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="section-animate">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Want to Be Part of Our Story?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join PNSPT and help us create more moments worth capturing. Together, we can build India's Paralympic legacy.
            </p>
            <div className="space-x-4">
            <a href='/contact'>
              <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-hover transition-colors">
                Join Us
              </button>
            </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;