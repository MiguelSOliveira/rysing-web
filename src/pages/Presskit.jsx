import React, { useState } from 'react';
import { Download, Copy, Check, Image as ImageIcon, Quote } from 'lucide-react';

const Presskit = () => {
    const [copied, setCopied] = useState(null);

    const copyToClipboard = (text, key) => {
        navigator.clipboard.writeText(text);
        setCopied(key);
        setTimeout(() => setCopied(null), 2000);
    };

    return (
        <div className="pt-24 pb-24 bg-rysing-black min-h-screen selection:bg-rysing-gold/30">
            <div className="max-w-5xl mx-auto px-6">

                {/* Header */}
                <header className="mb-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs font-mono mb-6">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        UPDATED FOR WAVE 1 BETA
                    </div>
                    <h1 className="text-6xl font-bold text-white mb-6 tracking-tighter">Presskit</h1>
                    <p className="text-xl text-gray-400 font-light max-w-2xl leading-relaxed">
                        Resources, facts, and assets for covering Rysing.
                        <br />For inquiries, interview requests, or TestFlight access, contact <a href="mailto:press@rysing.app" className="text-rysing-gold hover:underline decoration-1 underline-offset-4">press@rysing.app</a>.
                    </p>

                    <div className="flex gap-4 mt-8">
                        <button className="px-6 py-3 bg-white text-black font-bold rounded hover:bg-gray-200 transition-colors flex items-center gap-2">
                            <Download size={18} /> Download All Assets (.zip)
                        </button>
                    </div>
                </header>

                <div className="grid md:grid-cols-[1fr_300px] gap-16">

                    {/* Main Content Column */}
                    <div className="space-y-20">

                        {/* Description */}
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                The Elevator Pitch
                            </h2>
                            <div className="prose prose-invert max-w-none text-gray-300 font-light leading-relaxed space-y-6">
                                <div className="p-6 bg-[#0F0F0F] border-l-4 border-rysing-gold rounded-r-lg">
                                    <p className="text-xl text-white italic font-serif">
                                        "Rysing is the first RPG for your real life that treats failure as a game mechanic, not a moral judgment."
                                    </p>
                                </div>
                                <p>
                                    Traditional habit apps are fragile; one missed day destroys months of progress ("Streak: 0"), leading to demotivation and user churn. Rysing replaces this with a resilient RPG combat system. Users choose a Class—like the resolute <strong>Protector</strong>—and use abilities to shield their progress, mend broken streaks, and analyze their failures as data points rather than personal flaws.
                                </p>
                                <p>
                                    It is an "Anti-Social Network." Built natively for the Apple ecosystem, Rysing respects user privacy and attention with no ads, no data selling, and a design philosophy that encourages "Deep Work" rather than endless scrolling.
                                </p>
                            </div>
                        </section>

                        {/* Copy-Paste Features */}
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-6">Key Features</h2>
                            <div className="grid gap-4">
                                {[
                                    { title: "Introspective Dungeons", desc: "Turn vague goals (e.g., 'Write a Novel') into structured narrative quests with bosses representing internal blocks like Fear and Inertia." },
                                    { title: "Class Archetypes", desc: "Your personality determines your playstyle. The Protector shields streaks; The Architect optimizes workflows." },
                                    { title: "The Failure System", desc: "A diagnostic engine that categorizes setbacks (Broken Streak vs. Missed Deadline) and offers 'Mending Quests' to recover." },
                                    { title: "The Blank Atlas", desc: "A fog-of-war map that fills in only as you complete real-world projects, creating a visual history of your growth." },
                                    { title: "Privacy First", desc: "100% Native SwiftUI & CloudKit. No external servers. No ads. No tracking." }
                                ].map((feature, i) => (
                                    <div key={i} className="group relative p-4 rounded-lg hover:bg-white/5 border border-transparent hover:border-white/5 transition-all cursor-copy" onClick={() => copyToClipboard(`${feature.title}: ${feature.desc}`, `feat-${i}`)}>
                                        <h3 className="text-white font-bold mb-1">{feature.title}</h3>
                                        <p className="text-gray-400 text-sm">{feature.desc}</p>
                                        <div className="absolute top-4 right-4 text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity">
                                            {copied === `feat-${i}` ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Asset Gallery (Placeholders) */}
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-8">Image Gallery</h2>
                            <div className="grid grid-cols-2 gap-4">
                                {/* Main Promo */}
                                <div className="col-span-2 aspect-video bg-[#0F0F0F] border border-white/10 rounded-xl flex flex-col items-center justify-center text-gray-600 hover:border-rysing-gold/30 transition-colors group cursor-pointer">
                                    <ImageIcon size={48} className="mb-2 group-hover:text-rysing-gold transition-colors" />
                                    <span className="text-xs font-mono uppercase tracking-widest">Main_Promo_Art_4k.png</span>
                                </div>
                                {/* Screenshots */}
                                <div className="aspect-[9/19] bg-[#0F0F0F] border border-white/10 rounded-xl flex flex-col items-center justify-center text-gray-600 hover:border-rysing-gold/30 transition-colors group cursor-pointer">
                                    <ImageIcon size={32} className="mb-2 group-hover:text-rysing-gold transition-colors" />
                                    <span className="text-xs font-mono uppercase tracking-widest">UI_Home_Dark.png</span>
                                </div>
                                <div className="aspect-[9/19] bg-[#0F0F0F] border border-white/10 rounded-xl flex flex-col items-center justify-center text-gray-600 hover:border-rysing-gold/30 transition-colors group cursor-pointer">
                                    <ImageIcon size={32} className="mb-2 group-hover:text-rysing-gold transition-colors" />
                                    <span className="text-xs font-mono uppercase tracking-widest">UI_Dungeon_Combat.png</span>
                                </div>
                            </div>
                        </section>

                        {/* Brand Assets */}
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-8">Logos</h2>
                            <div className="grid grid-cols-2 gap-8">
                                <div className="p-8 bg-black border border-white/10 rounded-xl flex flex-col items-center justify-center gap-6 group hover:border-white/30 transition-colors">
                                    <div className="text-3xl font-bold tracking-tighter text-white">RYSING</div>
                                    <button className="text-xs text-gray-500 flex items-center gap-1 group-hover:text-white transition-colors">
                                        <Download size={12} /> SVG / PNG
                                    </button>
                                </div>
                                <div className="p-8 bg-[#1A1A1A] border border-white/10 rounded-xl flex flex-col items-center justify-center gap-6 group hover:border-white/30 transition-colors">
                                    <div className="text-3xl font-bold tracking-tighter text-rysing-gold">RYSING</div>
                                    <button className="text-xs text-gray-500 flex items-center gap-1 group-hover:text-white transition-colors">
                                        <Download size={12} /> SVG / PNG
                                    </button>
                                </div>
                            </div>
                        </section>

                    </div>

                    {/* Sidebar Column */}
                    <div className="space-y-12">

                        {/* Fact Sheet */}
                        <section className="bg-[#0F0F0F] p-6 rounded-xl border border-white/5">
                            <h3 className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-6 border-b border-white/10 pb-2">Fact Sheet</h3>
                            <div className="space-y-6">
                                {[
                                    { label: "Developer", val: "Miguel S. Oliveira" },
                                    { label: "Based In", val: "Porto, Portugal" },
                                    { label: "Release Date", val: "TBA (Beta Live)" },
                                    { label: "Platforms", val: "iOS (iPhone)" },
                                    { label: "Website", val: "rysing.app" },
                                    { label: "Price", val: "Freemium" },
                                ].map((fact, i) => (
                                    <div key={i}>
                                        <div className="text-xs text-gray-500 font-mono uppercase mb-1">{fact.label}</div>
                                        <div className="text-white font-medium">{fact.val}</div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Colors */}
                        <section>
                            <h3 className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-6 border-b border-white/10 pb-2">Brand Colors</h3>
                            <div className="space-y-3">
                                {[
                                    { name: "Rysing Gold", hex: "#FF9500" },
                                    { name: "Onyx Black", hex: "#050505" },
                                    { name: "Off White", hex: "#E5E5E5" },
                                ].map((color, idx) => (
                                    <div key={idx} className="group cursor-pointer flex items-center justify-between p-2 rounded hover:bg-white/5 transition-colors" onClick={() => copyToClipboard(color.hex, idx)}>
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded border border-white/10 shadow-sm" style={{ backgroundColor: color.hex }}></div>
                                            <div className="text-sm text-gray-300">{color.name}</div>
                                        </div>
                                        <div className="text-xs font-mono text-gray-500 flex items-center gap-2">
                                            {color.hex}
                                            {copied === idx ? <Check size={12} className="text-green-500" /> : <Copy size={12} className="opacity-0 group-hover:opacity-100" />}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Presskit;