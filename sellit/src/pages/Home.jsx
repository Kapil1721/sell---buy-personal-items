import React, { useEffect } from 'react';
import HeroSplit from '../components/home/HeroSplit';
import ValueStrip from '../components/home/ValueStrip';
import WhyMarketplace from '../components/home/WhyMarketplace';
import InteractiveMarketplace from '../components/home/InteractiveMarketplace';
import EditorialProductWall from '../components/home/EditorialProductWall';
import MembershipPricing from '../components/home/MembershipPricing';
import MembershipBenefits from '../components/home/MembershipBenefits';
import AccountExperience from '../components/home/AccountExperience';
import CategoryDiscovery from '../components/home/CategoryDiscovery';
import BuyerJourney from '../components/home/BuyerJourney';
import TrustGrid from '../components/home/TrustGrid';
import FAQSection from '../components/home/FAQSection';
import ConversionCTA from '../components/home/ConversionCTA';
import MobileStickyCTA from '../components/home/MobileStickyCTA';

export default function Home({ onOpenAuth }) {
  useEffect(() => {
    // Respect user's motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll('.reveal').forEach((el) => {
        el.classList.add('active');
        el.style.transition = 'none';
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.08 }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <main className="relative">
      <HeroSplit onOpenAuth={onOpenAuth} />
      <ValueStrip />
      <WhyMarketplace />
      <InteractiveMarketplace onOpenAuth={onOpenAuth} />
      <EditorialProductWall />
      <MembershipPricing onOpenAuth={onOpenAuth} />
      <MembershipBenefits />
      <AccountExperience onOpenAuth={onOpenAuth} />
      <CategoryDiscovery />
      <BuyerJourney />
      <TrustGrid />
      <FAQSection />
      <ConversionCTA onOpenAuth={onOpenAuth} />
      <MobileStickyCTA onOpenAuth={onOpenAuth} />
    </main>
  );
}
