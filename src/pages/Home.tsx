import { Hero } from '../components/Hero';
import { WhatIsOneBag } from '../components/WhatIsOneBag';
import { MerchantsSection } from '../components/MerchantsSection';
import { ShopProfilePreview } from '../components/ShopProfilePreview';
import { QRExperience } from '../components/QRExperience';
import { BrandPreview } from '../components/BrandPreview';
import { BrandsSection } from '../components/BrandsSection';
import { HowItWorks } from '../components/HowItWorks';
import { Mission } from '../components/Mission';
import { EarlyAccess } from '../components/EarlyAccess';
import { Footer } from '../components/Footer';

export function Home() {
    return (
        <>
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
        </>
    );
}
