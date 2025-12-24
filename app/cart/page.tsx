"use client"

import Image from "next/image"
import Link from "next/link"
import { Minus, Plus, Trash2, ArrowLeft, ShoppingCart, Menu, X } from "lucide-react"
import { useEffect, useState } from "react"

interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  image: string
}

const productImages: Record<string, string> = {
  watch: "/images/reloj1.png",
  band: "/images/band1.png",
  ring: "/images/RING1.png",
  wat: "/images/wat1.png"
}

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>([])
  const [isLoaded, setIsLoaded] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('avance-cart')
    if (savedCart) {
      const parsedCart = JSON.parse(savedCart)
      // Add images to cart items
      const cartWithImages = parsedCart.map((item: CartItem) => ({
        ...item,
        image: productImages[item.id] || "/images/reloj1.png"
      }))
      setCart(cartWithImages)
    }
    setIsLoaded(true)
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('avance-cart', JSON.stringify(cart))
    }
  }, [cart, isLoaded])

  // Set black background
  useEffect(() => {
    document.documentElement.style.backgroundColor = "#000000"
    document.body.style.backgroundColor = "#000000"
    return () => {
      document.documentElement.style.backgroundColor = ""
      document.body.style.backgroundColor = ""
    }
  }, [])

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

  return (
    <div className="relative dark min-h-screen" style={{ backgroundColor: "#000000" }}>
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
              <Link 
                href="/cart"
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
              </Link>

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

      {/* Cart Content */}
      <section className="relative pb-32 px-8 z-10" style={{ marginTop: "180px" }}>
        <div className="max-w-4xl mx-auto">
          {/* Back to Shop */}
          <Link 
            href="/shop" 
            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-light tracking-wider">Back to Shop</span>
          </Link>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl font-extralight text-white mb-12">Your Cart</h1>

          {cart.length === 0 ? (
            /* Empty Cart */
            <div 
              className="rounded-lg p-12 text-center"
              style={{
                background: "linear-gradient(135deg, #1a1a1a 0%, #000000 100%)",
                boxShadow: "0 20px 60px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.05)"
              }}
            >
              <ShoppingCart className="w-16 h-16 text-white/20 mx-auto mb-6" />
              <h2 className="text-2xl font-light text-white mb-4">Your cart is empty</h2>
              <p className="text-white/60 font-light mb-8">Discover our products and add them to your cart.</p>
              <Link 
                href="/shop"
                className="inline-block py-3 px-8 border border-white/30 text-white rounded font-mono text-xs uppercase tracking-wider hover:bg-white/10 transition-all"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            /* Cart Items */
            <div className="space-y-6">
              {cart.map((item) => (
                <div 
                  key={item.id}
                  className="rounded-lg overflow-hidden"
                  style={{
                    background: "linear-gradient(135deg, #1a1a1a 0%, #000000 100%)",
                    boxShadow: "0 20px 60px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.05)"
                  }}
                >
                  <div className="flex items-center p-6 gap-6">
                    {/* Product Image */}
                    <div className="w-24 h-24 relative flex-shrink-0 bg-black/50 rounded-lg overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-contain"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="flex-1">
                      <h3 className="text-white font-light text-xl mb-1">{item.name}</h3>
                      <p className="text-white/60 font-light text-sm">${item.price.toFixed(2)}</p>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-4">
                      <button 
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-all"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="text-white font-mono text-lg w-8 text-center">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-all"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Item Total */}
                    <div className="text-right w-28">
                      <p className="text-white font-light text-xl">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>

                    {/* Remove Button */}
                    <button 
                      onClick={() => removeItem(item.id)}
                      className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-red-400 hover:border-red-400/40 transition-all"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}

              {/* Cart Summary */}
              <div 
                className="rounded-lg p-6 mt-8"
                style={{
                  background: "linear-gradient(135deg, #1a1a1a 0%, #000000 100%)",
                  boxShadow: "0 20px 60px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.05)"
                }}
              >
                <div className="flex justify-between items-center mb-6">
                  <span className="text-white/60 font-light">Subtotal</span>
                  <span className="text-white font-light text-xl">${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center mb-6 pb-6 border-b border-white/10">
                  <span className="text-white/60 font-light">Shipping</span>
                  <span className="text-white/60 font-light">Calculated at checkout</span>
                </div>
                <div className="flex justify-between items-center mb-8">
                  <span className="text-white font-light text-xl">Total</span>
                  <span className="text-white font-light text-2xl">${cartTotal.toFixed(2)}</span>
                </div>
                
                <div className="flex gap-4">
                  <button 
                    onClick={clearCart}
                    className="py-3 px-6 border border-white/20 text-white/60 rounded font-mono text-xs uppercase tracking-wider hover:bg-white/5 hover:text-white transition-all"
                  >
                    Clear Cart
                  </button>
                  <button className="flex-1 py-3 bg-white text-black rounded font-mono font-bold text-xs uppercase tracking-wider hover:bg-gray-200 transition-all">
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

