"use client"

import { motion } from "framer-motion"
import { ArrowRight, Menu, X } from "lucide-react"
import Link from "next/link"

export function FeaturesSection() {
  return (
    <section className="bg-white py-40 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center space-y-6 mb-24">
             <div className="inline-flex items-center px-4 py-2 rounded-full border border-neutral-200 text-[10px] uppercase tracking-[0.4em] font-bold text-neutral-500">
                Core Capabilities
             </div>
             <h2 className="text-4xl md:text-8xl font-serif font-light text-neutral-900 leading-tight">
                Architecting the <br />
                <span className="italic">Future of Growth</span>
             </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 md:grid-rows-2 gap-6 h-auto md:h-[900px]">
          {/* Main Bento Item */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-3 md:row-span-2 bg-[#F9F9F7] rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-12 flex flex-col justify-between overflow-hidden relative group border border-neutral-100 shadow-xl"
          >
             <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
             <div className="space-y-6 relative z-10">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                    <Menu className="h-8 w-8 text-neutral-800" />
                </div>
                <h3 className="text-3xl md:text-4xl font-serif font-light text-neutral-900 leading-tight">Soil <br /> Restoration</h3>
                <p className="text-lg text-neutral-500 font-light leading-relaxed max-w-sm">
                    Saving India's land by detoxifying soil and eliminating the invisible chain of chemical fertilizers.
                </p>
             </div>
             <div className="mt-10 relative z-10">
                <Link href="/research-labs">
                  <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-neutral-900 group">
                      Explore Research <ArrowRight className="h-4 w-4 -rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </Link>
             </div>
             {/* Decorative Background Image */}
             <div className="absolute bottom-0 right-0 w-full h-1/2 opacity-20 grayscale transition-all duration-700 group-hover:opacity-40 group-hover:scale-105">
                <img src="https://images.unsplash.com/photo-1693414853994-1080baaacb4d?q=80&w=1065&auto=format&fit=crop" className="w-full h-full object-cover" alt="Indian Soil Restoration" />
             </div>
          </motion.div>

          {/* Secondary Bento Items */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-3 bg-neutral-900 rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-12 flex flex-col justify-between group cursor-pointer overflow-hidden relative shadow-2xl"
          >
             <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
             <div className="space-y-6 relative z-10">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-md">
                    <X className="h-6 w-6 text-white" />
                </div>
                <div>
                   <h3 className="text-2xl font-serif text-white mb-2">Toxin-Free Promise</h3>
                   <p className="text-white/40 font-light leading-relaxed">Pioneering a pesticide-free life for the nation through advanced bio-control and natural synergy.</p>
                </div>
             </div>
             <div className="absolute right-[-20px] bottom-[-20px] opacity-10 group-hover:opacity-30 transition-opacity">
                <Menu className="w-64 h-64 text-white" />
             </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-3 bg-[#E5E5E1] rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-12 flex flex-col justify-between group border border-neutral-200 shadow-xl"
          >
             <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
             <div className="space-y-6">
                <div className="flex justify-between items-start">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                        <ArrowRight className="h-6 w-6 text-neutral-800" />
                    </div>
                    <span className="text-[10px] font-bold tracking-[0.2em] text-neutral-400">03</span>
                </div>
                <div>
                   <h3 className="text-2xl font-serif text-neutral-900 mb-2">Yield Engineering</h3>
                   <p className="text-neutral-500 font-light leading-relaxed">Increasing farmer income by reducing expensive input costs while maximizing biological yield potential.</p>
                </div>
             </div>
             <div className="mt-6 flex items-center gap-4">
                <div className="h-[2px] w-full bg-neutral-300 relative">
                    <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "88%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 2 }}
                        className="absolute h-full bg-neutral-900" 
                    />
                </div>
                <span className="text-xs font-bold text-neutral-900">88%</span>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
