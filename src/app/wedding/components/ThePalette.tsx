// 'use client';
// import React from 'react';
// import AppImage from '@/components/ui/AppImage';

// const senses = [
// {
//   icon: '☀',
//   label: 'Light',
//   description:
//   'The slant of a June afternoon — the kind that turns white tablecloths gold and makes everyone look like they\'re in a painting they didn\'t know they were posing for.',
//   color: 'var(--ochre)',
//   bg: 'rgba(212,168,83,0.12)'
// },
// {
//   icon: '✿',
//   label: 'Flowers',
//   description:
//   'Peonies, garden roses, and trailing sweet peas. Ranunculus in blush and cream. Eucalyptus where the eye needs to rest. Everything picked two days before so it opens on the day.',
//   color: 'var(--blush-deep)',
//   bg: 'rgba(242,196,196,0.15)'
// },
// {
//   icon: '♩',
//   label: 'Music',
//   description:
//   'A string quartet for the ceremony. Ella Fitzgerald and Bill Evans during dinner. A band that knows when to play softly and when to make the floor impossible to leave.',
//   color: 'var(--sage-deep)',
//   bg: 'rgba(143,175,138,0.12)'
// },
// {
//   icon: '○',
//   label: 'The Afternoon',
//   description:
//   'Warm enough for bare shoulders. Cool enough that you\'ll want to keep your jacket. The quality of light at 5 PM in June in the Hudson Valley is the reason we chose this place.',
//   color: 'var(--ochre-deep)',
//   bg: 'rgba(200,148,58,0.1)'
// }];


// export default function ThePalette() {
//   return (
//     <section
//       id="palette"
//       className="section-palette relative py-24 lg:py-40 px-6 overflow-hidden"
//       aria-label="Wedding atmosphere and palette">
      
//       {/* Decorative background wash */}
//       <div
//         className="absolute inset-0 pointer-events-none"
//         style={{
//           background: `
//             radial-gradient(ellipse 60% 50% at 10% 20%, rgba(212,168,83,0.15) 0%, transparent 60%),
//             radial-gradient(ellipse 50% 60% at 90% 80%, rgba(242,196,196,0.18) 0%, transparent 60%)
//           `
//         }} />
      
//       <div className="max-w-6xl mx-auto relative z-10">
//         {/* Section label */}
//         <div className="fade-up flex items-center gap-6 mb-6">
//           <div className="section-line" />
//           <span className="font-body text-xs tracking-[0.5em] uppercase" style={{ color: 'var(--ink-faint)' }}>
//             The Vibes
//           </span>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-20">
//           <div className="lg:col-span-6">
//             <h2
//               className="fade-up font-display"
//               style={{
//                 fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
//                 fontWeight: 300,
//                 fontStyle: 'italic',
//                 color: 'var(--ink)',
//                 lineHeight: 1.15
//               }}>
              
//               What it will{' '}
//               <span style={{ color: 'var(--ochre-deep)' }}>feel like</span>.
//             </h2>
//             <p
//               className="fade-up delay-100 font-body mt-6 leading-relaxed"
//               style={{ fontSize: '16px', color: 'var(--ink-soft)', maxWidth: '480px' }}>
              
//               A 21st birthday weekend away is a soft escape wrapped in laughter,
//               late nights, and slow mornings. It’s music playing in the background,
//               conversations that stretch for hours, and moments that feel like they
//               should last forever. We’ve asked the weekend to be gentle, the energy 
//               to stay high, and the memories to linger long after we leave — and it has agreed.
//             </p>

//             {/* Color swatches */}
//             <div className="fade-up delay-200 flex items-center gap-4 mt-10">
//               {[
//               { bg: 'var(--baby pink)', label: 'Baby Pink' },
//               { bg: 'var(--blush-deep)', label: 'Rose' },
//               { bg: 'var(--red)', label: 'Red' },
//               { bg: 'var(--cream-deep)', label: 'Cream' },
//               { bg: 'var(--white)', label: 'White' }]?.
//               map((s) =>
//               <div key={s?.label} className="flex flex-col items-center gap-2">
//                   <div
//                   className="w-10 h-10 rounded-full shadow-sm"
//                   style={{
//                     background: s?.bg,
//                     boxShadow: `0 4px 12px ${s?.bg}60`
//                   }}
//                   title={s?.label} />
                
