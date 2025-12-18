"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronLeft, ChevronRight, ShoppingCart, X, Minus, Plus, Trash2, Menu } from "lucide-react"
import { useEffect, useLayoutEffect, useState, useRef } from "react"

interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
}

const productImages: Record<string, string> = {
  watch: "/images/reloj1.png",
  band: "/images/band1.png",
  ring: "/images/RING1.png",
  wat: "/images/watt1.png",
  banda: "/images/banda1.png",
  heart: "/images/heart1.png"
}

interface FlyingParticle {
  id: number
  startX: number
  startY: number
  endX: number
  endY: number
}

function FlyingParticleComponent({ particle }: { particle: FlyingParticle }) {
  const [position, setPosition] = useState({ x: particle.startX, y: particle.startY, scale: 1, opacity: 1 })
  
  useEffect(() => {
    // Start animation after a tiny delay to ensure transition works
    const timeout = setTimeout(() => {
      setPosition({
        x: particle.endX,
        y: particle.endY,
        scale: 0.3,
        opacity: 0
      })
    }, 10)
    return () => clearTimeout(timeout)
  }, [particle])
  
  return (
    <div
      className="fixed pointer-events-none z-[200]"
      style={{
        left: position.x,
        top: position.y,
        transform: `translate(-50%, -50%) scale(${position.scale})`,
        opacity: position.opacity,
        transition: 'all 0.7s cubic-bezier(0.2, 0.8, 0.2, 1)'
      }}
    >
      <div 
        className="w-5 h-5 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0.9) 20%, rgba(200,200,255,0.5) 50%, transparent 100%)',
          boxShadow: '0 0 20px 10px rgba(255,255,255,0.8), 0 0 40px 20px rgba(200,200,255,0.4), 0 0 60px 30px rgba(150,150,255,0.2)'
        }}
      />
    </div>
  )
}

