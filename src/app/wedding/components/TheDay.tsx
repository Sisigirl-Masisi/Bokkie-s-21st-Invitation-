'use client';
import React from 'react';
import AppImage from '@/components/ui/AppImage';

const events = [
{
  time: '3:00 PM',
  title: 'Arrival',
  subtitle: 'The Weekend Begins',
  detail:
  'Beneath the old wisteria arBags drop, music on, and the energy slowly settles in. Guests are invited to arrive Friday afternoon — the earlier, the better, so you don’t miss a moment of the weekend unfolding.ch. Guests are invited to arrive by half past two — the light through the arbor is worth arriving early for.',
  accent: 'var(--blush-deep)',
  rotate: '-1deg'
},
{
  title: 'Braai Night',
  subtitle: 'Under the Evening Sky',
  detail:
  'Good food, laughter, and easy conversations around the fire. A warm, relaxed start to the weekend with games, music, and moments that stretch into the night.',
  accent: 'var(--sage)',
  rotate: '0.6deg'
},
{
  title: 'Breakfast & Slow Morning',
  subtitle: 'Soft Starts Only',
  detail:
  'A gentle morning with a curated breakfast setup. Take your time, ease into the day, and let the weekend continue at its own pace.',
  accent: 'var(--ochre)',
  rotate: '-0.5deg'
},
{
  title: 'Photoshoot',
  subtitle: 'Captured Moments',
  detail:
  'A styled photoshoot to capture the weekend glow — followed by a cosy PJ shoot. Come ready to pose, laugh, and create memories you’ll keep forever.',
  accent: 'var(--rose)',
  rotate: '0.8deg'
},
{
  title: 'Games & Movie Night',
  subtitle: 'Cozy & Playful',
  detail:
  'An evening of games, movies, and shared moments. Think comfort, laughter, and a night that feels like it could go on forever.',
  accent: 'var(--white)',
  rotate: '-0.7deg'
},
{
  title: 'Farewell',
  subtitle: 'Until Next Time',
  detail:
  'A slow goodbye on Sunday afternoon. Hugs, last laughs, and memories packed alongside your bags as the weekend gently comes to an end.',
  accent: 'var(--baby-pink)',
  rotate: '0.3deg'
}];

export default function TheDay() {
  return (
    <section
      id="the-day"
      className="section-day relative py-24 lg:py-40 px-6 overflow-hidden"
      aria-label="Birthday day details">
      
      {/* Background ochre wash */}
      <div
        className="absolute top-1/2 left-1/2 pointer-events-none"
        style={{
          width: '80vw',
          height: '60vw',
          maxWidth: 900,
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(ellipse, rgba(212,168,83,0.12) 0%, transparent 70%)',
          filter: 'blur(4px)'
        }} />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section label */}
        <div className="fade-up flex items-center gap-6 mb-6">
          <div className="section-line" />
          <span className="font-body text-xs tracking-[0.5em] uppercase" style={{ color: 'var(--ink-faint)' }}>
            The Day
          </span>
        </div>

        <h2
          className="fade-up font-display mb-20"
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            fontWeight: 300,
            color: 'var(--ink)',
            lineHeight: 1.1
          }}>
          
          June 19 - 21, 2026 —{' '}
          <span className="italic" style={{ color: 'var(--ochre-deep)' }}>
            Le Vaal Manor 
          </span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* ── Event cards ── */}
          <div className="lg:col-span-7 space-y-8">
            {events?.map((event, i) =>
            <div
              key={event?.title}
              className={`fade-up wc-card p-8 shadow-sm`}
              style={{
                transitionDelay: `${i * 0.15}s`,
                borderRadius: '2px 12px 4px 8px / 8px 4px 12px 2px',
                transform: `rotate(${event?.rotate})`,
                borderLeft: `3px solid ${event?.accent}`
              }}>
              
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <span
                    className="font-display italic block"
                    style={{ fontSize: '1.05rem', color: event?.accent, fontWeight: 400 }}>
                    
                      {event?.time}
                    </span>
                    <h3
                    className="font-display mt-1"
                    style={{ fontSize: '1.8rem', fontWeight: 300, color: 'var(--ink)', lineHeight: 1.1 }}>
                    
                      {event?.title}
                    </h3>
                  </div>
                  <span className="detail-tag mt-1 flex-shrink-0">{event?.subtitle}</span>
                </div>
                <p
                className="font-body leading-relaxed"
                style={{ fontSize: '15px', color: 'var(--ink-soft)', fontStyle: 'italic' }}>
                
                  {event?.detail}
                </p>
              </div>
            )}
          </div>

          {/* ── Venue image + details ── */}
          <div className="lg:col-span-5 fade-up delay-300">
            <div
              className="overflow-hidden shadow-xl mb-8"
              style={{
                borderRadius: '14px 2px 12px 4px / 4px 14px 2px 12px',
                transform: 'rotate(1.2deg)'
              }}>
              
              <AppImage
                src="https://travelground.imgix.net/AAEAAQAAAAAAAAAAAAAAe810db7ab0dc3d0f5e33841a4d3b735087add6c70069162e7e062a00af9b7caec75fffd04d7fac29121c4f5449b4d6b8303a?w=1200&h=630&fit=crop&auto=enhance,format,compress&q=80"
                alt="Le Vaal Manor, your perfect escape on the prestigious Parys Golf and Country Estate"
                width={600}
                height={500}
                className="w-full object-cover"
                style={{ filter: 'saturate(0.85) contrast(0.92)' }} />
              
              <div
                className="absolute inset-0 pointer-events-none mix-blend-multiply"
                style={{ background: 'linear-gradient(to bottom, transparent 50%, rgba(245,237,224,0.4) 100%)' }} />
              
            </div>

            {/* Address card */}
            <div
              className="wc-card p-6 shadow-sm"
              style={{
                borderRadius: '6px 2px 8px 3px / 3px 8px 2px 6px',
                transform: 'rotate(-0.8deg)'
              }}>
              
              <div className="flex items-start gap-4">
                <div
                  className="swatch mt-1 flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, var(--sage-light), var(--sage))' }} />
                
                <div>
                  <h4
                    className="font-display italic mb-2"
                    style={{ fontSize: '1.2rem', fontWeight: 400, color: 'var(--ink)' }}>
                    
                    Le Vaal Manor
                  </h4>
                  <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--ink-soft)' }}>
                    2980 Kingfisher Ave<br />
                    Parys, Free State 9585
                  </p>
                  <a
                    href="https://maps.app.goo.gl/Q1uiyqTKoUfezvcs8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 font-body text-xs tracking-[0.2em] uppercase transition-colors"
                    style={{ color: 'var(--sage-deep)' }}
                    aria-label="Get directions to Le Vaal Manor">
                    
                    Get Directions
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <path d="M2 10 L10 2 M5 2 L10 2 L10 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Dress code note */}
            <p
              className="font-display italic text-center mt-6 fade-up delay-500"
              style={{ fontSize: '1rem', color: 'var(--ink-faint)', fontWeight: 300 }}>
              
              Three days, two nights, endless moments.
            </p>
          </div>
        </div>
      </div>
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(242,230,212,0.9))' }} />
      
    </section>);

}
