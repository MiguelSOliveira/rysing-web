import React, { useState } from 'react';
import { Play, X, BookOpen, ArrowUpRight } from 'lucide-react';

// --- DATA SOURCE ---
// Replace 'videoId' with the actual ID from your YouTube URL.
const articles = [
  {
    title: "The Motivation Engine",
    excerpt: "Motivation isn't something you find. It's something you build. We break down the Fuel, Spark, and Oxygen required to keep the fire burning.",
    readTime: "Video Essay",
    tag: "Philosophy",
    date: "Dec 30, 2024",
    videoId: "axfWZappkDg" // e.g., "dQw4w9WgXcQ"
  },
  {
    title: "The Motivation Lie",
    excerpt: "Why the 'unbroken chain' is a trap. Your habit app is setting you up to fail by ignoring the reality of being human.",
    readTime: "Video Essay",
    tag: "Critique",
    date: "Dec 28, 2024",
    videoId: "axfWZappkDg"
  },
  {
    title: "The Blank Map",
    excerpt: "Stop looking for a pre-written path. The most meaningful journeys require you to draw the map yourself.",
    readTime: "Video Essay",
    tag: "Philosophy",
    date: "Dec 25, 2024",
    videoId: "axfWZappkDg"
  },
  {
    title: "The Story of the Scar",
    excerpt: "Kintsugi for your habits. Why a repaired streak is stronger than a perfect one, and how to wear your failures as armor.",
    readTime: "Video Essay",
    tag: "Mechanics",
    date: "Nov 28, 2024",
    videoId: "axfWZappkDg"
  },
  {
    title: "The Poisoned Well",
    excerpt: "Negative self-talk is the silent killer. Learn the patient art of purifying the water, one drop at a time.",
    readTime: "Short",
    tag: "Psychology",
    date: "Dec 15, 2024",
    videoId: "axfWZappkDg"
  }
];

// --- VIDEO MODAL COMPONENT ---
const VideoModal = ({ videoId, onClose }) => {
  if (!videoId) return null;

  return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in" onClick={onClose}>
        <div className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10" onClick={e => e.stopPropagation()}>
          <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-white/10 rounded-full text-white transition-colors"
          >
            <X size={24} />
          </button>
          <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
          ></iframe>
        </div>
      </div>
  );
};

// --- MAIN PAGE ---
const Manifesto = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
      <>
        <div className="pt-24 pb-24 bg-rysing-black min-h-screen">
          <header className="mb-24 text-center max-w-4xl mx-auto px-6">
            <div className="inline-flex items-center gap-2 mb-6 text-rysing-gold">
              <BookOpen size={20} />
              <span className="font-mono text-sm tracking-widest uppercase font-bold">The Archives</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter">The Manifesto</h1>
            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto font-light">
              We aren't just building an app. We are decoding the human operating system.
              <br/>Essays on stoicism, productivity, and the gamification of life.
            </p>
          </header>

          <div className="max-w-5xl mx-auto px-6 space-y-12">
            {articles.map((article, idx) => (
                <article
                    key={idx}
                    className="group cursor-pointer"
                    onClick={() => setActiveVideo(article.videoId)}
                >
                  <div className="relative p-8 md:p-12 rounded-3xl bg-[#0F0F0F] border border-white/5 hover:border-rysing-gold/30 transition-all overflow-hidden">
                    {/* Hover Glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-rysing-gold/0 via-rysing-gold/0 to-rysing-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
                      <div className="flex-1 order-2 md:order-1">
                        <div className="flex items-center gap-4 text-xs font-mono text-gray-500 mb-6 uppercase tracking-wider">
                          <span className="text-rysing-gold font-bold">{article.tag}</span>
                          <span>•</span>
                          <span>{article.date}</span>
                          <span>•</span>
                          <span>{article.readTime}</span>
                        </div>
                        <h2 className="text-3xl font-bold text-white mb-4 group-hover:text-rysing-gold transition-colors duration-300">
                          {article.title}
                        </h2>
                        <p className="text-gray-400 leading-relaxed text-lg mb-8 font-light max-w-2xl">
                          {article.excerpt}
                        </p>
                        <div className="inline-flex items-center gap-2 text-white font-medium border-b border-rysing-gold/0 group-hover:border-rysing-gold transition-all pb-0.5">
                          <Play size={18} className="text-rysing-gold fill-rysing-gold" /> Watch Essay
                        </div>
                      </div>

                      {/* YouTube Thumbnail Visual */}
                      <div className="w-full md:w-80 aspect-video bg-[#050505] rounded-xl border border-white/10 relative overflow-hidden group-hover:shadow-2xl transition-all order-1 md:order-2 group-hover:scale-[1.02]">
                        {/* Fetch High-Res Thumb from YouTube */}
                        <img
                            src={`https://img.youtube.com/vi/${article.videoId}/hqdefault.jpg`}
                            alt={article.title}
                            className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                        />

                        {/* Play Button Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:bg-rysing-gold group-hover:text-black group-hover:border-rysing-gold transition-all duration-300">
                            <Play size={24} className="ml-1" fill="currentColor" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
            ))}
          </div>
        </div>

        {/* Render Modal if active */}
        {activeVideo && <VideoModal videoId={activeVideo} onClose={() => setActiveVideo(null)} />}
      </>
  );
};

export default Manifesto;