//                   <span className="font-body text-xs" style={{ color: 'var(--ink-faint)' }}>
//                     {s?.label}
//                   </span>
//                 </div>
//               )}
//             </div>
//           </div>

//           <div className="lg:col-span-6 fade-up delay-200">
//             <div
//               className="relative overflow-hidden shadow-2xl"
//               style={{
//                 borderRadius: '20px 4px 18px 6px / 6px 18px 4px 20px',
//                 transform: 'rotate(-0.8deg)'
//               }}>
              
//               <AppImage
//                 src="https://img.rocket.new/generatedImages/rocket_gen_img_1354bb0fe-1772259149809.png"
//                 alt="Garden wedding table in golden afternoon light with peonies and candles"
//                 width={700}
//                 height={500}
//                 className="w-full object-cover"
//                 style={{ filter: 'saturate(0.82) contrast(0.93)' }} />
              
//               <div
//                 className="absolute inset-0 pointer-events-none"
//                 style={{
//                   background: 'linear-gradient(135deg, rgba(242,196,196,0.1) 0%, rgba(212,168,83,0.12) 100%)',
//                   mixBlendMode: 'multiply'
//                 }} />
              
//             </div>
//           </div>
//         </div>

//         {/* ── Sensory cards ── */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//           {senses?.map((sense, i) =>
//           <div
//             key={sense?.label}
//             className={`fade-up wc-card p-8`}
//             style={{
//               transitionDelay: `${i * 0.12}s`,
//               borderRadius: '4px 14px 6px 10px / 10px 6px 14px 4px',
//               background: sense?.bg,
//               border: `1px solid ${sense?.color}30`
//             }}>
            
//               <div className="flex items-center gap-3 mb-4">
//                 <span
//                 className="font-display"
//                 style={{ fontSize: '1.8rem', color: sense?.color }}>
                
//                   {sense?.icon}
//                 </span>
//                 <span
//                 className="font-body text-xs tracking-[0.3em] uppercase font-medium"
//                 style={{ color: sense?.color }}>
                
//                   {sense?.label}
//                 </span>
//               </div>
//               <p
//               className="font-display italic leading-relaxed"
//               style={{ fontSize: '15px', color: 'var(--ink-soft)', fontWeight: 300 }}>
              
//                 {sense?.description}
//               </p>
//             </div>
//           )}
//         </div>

//         {/* Marquee */}
//         <div className="fade-up delay-300 mt-20 overflow-hidden py-6 border-y" style={{ borderColor: 'rgba(212,168,83,0.2)' }}>
//           <div className="marquee-inner inline-flex gap-12 items-center">
//             {[
//             'Peonies', '·', 'June Light', '·', 'Garden Roses', '·', 'String Quartet', '·', 'Hudson Valley', '·', 'Long Tables', '·', 'Sweet Peas', '·', 'Candlelight', '·',
//             'Peonies', '·', 'June Light', '·', 'Garden Roses', '·', 'String Quartet', '·', 'Hudson Valley', '·', 'Long Tables', '·', 'Sweet Peas', '·', 'Candlelight', '·']?.
//             map((item, i) =>
//             <span
//               key={i}
//               className="font-display italic flex-shrink-0"
//               style={{
//                 fontSize: item === '·' ? '1.5rem' : '1.1rem',
//                 color: item === '·' ? 'var(--blush-deep)' : 'var(--ink-faint)',
//                 fontWeight: 300
//               }}>
              
//                 {item}
//               </span>
//             )}
//           </div>
//         </div>
//       </div>
//       <div
//         className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
//         style={{ background: 'linear-gradient(to bottom, transparent, rgba(239,224,202,0.9))' }} />
      
//     </section>);

// }