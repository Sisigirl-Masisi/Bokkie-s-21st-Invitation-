import React from 'react';
import AppLogo from '@/components/ui/AppLogo';

export default function Footer() {
  const year = 2026;

  return (
    <footer
      className="relative py-16 px-6 border-t"
      style={{
        borderColor: 'rgba(212,168,83,0.2)',
        background: 'var(--cream-deep)',
      }}
      role="contentinfo"
    >
      {/* Subtle watercolor accent */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: '60%',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, var(--blush-deep), var(--ochre), transparent)',
          opacity: 0.4,
        }}
      />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo + copyright */}
        <div className="flex items-center gap-4">
          <AppLogo size={48} text="Bokamoso Khota 21st Birthday" />
        </div>

        {/* Links */}
        <nav className="flex items-center gap-8" aria-label="Footer navigation">
          {[
            // { href: '#story', label: 'Story' },
            // { href: '#the-day', label: 'The Weekend' },
            // { href: '#palette', label: 'Vibes' },
            { href: '#rsvp', label: 'RSVP' },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm font-medium transition-colors"
              style={{ color: 'var(--ink-faint)', minHeight: '44px', display: 'flex', alignItems: 'center' }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'var(--ink)')}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'var(--ink-faint)')}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Copyright */}
        <p
          className="font-body text-sm"
          style={{ color: 'var(--ink-faint)' }}
        >
          © {year} Bokamoso Khota
        </p>
      </div>

      {/* Closing note */}
      <p
        className="text-center font-display italic mt-8"
        style={{ fontSize: '0.9rem', color: 'var(--ink-faint)', fontWeight: 300 }}
      >
       SisigirlDev.
      </p>
    </footer>
  );
}