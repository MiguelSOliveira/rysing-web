import React from 'react';
import { ArrowRight, Shield, Zap, Map as MapIcon, Link as LinkIcon, CheckCircle2, X } from 'lucide-react';

const Home = () => {
  return (
      <div className="flex flex-col bg-rysing-black selection:bg-rysing-gold/30">

        {/* Hero Section */}
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">

          {/* Dynamic Background */}
          <div className="absolute inset-0 bg-rysing-black">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-rysing-gold/10 rounded-[100%] blur-[120px] opacity-40 animate-pulse-slow" />
            <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[120px] opacity-20" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs font-mono mb-8 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-rysing-gold animate-pulse"></span>
              WAVE 1 ACCESS IS OPEN
            </div>

            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-white mb-8 leading-[1.1]">
              Motivation Isn't Magic.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rysing-gold via-yellow-200 to-rysing-gold bg-[length:200%_auto] animate-pulse-slow">
              It's an Engine.
            </span>
            </h1>

            <p className="max-w-2xl mx-auto text-xl text-gray-400 mb-10 leading-relaxed font-light">
              The first RPG for your real life. Turn habits into quests, failure into data, and productivity into a game you actually want to play.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24">
              <button className="px-8 py-4 rounded-lg bg-rysing-gold text-black font-bold text-lg hover:bg-white transition-all shadow-[0_0_40px_rgba(255,149,0,0.3)] hover:shadow-[0_0_60px_rgba(255,149,0,0.5)] hover:-translate-y-1">
                Enter the Beta
              </button>
              <button className="px-8 py-4 rounded-lg bg-white/5 text-white font-medium hover:bg-white/10 transition-all border border-white/10 hover:border-white/20 backdrop-blur-sm">
                Read the Manifesto
              </button>
            </div>

            {/* CSS IPHONE MOCKUP */}
            <div className="relative mx-auto w-[320px] md:w-[380px] h-[700px] bg-black rounded-[50px] border-[8px] border-[#1a1a1a] shadow-2xl overflow-hidden animate-float">
              {/* Reflective shine on bezel */}
              <div className="absolute inset-0 rounded-[42px] border border-white/10 pointer-events-none z-50"></div>

              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-[#1a1a1a] rounded-b-2xl z-50"></div>

              {/* Screen Content */}
              <div className="w-full h-full bg-rysing-dark flex flex-col relative">
                {/* Status Bar */}
                <div className="h-12 w-full flex items-center justify-between px-6 text-xs text-white font-medium z-40">
                  <span>9:41</span>
                  <div className="flex gap-1">
                    <div className="w-4 h-2.5 bg-white rounded-sm"></div>
                  </div>
                </div>

                {/* App UI: Character Header */}
                <div className="px-6 pt-4 pb-8 bg-gradient-to-b from-rysing-dark to-rysing-black z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-rysing-gold to-yellow-600 p-0.5 shadow-lg shadow-rysing-gold/20">
                      <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                        <Shield size={28} className="text-rysing-gold" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg">Protector Level 5</h3>
                      <div className="w-32 h-1.5 bg-white/10 rounded-full mt-2 overflow-hidden">
                        <div className="h-full w-[70%] bg-rysing-gold rounded-full"></div>
                      </div>
                      <p className="text-xs text-rysing-gold mt-1 font-mono">1,240 / 2,000 XP</p>
                    </div>
                  </div>
                </div>

                {/* App UI: Active Dungeon */}
                <div className="flex-1 bg-rysing-black px-4 pt-2">
                  <div className="bg-[#141414] rounded-xl p-5 border border-white/5 mb-4 shadow-lg">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <span className="text-xs font-mono text-rysing-gold uppercase tracking-wider">Active Dungeon</span>
                        <h4 className="text-white font-bold text-lg mt-1">The Scriptorium</h4>
                      </div>
                      <div className="px-2 py-1 rounded bg-red-900/30 border border-red-500/20 text-red-400 text-xs font-mono">
                        BOSS FLOOR
                      </div>
                    </div>

                    {/* Boss HP Bar */}
                    <div className="mb-2 flex justify-between text-xs text-gray-400">
                      <span>Enemy: Wraith of Inertia</span>
                      <span>25% HP</span>
                    </div>
                    <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden mb-6">
                      <div className="h-full w-[75%] bg-red-600 rounded-full"></div>
                    </div>

                    {/* Action */}
                    <button className="w-full py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white text-sm font-medium flex items-center justify-center gap-2 transition-colors">
                      <Zap size={16} className="text-rysing-gold" />
                      Perform Deep Work (25m)
                    </button>
                  </div>

                  {/* Quest List */}
                  <div className="space-y-3">
                    <div className="p-4 rounded-lg bg-[#141414] border border-white/5 flex items-center gap-3 opacity-50">
                      <div className="w-5 h-5 rounded border border-rysing-gold/50 bg-rysing-gold/20 flex items-center justify-center">
                        <CheckCircle2 size={12} className="text-rysing-gold" />
                      </div>
                      <span className="text-gray-500 text-sm line-through">Morning Protocol</span>
                    </div>
                    <div className="p-4 rounded-lg bg-[#141414] border border-white/5 flex items-center gap-3">
                      <div className="w-5 h-5 rounded border border-gray-600"></div>
                      <span className="text-gray-300 text-sm">Review Weekly Goals</span>
                    </div>
                  </div>
                </div>

                {/* Tab Bar */}
                <div className="h-20 bg-[#141414] border-t border-white/5 flex items-start justify-around pt-4 text-gray-500">
                  <Shield size={24} className="text-rysing-gold" />
                  <MapIcon size={24} />
                  <Zap size={24} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Problem Block */}
        <section className="py-32 bg-rysing-black border-t border-white/5 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-20 items-center">
              <div className="order-2 md:order-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-mono mb-6">
                  <LinkIcon size={12} />
                  THE BROKEN CHAIN
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Your habit tracker is <br/>setting you up to fail.</h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-8 font-light">
                  Life happens. You get sick. You travel. In other apps, one missed day destroys a 100-day streak, demotivating you instantly. <br/><br/>
                  In Rysing, <span className="text-white font-medium">failure is a mechanic</span>. Use your Class Abilities to shield your progress, mend your streak, and adapt to reality.
                </p>
              </div>

              {/* Visual Comparison */}
              <div className="order-1 md:order-2 relative h-96 bg-[#0F0F0F] rounded-2xl border border-white/5 flex flex-col items-center justify-center p-8 overflow-hidden group">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,0,0,0.1),transparent_70%)] group-hover:bg-[radial-gradient(circle_at_50%_50%,_rgba(255,149,0,0.1),transparent_70%)] transition-all duration-1000"></div>

                <div className="flex gap-12 items-center relative z-10">
                  {/* The Old Way */}
                  <div className="text-center transition-all duration-500 group-hover:opacity-30 group-hover:scale-90 opacity-100">
                    <div className="w-24 h-24 border-2 border-red-500/20 bg-red-900/5 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                      <X className="text-red-500" size={48} />
                    </div>
                    <p className="text-xs text-red-500 font-mono tracking-widest uppercase">Other Apps</p>
                    <p className="text-white font-bold mt-1">Streak Lost</p>
                  </div>

                  {/* The Rysing Way */}
                  <div className="text-center transition-all duration-500 group-hover:scale-110 opacity-50 group-hover:opacity-100 grayscale group-hover:grayscale-0">
                    <div className="w-32 h-32 bg-rysing-gold/10 border-2 border-rysing-gold rounded-full flex items-center justify-center mb-4 mx-auto shadow-[0_0_50px_rgba(255,149,0,0.2)]">
                      <Shield className="text-rysing-gold animate-pulse-slow" size={64} />
                    </div>
                    <p className="text-xs text-rysing-gold font-mono tracking-widest uppercase">Rysing</p>
                    <p className="text-white font-bold mt-1">Damage Absorbed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Solution Block */}
        <section className="py-32 bg-[#0A0A0A] relative border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">The Engine</h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
                We replaced the checkbox with a combat system. Every task you complete deals damage to the Enemy of that floor.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: <Zap className="w-6 h-6 text-rysing-gold" />,
                  title: "Introspective Dungeons",
                  desc: "Don't just 'start a project.' Enter a Dungeon. Face the specific internal enemies—Fear, Perfectionism, Inertia—that block your path."
                },
                {
                  icon: <Shield className="w-6 h-6 text-rysing-gold" />,
                  title: "Class Archetypes",
                  desc: "Your personality determines your playstyle. The Protector endures. The Striker sprints. The Architect optimizes."
                },
                {
                  icon: <MapIcon className="w-6 h-6 text-rysing-gold" />,
                  title: "The Roadmap",
                  desc: "You don't explore a pre-made map. You draw it. Every completed project adds a permanent landmark to your personal world."
                }
              ].map((feature, idx) => (
                  <div key={idx} className="p-10 rounded-2xl bg-[#0F0F0F] border border-white/5 hover:border-rysing-gold/30 transition-all group hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/50">
                    <div className="mb-8 w-14 h-14 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-rysing-gold text-white group-hover:text-black transition-colors duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                    <p className="text-gray-400 leading-relaxed font-light text-sm">
                      {feature.desc}
                    </p>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="py-24 border-t border-white/5 bg-rysing-black relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-rysing-gold/5 rounded-full blur-[100px]" />

          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <h2 className="text-3xl font-bold text-white mb-4">Join Wave 1</h2>
            <p className="text-gray-400 mb-10 text-lg">Limited spots available for Founding Protectors.</p>

            <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-[#0F0F0F] border border-white/10 shadow-2xl">
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gray-700 border-2 border-black"></div>
                ))}
              </div>
              <span className="font-mono text-rysing-gold text-lg font-bold">
              1,240 / 5,000 spots claimed
            </span>
            </div>
          </div>
        </section>
      </div>
  );
};

export default Home;