"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronLeft, ChevronRight, ShoppingCart, X, Minus, Plus, Trash2, Menu } from "lucide-react"
import { useEffect, useLayoutEffect, useState } from "react"

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
  wat: "/images/wat1.png"
}

export default function ShopPage() {
  const [currentRing, setCurrentRing] = useState(0)
  const [currentWatch, setCurrentWatch] = useState(0)
  const [currentBand, setCurrentBand] = useState(0)
  const [currentWat, setCurrentWat] = useState(0)
  const [cart, setCart] = useState<CartItem[]>([])
  const [isLoaded, setIsLoaded] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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

  const addToCart = (id: string, name: string, price: number) => {
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

  const bandImages = [
    "/images/band1.png",
    "/images/band2.png"
  ]

  const watImages = [
    "/images/wat1.png",
    "/images/wat2.png",
    "/images/wat3.png"
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
                  width={50}
                  height={50}
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
                href="/#coach"
                className="text-white/70 hover:text-white transition-all duration-300 font-light text-sm tracking-wider uppercase"
              >
                AI Coach
              </Link>
              <Link
                href="/shop"
                className="text-white hover:text-white transition-all duration-300 font-light text-sm tracking-wider uppercase"
              >
                Shop
              </Link>
              <Link
                href="/#wellness"
                className="text-white/70 hover:text-white transition-all duration-300 font-light text-sm tracking-wider uppercase"
              >
                Wellness
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
                href="/#coach"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-left text-white/70 hover:text-white transition-all duration-300 font-light text-sm tracking-wider uppercase py-2"
              >
                AI Coach
              </Link>
              <Link
                href="/shop"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-left text-white hover:text-white transition-all duration-300 font-light text-sm tracking-wider uppercase py-2"
              >
                Shop
              </Link>
              <Link
                href="/#wellness"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-left text-white/70 hover:text-white transition-all duration-300 font-light text-sm tracking-wider uppercase py-2"
              >
                Wellness
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
                    onClick={() => addToCart("watch", "Avance Watch", 299)}
                    className="flex-1 py-3 border border-white/30 text-white rounded font-mono text-xs uppercase tracking-wider hover:bg-white/10 transition-all"
                  >
                    Add to Cart
                  </button>
                  <Link href="/product/watch" className="flex-1 py-3 border border-white/30 text-white rounded font-mono text-xs uppercase tracking-wider hover:bg-white/10 transition-all text-center">
                    View Details
                  </Link>
                </div>
                <h3 className="text-white font-light text-xl mb-1">Avance Watch</h3>
                <p className="text-white/60 font-light text-sm">$299.00</p>
              </div>
            </div>

            {/* Product 2 - Band Carousel */}
            <div 
              className="group rounded-lg overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #1a1a1a 0%, #000000 100%)",
                boxShadow: "0 20px 60px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.05)"
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
                    onClick={() => addToCart("band", "Avance Band", 79)}
                    className="flex-1 py-3 border border-white/30 text-white rounded font-mono text-xs uppercase tracking-wider hover:bg-white/10 transition-all"
                  >
                    Add to Cart
                  </button>
                  <Link href="/product/band" className="flex-1 py-3 border border-white/30 text-white rounded font-mono text-xs uppercase tracking-wider hover:bg-white/10 transition-all text-center">
                    View Details
                  </Link>
                </div>
                <h3 className="text-white font-light text-xl mb-1">Avance Band</h3>
                <p className="text-white/60 font-light text-sm">$79.00</p>
              </div>
            </div>

            {/* Product 3 - Avance Rings Carousel */}
            <div 
              className="group rounded-lg overflow-hidden"
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

              </div>
              <div className="p-6 border-t border-white/10">
                <div className="flex gap-3 mb-4">
                  <button 
                    onClick={() => addToCart("ring", "Avance Rings", 150)}
                    className="flex-1 py-3 border border-white/30 text-white rounded font-mono text-xs uppercase tracking-wider hover:bg-white/10 transition-all"
                  >
                    Add to Cart
                  </button>
                  <Link href="/product/ring" className="flex-1 py-3 border border-white/30 text-white rounded font-mono text-xs uppercase tracking-wider hover:bg-white/10 transition-all text-center">
                    View Details
                  </Link>
                </div>
                <h3 className="text-white font-light text-xl mb-1">Avance Rings</h3>
                <p className="text-white/60 font-light text-sm">$150.00</p>
              </div>
            </div>

            {/* Product 4 - Wat Carousel */}
            <div 
              className="group rounded-lg overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #1a1a1a 0%, #000000 100%)",
                boxShadow: "0 20px 60px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.05)"
              }}
            >
              <div className="aspect-square relative" style={{ background: "linear-gradient(135deg, #1a1a1a 0%, #000000 100%)" }}>
                <Image 
                  src={watImages[currentWat]} 
                  alt={`Wat ${currentWat + 1}`} 
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
                    onClick={() => addToCart("wat", "Avance Wat", 199)}
                    className="flex-1 py-3 border border-white/30 text-white rounded font-mono text-xs uppercase tracking-wider hover:bg-white/10 transition-all"
                  >
                    Add to Cart
                  </button>
                  <Link href="/product/wat" className="flex-1 py-3 border border-white/30 text-white rounded font-mono text-xs uppercase tracking-wider hover:bg-white/10 transition-all text-center">
                    View Details
                  </Link>
                </div>
                <h3 className="text-white font-light text-xl mb-1">Avance Wat</h3>
                <p className="text-white/60 font-light text-sm">$199.00</p>
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
          className={`absolute right-0 top-0 h-full transform transition-transform duration-300 ease-out ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}
          style={{
            width: "50vw",
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
