'use client';
import React from 'react';
import HeroPortrait from './components/HeroPortrait';
// import TheStory from './components/TheStory';
import TheDay from './components/TheDay';
// import ThePalette from './components/ThePalette';
import RSVPSection from './components/RSVPSection';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollAnimator from './components/ScrollAnimator';

export default function WeddingPage() {
  return (
    <main className="paper-texture relative overflow-x-hidden">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Event',
            name: 'The Wedding of Eleanor Voss & James Hartwell',
            startDate: '2026-06-14T15:00:00',
            endDate: '2026-06-14T22:00:00',
            location: {
              '@type': 'Place',
              name: 'Thornfield Garden Estate',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '48 Meadow Lane',
                addressLocality: 'Hudson',
                addressRegion: 'NY',
                postalCode: '12534',
                addressCountry: 'US',
              },
            },
            organizer: {
              '@type': 'Organization',
              name: 'WeddingCanvas',
            },
          }),
        }}
      />
      <Header />
      <HeroPortrait />
      {/* <TheStory /> */}
      <TheDay />
      {/* <ThePalette /> */}
      <RSVPSection />
      <Footer />
      <ScrollAnimator />
    </main>
  );
}