'use client';
import React, { useState, useEffect } from 'react';
import AppLogo from '@/components/ui/AppLogo';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        padding: scrolled ? '14px 40px' : '24px 40px',
        background: scrolled
          ? 'rgba(250,246,240,0.95)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(212,168,83,0.12)' : 'none',
      }}
      role="banner"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <AppLogo
          size={scrolled ? 44 : 52}
          text="Bokkie&apos;s 21st Birthday"
          className="transition-all duration-300"
        />

        {/* Nav */}
        <nav
          className="hidden md:flex items-center gap-8"
          aria-label="Page navigation"
        >
          {[
            // { href: '#story', label: 'Her Story' },
            { href: '#the-day', label: 'The Day' },
            // { href: '#palette', label: 'The Vibes' },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-xs tracking-[0.2em] uppercase transition-colors"
              style={{ color: 'var(--ink-faint)' }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'var(--ink-soft)')}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'var(--ink-faint)')}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#rsvp"
          className="wc-btn-primary"
          style={{ padding: '10px 24px' }}
          aria-label="RSVP for the weekend"
        >
          <span className="font-body text-xs tracking-[0.15em] uppercase">
            I&apos;ll Be There
          </span>
        </a>
      </div>
    </header>
  );
}