"use client";
import { ArrowRight, Trophy, Globe, Zap, Flag, Activity, Timer } from "lucide-react";
import { motion, Variants } from "framer-motion";

export default function Home() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as any },
    },
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white selection:bg-[#FF1801] selection:text-white font-sans overflow-x-hidden">
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-900/40 via-neutral-950 to-neutral-950"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#FF1801]/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2 opacity-50 mix-blend-screen"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#FF1801]/5 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2 opacity-50 mix-blend-screen"></div>
      </div>

      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-neutral-950/70 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Flag className="text-[#FF1801] fill-[#FF1801]" size={24} />
            <span className="text-xl font-black tracking-tighter text-white">
              FORMULA<span className="text-[#FF1801]">1</span>
            </span>
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-white/60">
            <a href="#about" className="hover:text-white transition-colors duration-300">About</a>
            <a href="#tech" className="hover:text-white transition-colors duration-300">Technology</a>
            <a href="#races" className="hover:text-white transition-colors duration-300">Global Calendar</a>
          </nav>
        </div>
      </header>

      <main className="relative z-10 pt-32 pb-20 md:pt-48 md:pb-32 px-6">
        {/* Hero Section */}
        <motion.section 
          className="max-w-7xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#FF1801] text-xs font-bold tracking-widest uppercase mb-8">
            <Activity size={14} /> The 2026 Season
          </motion.div>
          <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase mb-6 leading-[0.9]">
            The Pinnacle <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF1801] to-red-800">
              of Motorsport
            </span>
          </motion.h1>
          <motion.p variants={itemVariants} className="text-lg md:text-2xl text-neutral-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            Experience the highest class of international racing. 20 drivers, 10 teams, 
            speeds over 350 km/h, and a global spectacle like no other.
          </motion.p>
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-[#FF1801] hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold tracking-wide flex items-center gap-2 transition-all hover:scale-105 shadow-[0_0_40px_-10px_rgba(255,24,1,0.5)]">
              Discover the Sport <ArrowRight size={20} />
            </button>
            <button className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-full font-bold tracking-wide transition-all">
              Race Calendar
            </button>
          </motion.div>
        </motion.section>

        {/* Features / Tech Grid */}
        <section id="about" className="max-w-7xl mx-auto mt-32 md:mt-48">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase">Extreme <span className="text-[#FF1801]">Engineering</span></h2>
            <p className="text-neutral-400 mt-4 max-w-xl text-lg font-light">
              Formula 1 cars represent the absolute cutting edge of automotive technology, aerodynamics, and material science.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-[#FF1801]/30 hover:bg-white/[0.04] transition-all duration-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF1801]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Zap className="text-[#FF1801] mb-6 relative z-10" size={32} strokeWidth={1.5} />
              <h3 className="text-xl font-bold mb-3 relative z-10">Power Units</h3>
              <p className="text-neutral-400 leading-relaxed text-sm relative z-10">
                1.6L V6 turbo-hybrid engines delivering over 1000 horsepower with thermal efficiency exceeding 50%.
              </p>
            </div>
            
            <div className="group p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-[#FF1801]/30 hover:bg-white/[0.04] transition-all duration-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF1801]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Timer className="text-[#FF1801] mb-6 relative z-10" size={32} strokeWidth={1.5} />
              <h3 className="text-xl font-bold mb-3 relative z-10">Aerodynamics</h3>
              <p className="text-neutral-400 leading-relaxed text-sm relative z-10">
                Generating downforce equivalent to several times the car's weight, allowing cornering speeds pushing 6G.
              </p>
            </div>

            <div className="group p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-[#FF1801]/30 hover:bg-white/[0.04] transition-all duration-500 relative overflow-hidden md:col-span-1">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF1801]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Trophy className="text-[#FF1801] mb-6 relative z-10" size={32} strokeWidth={1.5} />
              <h3 className="text-xl font-bold mb-3 relative z-10">The Drivers</h3>
              <p className="text-neutral-400 leading-relaxed text-sm relative z-10">
                The 20 best drivers in the world pushing physical and mental limits under immense pressure.
              </p>
            </div>
          </div>
        </section>

        {/* Global Calendar */}
        <section id="races" className="max-w-7xl mx-auto mt-32 md:mt-48 pb-12">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <Globe className="text-[#FF1801] mb-6" size={48} strokeWidth={1} />
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[0.9]">
                A Worldwide <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-500 to-neutral-700">Spectacle</span>
              </h2>
              <p className="text-neutral-400 mt-6 text-lg font-light leading-relaxed max-w-md">
                From the historic streets of Monaco to the neon-lit nights of Singapore and Las Vegas, Formula 1 traverses 5 continents across a 24-race calendar.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4 border-t border-white/10 pt-8">
                <div>
                  <div className="text-3xl font-black text-white">24</div>
                  <div className="text-sm text-neutral-500 uppercase tracking-wider font-bold mt-1">Races</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-white">5</div>
                  <div className="text-sm text-neutral-500 uppercase tracking-wider font-bold mt-1">Continents</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-white">10</div>
                  <div className="text-sm text-neutral-500 uppercase tracking-wider font-bold mt-1">Teams</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-white">500M+</div>
                  <div className="text-sm text-neutral-500 uppercase tracking-wider font-bold mt-1">Global Fans</div>
                </div>
              </div>
            </div>
            <div className="flex-1 w-full aspect-square md:aspect-auto md:h-[600px] rounded-3xl bg-neutral-900 border border-white/5 relative overflow-hidden group">
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541577002-3c8ebcc59381?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-luminosity group-hover:scale-105 transition-transform duration-1000"></div>
               <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent"></div>
               <div className="absolute bottom-8 left-8 right-8">
                 <div className="text-xs font-bold tracking-widest text-[#FF1801] uppercase mb-2">Next Race</div>
                 <div className="text-3xl font-black uppercase tracking-tight">Monaco Grand Prix</div>
                 <div className="text-neutral-400 text-sm mt-2 flex items-center gap-2">Circuit de Monaco <div className="w-1 h-1 rounded-full bg-white/30"></div> Monte Carlo</div>
               </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 bg-neutral-950 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-white/50">
            <Flag size={16} className="text-white/30" />
            <span className="font-bold tracking-widest uppercase text-sm">F1 Concept</span>
          </div>
          <p className="text-neutral-600 text-xs text-center md:text-left">
            Designed to showcase Next.js & Tailwind capabilities. Not affiliated with Formula One World Championship Limited.
          </p>
        </div>
      </footer>
    </div>
  );
}
