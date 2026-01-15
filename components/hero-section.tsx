"use client"

import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Menu, X, ArrowRight } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  const containerRef = useRef(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [booting, setBooting] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setBooting(false), 2000)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      clearTimeout(timer)
    }
  }, [])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"])
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0])
  
  return (
    <section ref={containerRef} className="relative w-full h-[110vh] flex items-center justify-center overflow-hidden bg-black cursor-none">
      {/* Booting Sequence (Personalized Touch) */}
      {booting && (
        <div className="fixed inset-0 z-[200] bg-black flex flex-col items-center justify-center space-y-4">
           <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             className="font-mono text-[10px] text-emerald-500 tracking-[0.3em] uppercase"
           >
              Initializing AgriScore Mission...
           </motion.div>
           <motion.div 
             initial={{ width: 0 }}
             animate={{ width: 200 }}
             className="h-[1px] bg-emerald-500/30 w-48 relative"
           >
              <motion.div 
                animate={{ x: [0, 200, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="absolute top-0 left-0 h-full w-4 bg-emerald-500" 
              />
           </motion.div>
        </div>
      )}

      {/* Decorative Interactive Background Elements */}
      <motion.div 
        animate={{ 
          x: (mousePosition.x - (typeof window !== 'undefined' ? window.innerWidth : 0) / 2) * 0.05,
          y: (mousePosition.y - (typeof window !== 'undefined' ? window.innerHeight : 0) / 2) * 0.05 
        }}
        className="absolute inset-0 z-0 pointer-events-none opacity-30 blur-[120px]"
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full" />
      </motion.div>

      {/* Custom Cursor Follower */}
      <motion.div 
        animate={{ x: mousePosition.x - 12, y: mousePosition.y - 12 }}
        className="fixed top-0 left-0 w-6 h-6 border border-white/30 rounded-full z-[100] pointer-events-none hidden md:block mix-blend-difference"
        transition={{ type: "spring", stiffness: 150, damping: 20, mass: 0.1 }}
      />

      {/* Dynamic Cinematic Background */}
      <motion.div style={{ y }} className="absolute inset-0 z-0 scale-110 grayscale-[0.3]">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover opacity-50"
          poster="https://images.unsplash.com/photo-1500382017468-9049fee74a62?q=80&w=2000&auto=format&fit=crop"
        >
           <source src="https://player.vimeo.com/external/494254245.hd.mp4?s=d63a89e90956903f69cf327c5f87b326002f254e&profile_id=175" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
      </motion.div>

      <div className="container relative z-10 px-4 flex flex-col items-center justify-center h-full">
        <motion.div 
          style={{ opacity }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center space-y-12"
        >
          <h1 className="text-[clamp(3rem,8vw,8rem)] font-serif font-light text-white leading-[1.05] tracking-tight">
            Engineering a <br />
            <span className="italic">Pesticide-Free</span> India
          </h1>

          <p className="text-lg md:text-2xl text-white/40 max-w-3xl mx-auto font-light leading-relaxed tracking-tight">
            We are redefining Indian agriculture by increasing yields and restoring soil health. Our mission: reducing input costs for farmers while delivering a toxin-free future to the nation.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-10 pt-8">
            <Link href="/contact">
              <Button size="lg" className="rounded-full bg-[#D4AF37] text-[#1A3C34] hover:bg-[#D4AF37]/90 h-20 px-16 text-[14px] uppercase tracking-[0.4em] font-bold transition-all shadow-[0_0_50px_rgba(212,175,55,0.2)] hover:shadow-[0_0_80px_rgba(212,175,55,0.4)] hover:scale-105 active:scale-95 group relative overflow-hidden border-none">
                <span className="relative z-10 flex items-center gap-4">
                  Join the Mission
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform duration-500" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Floating Glass Stats */}
      <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-20 right-10 hidden xl:block"
      >
        <div className="glass-card p-6 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl w-64 space-y-4">
            <div className="flex items-center justify-between">
                <Menu className="h-5 w-5 text-white/60" />
                <span className="text-[10px] text-white/40 font-mono tracking-widest">REAL-TIME</span>
            </div>
            <div className="space-y-1">
                <div className="text-3xl font-serif text-white">99.4%</div>
                <div className="text-[10px] text-emerald-400 tracking-widest uppercase">Yield Precision</div>
            </div>
            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "94%" }}
                    transition={{ delay: 2, duration: 1.5 }}
                    className="h-full bg-white" 
                />
            </div>
        </div>
      </motion.div>
    </section>
  )
}
