"use client"

import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Menu, X, ArrowRight, Leaf, Cpu, Database, Globe } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  const containerRef = useRef(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [booting, setBooting] = useState(true)
  const [progress, setProgress] = useState(0)
  const [loadingText, setLoadingText] = useState("Initializing")

  const loadingSequences = [
    "Analyzing Soil Purity",
    "Calibrating Neural Networks",
    "Mapping Bio-Heritage",
    "Optimizing Yield Models",
    "Securing Precision Grid",
  ]

  useEffect(() => {
    let progressInterval: NodeJS.Timeout
    let textInterval: NodeJS.Timeout

    if (booting) {
      progressInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(progressInterval)
            setTimeout(() => setBooting(false), 500)
            return 100
          }
          return prev + 1
        })
      }, 30)

      let textIndex = 0
      textInterval = setInterval(() => {
        textIndex = (textIndex + 1) % loadingSequences.length
        setLoadingText(loadingSequences[textIndex])
      }, 600)
    }

    const handleMouseMove = (e: MouseEvent | TouchEvent) => {
      if ('touches' in e) {
        setMousePosition({ x: e.touches[0].clientX, y: e.touches[0].clientY })
      } else {
        setMousePosition({ x: e.clientX, y: e.clientY })
      }
    }
    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("touchmove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("touchmove", handleMouseMove)
      clearInterval(progressInterval)
      clearInterval(textInterval)
    }
  }, [booting])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"])
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0])
  
  return (
    <section ref={containerRef} className="relative w-full h-[110vh] flex items-center justify-center overflow-hidden bg-black cursor-none">
      {/* Booting Sequence (Precision Engineering Focus) */}
      <AnimatePresence>
        {booting && (
          <motion.div 
            exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[200] bg-black flex flex-col items-center justify-center overflow-hidden"
          >
             {/* Dynamic Data Grid Background */}
             <div className="absolute inset-0 opacity-[0.07]" 
                  style={{ 
                    backgroundImage: 'radial-gradient(#10b981 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                  }} 
             />
             
             <div className="relative z-10 flex flex-col items-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-16 relative"
                >
                  <div className="w-24 h-24 rounded-3xl border border-emerald-500/20 flex items-center justify-center bg-emerald-500/5 backdrop-blur-xl relative group">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      className="absolute -inset-4 border border-emerald-500/10 rounded-full border-t-emerald-500/40"
                    />
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                      className="absolute -inset-8 border border-white/5 rounded-full border-b-white/20"
                    />
                    <Leaf className="h-10 w-10 text-emerald-500" />
                  </div>
                  
                  {/* Digital Compass Points */}
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 text-[8px] font-mono text-emerald-500/40 tracking-[0.5em]">NORTH_STRATEGY</div>
                  <div className="absolute top-1/2 -right-24 -translate-y-1/2 text-[8px] font-mono text-emerald-500/40 tracking-[0.5em] rotate-90">EAST_YIELD</div>
                </motion.div>

                <div className="space-y-10 w-72">
                  <div className="flex justify-between items-end">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <motion.p 
                          key={loadingText}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="font-mono text-[10px] text-emerald-500 tracking-[0.2em] uppercase font-bold"
                        >
                          {loadingText}
                        </motion.p>
                      </div>
                      <p className="font-mono text-[8px] text-white/20 tracking-[0.3em] uppercase ml-3">System.Protocol.v3.42</p>
                    </div>
                    <div className="text-right">
                       <span className="font-mono text-2xl text-emerald-500 tabular-nums font-light">{progress}%</span>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="h-[1px] w-full bg-white/5" />
                    <motion.div 
                      className="absolute top-0 left-0 h-[1px] bg-emerald-500 shadow-[0_0_15px_#10b981]"
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                    />
                    {/* Progress particles */}
                    <motion.div 
                      className="absolute top-[-2px] h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_10px_#fff]"
                      style={{ left: `${progress}%` }}
                    />
                  </div>

                  <div className="flex justify-between px-1">
                    {[Cpu, Database, Globe, ArrowRight].map((Icon, i) => (
                      <div key={i} className="relative">
                        <Icon className={`h-3 w-3 transition-colors duration-500 ${progress > (i + 1) * 20 ? 'text-emerald-500' : 'text-white/10'}`} />
                        {progress > (i + 1) * 20 && (
                          <motion.div 
                            layoutId="indicator"
                            className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-emerald-400" 
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
             </div>

             {/* Scanning Line Effect */}
             <motion.div 
               animate={{ y: ["0%", "100%", "0%"] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute inset-0 w-full h-[2px] bg-emerald-500/20 shadow-[0_0_20px_#10b98122] z-50 pointer-events-none"
             />
          </motion.div>
        )}
      </AnimatePresence>

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
          <h1 className="text-[clamp(2.5rem,8vw,8rem)] font-serif font-light text-white leading-[1.05] tracking-tight text-balance">
            Engineering a <br />
            <span className="italic">Pesticide-Free</span> India
          </h1>

          <p className="text-lg md:text-2xl text-white/40 max-w-3xl mx-auto font-light leading-relaxed tracking-tight">
            We are redefining Indian agriculture by increasing yields and restoring soil health. Our mission: reducing input costs for farmers while delivering a toxin-free future to the nation.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-10 pt-8">
            <Link href="/contact">
              <Button size="lg" className="rounded-full bg-[#D4AF37] text-[#1A3C34] hover:bg-[#D4AF37]/90 h-16 md:h-20 px-10 md:px-16 text-[14px] uppercase tracking-[0.4em] font-bold transition-all shadow-[0_0_50px_rgba(212,175,55,0.2)] hover:shadow-[0_0_80px_rgba(212,175,55,0.4)] hover:scale-105 active:scale-95 group relative overflow-hidden border-none">
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
