import React from 'react';
import { Flag, Compass, Map, Lock } from 'lucide-react';

const Atlas = () => {
    return (
        <div className="pt-24 pb-40 bg-rysing-black min-h-screen">
            <header className="mb-32 text-center max-w-4xl mx-auto px-6">
                <h1 className="text-6xl font-bold text-white mb-6 tracking-tighter">The Atlas</h1>
                <p className="text-xl text-gray-400 font-light">
                    The path ahead is shrouded in fog, but our compass is true.
                </p>
            </header>

            <div className="max-w-4xl mx-auto px-6 relative">
                {/* Connecting Line */}
                <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-rysing-gold via-white/10 to-transparent md:-translate-x-1/2 z-0" />

                <div className="space-y-32 relative z-10">

                    {/* Zone 1: The Clearing */}
                    <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20">
                        <div className="hidden md:block w-1/2 text-right">
                            <h3 className="text-4xl font-bold text-white mb-2">The Clearing</h3>
                            <p className="text-rysing-gold font-mono text-sm tracking-widest mb-4">ZONE 1 • LIVE / MVP</p>
                            <p className="text-gray-400 font-light leading-relaxed">The safe haven where the journey begins. Foundation systems are active and stable.</p>
                        </div>

                        <div className="flex items-center justify-center w-20 h-20 rounded-full bg-[#0A0A0A] border-4 border-rysing-gold shadow-[0_0_50px_rgba(255,149,0,0.4)] relative">
                            <div className="absolute inset-0 rounded-full bg-rysing-gold animate-ping opacity-20"></div>
                            <Flag className="text-rysing-gold" size={32} />
                        </div>

                        <div className="w-full md:w-1/2 pl-12 md:pl-0">
                            <div className="md:hidden mb-6 pl-4 border-l-2 border-rysing-gold">
                                <h3 className="text-3xl font-bold text-white mb-1">The Clearing</h3>
                                <p className="text-rysing-gold font-mono text-xs">ZONE 1 • LIVE / MVP</p>
                            </div>
                            <div className="space-y-4">
                                {[
                                    "The Scriptorium Dungeon",
                                    "Protector Class Archetype",
                                    "Basic Questing System",
                                    "iCloud Sync"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 text-white p-4 bg-[#141414] rounded-lg border border-white/5 hover:border-rysing-gold/50 transition-colors">
                                        <div className="w-2 h-2 bg-rysing-gold rounded-full shadow-[0_0_10px_orange]"></div>
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Zone 2: The Horizon */}
                    <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20">
                        <div className="w-full md:w-1/2 pr-12 md:pr-0 order-2 md:order-1 text-right md:text-right">
                            <div className="space-y-4">
                                {[
                                    "Alchemy & Crafting (Reagents)",
                                    "The Architect Class Mode",
                                    "Web Leaderboards",
                                    "Widget Support"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center md:justify-end gap-4 text-gray-300 p-4 bg-[#141414]/50 rounded-lg border border-white/5 border-dashed">
                                        <span className="md:order-1">{item}</span>
                                        <div className="w-2 h-2 bg-gray-600 rounded-full md:order-2"></div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#0A0A0A] border-4 border-gray-700 order-1 md:order-2 shadow-2xl">
                            <Compass className="text-gray-400" size={24} />
                        </div>

                        <div className="md:block w-full md:w-1/2 pl-12 md:pl-0 order-3 md:order-3">
                            <div className="md:text-left">
                                <h3 className="text-3xl font-bold text-gray-300 mb-2">The Horizon</h3>
                                <p className="text-gray-500 font-mono text-sm tracking-widest mb-4">ZONE 2 • IN DEVELOPMENT</p>
                                <p className="text-gray-500 font-light leading-relaxed">Visible but out of reach. We are forging these tools now.</p>
                            </div>
                        </div>
                    </div>

                    {/* Zone 3: The Deep Wilds */}
                    <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20 opacity-40 hover:opacity-100 transition-opacity duration-700">
                        <div className="hidden md:block w-1/2 text-right">
                            <h3 className="text-3xl font-bold text-white mb-2">The Deep Wilds</h3>
                            <p className="text-gray-500 font-mono text-sm tracking-widest mb-4">ZONE 3 • FUTURE VISION</p>
                            <p className="text-gray-500 font-light leading-relaxed">The unknown. Here be dragons, multiplayer raids, and user-generated worlds.</p>
                        </div>

                        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#0A0A0A] border-2 border-gray-800">
                            <Lock className="text-gray-700" size={24} />
                        </div>

                        <div className="w-full md:w-1/2 pl-12 md:pl-0">
                            <div className="md:hidden mb-4 pl-4 border-l-2 border-gray-800">
                                <h3 className="text-2xl font-bold text-gray-500 mb-1">The Deep Wilds</h3>
                                <p className="text-gray-600 font-mono text-xs">ZONE 3 • FUTURE VISION</p>
                            </div>
                            <div className="space-y-4">
                                {[
                                    "Co-op Party Dungeons",
                                    "User-Generated Content Tool",
                                    "Guilds",
                                    "Boss Taming System"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 text-gray-600 p-4 border border-white/5 border-dashed rounded-lg">
                                        <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Atlas;