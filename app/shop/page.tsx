"use client"

import Image from "next/image"
import { ShoppingCart } from "lucide-react"

export default function ShopPage() {
  const products = [
    {
      id: 1,
      name: "Avance Watch Pro",
      category: "Smartwatch",
      price: "$299",
      image: "/premium-smartwatch-with-biometric-sensors.jpg",
      features: ["Heart Rate", "Blood Oxygen", "Sleep Tracking", "ECG"],
    },
    {
      id: 2,
      name: "Avance Watch Sport",
      category: "Smartwatch",
      price: "$199",
      image: "/sport-smartwatch-fitness-tracker.jpg",
      features: ["Heart Rate", "GPS", "Water Resistant", "Activity Tracking"],
    },
    {
      id: 3,
      name: "Avance Band",
      category: "Smart Band",
      price: "$99",
      image: "/smart-fitness-band-biometric-tracker.jpg",
      features: ["Heart Rate", "Steps", "Calories", "Sleep Monitor"],
    },
    {
      id: 4,
      name: "Avance Ring",
      category: "Smart Ring",
      price: "$249",
      image: "/smart-ring-biometric-health-tracker.jpg",
      features: ["Heart Rate", "Body Temp", "Sleep", "Activity"],
    },
  ]

  return (
    <div className="min-h-screen bg-[#1C1C1C] text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-6">
        <nav className="bg-black/10 backdrop-blur-xl border border-white/20 rounded-full px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Image
                src="/images/Avance-text-logo.svg"
                alt="Avance"
                width={120}
                height={30}
                className="object-contain"
              />
            </div>

            <div className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
              <a
                href="/"
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
                href="/"
                className="text-white/70 hover:text-white transition-all duration-300 font-light text-sm tracking-wider uppercase"
              >
                Wellness
              </a>
              <a
                href="/"
                className="text-white/70 hover:text-white transition-all duration-300 font-light text-sm tracking-wider uppercase"
              >
                Community
              </a>
            </div>

            <a
              href="/"
              className="group flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2.5 hover:bg-white/20 transition-all duration-300"
            >
              <span className="text-sm font-light tracking-wide">Download</span>
              <ShoppingCart className="w-4 h-4 transition-transform duration-300 group-hover:-rotate-45" />
            </a>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Page Title */}
          <div className="mb-16 text-center">
            <h1 className="text-5xl md:text-7xl font-light mb-4 tracking-tight">
              Biometric
              <span className="text-[#83C5BE]"> Devices</span>
            </h1>
            <p className="text-white/60 text-lg font-light max-w-2xl mx-auto">
              Advanced wearables designed to track your health metrics with precision
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-[#006D77]/50 transition-all duration-500"
              >
                {/* Product Image */}
                <div className="relative aspect-square mb-6 rounded-2xl overflow-hidden bg-black/20">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Product Info */}
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-[#83C5BE] text-xs font-light uppercase tracking-widest mb-2">
                        {product.category}
                      </p>
                      <h3 className="text-2xl font-light tracking-tight">{product.name}</h3>
                    </div>
                    <span className="text-2xl font-light text-[#FFD166]">{product.price}</span>
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2">
                    {product.features.map((feature, index) => (
                      <span
                        key={index}
                        className="text-xs font-light px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-white/70"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button className="w-full mt-6 bg-[#006D77]/20 backdrop-blur-md border border-[#006D77]/30 rounded-full px-6 py-3 text-sm font-light tracking-wide hover:bg-[#006D77]/30 hover:border-[#006D77]/50 transition-all duration-300">
                    Add to Cart
                  </button>
                </div>

                {/* Decorative Element */}
                <div className="absolute top-6 right-6 w-20 h-20 bg-[#83C5BE]/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <Image
                src="/images/Avance-text-logo.svg"
                alt="Avance"
                width={100}
                height={25}
                className="object-contain"
              />
            </div>
            <p className="text-white/40 text-sm font-light">© 2025 Avance. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
