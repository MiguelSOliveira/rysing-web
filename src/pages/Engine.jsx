import React, { useState } from 'react';
import { Shield, Hammer, Heart, AlertTriangle, EyeOff, Lock, Zap, Skull } from 'lucide-react';

const Engine = () => {
    const [activeTab, setActiveTab] = useState('protector');

    return (
        <div className="pt-24 pb-24 bg-rysing-black min-h-screen">

            {/* Header */}
            <div className="max-w-7xl mx-auto px-6 mb-24 text-center">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter">The Engine</h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
                    Rysing is built on a "Mechanics-First" philosophy. We don't just gamify the reward; we gamify the struggle.
                </p>
            </div>

            {/* Class System */}
            <section className="max-w-7xl mx-auto px-6 mb-40">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-white mb-6">The Class System</h2>
                    <p className="text-gray-400 mb-8 max-w-lg mx-auto">Your class isn't just a JPEG. It's a fundamental change in how the app calculates success and failure.</p>

                    {/* Custom Segmented Control */}
                    <div className="inline-flex p-1 bg-[#0F0F0F] border border-white/5 rounded-xl">
                        <button
                            onClick={() => setActiveTab('protector')}
                            className={`px-8 py-3 rounded-lg text-sm font-bold transition-all ${activeTab === 'protector' ? 'bg-rysing-gold text-black shadow-lg shadow-rysing-gold/20' : 'text-gray-500 hover:text-white'}`}
                        >
                            PROTECTOR
                        </button>
                        <button
                            onClick={() => setActiveTab('others')}
                            className={`px-8 py-3 rounded-lg text-sm font-bold transition-all ${activeTab === 'others' ? 'bg-white text-black' : 'text-gray-500 hover:text-white'}`}
                        >
                            HEALER / STRIKER
                        </button>
                    </div>
                </div>

                <div className="bg-[#0F0F0F] border border-white/5 rounded-3xl p-8 md:p-16 min-h-[500px] relative overflow-hidden group">
                    {/* Subtle bg glow */}
                    <div className={`absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[150px] opacity-10 transition-colors duration-500 ${activeTab === 'protector' ? 'bg-rysing-gold' : 'bg-blue-500'}`}></div>

                    {activeTab === 'protector' ? (
                        <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">
                            <div className="animate-fade-in">
                                <div className="inline-flex items-center gap-2 text-rysing-gold mb-6 bg-rysing-gold/10 px-3 py-1 rounded-full border border-rysing-gold/20">
                                    <Shield size={14} />
                                    <span className="font-mono text-xs uppercase tracking-widest font-bold">Tank Archetype</span>
                                </div>
                                <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">The Protector</h3>
                                <p className="text-gray-400 leading-relaxed mb-10 text-lg font-light">
                                    The bastion of consistency. The Protector recognizes that motivation is fleeting, but discipline is a skill. Their kit is built to weather the storms of "bad days" without breaking the chain.
                                </p>

                                <div className="space-y-4">
                                    <div className="flex gap-5 p-5 rounded-xl bg-[#141414] border border-white/5 hover:border-rysing-gold/30 transition-colors group/card">
                                        <div className="bg-[#1A1A1A] w-12 h-12 flex items-center justify-center rounded-lg text-rysing-gold border border-white/5 group-hover/card:border-rysing-gold/50 transition-colors">
                                            <Shield size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white text-base">Active: Bastion of Will</h4>
                                            <p className="text-sm text-gray-500 mt-1 leading-relaxed">Spend <strong>Resolve</strong> to create a Shield. If you miss a Daily Quest while shielded, the Shield breaks, but your streak remains intact.</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-5 p-5 rounded-xl bg-[#141414] border border-white/5 hover:border-rysing-gold/30 transition-colors group/card">
                                        <div className="bg-[#1A1A1A] w-12 h-12 flex items-center justify-center rounded-lg text-rysing-gold border border-white/5 group-hover/card:border-rysing-gold/50 transition-colors">
                                            <Heart size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white text-base">Passive: Resilience Training</h4>
                                            <p className="text-sm text-gray-500 mt-1 leading-relaxed">Recover 10% faster from "Burnout" status effects. Gain bonus XP for streaks longer than 7 days.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Character Card Visualization */}
                            <div className="relative h-[400px] bg-[#141414] rounded-2xl border border-white/5 flex flex-col items-center justify-center p-8 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                                <div className="absolute inset-0 bg-gradient-to-br from-rysing-gold/5 to-transparent rounded-2xl"></div>
                                <Shield className="w-32 h-32 text-rysing-gold mb-8 drop-shadow-[0_0_15px_rgba(255,149,0,0.5)]" />
                                <div className="text-center relative z-10">
                                    <h3 className="text-2xl font-bold text-white">Ironclad Guardian</h3>
                                    <p className="text-rysing-gold font-mono text-sm mt-2">LVL 10 PROTECTOR</p>
                                </div>
                                {/* Stat Bars */}
                                <div className="w-full mt-8 space-y-3">
                                    <div className="flex justify-between text-xs text-gray-500 font-mono"><span>RESILIENCE</span><span>85/100</span></div>
                                    <div className="w-full h-1 bg-white/10 rounded-full"><div className="w-[85%] h-full bg-rysing-gold rounded-full"></div></div>
                                    <div className="flex justify-between text-xs text-gray-500 font-mono"><span>DISCIPLINE</span><span>40/100</span></div>
                                    <div className="w-full h-1 bg-white/10 rounded-full"><div className="w-[40%] h-full bg-gray-600 rounded-full"></div></div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="text-center py-20 animate-fade-in">
                            <div className="w-24 h-24 bg-[#141414] rounded-full flex items-center justify-center mx-auto mb-8 border border-white/10">
                                <Lock className="w-10 h-10 text-gray-600" />
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-4">Under Construction</h3>
                            <p className="text-gray-400 max-w-md mx-auto leading-relaxed">
                                The Healer (Restoration focus) and Striker (High-intensity sprint focus) classes are currently in development for Phase 2.
                            </p>
                        </div>
                    )}
                </div>
            </section>

            {/* Failure System */}
            <section className="bg-[#0F0F0F] py-32 mb-32 border-y border-white/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5" />

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid md:grid-cols-2 gap-20 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-white mb-6">Failure is Data.</h2>
                            <p className="text-gray-400 leading-relaxed mb-8 text-lg font-light">
                                Most apps treat failure as a moral failing. Rysing treats it as a data point. When you break a promise to yourself, the app categorizes it so you can diagnose the root cause.
                            </p>

                            <div className="grid gap-4">
                                {[
                                    { color: "bg-red-500", title: "Broken Streak", desc: "A lapse in discipline. Fixable via consistency." },
                                    { color: "bg-yellow-500", title: "Missed Deadline", desc: "A failure of planning. Fixable via reprioritization." },
                                    { color: "bg-blue-500", title: "Abandoned Path", desc: "A change of heart. Fixable via new goals." }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 p-4 rounded-lg bg-black/20 border border-white/5">
                                        <div className={`w-3 h-3 ${item.color} rounded-full shadow-[0_0_10px_currentColor]`}></div>
                                        <div>
                                            <h4 className="text-white font-bold text-sm">{item.title}</h4>
                                            <p className="text-gray-500 text-xs">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Visual Cards */}
                        <div className="grid grid-cols-2 gap-6">
                            <div className="p-8 bg-[#141414] border border-white/5 rounded-2xl hover:border-rysing-gold/30 transition-all hover:-translate-y-1">
                                <div className="w-12 h-12 bg-rysing-gold/10 rounded-lg flex items-center justify-center mb-6">
                                    <AlertTriangle className="text-rysing-gold" />
                                </div>
                                <h4 className="text-white font-bold text-lg mb-2">Diagnostic</h4>
                                <p className="text-sm text-gray-500 leading-relaxed">The app tells you *why* you failed, based on your tagging.</p>
                            </div>
                            <div className="p-8 bg-[#141414] border border-white/5 rounded-2xl hover:border-rysing-gold/30 transition-all hover:-translate-y-1 mt-8">
                                <div className="w-12 h-12 bg-rysing-gold/10 rounded-lg flex items-center justify-center mb-6">
                                    <Hammer className="text-rysing-gold" />
                                </div>
                                <h4 className="text-white font-bold text-lg mb-2">Repairable</h4>
                                <p className="text-sm text-gray-500 leading-relaxed">Mending Quests allow you to repair scars on your history.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Privacy */}
            <section className="max-w-5xl mx-auto px-6 text-center">
                <div className="inline-block p-5 rounded-full bg-white/5 mb-8 border border-white/10">
                    <EyeOff size={32} className="text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-12">The Anti-Social Network</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="p-8 rounded-2xl bg-[#0F0F0F] border border-white/5">
                        <h4 className="font-bold text-white mb-2 text-lg">No Ads.</h4>
                        <p className="text-sm text-gray-500">You are the customer, not the product.</p>
                    </div>
                    <div className="p-8 rounded-2xl bg-[#0F0F0F] border border-white/5">
                        <h4 className="font-bold text-white mb-2 text-lg">Local First.</h4>
                        <p className="text-sm text-gray-500">Your data lives on your device and iCloud.</p>
                    </div>
                    <div className="p-8 rounded-2xl bg-[#0F0F0F] border border-white/5">
                        <h4 className="font-bold text-white mb-2 text-lg">No Feed.</h4>
                        <p className="text-sm text-gray-500">We optimize for focus, not engagement.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Engine;