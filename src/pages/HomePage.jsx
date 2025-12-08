import React from 'react';
import HeroSection from '../components/HeroSection';
import PremiumFeaturesStrip from '../components/PremiumFeaturesStrip';
import FeaturedProperties from '../components/FeaturedProperties';
import CollectionSection from '../components/CollectionSection';
import AboutRetrofusion from '../components/AboutRetrofusion';
import RetrofusionStandard from '../components/RetrofusionStandard';
import BlogSection from '../components/BlogSection';
import LoyaltyCTA from '../components/LoyaltyCTA';
import BookingContactSection from '../components/BookingContactSection';

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <PremiumFeaturesStrip />
      <FeaturedProperties />
      <CollectionSection />
      <AboutRetrofusion />
      <RetrofusionStandard />
      <LoyaltyCTA />
      <BlogSection />

      <BookingContactSection />
    </div>
  );
};

export default HomePage;