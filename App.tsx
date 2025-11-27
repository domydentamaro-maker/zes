
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import OperationalMap from './components/OperationalMap';
import Introduction from './components/Introduction';
import ZesFlow from './components/ZesFlow';
import TertiaryFocus from './components/TertiaryFocus';
import ComparisonTable from './components/ComparisonTable';
import StepsSection from './components/StepsSection';
import ProjectsGallery from './components/ProjectsGallery';
import OwnersSection from './components/OwnersSection';
import Testimonials from './components/Testimonials';
import FAQSection from './components/FAQSection';
import LeadMagnet from './components/LeadMagnet';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Introduction />
        <ZesFlow />
        <AboutUs />
        <OperationalMap />
        <TertiaryFocus />
        {/* SeoSection rimossa come richiesto */}
        <ComparisonTable />
        <StepsSection />
        <ProjectsGallery />
        <OwnersSection />
        <Testimonials />
        <FAQSection />
        <LeadMagnet />
        <ContactCTA />
      </main>
      <Footer />
      <BackToTop />
      <WhatsAppButton />
    </div>
  );
};

export default App;
