"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { ArrowRight, Menu, X, Plus } from "lucide-react"
import Footer from "@/components/Footer"

// Features Section Component
function FeaturesSection() {
  const [hoveredLevel, setHoveredLevel] = useState<string | null>(null)

  return (
    <section id="features" className="relative py-32" style={{ backgroundColor: "#000000" }}>
      <div className="container mx-auto px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Label */}
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <span className="text-white/30 font-mono text-sm tracking-[0.3em] uppercase">
              003 — Features
            </span>
          </motion.div>

          {/* Header */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-white leading-tight mb-6">
              Your data, your way.
            </h2>
            <p className="text-lg text-white/50 font-light max-w-2xl">
              Choose how deep you want to go. The entire app adapts to your preferred level of detail.
            </p>
          </motion.div>

          {/* Horizontal Accordion */}
          <motion.div 
            className="flex flex-col md:flex-row gap-3 min-h-[480px]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            {/* Simple */}
            <motion.div
              className={`relative rounded-2xl border overflow-hidden cursor-pointer transition-all duration-500 ${
                hoveredLevel === "simple" 
                  ? "border-emerald-500/30 bg-gradient-to-br from-emerald-950/30 to-black" 
                  : "border-white/[0.06] bg-white/[0.02]"
              }`}
              animate={{ 
                flex: hoveredLevel === "simple" ? 4 : hoveredLevel === null ? 1 : 0.4,
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              onMouseEnter={() => setHoveredLevel("simple")}
              onMouseLeave={() => setHoveredLevel(null)}
            >
              <div className="p-6 h-full flex flex-col">
                <h3 className="text-xl font-light text-white mb-1">Simple</h3>
                <p className="text-white/30 text-xs">Human insights</p>

                <AnimatePresence>
                  {hoveredLevel === "simple" && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      className="flex-1 flex flex-col justify-center mt-6"
                    >
                      {/* Big Score Circle */}
                      <div className="flex items-center justify-center mb-8">
                        <div className="relative w-40 h-40">
                          <svg className="w-40 h-40 transform -rotate-90">
                            <circle cx="80" cy="80" r="70" stroke="rgba(255,255,255,0.06)" strokeWidth="8" fill="none" />
                            <circle cx="80" cy="80" r="70" 
                              stroke="#34d399" 
                              strokeWidth="8" 
                              fill="none" 
                              strokeDasharray="439.8" 
                              strokeDashoffset="66" 
                              strokeLinecap="round" 
                            />
                          </svg>
                          <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className="text-5xl font-extralight text-white">85</span>
                            <span className="text-white/30 text-xs mt-1">wellness</span>
                          </div>
                        </div>
                      </div>

                      {/* Simple Message */}
                      <div className="text-center">
                        <p className="text-white text-xl font-light mb-2">You're doing great</p>
                        <p className="text-white/40 text-sm">Ready for an active day</p>
                      </div>

                      {/* Simple Stats Row */}
                      <div className="flex justify-center gap-12 mt-8">
                        <div className="text-center">
                          <div className="text-2xl font-light text-emerald-400">High</div>
                          <div className="text-white/30 text-xs mt-1">Energy</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-light text-teal-400">Good</div>
                          <div className="text-white/30 text-xs mt-1">Sleep</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-light text-cyan-400">Low</div>
                          <div className="text-white/30 text-xs mt-1">Stress</div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Balanced */}
            <motion.div
              className={`relative rounded-2xl border overflow-hidden cursor-pointer transition-all duration-500 ${
                hoveredLevel === "balanced" 
                  ? "border-violet-500/30 bg-gradient-to-br from-violet-950/30 to-black" 
                  : "border-white/[0.06] bg-white/[0.02]"
              }`}
              animate={{ 
                flex: hoveredLevel === "balanced" ? 4 : hoveredLevel === null ? 1 : 0.4,
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              onMouseEnter={() => setHoveredLevel("balanced")}
              onMouseLeave={() => setHoveredLevel(null)}
            >
              <div className="p-6 h-full flex flex-col">
                <h3 className="text-xl font-light text-white mb-1">Balanced</h3>
                <p className="text-white/30 text-xs">Visual analytics</p>

                <AnimatePresence>
                  {hoveredLevel === "balanced" && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      className="flex-1 flex flex-col gap-6 mt-6"
                    >
                      {/* Sleep Stages - Clean */}
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-white/40 text-xs uppercase tracking-wider">Sleep Stages</span>
                          <span className="text-violet-400 text-lg font-light">7h 32m</span>
                        </div>
                        <div className="flex h-14 rounded-lg overflow-hidden gap-1">
                          <div className="bg-cyan-500 w-[15%]" />
                          <div className="bg-blue-500 w-[25%]" />
                          <div className="bg-violet-500 w-[45%]" />
                          <div className="bg-purple-500 w-[15%]" />
                        </div>
                        <div className="flex justify-between mt-3 text-xs text-white/40">
                          <span>Awake 15%</span>
                          <span>Light 25%</span>
                          <span>Deep 45%</span>
                          <span>REM 15%</span>
                        </div>
                      </div>

                      {/* Weekly Activity Chart - Strong */}
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-white/40 text-xs uppercase tracking-wider">Weekly Activity</span>
                          <span className="text-violet-400 text-sm">+18%</span>
                        </div>
                        <div className="flex items-end justify-between h-28 gap-2">
                          {[65, 45, 80, 55, 95, 70, 85].map((h, i) => (
                            <div key={i} className="flex-1 flex flex-col items-center gap-2">
                              <div 
                                className="w-full rounded-sm bg-violet-500"
                                style={{ height: `${h}%` }}
                              />
                              <span className="text-xs text-white/30">{['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Stats Row - Clean */}
                      <div className="flex justify-between pt-4 border-t border-white/[0.06]">
                        <div>
                          <div className="text-2xl font-light text-white">84</div>
                          <div className="text-white/30 text-xs">Sleep Score</div>
                        </div>
                        <div>
                          <div className="text-2xl font-light text-white">92%</div>
                          <div className="text-white/30 text-xs">Efficiency</div>
                        </div>
                        <div>
                          <div className="text-2xl font-light text-white">12m</div>
                          <div className="text-white/30 text-xs">Latency</div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Advanced */}
            <motion.div
              className={`relative rounded-2xl border overflow-hidden cursor-pointer transition-all duration-500 ${
                hoveredLevel === "advanced" 
                  ? "border-orange-500/30 bg-gradient-to-br from-orange-950/30 to-black" 
                  : "border-white/[0.06] bg-white/[0.02]"
              }`}
              animate={{ 
                flex: hoveredLevel === "advanced" ? 4 : hoveredLevel === null ? 1 : 0.4,
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              onMouseEnter={() => setHoveredLevel("advanced")}
              onMouseLeave={() => setHoveredLevel(null)}
            >
              <div className="p-6 h-full flex flex-col">
                <h3 className="text-xl font-light text-white mb-1">Advanced</h3>
                <p className="text-white/30 text-xs">Full metrics</p>

                <AnimatePresence>
                  {hoveredLevel === "advanced" && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      className="flex-1 flex flex-col gap-6 mt-6"
                    >
                      {/* HRV Chart - Strong */}
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-white/40 text-xs uppercase tracking-wider">HRV Trend</span>
                          <div className="flex items-baseline gap-2">
                            <span className="text-3xl font-light text-white">52</span>
                            <span className="text-white/30 text-sm">ms</span>
                            <span className="text-emerald-400 text-sm ml-2">↑ 8%</span>
                          </div>
                        </div>
                        <div className="flex items-end gap-1 h-20">
                          {[35, 42, 38, 45, 40, 48, 44, 52, 47, 55, 50, 52, 48, 54, 52].map((v, i) => (
                            <div key={i} className="flex-1 bg-orange-500 rounded-sm" style={{ height: `${v}%` }} />
                          ))}
                        </div>
                      </div>

                      {/* Metrics Row - Clean */}
                      <div className="grid grid-cols-3 gap-6">
                        <div>
                          <div className="text-white/40 text-xs uppercase tracking-wider mb-2">VO₂ Max</div>
                          <div className="flex items-baseline gap-1">
                            <span className="text-3xl font-light text-white">48.2</span>
                            <span className="text-white/30 text-xs">ml/kg</span>
                          </div>
                          <div className="h-2 bg-white/[0.06] rounded-full mt-3 overflow-hidden">
                            <div className="h-full w-[82%] bg-emerald-500 rounded-full" />
                          </div>
                          <div className="text-emerald-400 text-xs mt-2">Elite</div>
                        </div>
                        <div>
                          <div className="text-white/40 text-xs uppercase tracking-wider mb-2">Resting HR</div>
                          <div className="flex items-baseline gap-1">
                            <span className="text-3xl font-light text-white">58</span>
                            <span className="text-white/30 text-xs">bpm</span>
                          </div>
                          <div className="h-2 bg-white/[0.06] rounded-full mt-3 overflow-hidden">
                            <div className="h-full w-[45%] bg-red-500 rounded-full" />
                          </div>
                          <div className="text-white/40 text-xs mt-2">Optimal</div>
                        </div>
                        <div>
                          <div className="text-white/40 text-xs uppercase tracking-wider mb-2">Body Temp</div>
                          <div className="flex items-baseline gap-1">
                            <span className="text-3xl font-light text-white">36.8</span>
                            <span className="text-white/30 text-xs">°C</span>
                          </div>
                          <div className="h-2 bg-white/[0.06] rounded-full mt-3 overflow-hidden">
                            <div className="h-full w-[50%] bg-amber-500 rounded-full" />
                          </div>
                          <div className="text-white/40 text-xs mt-2">Normal</div>
                        </div>
                      </div>

                      {/* Recovery Circle + Bars */}
                      <div className="flex items-center gap-8 pt-4 border-t border-white/[0.06]">
                        <div className="relative w-24 h-24 flex-shrink-0">
                          <svg className="w-24 h-24 transform -rotate-90">
                            <circle cx="48" cy="48" r="40" stroke="rgba(255,255,255,0.06)" strokeWidth="6" fill="none" />
                            <circle cx="48" cy="48" r="40" 
                              stroke="#f97316" 
                              strokeWidth="6" 
                              fill="none" 
                              strokeDasharray="251.2" 
                              strokeDashoffset="50" 
                              strokeLinecap="round" 
                            />
                          </svg>
                          <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className="text-2xl font-light text-white">80</span>
                            <span className="text-white/30 text-[10px]">recovery</span>
                          </div>
                        </div>
                        <div className="flex-1 space-y-3">
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-white/40 text-xs">Sleep Quality</span>
                              <span className="text-white text-xs">85%</span>
                            </div>
                            <div className="h-2 bg-white/[0.06] rounded-full overflow-hidden">
                              <div className="h-full w-[85%] bg-violet-500 rounded-full" />
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-white/40 text-xs">Strain Balance</span>
                              <span className="text-white text-xs">72%</span>
                            </div>
                            <div className="h-2 bg-white/[0.06] rounded-full overflow-hidden">
                              <div className="h-full w-[72%] bg-orange-500 rounded-full" />
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-white/40 text-xs">HRV Status</span>
                              <span className="text-white text-xs">78%</span>
                            </div>
                            <div className="h-2 bg-white/[0.06] rounded-full overflow-hidden">
                              <div className="h-full w-[78%] bg-emerald-500 rounded-full" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>

          {/* Bottom note */}
          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <p className="text-white/30 font-light text-sm">
              Hover to explore each level. Switch anytime in the app.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

const aboutFeatures = [
  {
    id: 1,
    title: "Understand your body",
    shortDescription: "Biometrics, recovery, sleep, readiness, VO₂, stress.",
    image: "/images/try.png",
    fullContent: {
      paragraphs: [
        "We collect and analyze your biometric data to understand how your body is actually responding over time.",
        "Sleep quality, recovery, readiness, VO₂, stress, and daily signals are interpreted together — not in isolation — to reveal patterns, limits, and opportunities for improvement.",
      ],
    },
  },
  {
    id: 2,
    title: "Understand your mind",
    shortDescription: "Daily check-ins, emotional journaling, mental load, focus patterns.",
    image: "/images/try2.png",
    fullContent: {
      paragraphs: [
        "Your mental state matters as much as your physical one.",
        "Through daily check-ins, emotional journaling, and focus tracking, Avance helps you recognize mental load, emotional patterns, and how they influence your energy, motivation, and performance.",
      ],
    },
  },
  {
    id: 3,
    title: "Avance AI",
    shortDescription: "Personal AI companions that help you reflect, plan, and adapt.",
    image: "/images/try3.png",
    fullContent: {
      paragraphs: [
        "Avance's AI companions bring everything together.",
        "They connect your biometric signals with your mental state, help you reflect on what's happening, and guide you to plan, adapt, and make decisions that support both performance and long-term health.",
      ],
    },
  },
]

export default function AvanceLanding() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [selectedFeature, setSelectedFeature] = useState<number | null>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="relative dark" style={{ backgroundColor: "#000000" }}>
      {/* Header */}
      <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-6xl px-4 md:px-8">
        <nav className={`bg-black/10 backdrop-blur-xl border border-white/20 px-4 md:px-8 py-4 ${isMobileMenuOpen ? 'rounded-2xl' : 'rounded-lg'}`}>
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/">
                <Image
                  src="/images/logo-avance1.png"
                  alt="Avance"
                  width={35}
                  height={35}
                  className="object-contain md:hidden"
                />
                <Image
                  src="/images/12345.png"
                  alt="Avance"
                  width={120}
                  height={24}
                  className="object-contain hidden md:block"
                />
              </Link>
            </div>

            {/* Navigation - Desktop */}
            <div className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
              <button
                onClick={() => scrollToSection("about")}
                className="text-white/70 hover:text-white transition-all duration-300 font-light text-sm tracking-wider uppercase"
              >
                About
              </button>
              <a
                href="/shop"
                className="text-white/70 hover:text-white transition-all duration-300 font-light text-sm tracking-wider uppercase"
              >
                Shop
              </a>
              <button
                onClick={() => scrollToSection("features")}
                className="text-white/70 hover:text-white transition-all duration-300 font-light text-sm tracking-wider uppercase"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("community")}
                className="text-white/70 hover:text-white transition-all duration-300 font-light text-sm tracking-wider uppercase"
              >
                Community
              </button>
            </div>

            {/* Desktop Download Button */}
            <button
              onClick={() => scrollToSection("download")}
              className="hidden md:flex group items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded px-4 py-2 text-white/90 hover:text-white hover:bg-white/20 transition-all duration-300"
            >
              <span className="text-sm font-light tracking-wider uppercase">Download</span>
              <ArrowRight className="w-4 h-4 group-hover:-rotate-45 transition-transform duration-300" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center text-white/90 hover:text-white transition-all"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pt-4 border-t border-white/10 space-y-4">
              <button
                onClick={() => {
                  scrollToSection("about")
                  setIsMobileMenuOpen(false)
                }}
                className="block w-full text-left text-white/70 hover:text-white transition-all duration-300 font-light text-sm tracking-wider uppercase py-2"
              >
                About
              </button>
              <a
                href="/shop"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-left text-white/70 hover:text-white transition-all duration-300 font-light text-sm tracking-wider uppercase py-2"
              >
                Shop
              </a>
              <button
                onClick={() => {
                  scrollToSection("features")
                  setIsMobileMenuOpen(false)
                }}
                className="block w-full text-left text-white/70 hover:text-white transition-all duration-300 font-light text-sm tracking-wider uppercase py-2"
              >
                Features
              </button>
              <button
                onClick={() => {
                  scrollToSection("community")
                  setIsMobileMenuOpen(false)
                }}
                className="block w-full text-left text-white/70 hover:text-white transition-all duration-300 font-light text-sm tracking-wider uppercase py-2"
              >
                Community
              </button>
              <button
                onClick={() => {
                  scrollToSection("download")
                  setIsMobileMenuOpen(false)
                }}
                className="block w-full text-left text-white/90 hover:text-white transition-all duration-300 font-light text-sm tracking-wider uppercase py-2"
              >
                Download
              </button>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center bg-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/back1.jpeg"
            alt="Avance Hero"
            fill
            className="object-cover"
            priority
          />
          {/* Gradient fade to black at bottom */}
          <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-b from-transparent to-black pointer-events-none" />
        </div>
        <div className="relative z-10 container mx-auto px-8">
          <div className="max-w-xl">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-extralight leading-none tracking-tight">
              <span className="block text-white drop-shadow-lg">You.</span>
              <span className="block text-white/90 drop-shadow-lg">Powered.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mt-8 drop-shadow-sm tracking-wide leading-relaxed font-mono">
              Meet Avance, your AI wellness companion
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-32" style={{ backgroundColor: "#000000" }}>
        <div className="container mx-auto px-8">
          <div className="max-w-6xl mx-auto">
            
            {/* Section Label */}
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <span className="text-white/30 font-mono text-sm tracking-[0.3em] uppercase">
                001 — About
              </span>
            </motion.div>

            {/* Mission Statement */}
            <motion.div 
              className="text-center max-w-4xl mx-auto mb-20"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-white leading-[1.15] tracking-tight mb-10">
                Be understood, not just measured.
              </h2>
              <p className="text-lg md:text-xl text-white/50 font-light leading-relaxed">
                Because performance isn't only about what your body can do, but how you feel inside it. Avance connects biometrics, mental health, and AI companions to support your performance, well-being, and long-term health.
              </p>
            </motion.div>

            {/* Feature Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              {aboutFeatures.map((feature, index) => (
                <motion.div
                  key={feature.id}
                  className="relative bg-white/[0.02] hover:bg-white/[0.04] p-8 cursor-pointer group transition-all duration-300 h-full border border-white/[0.05] rounded-3xl"
                  onClick={() => setSelectedFeature(feature.id)}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <button className="absolute top-6 right-6 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center transition-colors z-10">
                    <Plus className="w-4 h-4 text-white/40 group-hover:text-white/70" />
                  </button>

                  {feature.image && (
                    <div className="flex justify-center mb-4">
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        width={240}
                        height={240}
                        className="object-contain"
                      />
                    </div>
                  )}

                  <div className={feature.image ? "" : "mt-8"}>
                    <h3 className="text-2xl font-light leading-tight text-white mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-white/40 font-light leading-relaxed">
                      {feature.shortDescription}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>

        {/* Expanded Modal */}
        <AnimatePresence>
          {selectedFeature && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
                onClick={() => setSelectedFeature(null)}
              />

              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pt-28">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 20 }}
                  transition={{ duration: 0.2 }}
                  className="bg-[#111] rounded-3xl p-8 max-w-lg w-full border border-white/10 relative"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Close button */}
                  <button
                    onClick={() => setSelectedFeature(null)}
                    className="absolute top-4 right-4 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:border-white/40 transition-colors"
                  >
                    <X className="w-4 h-4 text-white/60" />
                  </button>

                  {aboutFeatures.find((f) => f.id === selectedFeature) && (
                    <>
                      <h2 className="text-2xl md:text-3xl font-light tracking-tight text-white mb-6 pr-8">
                        {aboutFeatures.find((f) => f.id === selectedFeature)?.title}
                      </h2>

                      <div className="space-y-4">
                        {aboutFeatures
                          .find((f) => f.id === selectedFeature)
                          ?.fullContent.paragraphs.map((paragraph, index) => (
                            <p key={index} className="text-white/50 text-base leading-relaxed font-light">
                              {paragraph}
                            </p>
                          ))}
                      </div>
                    </>
                  )}
                </motion.div>
              </div>
            </>
          )}
        </AnimatePresence>
      </section>

      {/* Shop Preview Section */}
      <section id="shop-preview" className="relative py-32" style={{ backgroundColor: "#000000" }}>
        <div className="container mx-auto px-8">
          <div className="max-w-6xl mx-auto">
            
            {/* Section Label */}
            <motion.div 
              className="mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <span className="text-white/30 font-mono text-sm tracking-[0.3em] uppercase">
                002 — Shop
              </span>
            </motion.div>

            {/* Header */}
            <motion.div 
              className="flex flex-col md:flex-row md:items-end md:justify-between mb-12"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-white leading-tight mb-6 md:mb-0">
                The System
              </h2>
              <a 
                href="/shop"
                className="group inline-flex items-center gap-3 text-white/60 hover:text-white transition-all duration-300"
              >
                <span className="font-mono text-sm uppercase tracking-wider">View All Products</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            {/* Video Showcase */}
            <motion.div 
              className="relative rounded-2xl overflow-hidden mb-16"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto object-cover"
                style={{ maxHeight: '500px', objectFit: 'cover' }}
              >
                <source src="/addavance1.mp4" type="video/mp4" />
              </video>
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              {/* CTA over video */}
              <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between">
                <div>
                  <p className="text-white/60 font-mono text-xs uppercase tracking-wider mb-2">Discover the ecosystem</p>
                  <h3 className="text-white text-2xl md:text-3xl font-extralight">Premium AI Wearables</h3>
                </div>
                <a 
                  href="/shop"
                  className="hidden md:inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded text-white font-mono text-xs uppercase tracking-wider hover:bg-white/20 transition-all"
                >
                  Shop Now
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>


          </div>
        </div>
      </section>

      {/* Features Section */}
      <FeaturesSection />

      {/* Community Section */}
      <section id="community" className="relative py-32" style={{ backgroundColor: "#0a0a0a" }}>
        <div className="container mx-auto px-8">
          <div className="max-w-6xl mx-auto">
            
            {/* Section Label */}
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <span className="text-white/30 font-mono text-sm tracking-[0.3em] uppercase">
                004 — Community
              </span>
            </motion.div>

            {/* Header */}
            <motion.div 
              className="mb-12"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-white leading-tight">
                Trusted by the best.
              </h2>
            </motion.div>

            {/* Bento Grid */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              
              {/* Large - Ultra Runner with image */}
              <div className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden group cursor-pointer" style={{ minHeight: '400px' }}>
                <Image
                  src="/images/perso1.jpeg"
                  alt="Elena Voss"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="text-white text-2xl font-light mb-1">Elena Voss</div>
                  <div className="text-white/60 text-sm font-mono">Ultramarathon World Champion</div>
                </div>
              </div>

              {/* Quote card */}
              <div className="col-span-2 bg-white/[0.03] rounded-2xl p-6 flex flex-col justify-between" style={{ minHeight: '190px' }}>
                <p className="text-white/80 text-lg md:text-xl font-light leading-relaxed">
                  "Avance understands that performance is mental, not just physical."
                </p>
                <div>
                  <div className="text-white/50 text-sm">Michael Torres</div>
                  <div className="text-white/30 text-xs font-mono">Elena Voss' Performance Coach</div>
                </div>
              </div>

              {/* Cyclist */}
              <div className="col-span-1 relative rounded-2xl overflow-hidden group cursor-pointer" style={{ minHeight: '190px' }}>
                <Image
                  src="/images/perso2.jpeg"
                  alt="Luca Bernardi"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="text-white text-sm font-light">Luca Bernardi</div>
                  <div className="text-white/50 text-xs font-mono">Cycling World Champion</div>
                </div>
              </div>

              {/* Golfer */}
              <div className="col-span-1 relative rounded-2xl overflow-hidden group cursor-pointer" style={{ minHeight: '190px' }}>
                <Image
                  src="/images/perso3.jpeg"
                  alt="Marcus Reid"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="text-white text-sm font-light">Marcus Reid</div>
                  <div className="text-white/50 text-xs font-mono">Pro Golfer • 3x Major</div>
                </div>
              </div>

              {/* Athlete 4 */}
              <div className="col-span-1 relative rounded-2xl overflow-hidden group cursor-pointer" style={{ minHeight: '190px' }}>
                <Image
                  src="/images/perso4.jpeg"
                  alt="Kai Tanaka"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="text-white text-sm font-light">Kai Tanaka</div>
                  <div className="text-white/50 text-xs font-mono">Olympic Swimmer</div>
                </div>
              </div>

              {/* Quote card 2 */}
              <div className="col-span-2 bg-white/[0.03] rounded-2xl p-6 flex flex-col justify-between">
                <p className="text-white/80 text-base font-light leading-relaxed">
                  "The AI coach feels like it actually knows me. Not generic advice — real understanding."
                </p>
                <div>
                  <div className="text-white/50 text-sm">David R.</div>
                  <div className="text-white/30 text-xs font-mono">Personal Trainer</div>
                </div>
              </div>

              {/* Stats card */}
              <div className="col-span-1 bg-white/[0.03] rounded-2xl p-5 flex flex-col justify-center items-center text-center">
                <div className="text-white text-4xl font-extralight mb-1">50K+</div>
                <div className="text-white/40 text-xs font-mono uppercase tracking-wider">Active Users</div>
              </div>


            </motion.div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

    </div>
  )
}
