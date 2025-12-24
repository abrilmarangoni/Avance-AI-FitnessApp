"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ChevronLeft, ChevronRight, ShoppingCart, X, Minus, Plus, Trash2, Menu } from "lucide-react"
import { useEffect, useLayoutEffect, useState, useRef } from "react"
import { useParams } from "next/navigation"
import Footer from "@/components/Footer"

interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
}

interface Product {
  id: string
  name: string
  price: number
  description: string
  features: string[]
  images: string[]
}

const products: Record<string, Product> = {
  watch: {
    id: "watch",
    name: "Avance APEX",
    price: 1199,
    description: "Avance APEX is the most advanced device in the Avance ecosystem. Built for users who demand absolute performance, medical-grade insights, and a refined premium aesthetic. Its square case blends elite sport design with a luxury technical leather strap, designed for daily wear, training, and recovery. APEX features on-device artificial intelligence, capable of processing and interpreting biometric data in real time without constant phone dependency. It doesn't just track metrics — it understands your body and adapts to it.",
    features: [
      "Advanced VO₂ Max tracking (continuous + predictive)",
      "24/7 heart rate monitoring (optical + adaptive AI)",
      "Heart Rate Variability (HRV)",
      "Respiratory rate & breathing patterns",
      "Blood oxygen saturation (SpO₂)",
      "Stress & nervous system load",
      "Advanced sleep tracking (deep, REM, recovery score)",
      "Body Battery & Readiness Score (AI-driven)",
      "Estimated body temperature trends",
      "Multi-band high-precision GPS",
      "Training, recovery, and overtraining prevention",
      "Personalized AI coaching",
      "Predictive fatigue and overload alerts",
      "Daily automated insights",
      "Full integration with the Avance AI Platform"
    ],
    images: ["/images/reloj1.png", "/images/reloj2.png", "/images/reloj3.png", "/images/reloj4.png"]
  },
  band: {
    id: "band",
    name: "Avance PULSE",
    price: 449,
    description: "Avance PULSE is built for movement. Lightweight, flexible, and ultra-durable, it features an AeroFlex™ performance fabric band — breathable, sweat-resistant, hypoallergenic, and fast-drying. Designed for athletes and everyday training, PULSE delivers core Avance metrics in a clean, sport-focused form factor. Ideal for runners, athletes, daily training, and users who prefer a lightweight sport-first device.",
    features: [
      "Continuous heart rate monitoring",
      "HRV & stress tracking",
      "Respiratory rate",
      "SpO₂",
      "Advanced sleep tracking",
      "Daily readiness score",
      "Activity & training load monitoring",
      "AI-powered recovery insights"
    ],
    images: ["/images/band1.png", "/images/band2.png"]
  },
  ring: {
    id: "ring",
    name: "Avance ORBIT",
    price: 399,
    description: "Avance ORBIT delivers powerful health insights in an ultra-discreet form. Designed to be worn 24/7, ORBIT excels at tracking sleep, recovery, and internal physiological signals that traditional wearables often miss. Ideal for users focused on long-term health optimization. AI Focus: Recovery, prevention, hormonal balance, and overall well-being.",
    features: [
      "Basal body temperature tracking",
      "Nighttime heart rate monitoring",
      "Deep HRV analysis",
      "Sleep SpO₂",
      "Night respiratory tracking",
      "Advanced sleep score",
      "Recovery & readiness insights",
      "Early stress detection"
    ],
    images: ["/images/RING1.png", "/images/RING2.png"]
  },
  wat: {
    id: "wat",
    name: "Avance WATT PRO",
    price: 699,
    description: "Avance WATT PRO is built for power and performance. Featuring a high-durability sport rubber strap, it's designed to handle intense training while maintaining a refined, modern aesthetic. Less luxury-oriented than APEX, but equally serious about performance. Ideal for high-intensity training, endurance sports, and performance-driven users.",
    features: [
      "Advanced heart rate monitoring",
      "HRV",
      "VO₂ Max",
      "Respiratory rate",
      "SpO₂",
      "High-precision GPS",
      "Training load & performance metrics",
      "AI-driven training recommendations",
      "Recovery tracking"
    ],
    images: ["/images/watt1.png", "/images/watt2.png", "/images/watt3.png"]
  },
  banda: {
    id: "banda",
    name: "Avance CORE ARM",
    price: 349,
    description: "Avance CORE ARM is worn on the upper arm, delivering more stable and accurate heart rate data than wrist-based devices during demanding workouts. Designed for athletes who prioritize precision without wearing a watch. Ideal for strength training, HIIT, cross-training, and advanced performance tracking.",
    features: [
      "High-accuracy heart rate monitoring",
      "Real-time HRV",
      "Respiratory rate",
      "SpO₂",
      "Calorie burn & training load",
      "Recovery & fatigue insights",
      "Direct integration with Avance AI"
    ],
    images: ["/images/banda1.png", "/images/banda2.png"]
  },
  heart: {
    id: "heart",
    name: "Avance HEART CORE",
    price: 299,
    description: "Avance HEART CORE delivers the highest level of biometric accuracy in the Avance ecosystem. Worn on the chest, it provides near-clinical heart rate precision, making it the gold standard for endurance and performance athletes. Ideal for running, cycling, elite training, and professional-level performance analysis.",
    features: [
      "Ultra-precise heart rate monitoring",
      "High-fidelity HRV analysis",
      "Respiratory tracking",
      "Accurate training zones",
      "Training load & recovery metrics",
      "Full Avance AI integration"
    ],
    images: ["/images/heart1.png", "/images/heart2.png"]
  }
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

export default function ProductPage() {
  const params = useParams()
  const productId = params.id as string
  const product = products[productId]
  
  const [currentImage, setCurrentImage] = useState(0)
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

  const nextImage = () => {
    if (product) {
      setCurrentImage((prev) => (prev + 1) % product.images.length)
    }
  }

  const prevImage = () => {
    if (product) {
      setCurrentImage((prev) => (prev - 1 + product.images.length) % product.images.length)
    }
  }

  if (!product) {
    return (
      <div className="relative dark min-h-screen flex items-center justify-center" style={{ backgroundColor: "#000000" }}>
        <div className="text-center">
          <h1 className="text-4xl font-light text-white mb-4">Product not found</h1>
          <Link href="/shop" className="text-white/60 hover:text-white transition-colors">
            Back to Shop
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="relative dark min-h-screen" style={{ backgroundColor: "#000000" }}>
      {/* Flying Particles */}
      {flyingParticles.map(particle => (
        <FlyingParticleComponent key={particle.id} particle={particle} />
      ))}
      
      {/* Header */}
      <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-6xl px-4 md:px-8">
        <nav className={`bg-black/10 backdrop-blur-xl border border-white/20 px-4 md:px-8 py-4 ${isMobileMenuOpen ? 'rounded-2xl' : 'rounded-lg'}`}>
          <div className="flex items-center justify-between relative">
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
              <Link href="/#about" className="text-white/70 hover:text-white transition-all duration-300 font-light text-sm tracking-wider uppercase">
                About
              </Link>
              <Link href="/shop" className="text-white hover:text-white transition-all duration-300 font-light text-sm tracking-wider uppercase">
                Shop
              </Link>
              <Link href="/#features" className="text-white/70 hover:text-white transition-all duration-300 font-light text-sm tracking-wider uppercase">
                Features
              </Link>
              <Link href="/#community" className="text-white/70 hover:text-white transition-all duration-300 font-light text-sm tracking-wider uppercase">
                Community
              </Link>
            </div>

            {/* Right side - Cart and Menu */}
            <div className="flex items-center gap-3">
              {/* Cart Button */}
              <button
                ref={cartButtonRef}
                onClick={() => setIsCartOpen(true)}
                className="group flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded px-3 md:px-4 py-2 text-white/90 hover:text-white hover:bg-white/20 transition-all duration-300 relative"
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

      {/* Product Content */}
      <section className="relative pb-32 px-8 z-10" style={{ marginTop: "140px" }}>
        <div className="max-w-6xl mx-auto">
          {/* Back to Shop */}
          <Link 
            href="/shop" 
            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-light tracking-wider">Back to Shop</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Product Image */}
            <div>
              <div 
                className="rounded-lg overflow-hidden relative aspect-square"
                style={{
                  background: "linear-gradient(135deg, #1a1a1a 0%, #000000 100%)",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.05)"
                }}
              >
                <Image 
                  src={product.images[currentImage]} 
                  alt={product.name} 
                  fill 
                  className="object-contain"
                />
                
                {/* Navigation Arrows */}
                {product.images.length > 1 && (
                  <>
                    <button 
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:bg-black/70 transition-all z-20"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button 
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:bg-black/70 transition-all z-20"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
              <h1 className="text-4xl md:text-5xl font-extralight text-white mb-4">{product.name}</h1>
              <p className="text-3xl font-light text-white/80 mb-8">${product.price.toFixed(2)}</p>
              
              <p className="text-white/60 font-light leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Features */}
              <div className="mb-10">
                <h3 className="text-white font-light text-lg mb-4">Features</h3>
                <ul className="space-y-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3 text-white/60 font-light">
                      <span className="w-1.5 h-1.5 bg-white/40 rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Add to Cart Button */}
              <button 
                onClick={(e) => addToCart(product.id, product.name, product.price, e)}
                className="w-full py-4 border border-white/30 text-white rounded font-mono text-sm uppercase tracking-wider hover:bg-white/10 transition-all"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

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

