"use client"

import Image from "next/image"
import { ResponsiveContainer, LineChart, Line, AreaChart, Area, BarChart, Bar } from "recharts"
import { useState, useEffect } from "react"
import React from "react"
import { Moon, ArrowRight, MessageCircle, Heart, BarChart3, Trophy, Zap, Wind, Brain, Menu, X } from "lucide-react"

export default function AvanceLanding() {
  // REMOVED: const [isDarkMode, setIsDarkMode] = useState(false)
  const [activeFeature, setActiveFeature] = useState(0)
  const [currentChat, setCurrentChat] = useState(0)
  const [activeMood, setActiveMood] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const featureTimer = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 4)
    }, 4000)
    return () => clearInterval(featureTimer)
  }, [])

  useEffect(() => {
    const chatTimer = setInterval(() => {
      setCurrentChat((prev) => (prev + 1) % 3)
    }, 5000)
    return () => clearInterval(chatTimer)
  }, [])

  useEffect(() => {
    const moodTimer = setInterval(() => {
      setActiveMood((prev) => (prev + 1) % 4)
    }, 3500)
    return () => clearInterval(moodTimer)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  // REMOVED: const toggleDarkMode = () => {
  //   setIsDarkMode(!isDarkMode)
  // }

  // REMOVED: Translations object

  // Data for charts
  const chatData = [
    { time: "9:00", responses: 12, satisfaction: 98, engagement: 94 },
    { time: "12:00", responses: 18, satisfaction: 97, engagement: 96 },
    { time: "15:00", responses: 24, satisfaction: 99, engagement: 98 },
    { time: "18:00", responses: 31, satisfaction: 96, engagement: 95 },
    { time: "21:00", responses: 28, satisfaction: 98, engagement: 97 },
  ]

  const moodData = [
    { mood: "Energetic", activities: 45, color: "#006D77" },
    { mood: "Calm", activities: 38, color: "#FFD166" },
    { mood: "Stressed", activities: 52, color: "#83C5BE" },
    { mood: "Tired", activities: 29, color: "#83C5BE" },
  ]

  const progressData = [
    { week: "W1", workouts: 3, progress: 72, consistency: 68 },
    { week: "W2", workouts: 4, progress: 78, consistency: 74 },
    { week: "W3", workouts: 5, progress: 85, consistency: 82 },
    { week: "W4", workouts: 6, progress: 91, consistency: 89 },
    { week: "W5", workouts: 5, progress: 88, consistency: 86 },
    { week: "W6", workouts: 7, progress: 94, consistency: 92 },
  ]

  const communityStats = [
    { metric: "challenges", value: "847", growth: "+23%", color: "#006D77" },
    { metric: "points", value: "2.4M", growth: "earned", color: "#FFD166" },
    { metric: "social", value: "156K", growth: "+18%", color: "#83C5BE" },
    { metric: "motivation", value: "98.7%", growth: "satisfaction", color: "#83C5BE" },
  ]

  const chatExamples = [
    {
      question: "What should I do at the gym today?",
      response:
        "Based on your energy levels and yesterday's upper body focus, let's try a 30-min lower body circuit with some cardio intervals.",
      questionEs: "¿Qué debería hacer en el gym hoy?",
      responseEs:
        "Basándome en tus niveles de energía y el enfoque de ayer en tren superior, probemos un circuito de 30 min para tren inferior con intervalos de cardio.",
    },
    {
      question: "I'm feeling stressed, any suggestions?",
      response:
        "I sense you need some calm. How about a 15-minute guided breathing session followed by gentle yoga? I'll create a custom flow for you.",
      questionEs: "Me siento estresado, ¿alguna sugerencia?",
      responseEs:
        "Siento que necesitas calma. ¿Qué tal una sesión de respiración guiada de 15 minutos seguida de yoga suave? Crearé un flujo personalizado para ti.",
    },
    {
      question: "I have a knee injury, what can I do?",
      response:
        "Let's focus on upper body and core today. I'll design a seated workout that avoids any knee stress while keeping you active and strong.",
      questionEs: "Tengo una lesión en la rodilla, ¿qué puedo hacer?",
      responseEs:
        "Enfoquémonos en tren superior y core hoy. Diseñaré un entrenamiento sentado que evite estrés en la rodilla mientras te mantienes activo y fuerte.",
    },
  ]

  const moodActivities = [
    {
      name: "Energetic",
      activity: "HIIT Workout",
      duration: "25 min",
      icon: Zap,
      color: "#006D77",
    },
    {
      name: "Calm",
      activity: "Yoga Flow",
      duration: "20 min",
      icon: Heart,
      color: "#FFD166",
    },
    {
      name: "Stressed",
      activity: "Breathing Exercise",
      duration: "10 min",
      icon: Wind,
      color: "#83C5BE",
    },
    {
      name: "Tired",
      activity: "Gentle Stretch",
      duration: "15 min",
      icon: Moon,
      color: "#83C5BE",
    },
  ]

  return (
    <div className="relative dark" style={{ backgroundColor: "#1C1C1C" }}>
      {/* Header */}
      <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-6xl px-4 md:px-8">
        <nav className={`bg-black/10 backdrop-blur-xl border border-white/20 px-4 md:px-8 py-4 ${isMobileMenuOpen ? 'rounded-2xl' : 'rounded-full'}`}>
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
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
            </div>

            {/* Navigation - Desktop */}
            <div className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
              <button
                onClick={() => scrollToSection("coach")}
                className="text-white/70 hover:text-white transition-all duration-300 font-light text-sm tracking-wider uppercase"
              >
                AI Coach
              </button>
              <a
                href="/shop"
                className="text-white/70 hover:text-white transition-all duration-300 font-light text-sm tracking-wider uppercase"
              >
                Shop
              </a>
              <button
                onClick={() => scrollToSection("wellness")}
                className="text-white/70 hover:text-white transition-all duration-300 font-light text-sm tracking-wider uppercase"
              >
                Wellness
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
                  scrollToSection("coach")
                  setIsMobileMenuOpen(false)
                }}
                className="block w-full text-left text-white/70 hover:text-white transition-all duration-300 font-light text-sm tracking-wider uppercase py-2"
              >
                AI Coach
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
                  scrollToSection("wellness")
                  setIsMobileMenuOpen(false)
                }}
                className="block w-full text-left text-white/70 hover:text-white transition-all duration-300 font-light text-sm tracking-wider uppercase py-2"
              >
                Wellness
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

      {/* Hero Section - UNCHANGED */}
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
            <p className="text-lg md:text-xl text-white/80 font-light mt-8 drop-shadow-sm tracking-wide leading-relaxed">
              Meet Eve, your AI wellness companion
            </p>
          </div>
        </div>
      </section>

      {/* AI Coach Section */}
      <section id="coach" className="relative min-h-screen py-32" style={{ backgroundColor: "#000000" }}>
        <div className="container mx-auto px-8">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center space-x-3 mb-8">
                <MessageCircle className="w-5 h-5" style={{ color: "#006D77" }} />
                <span className={`text-sm font-light tracking-[0.5em] uppercase text-gray-400`}>AI Live Chat</span>
                <MessageCircle className="w-5 h-5" style={{ color: "#006D77" }} />
              </div>
              <h2 className={`text-6xl md:text-7xl font-extralight mb-4 text-white`}>AI Live Chat</h2>
              <h3 className="text-2xl md:text-3xl font-light mb-8" style={{ color: "#006D77" }}>
                Your Smart Coach
              </h3>
              <p className={`text-lg font-light max-w-3xl mx-auto leading-relaxed text-gray-400`}>
                Talk directly to Eve about your goals, injuries, or simply ask 'What should I do at the gym today?' Get
                personalized routines and support tailored just for you.
              </p>
            </div>

            {/* AI Chat Dashboard */}
            <div className="grid lg:grid-cols-2 gap-16 mb-20">
              {/* Live Chat Interface */}
              <div className={`rounded-2xl p-8 backdrop-blur-xl border bg-black/20 border-white/10`}>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className={`text-xl font-light text-white`}>Live Conversation</h3>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: "#006D77" }}></div>
                      <span className="text-sm" style={{ color: "#006D77" }}>
                        Live
                      </span>
                    </div>
                  </div>

                  {/* Chat Example */}
                  <div className="space-y-4">
                    <div className="text-right">
                      <div className={`inline-block p-4 rounded-2xl rounded-tr-sm max-w-xs bg-white/10 text-gray-200`}>
                        <p className="text-sm">{chatExamples[currentChat].question}</p>
                      </div>
                    </div>
                    <div className="text-left">
                      <div
                        className="inline-block p-4 rounded-2xl rounded-tl-sm max-w-sm"
                        style={{ backgroundColor: "#006D77" }}
                      >
                        <p className="text-sm text-white">{chatExamples[currentChat].response}</p>
                      </div>
                    </div>
                  </div>

                  {/* Chat Metrics */}
                  <div className="h-32">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={chatData}>
                        <Line type="monotone" dataKey="responses" stroke="#006D77" strokeWidth={2} dot={false} />
                        <Line
                          type="monotone"
                          dataKey="satisfaction"
                          stroke="#FFD166"
                          strokeWidth={2}
                          dot={false}
                          strokeDasharray="5 5"
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>

              {/* AI Intelligence Metrics */}
              <div className={`rounded-2xl p-8 backdrop-blur-xl border bg-black/20 border-white/10`}>
                <div className="space-y-8">
                  <div className="flex items-center justify-between">
                    <h3 className={`text-xl font-light text-white`}>Smart Coaching</h3>
                    <div className="text-xs" style={{ color: "#83C5BE" }}>
                      Real-time
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-extralight mb-2" style={{ color: "#006D77" }}>
                        24/7
                      </div>
                      <div className={`text-sm text-gray-400`}>24/7 Available</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-extralight mb-2" style={{ color: "#FFD166" }}>
                        100%
                      </div>
                      <div className={`text-sm text-gray-400`}>Personalized Responses</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-extralight mb-2" style={{ color: "#83C5BE" }}>
                        ∞
                      </div>
                      <div className={`text-sm text-gray-400`}>Contextual Understanding</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-extralight mb-2" style={{ color: "#83C5BE" }}>
                        2.3s
                      </div>
                      <div className={`text-sm text-gray-400`}>Response Time</div>
                    </div>
                  </div>

                  {/* Feature Highlights */}
                  <div className="space-y-4">
                    {[
                      "Understands your goals & injuries",
                      "Tailors workouts to your mood",
                      "Adapts to your preferences",
                      "Available whenever you need support",
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#006D77" }}></div>
                        <span className={`text-sm text-gray-300`}>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emotional Wellness Section */}
      <section id="wellness" className="relative min-h-screen py-32" style={{ backgroundColor: "#1C1C1C" }}>
        <div className="container mx-auto px-8">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center space-x-3 mb-8">
                <Heart className="w-5 h-5" style={{ color: "#FFD166" }} />
                <span className={`text-sm font-light tracking-[0.5em] uppercase text-gray-400`}>
                  Emotional Check-Ins
                </span>
                <Heart className="w-5 h-5" style={{ color: "#FFD166" }} />
              </div>
              <h2 className={`text-6xl md:text-7xl font-extralight mb-4 text-white`}>Emotional Check-Ins</h2>
              <h3 className="text-2xl md:text-3xl font-light mb-8" style={{ color: "#FFD166" }}>
                Mood-Based Coaching
              </h3>
              <p className={`text-lg font-light max-w-3xl mx-auto leading-relaxed text-gray-400`}>
                Log how you feel each day and receive personalized suggestions for yoga flows, breathing exercises,
                meditation, or rest recommendations.
              </p>
            </div>

            {/* Mood Dashboard */}
            <div className="grid lg:grid-cols-2 gap-16 mb-20">
              {/* Mood Tracking */}
              <div className={`rounded-2xl p-8 backdrop-blur-xl border bg-black/20 border-white/10`}>
                <div className="space-y-6">
                  <h3 className={`text-xl font-light text-white`}>Daily Mood Tracking</h3>

                  {/* Current Mood Spotlight */}
                  <div className="text-center py-8">
                    <div
                      className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: moodActivities[activeMood].color }}
                    >
                      {React.createElement(moodActivities[activeMood].icon, { className: "w-8 h-8 text-white" })}
                    </div>
                    <h4 className={`text-xl font-light mb-2 text-white`}>{moodActivities[activeMood].name}</h4>
                    <p className={`text-sm mb-4 text-gray-400`}>Suggested: {moodActivities[activeMood].activity}</p>
                    <div className="text-lg" style={{ color: "#FFD166" }}>
                      {moodActivities[activeMood].duration}
                    </div>
                  </div>

                  {/* Mood Chart */}
                  <div className="h-32">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={moodData}>
                        <Bar dataKey="activities" fill="#FFD166" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>

              {/* Wellness Activities */}
              <div className={`rounded-2xl p-8 backdrop-blur-xl border bg-black/20 border-white/10`}>
                <div className="space-y-8">
                  <h3 className={`text-xl font-light text-white`}>Personalized Activities</h3>

                  <div className="space-y-6">
                    {[
                      { activity: "Yoga Flows", icon: Heart, sessions: "247", color: "#006D77" },
                      { activity: "Breathing Exercises", icon: Wind, sessions: "189", color: "#FFD166" },
                      { activity: "Meditation", icon: Brain, sessions: "156", color: "#83C5BE" },
                      { activity: "Rest Recommendations", icon: Moon, sessions: "98", color: "#83C5BE" },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className={`p-4 rounded-xl transition-all duration-300 bg-white/5 hover:bg-white/10`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div
                              className="w-8 h-8 rounded-full flex items-center justify-center"
                              style={{ backgroundColor: item.color }}
                            >
                              {React.createElement(item.icon, { className: "w-4 h-4 text-white" })}
                            </div>
                            <div>
                              <h4 className={`font-medium text-white`}>{item.activity}</h4>
                              <p className={`text-sm text-gray-400`}>{item.sessions} sessions this week</p>
                            </div>
                          </div>
                          <div className="text-lg font-light" style={{ color: item.color }}>
                            +{Math.floor(Math.random() * 20 + 10)}%
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Section */}
      <section className="relative min-h-screen py-32" style={{ backgroundColor: "#1C1C1C" }}>
        <div className="container mx-auto px-8">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center space-x-3 mb-8">
                <BarChart3 className="w-5 h-5" style={{ color: "#83C5BE" }} />
                <span className={`text-sm font-light tracking-[0.5em] uppercase text-gray-400`}>Your Dashboard</span>
                <BarChart3 className="w-5 h-5" style={{ color: "#83C5BE" }} />
              </div>
              <h2 className={`text-6xl md:text-7xl font-extralight mb-4 text-white`}>Your Fitness Story</h2>
              <h3 className="text-2xl md:text-3xl font-light mb-8" style={{ color: "#83C5BE" }}>
                Clean & Visual Dashboard
              </h3>
              <p className={`text-lg font-light max-w-3xl mx-auto leading-relaxed text-gray-400`}>
                View your progress, track activities, and monitor improvements in a clean, visual space. Simple
                insights, not overwhelming spreadsheets.
              </p>
            </div>

            {/* Dashboard Preview */}
            <div className="grid lg:grid-cols-2 gap-16 mb-20">
              {/* Progress Visualization */}
              <div className={`rounded-2xl p-8 backdrop-blur-xl border bg-black/20 border-white/10`}>
                <div className="space-y-6">
                  <h3 className={`text-xl font-light text-white`}>Progress Tracking</h3>

                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={progressData}>
                        <defs>
                          <linearGradient id="progressGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#83C5BE" stopOpacity={0.3} />
                            <stop offset="95%" stopColor="#83C5BE" stopOpacity={0} />
                          </linearGradient>
                          <linearGradient id="consistencyGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#006D77" stopOpacity={0.3} />
                            <stop offset="95%" stopColor="#006D77" stopOpacity={0} />
                          </linearGradient>
                        </defs>
                        <Area
                          type="monotone"
                          dataKey="progress"
                          stroke="#83C5BE"
                          fillOpacity={1}
                          fill="url(#progressGradient)"
                        />
                        <Area
                          type="monotone"
                          dataKey="consistency"
                          stroke="#006D77"
                          fillOpacity={1}
                          fill="url(#consistencyGradient)"
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-light" style={{ color: "#83C5BE" }}>
                        94%
                      </div>
                      <div className={`text-xs text-gray-400`}>Progress</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-light" style={{ color: "#006D77" }}>
                        92%
                      </div>
                      <div className={`text-xs text-gray-400`}>Consistency</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-light" style={{ color: "#FFD166" }}>
                        30
                      </div>
                      <div className={`text-xs text-gray-400`}>Workouts</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Simple Insights */}
              <div className={`rounded-2xl p-8 backdrop-blur-xl border bg-black/20 border-white/10`}>
                <div className="space-y-8">
                  <h3 className={`text-xl font-light text-white`}>Simple Insights</h3>

                  <div className="space-y-6">
                    <div className={`p-6 rounded-xl bg-white/5 border border-white/10`}>
                      <div className="flex items-center justify-between mb-3">
                        <h4 className={`font-medium text-white`}>This Week's Highlight</h4>
                        <Trophy className="w-5 h-5" style={{ color: "#006D77" }} />
                      </div>
                      <p className={`text-sm text-gray-400`}>
                        You completed 7 workouts this week - your best streak yet! Keep it up.
                      </p>
                    </div>

                    <div className={`p-6 rounded-xl bg-white/5 border border-white/10`}>
                      <div className="flex items-center justify-between mb-3">
                        <h4 className={`font-medium text-white`}>Improvement Spotted</h4>
                        <BarChart3 className="w-5 h-5" style={{ color: "#83C5BE" }} />
                      </div>
                      <p className={`text-sm text-gray-400`}>
                        Your consistency improved by 18% compared to last month.
                      </p>
                    </div>

                    <div className={`p-6 rounded-xl bg-white/5 border border-white/10`}>
                      <div className="flex items-center justify-between mb-3">
                        <h4 className={`font-medium text-white`}>Next Goal</h4>
                        <ArrowRight className="w-5 h-5" style={{ color: "#FFD166" }} />
                      </div>
                      <p className={`text-sm text-gray-400`}>
                        You're 3 workouts away from your monthly goal. You've got this!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="relative min-h-screen py-32" style={{ backgroundColor: "#1C1C1C" }}>
        <div className="container mx-auto px-8">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center space-x-3 mb-8">
                <Trophy className="w-5 h-5" style={{ color: "#83C5BE" }} />
                <span className={`text-sm font-light tracking-[0.5em] uppercase text-gray-400`}>
                  Challenges & Community
                </span>
                <Trophy className="w-5 h-5" style={{ color: "#83C5BE" }} />
              </div>
              <h2 className={`text-6xl md:text-7xl font-extralight mb-4 text-white`}>Challenges & Community</h2>
              <h3 className="text-2xl md:text-3xl font-light mb-8" style={{ color: "#83C5BE" }}>
                Social Motivation
              </h3>
              <p className={`text-lg font-light max-w-3xl mx-auto leading-relaxed text-gray-400`}>
                Join challenges, earn points, level up, and connect with others. Share workouts, celebrate milestones,
                and turn fitness into a fun social experience.
              </p>
            </div>

            {/* Community Dashboard */}
            <div className="grid lg:grid-cols-2 gap-16 mb-20">
              {/* Active Challenges */}
              <div className={`rounded-2xl p-8 backdrop-blur-xl border bg-black/20 border-white/10`}>
                <div className="space-y-6">
                  <h3 className={`text-xl font-light text-white`}>Active Challenges</h3>

                  <div className="space-y-4">
                    {[
                      { name: "7-Day Energy Boost", participants: "2,847", progress: 85, icon: Zap },
                      { name: "Mindful Movement", participants: "1,923", progress: 72, icon: Heart },
                      { name: "Strength Builder", participants: "3,156", progress: 91, icon: Trophy },
                      { name: "Flexibility Focus", participants: "1,654", progress: 68, icon: Wind },
                    ].map((challenge, index) => (
                      <div
                        key={index}
                        className={`p-4 rounded-xl transition-all duration-300 bg-white/5 hover:bg-white/10`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-3">
                            <div
                              className="w-8 h-8 rounded-full flex items-center justify-center"
                              style={{ backgroundColor: "#83C5BE" }}
                            >
                              {React.createElement(challenge.icon, { className: "w-4 h-4 text-white" })}
                            </div>
                            <div>
                              <h4 className={`font-medium text-white`}>{challenge.name}</h4>
                              <p className={`text-sm text-gray-400`}>{challenge.participants} participants</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-light" style={{ color: "#83C5BE" }}>
                              {challenge.progress}%
                            </div>
                          </div>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div
                            className="h-2 rounded-full transition-all duration-500"
                            style={{ backgroundColor: "#83C5BE", width: `${challenge.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Social Features */}
              <div className={`rounded-2xl p-8 backdrop-blur-xl border bg-black/20 border-white/10`}>
                <div className="space-y-8">
                  <h3 className={`text-xl font-light text-white`}>Social Connection</h3>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-extralight mb-2" style={{ color: "#006D77" }}>
                        847
                      </div>
                      <div className={`text-sm text-gray-400`}>Active Challenges</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-extralight mb-2" style={{ color: "#FFD166" }}>
                        2.4M
                      </div>
                      <div className={`text-sm text-gray-400`}>Points Earned</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-extralight mb-2" style={{ color: "#83C5BE" }}>
                        156K
                      </div>
                      <div className={`text-sm text-gray-400`}>Connections Made</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-extralight mb-2" style={{ color: "#83C5BE" }}>
                        98.7%
                      </div>
                      <div className={`text-sm text-gray-400`}>Satisfaction Rate</div>
                    </div>
                  </div>

                  {/* Community Features */}
                  <div className="space-y-4">
                    {[
                      "Join daily & weekly challenges",
                      "Earn points and level up",
                      "Share workouts & milestones",
                      "Connect, follow & get inspired",
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#83C5BE" }}></div>
                        <span className={`text-sm text-gray-300`}>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="download" className="relative py-32" style={{ backgroundColor: "#1C1C1C" }}>
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-3 mb-8">
              <div className="w-1 h-1 rounded-full" style={{ backgroundColor: "#006D77" }}></div>
              <span className={`text-sm font-light tracking-[0.5em] uppercase text-gray-400`}>Start Your Journey</span>
              <div className="w-1 h-1 rounded-full" style={{ backgroundColor: "#006D77" }}></div>
            </div>

            <h2 className={`text-6xl md:text-7xl font-extralight mb-4 text-white`}>Ready to Feel Better?</h2>
            <h3 className="text-2xl md:text-3xl font-light mb-8" style={{ color: "#006D77" }}>
              It's Built Just for You
            </h3>

            <p className={`text-lg font-light leading-relaxed mb-12 max-w-2xl mx-auto text-gray-400`}>
              Join thousands who've discovered a wellness journey that actually understands them.
            </p>

            <div className="space-y-8">
              <button
                className="group inline-flex items-center space-x-3 px-12 py-6 rounded-full text-white text-lg font-light transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                style={{ backgroundColor: "#006D77" }}
              >
                <span>Start Your Journey</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <p className={`text-sm text-gray-500`}>Available on iOS and Android</p>

              {/* App Store Badges */}
              <div className="flex justify-center space-x-6">
                <div className={`px-8 py-4 rounded-xl border bg-black/20 border-white/10 text-gray-300`}>
                  <div className="text-xs mb-1">Download on the</div>
                  <div className="font-medium">App Store</div>
                </div>
                <div className={`px-8 py-4 rounded-xl border bg-black/20 border-white/10 text-gray-300`}>
                  <div className="text-xs mb-1">Get it on</div>
                  <div className="font-medium">Google Play</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="relative py-16 border-t"
        style={{ backgroundColor: "#1C1C1C", borderColor: "rgba(255,255,256,0.2)" }}
      >
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
              {/* Brand */}
              <div className="flex items-center space-x-3">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-md border overflow-hidden"
                  style={{
                    backgroundColor: "#006D77",
                    borderColor: "rgba(255,255,256,0.2)",
                  }}
                >
                  <Image
                    src="/images/avance-logo.png"
                    alt="Avance Logo"
                    width={48}
                    height={48}
                    className="object-cover w-full h-full"
                  />
                </div>
                <span className={`text-2xl font-light tracking-wide text-white`}>Avance</span>
              </div>

              {/* Links */}
              <div className="flex items-center space-x-8">
                <button
                  onClick={() => scrollToSection("coach")}
                  className={`text-sm font-light hover:opacity-70 transition-opacity text-gray-400`}
                >
                  AI Coach
                </button>
                <a
                  href="/shop"
                  className={`text-sm font-light hover:opacity-70 transition-opacity text-gray-400`}
                >
                  Shop
                </a>
                <button
                  onClick={() => scrollToSection("wellness")}
                  className={`text-sm font-light hover:opacity-70 transition-opacity text-gray-400`}
                >
                  Wellness
                </button>
                <button
                  onClick={() => scrollToSection("community")}
                  className={`text-sm font-light hover:opacity-70 transition-opacity text-gray-400`}
                >
                  Community
                </button>
                <a href="#" className={`text-sm font-light hover:opacity-70 transition-opacity text-gray-400`}>
                  Privacy
                </a>
              </div>

              {/* Copyright */}
              <div className={`text-sm font-light text-gray-500`}>© 2024 Avance</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
