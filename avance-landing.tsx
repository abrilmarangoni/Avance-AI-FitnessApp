"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { ArrowRight, Menu, X, Plus } from "lucide-react"
import Footer from "@/components/Footer"

// Features Section Component
function FeaturesSection() {
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
            className="mb-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-white leading-tight mb-6">
              Your data, your way.
            </h2>
            <p className="text-lg text-white/50 font-light max-w-2xl">
              Choose how deep you want to go. Compare all three levels side by side.
            </p>
          </motion.div>

        </div>
      </div>

      {/* Cards Container */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true, margin: "-50px" }}
        className="container mx-auto px-8"
      >
        <div className="flex flex-col lg:flex-row gap-6 justify-center max-w-6xl mx-auto">

          {/* Simple Card */}
          <div className="flex-1 min-w-0 max-w-[380px]">
            <div className="h-[520px] rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 flex flex-col">
              {/* Header */}
              <div className="mb-6">
                <div className="text-emerald-400 text-xs uppercase tracking-wider mb-2">Simple</div>
                <h3 className="text-2xl font-light text-white">Human insights</h3>
              </div>

              {/* Big Score Circle */}
              <div className="flex items-center justify-center mb-4">
                <div className="relative w-36 h-36">
                  <svg className="w-36 h-36 transform -rotate-90">
                    <circle cx="72" cy="72" r="62" stroke="rgba(255,255,255,0.06)" strokeWidth="8" fill="none" />
                    <circle cx="72" cy="72" r="62" 
                      stroke="#34d399" 
                      strokeWidth="8" 
                      fill="none" 
                      strokeDasharray="389.6" 
                      strokeDashoffset="58" 
                      strokeLinecap="round" 
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-5xl font-extralight text-white">85</span>
                    <span className="text-white/30 text-xs mt-1">wellness</span>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="text-center mb-4">
                <p className="text-white text-lg font-light mb-1">You're doing great</p>
                <p className="text-white/40 text-sm">Ready for an active day</p>
              </div>

              {/* Week Trend - Simple */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white/40 text-xs">This week</span>
                  <span className="text-emerald-400 text-xs">↑ 12%</span>
                </div>
                <div className="flex items-end gap-1 h-10">
                  {[60, 70, 55, 80, 75, 90, 85].map((h, i) => (
                    <div 
                      key={i} 
                      className={`flex-1 rounded-sm ${i === 6 ? 'bg-emerald-400' : 'bg-white/10'}`}
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>

              {/* Simple Stats */}
              <div className="flex justify-between pt-4 border-t border-white/[0.06]">
                <div className="text-center">
                  <div className="text-lg font-light text-emerald-400">High</div>
                  <div className="text-white/30 text-[10px] mt-1">Energy</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-light text-teal-400">Good</div>
                  <div className="text-white/30 text-[10px] mt-1">Sleep</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-light text-cyan-400">Low</div>
                  <div className="text-white/30 text-[10px] mt-1">Stress</div>
                </div>
              </div>
            </div>
          </div>

          {/* Balanced Card */}
          <div className="flex-1 min-w-0 max-w-[380px]">
            <div className="h-[520px] rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 flex flex-col">
              {/* Header */}
              <div className="mb-6">
                <div className="text-violet-400 text-xs uppercase tracking-wider mb-2">Balanced</div>
                <h3 className="text-2xl font-light text-white">Visual analytics</h3>
              </div>

              {/* Sleep Stages */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-white/40 text-xs uppercase tracking-wider">Sleep</span>
                  <span className="text-violet-400 text-lg font-light">7h 32m</span>
                </div>
                <div className="flex h-12 rounded-lg overflow-hidden gap-1">
                  <div className="bg-cyan-500 w-[15%]" />
                  <div className="bg-blue-500 w-[25%]" />
                  <div className="bg-violet-500 w-[45%]" />
                  <div className="bg-purple-500 w-[15%]" />
                </div>
                <div className="flex justify-between mt-2 text-[10px] text-white/30">
                  <span>Awake</span>
                  <span>Light</span>
                  <span>Deep</span>
                  <span>REM</span>
                </div>
              </div>

              {/* Weekly Activity - Line Chart */}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-white/40 text-xs uppercase tracking-wider">Activity</span>
                  <span className="text-violet-400 text-sm">+18%</span>
                </div>
                <div className="relative h-28 overflow-visible">
                  {/* SVG Line Chart */}
                  <svg className="w-full h-full overflow-visible" viewBox="0 10 300 90" preserveAspectRatio="xMidYMid meet">
                    {/* Gradient fill under the line */}
                    <defs>
                      <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    {/* Area fill */}
                    <path
                      d="M0,75 C30,65 40,70 50,65 C70,55 80,45 100,40 C120,35 130,55 150,55 C170,55 180,30 200,25 C220,20 240,40 250,45 C270,50 290,35 300,30 L300,100 L0,100 Z"
                      fill="url(#lineGradient)"
                    />
                    {/* Line */}
                    <path
                      d="M0,75 C30,65 40,70 50,65 C70,55 80,45 100,40 C120,35 130,55 150,55 C170,55 180,30 200,25 C220,20 240,40 250,45 C270,50 290,35 300,30"
                      fill="none"
                      stroke="#8b5cf6"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    {/* Data points */}
                    {[[0, 75], [50, 65], [100, 40], [150, 55], [200, 25], [250, 45], [300, 30]].map(([x, y], i) => (
                      <circle key={i} cx={x} cy={y} r="4" fill="#8b5cf6" />
                    ))}
                  </svg>
                </div>
                {/* Days */}
                <div className="flex justify-between mt-2">
                  {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
                    <span key={i} className="text-[10px] text-white/30 w-8 text-center">{day}</span>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="flex justify-between pt-6 border-t border-white/[0.06]">
                <div>
                  <div className="text-2xl font-light text-white">84</div>
                  <div className="text-white/30 text-xs">Score</div>
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
            </div>
          </div>

          {/* Advanced Card */}
          <div className="flex-1 min-w-0 max-w-[380px]">
            <div className="h-[520px] rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 flex flex-col">
              {/* Header */}
              <div className="mb-6">
                <div className="text-orange-400 text-xs uppercase tracking-wider mb-2">Advanced</div>
                <h3 className="text-2xl font-light text-white">Full metrics</h3>
              </div>

              {/* HRV Chart */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-white/40 text-xs uppercase tracking-wider">HRV</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-light text-white">52</span>
                    <span className="text-white/30 text-xs">ms</span>
                    <span className="text-emerald-400 text-xs ml-2">↑8%</span>
                  </div>
                </div>
                <div className="flex items-end gap-[3px] h-16">
                  {[35, 42, 38, 45, 40, 48, 44, 52, 47, 55, 50, 52, 48, 54, 52].map((v, i) => (
                    <div key={i} className="flex-1 bg-orange-500 rounded-[2px]" style={{ height: `${v}%` }} />
                  ))}
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div>
                  <div className="text-white/30 text-[10px] uppercase mb-1">VO₂</div>
                  <div className="text-xl font-light text-white">48.2</div>
                  <div className="h-1.5 bg-white/[0.06] rounded-full mt-2 overflow-hidden">
                    <div className="h-full w-[82%] bg-emerald-500 rounded-full" />
                  </div>
                </div>
                <div>
                  <div className="text-white/30 text-[10px] uppercase mb-1">RHR</div>
                  <div className="text-xl font-light text-white">58</div>
                  <div className="h-1.5 bg-white/[0.06] rounded-full mt-2 overflow-hidden">
                    <div className="h-full w-[45%] bg-red-500 rounded-full" />
                  </div>
                </div>
                <div>
                  <div className="text-white/30 text-[10px] uppercase mb-1">Temp</div>
                  <div className="text-xl font-light text-white">36.8°</div>
                  <div className="h-1.5 bg-white/[0.06] rounded-full mt-2 overflow-hidden">
                    <div className="h-full w-[50%] bg-amber-500 rounded-full" />
                  </div>
                </div>
              </div>

              {/* Recovery */}
              <div className="flex-1 flex items-center gap-6 pt-4 border-t border-white/[0.06]">
                <div className="relative w-20 h-20 flex-shrink-0">
                  <svg className="w-20 h-20 transform -rotate-90">
                    <circle cx="40" cy="40" r="34" stroke="rgba(255,255,255,0.06)" strokeWidth="5" fill="none" />
                    <circle cx="40" cy="40" r="34" 
                      stroke="#f97316" 
                      strokeWidth="5" 
                      fill="none" 
                      strokeDasharray="213.6" 
                      strokeDashoffset="42.7" 
                      strokeLinecap="round" 
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-xl font-light text-white">80</span>
                  </div>
                </div>
                <div className="flex-1 space-y-2">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-white/30 text-[10px]">Sleep</span>
                      <span className="text-white/50 text-[10px]">85%</span>
                    </div>
                    <div className="h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
                      <div className="h-full w-[85%] bg-violet-500 rounded-full" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-white/30 text-[10px]">Strain</span>
                      <span className="text-white/50 text-[10px]">72%</span>
                    </div>
                    <div className="h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
                      <div className="h-full w-[72%] bg-orange-500 rounded-full" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-white/30 text-[10px]">HRV</span>
                      <span className="text-white/50 text-[10px]">78%</span>
                    </div>
                    <div className="h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
                      <div className="h-full w-[78%] bg-emerald-500 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </motion.div>
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
        <div className="absolute inset-0 z-0 flex items-end justify-center">
          <div className="w-full h-[85%] relative">
            <Image
              src="/images/back1.jpeg"
              alt="Avance Hero"
              fill
              className="object-contain object-bottom"
              priority
            />
          </div>
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
