'use client';
import React, { useState, useCallback } from 'react';

const FlowerBloom = () => (
  <div className="relative w-40 h-40 mx-auto" aria-hidden="true">
    {/* Petals */}
    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
      <div
        key={angle}
        className="petal absolute"
        style={{
          width: '44px',
          height: '60px',
          top: '50%',
          left: '50%',
          transformOrigin: '50% 100%',
          transform: `translate(-50%, -100%) rotate(${angle}deg)`,
          background: i % 2 === 0
            ? 'radial-gradient(ellipse at 50% 30%, rgba(242,196,196,0.95) 0%, rgba(232,165,152,0.8) 60%, rgba(232,165,152,0.4) 100%)'
            : 'radial-gradient(ellipse at 50% 30%, rgba(237,216,154,0.9) 0%, rgba(212,168,83,0.7) 60%, rgba(212,168,83,0.3) 100%)',
          borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
          filter: 'blur(0.5px)',
        }}
      />
    ))}
    {/* Center */}
    <div
      className="flower-center absolute rounded-full"
      style={{
        width: '32px',
        height: '32px',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        background: 'radial-gradient(circle, rgba(212,168,83,1) 0%, rgba(200,148,58,0.9) 100%)',
        boxShadow: '0 2px 12px rgba(212,168,83,0.5)',
        zIndex: 10,
      }}
    />
  </div>
);

export default function RSVPSection() {
  const [attendance, setAttendance] = useState<'yes' | 'no' | ''>('');
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', dietary: '', message: '' });

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (!form.name || !attendance) return;
      setSubmitted(true);
    },
    [form.name, attendance]
  );

  return (
    <section
      id="rsvp"
      className="section-rsvp relative py-24 lg:py-40 px-6 overflow-hidden"
      aria-label="RSVP form"
    >
      {/* Background blobs */}
      <div
        className="absolute top-0 right-0 pointer-events-none"
        style={{
          width: '50vw',
          height: '50vw',
          maxWidth: 600,
          background: 'radial-gradient(ellipse, rgba(242,196,196,0.2) 0%, transparent 65%)',
          borderRadius: '55% 45% 60% 40% / 45% 60% 40% 55%',
          transform: 'translate(15%, -15%)',
          filter: 'blur(3px)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 pointer-events-none"
        style={{
          width: '45vw',
          height: '45vw',
          maxWidth: 500,
          background: 'radial-gradient(ellipse, rgba(143,175,138,0.18) 0%, transparent 65%)',
          borderRadius: '40% 60% 45% 55% / 60% 40% 55% 45%',
          transform: 'translate(-15%, 20%)',
          filter: 'blur(4px)',
        }}
      />

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Section label */}
        <div className="fade-up flex items-center gap-6 mb-6">
          <div className="section-line" />
          <span className="font-body text-xs tracking-[0.5em] uppercase" style={{ color: 'var(--ink-faint)' }}>
            RSVP
          </span>
        </div>

        {!submitted ? (
          <>
            <h2
              className="fade-up font-display mb-4"
              style={{
                fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
                fontWeight: 300,
                fontStyle: 'italic',
                color: 'var(--ink)',
                lineHeight: 1.15,
              }}
            >
              Add your energy {' '}
              <span style={{ color: 'var(--blush-deep)' }}>to our weekend.</span>
            </h2>
            <p
              className="fade-up delay-100 font-display italic mb-12"
              style={{ fontSize: '1.1rem', color: 'var(--ink-faint)', fontWeight: 300 }}
            >
              Kindly respond by June 16, 2026.
            </p>

            <form
              onSubmit={handleSubmit}
              className="fade-up delay-200 space-y-8"
              aria-label="Birthday Weekend RSVP form"
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="rsvp-name"
                  className="font-body text-xs tracking-[0.25em] uppercase block mb-2"
                  style={{ color: 'var(--ink-faint)' }}
                >
                  Your Name
                </label>
                <input
                  id="rsvp-name"
                  type="text"
                  className="wc-input"
                  placeholder="As you'd like it on the table card"
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  required
                  aria-required="true"
                />
              </div>

              {/* Attendance */}
              <div>
                <p
                  className="font-body text-xs tracking-[0.25em] uppercase mb-3"
                  style={{ color: 'var(--ink-faint)' }}
                >
                  Will you be joining us?
                </p>
                <div className="flex gap-3 flex-wrap">
                  {[
                    { value: 'yes', label: 'Joyfully accepts' },
                    { value: 'no', label: 'Regretfully declines' },
                  ].map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      className={`attend-option ${attendance === opt.value ? 'selected' : ''}`}
                      onClick={() => setAttendance(opt.value as 'yes' | 'no')}
                      aria-pressed={attendance === opt.value}
                    >
                      <span className="attend-dot" />
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Dietary */}
              <div>
                <label
                  htmlFor="rsvp-dietary"
                  className="font-body text-xs tracking-[0.25em] uppercase block mb-2"
                  style={{ color: 'var(--ink-faint)' }}
                >
                  Dietary Requirements{' '}
                  <span style={{ color: 'var(--ink-faint)', fontStyle: 'italic', textTransform: 'none', letterSpacing: 0 }}>
                    (optional)
                  </span>
                </label>
                <input
                  id="rsvp-dietary"
                  type="text"
                  className="wc-input"
                  placeholder="Vegetarian, allergies, preferences…"
                  value={form.dietary}
                  onChange={(e) => setForm((f) => ({ ...f, dietary: e.target.value }))}
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="rsvp-message"
                  className="font-body text-xs tracking-[0.25em] uppercase block mb-2"
                  style={{ color: 'var(--ink-faint)' }}
                >
                  A note for the host{' '}
                  <span style={{ color: 'var(--ink-faint)', fontStyle: 'italic', textTransform: 'none', letterSpacing: 0 }}>
                    (optional)
                  </span>
                </label>
                <textarea
                  id="rsvp-message"
                  className="wc-input"
                  rows={4}
                  placeholder="Write something — she will like."
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  style={{ resize: 'vertical', minHeight: '100px' }}
                />
              </div>

              {/* Submit */}
              <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
                <button type="submit" className="wc-btn-primary w-full sm:w-auto">
                  <span className="font-body text-sm tracking-[0.15em] uppercase">
                    Send My RSVP
                  </span>
                </button>
                <p
                  className="font-display italic text-sm"
                  style={{ color: 'var(--ink-faint)', fontWeight: 300 }}
                >
                  Your response brings you into the moment.
                </p>
              </div>
            </form>
          </>
        ) : (
          /* ── Flower Bloom Confirmation ── */
          <div className="text-center py-16 bloom-reveal bloomed" aria-live="polite">
            <FlowerBloom />
            <h3
              className="font-display italic mt-10 mb-4"
              style={{
                fontSize: 'clamp(1.8rem, 4vw, 3rem)',
                fontWeight: 300,
                color: 'var(--ink)',
              }}
            >
              {attendance === 'yes' ? `I can't wait to see you.` : `You'll be missed.`}
            </h3>
            <p
              className="font-display italic"
              style={{ fontSize: '1.1rem', color: 'var(--ink-faint)', fontWeight: 300 }}
            >
              {attendance === 'yes'
                ? `${form.name} — your color is on the canvas.`
                : `${form.name} — we'll hold you in the room regardless.`}
            </p>
            {attendance === 'yes' && (
              <a
                href="https://calendar.app.google/WCt6jQebPvTjuxeS9"
                target="_blank"
                rel="noopener noreferrer"
                className="wc-btn-secondary inline-block mt-8"
                aria-label="Add the wedding to your calendar"
              >
                Add to Calendar
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  );
}