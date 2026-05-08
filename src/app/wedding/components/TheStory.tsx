// 'use client';
// import React from 'react';
// import AppImage from '@/components/ui/AppImage';

// export default function TheStory() {
//   return (
//     <section
//       id="story"
//       className="section-story relative py-24 lg:py-40 px-6 overflow-hidden"
//       aria-label="Their story">
      
//       {/* Decorative blobs */}
//       <div
//         className="absolute top-0 right-0 pointer-events-none"
//         style={{
//           width: '45vw',
//           height: '45vw',
//           maxWidth: 500,
//           maxHeight: 500,
//           background: 'radial-gradient(ellipse, rgba(143,175,138,0.18) 0%, transparent 70%)',
//           borderRadius: '60% 40% 55% 45% / 50% 60% 40% 55%',
//           transform: 'translate(20%, -20%)',
//           filter: 'blur(2px)'
//         }} />
      
//       <div
//         className="absolute bottom-0 left-0 pointer-events-none"
//         style={{
//           width: '35vw',
//           height: '35vw',
//           maxWidth: 380,
//           background: 'radial-gradient(ellipse, rgba(242,196,196,0.2) 0%, transparent 70%)',
//           borderRadius: '45% 55% 40% 60% / 55% 40% 60% 45%',
//           transform: 'translate(-20%, 20%)',
//           filter: 'blur(3px)'
//         }} />
      
//       <div className="max-w-6xl mx-auto relative z-10">
//         {/* Section label */}
//         <div className="fade-up flex items-center gap-6 mb-16">
//           <div className="section-line" style={{ width: '60px' }} />
//           <span
//             className="font-body text-xs tracking-[0.5em] uppercase"
//             style={{ color: 'var(--ink-faint)' }}>
            
//             The Story
//           </span>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
//           {/* ── Image side ── */}
//           <div className="lg:col-span-5 fade-up delay-100">
//             <div
//               className="relative"
//               style={{ transform: 'rotate(-1.5deg)' }}>
              
//               {/* Watercolor frame effect */}
//               <div
//                 className="absolute -inset-3 rounded-sm pointer-events-none"
//                 style={{
//                   background: 'linear-gradient(135deg, rgba(242,196,196,0.3) 0%, rgba(143,175,138,0.2) 50%, rgba(212,168,83,0.15) 100%)',
//                   filter: 'blur(8px)',
//                   borderRadius: '40% 30% 45% 35% / 35% 45% 30% 40%'
//                 }} />
              
//               <div
//                 className="overflow-hidden shadow-2xl"
//                 style={{
//                   borderRadius: '2px 18px 4px 14px / 14px 4px 18px 2px'
//                 }}>
                
//                 <AppImage
//                   src="https://img.rocket.new/generatedImages/rocket_gen_img_1a89a765f-1772682806234.png"
//                   alt="Couple in a sunlit garden, the afternoon light catching in her hair"
//                   width={600}
//                   height={750}
//                   className="w-full object-cover"
//                   style={{ filter: 'saturate(0.85) contrast(0.95)' }} />
                
//                 {/* Paint wash overlay */}
//                 <div
//                   className="absolute inset-0 pointer-events-none mix-blend-multiply"
//                   style={{
//                     background: 'linear-gradient(135deg, rgba(242,196,196,0.12) 0%, rgba(143,175,138,0.1) 100%)'
//                   }} />
                
//               </div>
//               {/* Caption tag */}
//               <div
//                 className="absolute -bottom-5 -right-4 wc-card px-4 py-2 shadow-md"
//                 style={{
//                   borderRadius: '1px 8px 2px 6px / 6px 2px 8px 1px',
//                   transform: 'rotate(1.5deg)'
//                 }}>
                
//                 <p className="font-display italic text-sm" style={{ color: 'var(--ink-soft)' }}>
//                   Prospect Park, Brooklyn — 2022
//                 </p>
//               </div>
//             </div>

//             {/* Second small image */}
//             <div
//               className="mt-12 ml-8 relative"
//               style={{ transform: 'rotate(1deg)' }}>
              
//               <div
//                 className="overflow-hidden shadow-lg"
//                 style={{
//                   borderRadius: '12px 2px 10px 4px / 2px 12px 4px 10px',
//                   maxWidth: '260px'
//                 }}>
                
//                 <AppImage
//                   src="https://img.rocket.new/generatedImages/rocket_gen_img_1bb9fc356-1772682802577.png"
//                   alt="Hands intertwined over a worn wooden table with wildflowers"
//                   width={260}
//                   height={200}
//                   className="w-full object-cover"
//                   style={{ filter: 'saturate(0.8) contrast(0.9)' }} />
                
//               </div>
//             </div>
//           </div>

//           {/* ── Journal text side ── */}
//           <div className="lg:col-span-7">
//             <h2
//               className="fade-up font-display mb-10"
//               style={{
//                 fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
//                 fontWeight: 300,
//                 fontStyle: 'italic',
//                 color: 'var(--ink)',
//                 lineHeight: 1.15
//               }}>
              
//               Born from the{' '}
//               <span style={{ color: 'var(--blush-deep)' }}>same afternoon</span>.
//             </h2>

//             <div className="journal-entry fade-up delay-200 space-y-6 text-lg">
//               <p>
//                 <span className="journal-cap">T</span>
//                 hey met on a Tuesday in October — the kind of afternoon that turns
//                 gold without asking permission. Eleanor was returning a library book
//                 she had renewed four times. James was writing in the margins of
//                 someone else&apos;s notebook he&apos;d found left on a bench.
//               </p>
//               <p>
//                 She noticed his handwriting first. He noticed she was reading over
//                 his shoulder and didn&apos;t apologize. They argued, briefly and
//                 pleasantly, about the ending of a film neither of them had
//                 finished. He walked her to the subway. She missed her train on
//                 purpose.
//               </p>
//               <p>
//                 For the next three months they met at the same coffee shop on
//                 Flatbush Avenue every Saturday. He always ordered the same thing.
//                 She never ordered the same thing twice. The barista knew them before
//                 they knew each other.
//               </p>
//               <p>
//                 He proposed in the garden where they&apos;d had their first real
//                 argument — about whether basil belongs in a Negroni. (She was
//                 right. He knows this now.) She said yes before he finished the
//                 sentence. He says she was just trying to win the argument.
//                 She says that&apos;s not untrue.
//               </p>
//             </div>

//             {/* Stats / small details */}
//             <div className="fade-up delay-400 mt-12 grid grid-cols-3 gap-6">
//               {[
//               { num: '3', label: 'Years together' },
//               { num: '1', label: 'Bench in the park' },
//               { num: '∞', label: 'Saturday mornings' }]?.
//               map((item) =>
//               <div key={item?.label} className="text-center">
//                   <span
//                   className="font-display block"
//                   style={{
//                     fontSize: '2.8rem',
//                     fontWeight: 300,
//                     fontStyle: 'italic',
//                     color: 'var(--blush-deep)',
//                     lineHeight: 1
//                   }}>
                  
//                     {item?.num}
//                   </span>
//                   <span
//                   className="font-body text-xs tracking-[0.2em] uppercase mt-2 block"
//                   style={{ color: 'var(--ink-faint)' }}>
                  
//                     {item?.label}
//                   </span>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Section transition wash */}
//       <div
//         className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
//         style={{
//           background: 'linear-gradient(to bottom, transparent, rgba(245,237,224,0.9))'
//         }} />
      
//     </section>);

// }