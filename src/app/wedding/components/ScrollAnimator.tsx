'use client';
import { useEffect } from 'react';

export default function ScrollAnimator() {
  useEffect(() => {
    /* ── Intersection Observer: fade-up ── */
    const fadeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.fade-up')?.forEach((el) => fadeObserver?.observe(el));

    /* ── Section lines ── */
    const lineObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.5 }
    );
    document.querySelectorAll('.section-line')?.forEach((el) => lineObserver?.observe(el));

    /* ── Bloom reveal ── */
    const bloomObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('bloomed');
          }
        });
      },
      { threshold: 0.3 }
    );
    document.querySelectorAll('.bloom-reveal')?.forEach((el) => bloomObserver?.observe(el));

    /* ── Parallax on scroll ── */
    const handleScroll = () => {
      const scrollY = window.scrollY;
      document.querySelectorAll<HTMLElement>('.parallax-slow')?.forEach((el) => {
        const speed = parseFloat(el?.dataset?.speed || '0.05');
        el.style.transform = `translateY(${scrollY * speed}px)`;
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      fadeObserver?.disconnect();
      lineObserver?.disconnect();
      bloomObserver?.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null;
}