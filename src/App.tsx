import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useThemeStore } from './store/theme';
import FlashIntro from './components/FlashIntro';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ContentBoxes from './components/ContentBoxes';
import { About } from './components/About';
import { Journey } from './components/Journey';
import { Qualifications } from './components/Qualifications';
import { Certifications } from './components/Certifications';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Gallery } from './components/Gallery';
import { Artwork } from './components/Artwork';
import { Inspirations } from './components/Inspirations';
import { FutureGoals } from './components/FutureGoals';
import { FunFacts } from './components/FunFacts';
import { Blog } from './components/Blog';
import { Testimonials } from './components/Testimonials';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const { isDark, toggleTheme } = useThemeStore();
  const [showIntro, setShowIntro] = useState(true);

  const sectionRefs = {
    about: useRef<HTMLDivElement>(null),
    journey: useRef<HTMLDivElement>(null),
    qualifications: useRef<HTMLDivElement>(null),
    certifications: useRef<HTMLDivElement>(null),
    skills: useRef<HTMLDivElement>(null),
    education: useRef<HTMLDivElement>(null),
    gallery: useRef<HTMLDivElement>(null),
    artwork: useRef<HTMLDivElement>(null),
    inspirations: useRef<HTMLDivElement>(null),
    futureGoals: useRef<HTMLDivElement>(null),
    funFacts: useRef<HTMLDivElement>(null),
    blog: useRef<HTMLDivElement>(null),
    testimonials: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const scrollToSection = (section: keyof typeof sectionRefs) => {
    sectionRefs[section].current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Router>
      {showIntro ? (
        <FlashIntro onComplete={() => setShowIntro(false)} />
      ) : (
        <div className="min-h-screen bg-white dark:bg-black transition-colors duration-200">
          <Navbar isDark={isDark} toggleTheme={toggleTheme} scrollToSection={scrollToSection} />
          <Hero />
          <ContentBoxes refs={sectionRefs} />
          <div ref={sectionRefs.about}><About /></div>
          <div ref={sectionRefs.journey}><Journey /></div>
          <div ref={sectionRefs.qualifications}><Qualifications /></div>
          <div ref={sectionRefs.certifications}><Certifications /></div>
          <div ref={sectionRefs.skills}><Skills /></div>
          <div ref={sectionRefs.education}><Education /></div>
          <div ref={sectionRefs.gallery}><Gallery /></div>
          <div ref={sectionRefs.artwork}><Artwork /></div>
          <div ref={sectionRefs.inspirations}><Inspirations /></div>
          <div ref={sectionRefs.futureGoals}><FutureGoals /></div>
          <div ref={sectionRefs.funFacts}><FunFacts /></div>
          <div ref={sectionRefs.blog}><Blog /></div>
          <div ref={sectionRefs.testimonials}><Testimonials /></div>
          <Projects />
          <div ref={sectionRefs.contact}><Contact /></div>
          <Footer />
        </div>
      )}
    </Router>
  );
}

export default App;