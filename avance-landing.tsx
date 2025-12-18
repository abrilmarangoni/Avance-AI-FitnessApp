"use client"

import Image from "next/image"
import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Menu, X, Plus } from "lucide-react"
import Footer from "@/components/Footer"

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
    title: "Connect it all with Avance AI",
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
        <nav className={`bg-black/10 backdrop-blur-xl border border-white/20 px-4 md:px-8 py-4 ${isMobileMenuOpen ? 'rounded-2xl' : 'rounded-full'}`}>
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
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
              className="hidden md:flex group items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 text-white/90 hover:text-white hover:bg-white/20 transition-all duration-300"
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
      <section id="home" className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/background1.jpeg"
            alt="Avance - You. Powered."
            fill
            className="object-cover object-center scale-100"
            priority
            quality={100}
          />
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
            <div className="mb-8">
              <span className="text-white/30 font-mono text-sm tracking-[0.3em] uppercase">
                001 — About
              </span>
            </div>

            {/* Mission Statement */}
            <div className="text-center max-w-4xl mx-auto mb-20">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-white leading-[1.15] tracking-tight mb-10">
                Be understood, not just measured.
              </h2>
              <p className="text-lg md:text-xl text-white/50 font-light leading-relaxed">
                Because performance isn't only about what your body can do, but how you feel inside it. Avance connects biometrics, mental health, and AI companions to support your performance, well-being, and long-term health.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              {aboutFeatures.map((feature) => (
                <div
                  key={feature.id}
                  className="relative bg-white/[0.02] hover:bg-white/[0.04] p-8 cursor-pointer group transition-all duration-300 h-full border border-white/[0.05] rounded-3xl"
                  onClick={() => setSelectedFeature(feature.id)}
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
                </div>
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
            <div className="mb-12">
              <span className="text-white/30 font-mono text-sm tracking-[0.3em] uppercase">
                002 — Shop
              </span>
            </div>

            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
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
            </div>

            {/* Video Showcase */}
            <div className="relative rounded-2xl overflow-hidden mb-16">
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
                  className="hidden md:inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white font-mono text-xs uppercase tracking-wider hover:bg-white/20 transition-all"
                >
                  Shop Now
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative py-32" style={{ backgroundColor: "#000000" }}>
        <div className="container mx-auto px-8">
          <div className="max-w-6xl mx-auto">
            
            {/* Section Label */}
            <div className="mb-8">
              <span className="text-white/30 font-mono text-sm tracking-[0.3em] uppercase">
                003 — Features
              </span>
            </div>

            {/* Header */}
            <div className="mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-white leading-tight mb-6">
                Built for real wellness.
              </h2>
            </div>

            {/* Key Feature - Adaptive Experience */}
            <div className="bg-white/[0.02] border border-white/[0.05] rounded-3xl p-10 mb-8">
              <div className="text-white/30 font-mono text-xs uppercase tracking-wider mb-6">Key Feature</div>
              <h3 className="text-3xl md:text-4xl font-light text-white mb-4">The entire app adapts to you.</h3>
              <p className="text-white/50 font-light leading-relaxed mb-8 max-w-2xl">
                Not just metrics — everything. The way you see data, how AI talks to you, workout complexity, insights depth. Choose your level anytime.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white/[0.03] rounded-2xl p-6">
                  <div className="text-white font-light text-xl mb-3">Simple</div>
                  <p className="text-white/40 text-sm font-light leading-relaxed">Clear language, icons, human insights. "You're tired today, take it easy."</p>
                </div>
                <div className="bg-white/[0.03] rounded-2xl p-6">
                  <div className="text-white font-light text-xl mb-3">Balanced</div>
                  <p className="text-white/40 text-sm font-light leading-relaxed">Structured summaries, trends, explained metrics. "Sleep down, recovery affected."</p>
                </div>
                <div className="bg-white/[0.03] rounded-2xl p-6">
                  <div className="text-white font-light text-xl mb-3">Technical</div>
                  <p className="text-white/40 text-sm font-light leading-relaxed">Raw data, baselines, minimal interpretation. "HRV -12% vs baseline."</p>
                </div>
              </div>
            </div>

            {/* Features Grid - Simplified */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              
              <div className="bg-white/[0.02] border border-white/[0.05] rounded-2xl p-6">
                <h3 className="text-lg font-light text-white mb-2">Wearable Ecosystem</h3>
                <p className="text-white/40 text-sm font-light">Watches, Bands, Rings. Your devices, your data. No dependencies.</p>
              </div>

              <div className="bg-white/[0.02] border border-white/[0.05] rounded-2xl p-6">
                <h3 className="text-lg font-light text-white mb-2">AI Personal Coach</h3>
                <p className="text-white/40 text-sm font-light">Practical AI that adjusts training based on your body and mind.</p>
              </div>

              <div className="bg-white/[0.02] border border-white/[0.05] rounded-2xl p-6">
                <h3 className="text-lg font-light text-white mb-2">Mental & Emotional</h3>
                <p className="text-white/40 text-sm font-light">Daily check-ins, mood tracking, body-mind pattern detection.</p>
              </div>

              <div className="bg-white/[0.02] border border-white/[0.05] rounded-2xl p-6">
                <h3 className="text-lg font-light text-white mb-2">Privacy First</h3>
                <p className="text-white/40 text-sm font-light">Your data, your control. HIPAA-aware, privacy-first architecture.</p>
              </div>

            </div>

            {/* One-liner */}
            <div className="border-t border-white/10 pt-10">
              <p className="text-white/40 font-light text-base leading-relaxed max-w-2xl">
                Everything connected — at your level.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="relative py-32" style={{ backgroundColor: "#0a0a0a" }}>
        <div className="container mx-auto px-8">
          <div className="max-w-6xl mx-auto">
            
            {/* Section Label */}
            <div className="mb-8">
              <span className="text-white/30 font-mono text-sm tracking-[0.3em] uppercase">
                004 — Community
              </span>
            </div>

            {/* Header */}
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-white leading-tight">
                Trusted by the best.
              </h2>
            </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              
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


            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

    </div>
  )
}
