import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhatIsOneBag } from './components/WhatIsOneBag';
import { MerchantsSection } from './components/MerchantsSection';
import { ShopProfilePreview } from './components/ShopProfilePreview';
import { QRExperience } from './components/QRExperience';
import { BrandPreview } from './components/BrandPreview';
import { BrandsSection } from './components/BrandsSection';
import { HowItWorks } from './components/HowItWorks';
import { Mission } from './components/Mission';
import { EarlyAccess } from './components/EarlyAccess';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background font-sans text-text-primary selection:bg-secondary/50">
      <Navbar />
      <Hero />
      <WhatIsOneBag />
      <MerchantsSection />
      <ShopProfilePreview />
      <QRExperience />
      <BrandPreview />
      <BrandsSection />
      <HowItWorks />
      <Mission />
      <EarlyAccess />
      <Footer />
    </div>
  );
}

export default App;

