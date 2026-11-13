import React from 'react';
import { Instagram } from 'lucide-react';
import { business, posts } from '../business';

export const InstagramFeed: React.FC = () => (
  <section id="instagram" className="relative w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 py-24">
    <div className="text-center mb-12">
      <h2 className="font-['Newsreader'] font-light text-[38px] md:text-[48px] text-[#f6d9bb] leading-tight">O Bellas no Instagram</h2>
      <a href={business.instagram} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 mt-4 py-3 text-sm text-[#e8bf96] hover:underline underline-offset-4"><Instagram size={18} />{business.handle}</a>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {posts.map(post => (
        <a key={post.id} href={business.instagram} target="_blank" rel="noreferrer" aria-label={`Visitar Instagram do Bellas: ${post.title}`} className="group relative aspect-[3/4] rounded-lg overflow-hidden block bg-[#272422]">
          <img alt={post.title} loading="lazy" src={post.image} className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 motion-reduce:transform-none" />
          <span className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity flex items-center justify-center"><Instagram size={26} /></span>
        </a>
      ))}
    </div>
  </section>
);
