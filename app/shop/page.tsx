"use client"

import Image from "next/image"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect, useState } from "react"

export default function ShopPage() {
  const [currentRing, setCurrentRing] = useState(0)
  const [currentWatch, setCurrentWatch] = useState(0)
  
  const ringImages = [
    "/images/RING4.png",
    "/images/RING2.png",
    "/images/RING1.png",
    "/images/RING3.png"
  ]

  const watchImages = [
    "/images/reloj1.png",
    "/images/reloj2.png",
    "/images/reloj3.png",
    "/images/reloj4.png"
  ]

  const nextRing = () => {
    setCurrentRing((prev) => (prev + 1) % ringImages.length)
  }

  const prevRing = () => {
    setCurrentRing((prev) => (prev - 1 + ringImages.length) % ringImages.length)
  }

  const nextWatch = () => {
    setCurrentWatch((prev) => (prev + 1) % watchImages.length)
  }

  const prevWatch = () => {
    setCurrentWatch((prev) => (prev - 1 + watchImages.length) % watchImages.length)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    document.documentElement.style.backgroundColor = "#000000"
    document.body.style.backgroundColor = "#000000"
    return () => {
      document.documentElement.style.backgroundColor = ""
      document.body.style.backgroundColor = ""
    }
  }, [])

  return (
    <div className="relative dark min-h-screen" style={{ backgroundColor: "#000000" }}>
      {/* Header */}
      <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-6xl px-8">
        <nav className="bg-black/10 backdrop-blur-xl border border-white/20 rounded-full px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <a href="/">
                <Image
                  src="/images/12345.png"
                  alt="Avance"
                  width={120}
                  height={24}
                  className="object-contain"
                />
              </a>
            </div>

            {/* Navigation - Centered */}
            <div className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
              <a
                href="/#coach"
                className="text-white/70 hover:text-white transition-all duration-300 font-light text-sm tracking-wider uppercase"
              >
                AI Coach
              </a>
              <a
                href="/shop"
                className="text-white hover:text-white transition-all duration-300 font-light text-sm tracking-wider uppercase"
              >
                Shop
              </a>
              <a
                href="/#wellness"
                className="text-white/70 hover:text-white transition-all duration-300 font-light text-sm tracking-wider uppercase"
              >
                Wellness
              </a>
              <a
                href="/#community"
                className="text-white/70 hover:text-white transition-all duration-300 font-light text-sm tracking-wider uppercase"
              >
                Community
              </a>
            </div>

            {/* Download Button */}
            <a
              href="/#download"
              className="group flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 text-white/90 hover:text-white hover:bg-white/20 transition-all duration-300"
            >
              <span className="text-sm font-light tracking-wider uppercase">Download</span>
              <ArrowRight className="w-4 h-4 group-hover:-rotate-45 transition-transform duration-300" />
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative pb-20 px-8 z-10" style={{ marginTop: "180px" }}>
        <div className="relative max-w-6xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-extralight leading-none tracking-tight">
            <span className="block text-white">The System</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/70 font-light mt-4 tracking-wide">
            Choose Your Form
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="relative pb-32 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product 1 - Watch Carousel */}
            <div 
              className="rounded-lg overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #1a1a1a 0%, #000000 100%)",
                boxShadow: "0 20px 60px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.05)"
              }}
            >
              <div className="aspect-square relative" style={{ background: "linear-gradient(135deg, #1a1a1a 0%, #000000 100%)" }}>
                {/* Subtle backlight glow */}
                <div 
                  className="absolute inset-0 flex items-center justify-center pointer-events-none"
                  style={{
                    background: "radial-gradient(circle at center, rgba(255, 255, 255, 0.08) 0%, transparent 50%)"
                  }}
                />
                <Image 
                  src={watchImages[currentWatch]} 
                  alt={`Watch ${currentWatch + 1}`} 
                  fill 
                  className="object-contain z-10"
                />
                
                {/* Navigation Arrows */}
                <button 
                  onClick={prevWatch}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:bg-black/70 transition-all z-20"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button 
                  onClick={nextWatch}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:bg-black/70 transition-all z-20"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Dots Indicator */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                  {watchImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentWatch(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentWatch ? "bg-white" : "bg-white/40"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <div className="p-6 border-t border-white/5">
                <h3 className="text-white font-light text-xl mb-2">Product Name</h3>
                <p className="text-white/60 font-light text-sm">$0.00</p>
              </div>
            </div>

            {/* Product 2 */}
            <div 
              className="rounded-lg overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
              style={{
                background: "linear-gradient(135deg, #1a1a1a 0%, #000000 100%)",
                boxShadow: "0 20px 60px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.05)"
              }}
            >
              <div className="aspect-square relative" style={{ background: "linear-gradient(135deg, #1a1a1a 0%, #000000 100%)" }}>
                {/* Image placeholder */}
              </div>
              <div className="p-6 border-t border-white/5">
                <h3 className="text-white font-light text-xl mb-2">Product Name</h3>
                <p className="text-white/60 font-light text-sm">$0.00</p>
              </div>
            </div>

            {/* Product 3 - Avance Rings Carousel */}
            <div 
              className="rounded-lg overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #1a1a1a 0%, #000000 100%)",
                boxShadow: "0 20px 60px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.05)"
              }}
            >
              <div className="aspect-square relative" style={{ background: "linear-gradient(135deg, #1a1a1a 0%, #000000 100%)" }}>
                <Image 
                  src={ringImages[currentRing]} 
                  alt={`Avance Ring ${currentRing + 1}`} 
                  fill 
                  className="object-contain"
                />
                
                {/* Navigation Arrows */}
                <button 
                  onClick={prevRing}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:bg-black/70 transition-all z-20"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button 
                  onClick={nextRing}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:bg-black/70 transition-all z-20"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Dots Indicator */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                  {ringImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentRing(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentRing ? "bg-white" : "bg-white/40"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <div className="p-6 border-t border-white/5">
                <h3 className="text-white font-light text-xl mb-2">Avance Rings</h3>
                <p className="text-white/60 font-light text-sm">$150.00</p>
              </div>
            </div>

            {/* Product 4 */}
            <div 
              className="rounded-lg overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
              style={{
                background: "linear-gradient(135deg, #1a1a1a 0%, #000000 100%)",
                boxShadow: "0 20px 60px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.05)"
              }}
            >
              <div className="aspect-square relative" style={{ background: "linear-gradient(135deg, #1a1a1a 0%, #000000 100%)" }}>
                {/* Image placeholder */}
              </div>
              <div className="p-6 border-t border-white/5">
                <h3 className="text-white font-light text-xl mb-2">Product Name</h3>
                <p className="text-white/60 font-light text-sm">$0.00</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