export default function ShopPage() {
  const [currentRing, setCurrentRing] = useState(0)
  const [currentWatch, setCurrentWatch] = useState(0)
  const [currentBand, setCurrentBand] = useState(0)
  const [currentWat, setCurrentWat] = useState(0)
  const [currentBanda, setCurrentBanda] = useState(0)
  const [currentHeart, setCurrentHeart] = useState(0)
  const [cart, setCart] = useState<CartItem[]>([])
  const [isLoaded, setIsLoaded] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [flyingParticles, setFlyingParticles] = useState<FlyingParticle[]>([])
  const cartButtonRef = useRef<HTMLButtonElement>(null)

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('avance-cart')
    if (savedCart) {
      setCart(JSON.parse(savedCart))
    }
    setIsLoaded(true)
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('avance-cart', JSON.stringify(cart))
    }
  }, [cart, isLoaded])

  // Close cart on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsCartOpen(false)
      }
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [])

  const addToCart = (id: string, name: string, price: number, event?: React.MouseEvent) => {
    // Create flying particle animation
    if (event && cartButtonRef.current) {
      const button = event.currentTarget as HTMLElement
      const buttonRect = button.getBoundingClientRect()
      const cartRect = cartButtonRef.current.getBoundingClientRect()
      
      const particle: FlyingParticle = {
        id: Date.now(),
        startX: buttonRect.left + buttonRect.width / 2,
        startY: buttonRect.top + buttonRect.height / 2,
        endX: cartRect.left + cartRect.width / 2,
        endY: cartRect.top + cartRect.height / 2
      }
      
      setFlyingParticles(prev => [...prev, particle])
      
      // Remove particle after animation
      setTimeout(() => {
        setFlyingParticles(prev => prev.filter(p => p.id !== particle.id))
      }, 800)
    }
    
    setCart(prev => {
      const existingItem = prev.find(item => item.id === id)
      if (existingItem) {
        return prev.map(item => 
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
      }
      return [...prev, { id, name, price, quantity: 1 }]
    })
  }

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => 
      prev.map(item => {
        if (item.id === id) {
          const newQuantity = item.quantity + delta
          return newQuantity > 0 ? { ...item, quantity: newQuantity } : item
        }
        return item
      }).filter(item => item.quantity > 0)
    )
  }

  const removeItem = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id))
  }

  const clearCart = () => {
    setCart([])
  }

  const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0)
  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0)
  
  const ringImages = [
    "/images/RING1.png",
    "/images/RING2.png"
  ]

  const watchImages = [
    "/images/reloj1.png",
    "/images/reloj2.png",
    "/images/reloj3.png",
    "/images/reloj4.png"
  ]

  const bandImages = [
    "/images/band1.png",
    "/images/band2.png"
  ]

  const watImages = [
    "/images/watt1.png",
    "/images/watt2.png",
    "/images/watt3.png"
  ]

  const bandaImages = [
    "/images/banda1.png",
    "/images/banda2.png"
  ]

  const heartImages = [
    "/images/heart1.png",
    "/images/heart2.png"
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

  const nextBand = () => {
    setCurrentBand((prev) => (prev + 1) % bandImages.length)
  }

  const prevBand = () => {
    setCurrentBand((prev) => (prev - 1 + bandImages.length) % bandImages.length)
  }

  const nextWat = () => {
    setCurrentWat((prev) => (prev + 1) % watImages.length)
  }

  const prevWat = () => {
    setCurrentWat((prev) => (prev - 1 + watImages.length) % watImages.length)
  }

  const nextBanda = () => {
    setCurrentBanda((prev) => (prev + 1) % bandaImages.length)
  }

  const prevBanda = () => {
    setCurrentBanda((prev) => (prev - 1 + bandaImages.length) % bandaImages.length)
  }

  const nextHeart = () => {
    setCurrentHeart((prev) => (prev + 1) % heartImages.length)
  }

  const prevHeart = () => {
    setCurrentHeart((prev) => (prev - 1 + heartImages.length) % heartImages.length)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  // Set black background immediately
  useLayoutEffect(() => {
    document.documentElement.classList.add('dark-page')
    document.documentElement.style.backgroundColor = "#000000"
    document.body.style.backgroundColor = "#000000"
    return () => {
      document.documentElement.classList.remove('dark-page')
      document.documentElement.style.backgroundColor = ""
      document.body.style.backgroundColor = ""
    }
  }, [])

  return (
    <div className="relative dark min-h-screen" style={{ backgroundColor: "#000000" }}>
      {/* Flying Particles */}
      {flyingParticles.map(particle => (
        <FlyingParticleComponent key={particle.id} particle={particle} />
      ))}
      
      {/* Header */}
      <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-6xl px-4 md:px-8">
        <nav className={`bg-black/10 backdrop-blur-xl border border-white/20 px-4 md:px-8 py-4 ${isMobileMenuOpen ? 'rounded-2xl' : 'rounded-full'}`}>
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
              <Link
                href="/#about"
                className="text-white/70 hover:text-white transition-all duration-300 font-light text-sm tracking-wider uppercase"
              >
                About
              </Link>
              <Link
                href="/shop"
                className="text-white hover:text-white transition-all duration-300 font-light text-sm tracking-wider uppercase"
              >
                Shop
              </Link>
              <Link
                href="/#features"
                className="text-white/70 hover:text-white transition-all duration-300 font-light text-sm tracking-wider uppercase"
              >
                Features
              </Link>
              <Link
                href="/#community"
                className="text-white/70 hover:text-white transition-all duration-300 font-light text-sm tracking-wider uppercase"
              >
                Community
              </Link>
            </div>

            {/* Right side - Cart and Menu */}
            <div className="flex items-center gap-3">
              {/* Cart Button */}
              <button
                ref={cartButtonRef}
                onClick={() => setIsCartOpen(true)}
                className="group flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3 md:px-4 py-2 text-white/90 hover:text-white hover:bg-white/20 transition-all duration-300 relative"
              >
                <ShoppingCart className="w-4 h-4" />
                <span className="hidden md:inline text-sm font-light tracking-wider uppercase">Cart</span>
                {cartItemsCount > 0 && (
                  <span 
                    className="absolute -top-2 -right-2 bg-white text-black font-bold rounded-full flex items-center justify-center"
                    style={{ fontSize: '10px', minWidth: '22px', height: '22px', padding: '0 6px' }}
                  >
                    {cartItemsCount}
                  </span>
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden w-10 h-10 flex items-center justify-center text-white/90 hover:text-white transition-all"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pt-4 border-t border-white/10 space-y-4">
              <Link
                href="/#about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-left text-white/70 hover:text-white transition-all duration-300 font-light text-sm tracking-wider uppercase py-2"
              >
                About
              </Link>
              <Link
                href="/shop"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-left text-white hover:text-white transition-all duration-300 font-light text-sm tracking-wider uppercase py-2"
              >
                Shop
              </Link>
              <Link
                href="/#features"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-left text-white/70 hover:text-white transition-all duration-300 font-light text-sm tracking-wider uppercase py-2"
              >
                Features
              </Link>
              <Link
                href="/#community"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-left text-white/70 hover:text-white transition-all duration-300 font-light text-sm tracking-wider uppercase py-2"
              >
                Community
              </Link>
            </div>
          )}
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
              className="group rounded-lg overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #1a1a1a 0%, #000000 100%)",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.05)"
              }}
            >
              <div className="aspect-square relative" style={{ background: "linear-gradient(135deg, #1a1a1a 0%, #000000 100%)" }}>
                <Image 
                  src={watchImages[currentWatch]} 
                  alt={`Watch ${currentWatch + 1}`} 
                  fill 
                  className="object-contain pointer-events-none"
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

              </div>
              <div className="p-6 border-t border-white/10">
                <div className="flex gap-3 mb-4">
                  <button 
                    onClick={(e) => addToCart("watch", "Avance APEX", 1199, e)}
                    className="flex-1 py-3 border border-white/30 text-white rounded font-mono text-xs uppercase tracking-wider hover:bg-white/10 transition-all"
                  >
                    Add to Cart
                  </button>
                  <Link href="/product/watch" className="flex-1 py-3 border border-white/30 text-white rounded font-mono text-xs uppercase tracking-wider hover:bg-white/10 transition-all text-center">
                    View Details
                  </Link>
                </div>
                <h3 className="text-white font-light text-xl mb-1">Avance APEX</h3>
                <p className="text-white/60 font-light text-sm">$1,199.00</p>
              </div>
            </div>

            {/* Product 2 - Band Carousel */}
            <div 
              className="group rounded-lg overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #1a1a1a 0%, #000000 100%)",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.05)"
              }}
            >
              <div className="aspect-square relative" style={{ background: "linear-gradient(135deg, #1a1a1a 0%, #000000 100%)" }}>
                <Image 
                  src={bandImages[currentBand]} 
                  alt={`Band ${currentBand + 1}`} 
                  fill 
                  className="object-contain"
                />
                
                {/* Navigation Arrows */}
                <button 
                  onClick={prevBand}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:bg-black/70 transition-all z-20"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button 
                  onClick={nextBand}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:bg-black/70 transition-all z-20"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

              </div>
              <div className="p-6 border-t border-white/10">
                <div className="flex gap-3 mb-4">
                  <button 
                    onClick={(e) => addToCart("band", "Avance PULSE", 449, e)}
                    className="flex-1 py-3 border border-white/30 text-white rounded font-mono text-xs uppercase tracking-wider hover:bg-white/10 transition-all"
                  >
                    Add to Cart
                  </button>
                  <Link href="/product/band" className="flex-1 py-3 border border-white/30 text-white rounded font-mono text-xs uppercase tracking-wider hover:bg-white/10 transition-all text-center">
                    View Details
                  </Link>
                </div>
                <h3 className="text-white font-light text-xl mb-1">Avance PULSE</h3>
                <p className="text-white/60 font-light text-sm">$449.00</p>
              </div>
            </div>

            {/* Product 3 - Avance Rings Carousel */}
            <div 
              className="group rounded-lg overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #1a1a1a 0%, #000000 100%)",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.05)"
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

              </div>
              <div className="p-6 border-t border-white/10">
                <div className="flex gap-3 mb-4">
                  <button 
                    onClick={(e) => addToCart("ring", "Avance ORBIT", 399, e)}
                    className="flex-1 py-3 border border-white/30 text-white rounded font-mono text-xs uppercase tracking-wider hover:bg-white/10 transition-all"
                  >
                    Add to Cart
                  </button>
                  <Link href="/product/ring" className="flex-1 py-3 border border-white/30 text-white rounded font-mono text-xs uppercase tracking-wider hover:bg-white/10 transition-all text-center">
                    View Details
                  </Link>
                </div>
                <h3 className="text-white font-light text-xl mb-1">Avance ORBIT</h3>
                <p className="text-white/60 font-light text-sm">$399.00</p>
              </div>
            </div>

            {/* Product 4 - Wat Carousel */}
            <div 
              className="group rounded-lg overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #1a1a1a 0%, #000000 100%)",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.05)"
              }}
            >
              <div className="aspect-square relative" style={{ background: "linear-gradient(135deg, #1a1a1a 0%, #000000 100%)" }}>
                <Image 
                  src={watImages[currentWat]} 
                  alt={`Watt ${currentWat + 1}`} 
                  fill 
                  className="object-contain"
                />
                
                {/* Navigation Arrows */}
                <button 
                  onClick={prevWat}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:bg-black/70 transition-all z-20"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button 
                  onClick={nextWat}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:bg-black/70 transition-all z-20"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

              </div>
              <div className="p-6 border-t border-white/10">
                <div className="flex gap-3 mb-4">
                  <button 
                    onClick={(e) => addToCart("wat", "Avance WATT PRO", 699, e)}
                    className="flex-1 py-3 border border-white/30 text-white rounded font-mono text-xs uppercase tracking-wider hover:bg-white/10 transition-all"
                  >
                    Add to Cart
                  </button>
                  <Link href="/product/wat" className="flex-1 py-3 border border-white/30 text-white rounded font-mono text-xs uppercase tracking-wider hover:bg-white/10 transition-all text-center">
                    View Details
                  </Link>
                </div>
                <h3 className="text-white font-light text-xl mb-1">Avance WATT PRO</h3>
                <p className="text-white/60 font-light text-sm">$699.00</p>
              </div>
            </div>

            {/* Product 5 - Banda Carousel */}
            <div 
              className="group rounded-lg overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #1a1a1a 0%, #000000 100%)",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.05)"
              }}
            >
              <div className="aspect-square relative" style={{ background: "linear-gradient(135deg, #1a1a1a 0%, #000000 100%)" }}>
                <Image 
                  src={bandaImages[currentBanda]} 
                  alt={`Banda ${currentBanda + 1}`} 
                  fill 
                  className="object-contain"
                />
                
                {/* Navigation Arrows */}
                <button 
                  onClick={prevBanda}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:bg-black/70 transition-all z-20"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button 
                  onClick={nextBanda}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:bg-black/70 transition-all z-20"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

              </div>
              <div className="p-6 border-t border-white/10">
                <div className="flex gap-3 mb-4">
                  <button 
                    onClick={(e) => addToCart("banda", "Avance CORE ARM", 349, e)}
                    className="flex-1 py-3 border border-white/30 text-white rounded font-mono text-xs uppercase tracking-wider hover:bg-white/10 transition-all"
                  >
                    Add to Cart
                  </button>
                  <Link href="/product/banda" className="flex-1 py-3 border border-white/30 text-white rounded font-mono text-xs uppercase tracking-wider hover:bg-white/10 transition-all text-center">
                    View Details
                  </Link>
                </div>
                <h3 className="text-white font-light text-xl mb-1">Avance CORE ARM</h3>
                <p className="text-white/60 font-light text-sm">$349.00</p>
              </div>
            </div>

            {/* Product 6 - Heart Carousel */}
            <div 
              className="group rounded-lg overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #1a1a1a 0%, #000000 100%)",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.05)"
              }}
            >
              <div className="aspect-square relative" style={{ background: "linear-gradient(135deg, #1a1a1a 0%, #000000 100%)" }}>
                <Image 
                  src={heartImages[currentHeart]} 
                  alt={`Heart ${currentHeart + 1}`} 
                  fill 
                  className="object-contain"
                />
                
                {/* Navigation Arrows */}
                <button 
                  onClick={prevHeart}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:bg-black/70 transition-all z-20"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button 
                  onClick={nextHeart}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:bg-black/70 transition-all z-20"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

              </div>
              <div className="p-6 border-t border-white/10">
                <div className="flex gap-3 mb-4">
                  <button 
                    onClick={(e) => addToCart("heart", "Avance HEART CORE", 299, e)}
                    className="flex-1 py-3 border border-white/30 text-white rounded font-mono text-xs uppercase tracking-wider hover:bg-white/10 transition-all"
                  >
                    Add to Cart
                  </button>
                  <Link href="/product/heart" className="flex-1 py-3 border border-white/30 text-white rounded font-mono text-xs uppercase tracking-wider hover:bg-white/10 transition-all text-center">
                    View Details
                  </Link>
                </div>
                <h3 className="text-white font-light text-xl mb-1">Avance HEART CORE</h3>
                <p className="text-white/60 font-light text-sm">$299.00</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cart Slide Panel */}
      <div 
        className={`fixed inset-0 z-[100] transition-opacity duration-300 ${isCartOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsCartOpen(false)}
        />
        
        {/* Cart Panel */}
        <div 
          className={`absolute right-0 top-0 h-full w-full md:w-[50vw] transform transition-transform duration-300 ease-out ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}
          style={{
            background: "linear-gradient(180deg, #111111 0%, #0a0a0a 100%)",
            boxShadow: "-40px 0 100px rgba(255, 255, 255, 0.08), -10px 0 40px rgba(255, 255, 255, 0.05), 0 0 0 1px rgba(255, 255, 255, 0.1)"
          }}
        >
          {/* Cart Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <h2 className="text-2xl font-light text-white">Your Cart</h2>
            <button 
              onClick={() => setIsCartOpen(false)}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Content */}
          <div className="flex flex-col h-[calc(100%-80px)]">
            {cart.length === 0 ? (
              /* Empty Cart */
              <div className="flex-1 flex flex-col items-center justify-center p-8">
                <ShoppingCart className="w-16 h-16 text-white/20 mb-6" />
                <h3 className="text-xl font-light text-white mb-2">Your cart is empty</h3>
                <p className="text-white/60 font-light text-sm text-center mb-6">Discover our products and add them to your cart.</p>
                <button 
                  onClick={() => setIsCartOpen(false)}
                  className="py-3 px-8 border border-white/30 text-white rounded font-mono text-xs uppercase tracking-wider hover:bg-white/10 transition-all"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <>
                {/* Cart Items */}
                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                  {cart.map((item) => (
                    <div 
                      key={item.id}
                      className="rounded-lg p-4"
                      style={{
                        background: "linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)",
                        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.05)"
                      }}
                    >
                      <div className="flex items-center gap-4">
                        {/* Product Image */}
                        <div className="w-16 h-16 relative flex-shrink-0 bg-black/50 rounded-lg overflow-hidden">
                          <Image
                            src={productImages[item.id] || "/images/reloj1.png"}
                            alt={item.name}
                            fill
                            className="object-contain"
                          />
                        </div>

                        {/* Product Info */}
                        <div className="flex-1 min-w-0">
                          <h4 className="text-white font-light text-sm truncate">{item.name}</h4>
                          <p className="text-white/60 font-light text-xs">${item.price.toFixed(2)}</p>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-2">
                          <button 
                            onClick={() => updateQuantity(item.id, -1)}
                            className="w-7 h-7 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-all"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-white font-mono text-sm w-6 text-center">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, 1)}
                            className="w-7 h-7 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-all"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        {/* Remove Button */}
                        <button 
                          onClick={() => removeItem(item.id)}
                          className="w-7 h-7 rounded-full flex items-center justify-center text-white/30 hover:text-red-400 transition-all"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Cart Footer */}
                <div className="p-6 border-t border-white/10">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-white/60 font-light">Subtotal</span>
                    <span className="text-white font-light text-lg">${cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center mb-4 pb-4 border-b border-white/10">
                    <span className="text-white/60 font-light">Shipping</span>
                    <span className="text-white/40 font-light text-sm">Calculated at checkout</span>
                  </div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-white font-light">Total</span>
                    <span className="text-white font-light text-xl">${cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex gap-3">
                    <button 
                      onClick={clearCart}
                      className="py-3 px-4 border border-white/20 text-white/60 rounded font-mono text-xs uppercase tracking-wider hover:bg-white/5 hover:text-white transition-all"
                    >
                      Clear
                    </button>
                    <button className="flex-1 py-3 border border-white/30 text-white rounded font-mono font-bold text-xs uppercase tracking-wider hover:bg-white/10 hover:border-white/50 transition-all">
                      Checkout
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
