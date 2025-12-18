"use client"

import Image from "next/image"
import { useState } from "react"
import { ArrowRight, Menu, X } from "lucide-react"

export default function AvanceLanding() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
            src="/images/avance-hero.png"
            alt="Avance - You. Powered."
            fill
            className="object-cover object-center scale-100"
            priority
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent"></div>
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
      <section id="about" className="relative min-h-screen py-32" style={{ backgroundColor: "#000000" }}>
        <div className="container mx-auto px-8">
          <div className="max-w-6xl mx-auto">
            
            {/* Section Label */}
            <div className="mb-20">
              <span className="text-white/30 font-mono text-sm tracking-[0.3em] uppercase">
                001 — About
              </span>
            </div>

            {/* Main Content */}
            <div className="grid lg:grid-cols-2 gap-20 items-start">
              
              {/* Left - Big Statement */}
              <div>
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-extralight text-white leading-[1.1] tracking-tight">
                  Your body.
                  <br />
                  <span className="text-white/40">Your mind.</span>
                  <br />
                  One system.
                </h2>
              </div>

              {/* Right - Description */}
              <div className="lg:pt-8">
                <p className="text-xl md:text-2xl text-white/70 font-light leading-relaxed mb-12">
                  Avance is an AI-powered wellness platform that adapts to you — your goals, your mood, your body. No generic plans. No one-size-fits-all.
                </p>
                
                <p className="text-lg text-white/50 font-light leading-relaxed mb-16">
                  We combine intelligent coaching with real-time emotional awareness to create a fitness experience that actually understands what you need, when you need it.
                </p>

                {/* Stats */}
                <div className="flex gap-16">
                  <div>
                    <div className="text-4xl font-extralight text-white mb-2">24/7</div>
                    <div className="text-sm text-white/40 font-mono uppercase tracking-wider">AI Support</div>
                  </div>
                  <div>
                    <div className="text-4xl font-extralight text-white mb-2">100%</div>
                    <div className="text-sm text-white/40 font-mono uppercase tracking-wider">Personalized</div>
                  </div>
                  <div>
                    <div className="text-4xl font-extralight text-white mb-2">∞</div>
                    <div className="text-sm text-white/40 font-mono uppercase tracking-wider">Adaptable</div>
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom Line */}
            <div className="mt-32 pt-12 border-t border-white/10">
              <p className="text-white/30 font-mono text-sm tracking-wide">
                Built for humans who want more than just a workout app.
              </p>
            </div>

          </div>
        </div>
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

    </div>
  )
}
