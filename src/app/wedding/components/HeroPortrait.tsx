'use client';
import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

export default function HeroPortrait() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const xPct = (clientX / innerWidth - 0.5) * 20;
      const yPct = (clientY / innerHeight - 0.5) * 12;
      const blobs = heroRef.current.querySelectorAll<HTMLElement>('.parallax-blob');
      blobs.forEach((blob, i) => {
        const depth = (i + 1) * 0.4;
        blob.style.transform = `translate(${xPct * depth}px, ${yPct * depth}px)`;
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={heroRef}
      className="section-hero relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 py-20 lg:py-32"
      aria-label="Birthday invitation hero">
      
      {/* ── Watercolor bleed layers ── */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* Blush blob */}
        <div
          className="parallax-blob bleed-blush blob-float absolute"
          style={{
            width: '70vw',
            height: '70vw',
            maxWidth: 700,
            maxHeight: 700,
            top: '-15%',
            left: '-10%',
            background: 'radial-gradient(ellipse at 40% 40%, rgba(242,196,196,0.72) 0%, rgba(242,196,196,0.3) 50%, transparent 75%)',
            borderRadius: '60% 40% 55% 45% / 50% 60% 40% 55%',
            filter: 'blur(2px)'
          }} />
        
        {/* Sage blob */}
        <div
          className="parallax-blob bleed-sage blob-float-2 absolute"
          style={{
            width: '60vw',
            height: '60vw',
            maxWidth: 600,
            maxHeight: 600,
            bottom: '-10%',
            right: '-5%',
            background: 'radial-gradient(ellipse at 60% 60%, rgba(143,175,138,0.65) 0%, rgba(143,175,138,0.25) 50%, transparent 75%)',
            borderRadius: '45% 55% 60% 40% / 60% 40% 55% 45%',
            filter: 'blur(3px)'
          }} />
        
        {/* Ochre accent */}
        <div
          className="parallax-blob bleed-ochre blob-float-3 absolute"
          style={{
            width: '40vw',
            height: '40vw',
            maxWidth: 400,
            maxHeight: 400,
            top: '30%',
            right: '10%',
            background: 'radial-gradient(ellipse at 50% 50%, rgba(212,168,83,0.5) 0%, rgba(237,216,154,0.2) 55%, transparent 75%)',
            borderRadius: '55% 45% 40% 60% / 40% 60% 45% 55%',
            filter: 'blur(4px)'
          }} />
        
        {/* Secondary blush soft */}
        <div
          className="absolute"
          style={{
            width: '50vw',
            height: '30vw',
            top: '50%',
            left: '20%',
            background: 'radial-gradient(ellipse, rgba(232,165,152,0.25) 0%, transparent 70%)',
            filter: 'blur(20px)',
            transform: 'translateY(-50%)'
          }} />
        
      </div>

      {/* ── Background photo with watercolor overlay ── */}
      <div className="absolute inset-0 pointer-events-none">
        <AppImage
          src="/assets/images/Hero.jpg"
          alt="Soft garden wedding flowers in afternoon light"
          fill
          className="object-cover opacity-10 mix-blend-multiply"
          priority />
        
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(250,246,240,0.3) 0%, rgba(250,246,240,0.1) 40%, rgba(250,246,240,0.5) 100%)'
          }} />
        
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Overline */}
        <div className="hero-sub flex items-center justify-center gap-4 mb-10">
          <div className="h-px w-16 bg-ochre opacity-50" />
          <span
            className="font-body text-xs tracking-[0.35em] uppercase"
            style={{ color: 'var(--ink-faint)' }}>
            
            Young, free, and just getting started
          </span>
          <div className="h-px w-16 bg-ochre opacity-50" />
        </div>

        {/* Names — ink bleed effect */}
        <h1 className="font-display leading-none mb-4" aria-label="Bokamoso Khota">
          <span
            className="name-bleed-1 ink-bleed block"
            style={{
              fontSize: 'clamp(3.5rem, 12vw, 9rem)',
              fontWeight: 300,
              fontStyle: 'italic',
              color: 'var(--ink)',
              letterSpacing: '0.05em',
              textShadow: '0 0 60px rgba(242,196,196,0.6), 0 0 100px rgba(143,175,138,0.25)'
            }}>
            
            Bokamoso&apos;s 21st 
          </span>
          <span
            className="block font-body text-xs tracking-[0.5em] uppercase my-3"
            style={{ color: 'var(--ink-faint)', animationDelay: '1.2s' }}>
            
            Birthday 
          </span>
          <span
            className="name-bleed-2 ink-bleed block"
            style={{
              fontSize: 'clamp(3.5rem, 12vw, 9rem)',
              fontWeight: 300,
              fontStyle: 'normal',
              color: 'var(--ink)',
              letterSpacing: '0.05em',
              textShadow: '0 0 60px rgba(143,175,138,0.5), 0 0 100px rgba(212,168,83,0.2)'
            }}>
            
            Weekend Away
          </span>
        </h1>

        {/* Date painted in */}
        <div
          className="hero-sub mt-10 mb-12"
          style={{ animationDelay: '2.2s' }}>
          
          <p
            className="font-display italic text-2xl lg:text-3xl"
            style={{ color: 'var(--ink-soft)', fontWeight: 300 }}>
            
            June 19, 2026 - June 21, 2026
          </p>
          <p
            className="font-body text-sm mt-2 tracking-[0.2em] uppercase"
            style={{ color: 'var(--ink-faint)' }}>
            
            Le Vaal Manor · Parys, Free State
          </p>
        </div>

        {/* CTAs */}
        <div
          className="hero-cta flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{ animationDelay: '2.8s' }}>
          
          <button
            className="wc-btn-primary"
            onClick={() => {
              const el = document.getElementById('rsvp');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}>
            
            <span className="font-body text-sm tracking-[0.15em] uppercase">
              I&apos;ll Be There
            </span>
          </button>
          <a
            href="https://calendar.app.google/WCt6jQebPvTjuxeS9"
            target="_blank"
            rel="noopener noreferrer"
            className="wc-btn-secondary"
            aria-label="Add weekend away to calendar">
            
            <span className="font-body text-xs tracking-[0.15em]">Add to Calendar</span>
          </a>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div
        className="scroll-indicator absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 hero-sub"
        style={{ animationDelay: '3.2s' }}>
        
        <span className="font-body text-xs tracking-[0.3em] uppercase" style={{ color: 'var(--ink-faint)' }}>
          21st Birthday
        </span>
        <svg width="20" height="28" viewBox="0 0 20 28" fill="none" aria-hidden="true">
          <path
            d="M10 2 L10 22 M4 16 L10 22 L16 16"
            stroke="var(--ink-faint)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round" />
          
        </svg>
      </div>

      {/* ── Watercolor brushstroke flourish ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent, rgba(248,242,232,0.8))'
        }} />
      
    </section>);

}