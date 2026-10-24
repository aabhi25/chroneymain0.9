import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Image, Search, Sparkles, Palette, Layers, Shield, ArrowRight, CheckCircle, Gem, ShoppingBag, Shirt, Crown, Camera, Eye } from "lucide-react";
import { useState, useEffect } from "react";

import sourceShoe from "@assets/stock_images/red_high_heel_shoe_e_3d462f5e.jpg";
import perfectMatch from "@assets/stock_images/red_embroidered_high_776fb38b.jpg";
import similarMatch from "@assets/stock_images/red_stiletto_high_he_ce31121d.jpg";

import modelNecklace from "@assets/stock_images/elegant_necklace_on__d4fa33c1.jpg";
import modelRing from "@assets/stock_images/female_hand_fingers__72a56e21.jpg";

const AnimatedCounter = ({ value, suffix, label }: { value: number; suffix: string; label: string }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [value]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] bg-clip-text text-transparent">
        {count}{suffix}
      </div>
      <div className="text-gray-600 mt-2">{label}</div>
    </motion.div>
  );
};

export default function AIVista() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const keyCapabilities = [
    { icon: Search, title: "Visual AI search engine", description: "Find products using images instantly", color: "from-blue-500 to-cyan-500" },
    { icon: Layers, title: "Product similarity detection", description: "Match products across vast catalogs", color: "from-purple-500 to-pink-500" },
    { icon: Sparkles, title: "AI-generated creative assets", description: "Studio-quality images on demand", color: "from-amber-500 to-orange-500" },
    { icon: Image, title: "Scalable for thousands of SKUs", description: "Enterprise-ready performance", color: "from-green-500 to-emerald-500" },
    { icon: Shield, title: "Enterprise-grade security", description: "Encrypted, access-controlled data", color: "from-red-500 to-rose-500" },
    { icon: Eye, title: "Real-time visual analysis", description: "Instant image understanding", color: "from-indigo-500 to-violet-500" },
  ];

  const idealFor = [
    { icon: Gem, title: "Jewellery brands", color: "bg-amber-100 text-amber-700" },
    { icon: ShoppingBag, title: "Ecommerce platforms", color: "bg-blue-100 text-blue-700" },
    { icon: Crown, title: "D2C brands", color: "bg-purple-100 text-purple-700" },
    { icon: Shirt, title: "Fashion companies", color: "bg-pink-100 text-pink-700" },
    { icon: Camera, title: "Luxury enterprises", color: "bg-slate-100 text-slate-700" },
  ];

  const stats = [
    { value: 98, suffix: "%", label: "Search Accuracy" },
    { value: 10, suffix: "x", label: "Faster Cataloging" },
    { value: 70, suffix: "%", label: "Cost Reduction" },
    { value: 50, suffix: "M+", label: "Products Indexed" },
  ];

  const jewelleryItems = [
    { image: modelNecklace, name: "Elegant Necklace" },
    { image: modelRing, name: "Diamond Ring" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>AI Vista - Visual Intelligence Platform for Product Discovery | AI Chroney</title>
        <meta name="description" content="AI Vista is an advanced visual AI platform that enables brands to revolutionize product discovery and content creation through image-based intelligence." />
      </Helmet>
      <Navigation />
      
      <main>
        {/* Hero Section - Enhanced with Split Showcase */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-white pt-20 sm:pt-24">
          <div className="absolute inset-0">
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute top-20 right-1/4 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl"
            />
            <motion.div
              animate={{ 
                scale: [1.2, 1, 1.2],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ duration: 10, repeat: Infinity }}
              className="absolute bottom-20 left-1/4 w-96 h-96 bg-purple-200/40 rounded-full blur-3xl"
            />
          </div>

          <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12 relative">
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto mb-12"
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-white/80 backdrop-blur border border-purple-200 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-sm"
              >
                <Sparkles className="w-4 h-4" />
                Visual Intelligence Platform
              </motion.div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#0C1445] mb-6 leading-tight">
                See. Search.
                <br />
                <span className="bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] bg-clip-text text-transparent">
                  Create.
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                The complete visual AI platform for e-commerce. Find products instantly with image search, and generate stunning creative content with AI-powered studio tools.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link href="/contact">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] hover:opacity-90 text-white text-base sm:text-lg px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 group"
                  >
                    Book a Demo
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Split Animated Showcase */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch">
              {/* Visual Product Search Card */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative h-full"
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="bg-white rounded-3xl shadow-2xl p-6 border border-gray-100 overflow-hidden h-full flex flex-col"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                      <Search className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-[#0C1445]">Visual Product Search</div>
                      <div className="text-xs text-gray-500">Find products with images</div>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-center flex-1">
                    <motion.div 
                      className="relative w-32 h-32 rounded-xl overflow-hidden border-2 border-blue-200 flex-shrink-0"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <img src={sourceShoe} alt="Source" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-blue-500/10" />
                    </motion.div>
                    
                    <motion.div
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="text-blue-500"
                    >
                      <ArrowRight className="w-6 h-6" />
                    </motion.div>
                    
                    <div className="flex gap-3 flex-1">
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1, duration: 0.5 }}
                        className="relative w-28 h-28 rounded-lg overflow-hidden border-2 border-green-400"
                      >
                        <img src={perfectMatch} alt="Match" className="w-full h-full object-cover" />
                        <div className="absolute bottom-0 left-0 right-0 bg-green-500 text-white text-[9px] px-1.5 py-1 font-semibold text-center">Perfect Match</div>
                      </motion.div>
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.3, duration: 0.5 }}
                        className="relative w-28 h-28 rounded-lg overflow-hidden border-2 border-purple-400"
                      >
                        <img src={similarMatch} alt="Similar" className="w-full h-full object-cover" />
                        <div className="absolute bottom-0 left-0 right-0 bg-purple-500 text-white text-[9px] px-1.5 py-1 font-semibold text-center">Similar Match</div>
                      </motion.div>
                    </div>
                  </div>
                  
                  <motion.div 
                    className="mt-4 h-2 bg-gray-100 rounded-full overflow-hidden"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                  >
                    <motion.div
                      className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
                      animate={{ width: ["0%", "100%"] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
                    />
                  </motion.div>
                  <div className="flex justify-between mt-2 text-xs text-gray-500">
                    <span>Searching catalog...</span>
                    <span className="text-green-600 font-medium">2 matches found</span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Vista Studio Card */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="relative h-full"
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="bg-gradient-to-br from-slate-900 to-purple-900 rounded-3xl shadow-2xl p-6 border border-purple-500/30 overflow-hidden h-full flex flex-col"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center"
                    >
                      <Palette className="w-5 h-5 text-white" />
                    </motion.div>
                    <div>
                      <div className="font-semibold text-white">Vista Studio</div>
                      <div className="text-xs text-gray-400">AI-powered content creation</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2">
                    <motion.div 
                      className="relative rounded-xl overflow-hidden aspect-square"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8 }}
                    >
                      <img src={modelNecklace} alt="Generated" className="w-full h-full object-cover" />
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-t from-amber-500/40 to-transparent"
                        animate={{ opacity: [0.3, 0.6, 0.3] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <div className="absolute bottom-1 left-1 bg-amber-500 text-white text-[8px] px-1.5 py-0.5 rounded font-medium">AI Generated</div>
                    </motion.div>
                    <motion.div 
                      className="relative rounded-xl overflow-hidden aspect-square"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.1 }}
                    >
                      <img src={modelRing} alt="Generated" className="w-full h-full object-cover" />
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-t from-orange-500/40 to-transparent"
                        animate={{ opacity: [0.3, 0.6, 0.3] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                      />
                      <div className="absolute bottom-1 left-1 bg-orange-500 text-white text-[8px] px-1.5 py-0.5 rounded font-medium">AI Generated</div>
                    </motion.div>
                  </div>
                  
                  <motion.div 
                    className="mt-4 flex items-center gap-2"
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    <span className="text-xs text-gray-300">Generating premium portfolio...</span>
                  </motion.div>
                  <div className="mt-2 h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-amber-400 to-orange-500 rounded-full"
                      animate={{ width: ["0%", "100%"] }}
                      transition={{ duration: 3, repeat: Infinity, repeatDelay: 1 }}
                    />
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Visual Product Search Section - Dedicated */}
        <section className="py-20 sm:py-28 px-4 bg-gradient-to-br from-blue-100 via-purple-100 to-indigo-100 relative overflow-hidden">
          <div className="absolute inset-0">
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute top-10 left-1/4 w-72 h-72 bg-blue-300/30 rounded-full blur-3xl"
            />
            <motion.div
              animate={{ 
                scale: [1.1, 1, 1.1],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute bottom-10 right-1/4 w-72 h-72 bg-purple-300/30 rounded-full blur-3xl"
            />
          </div>

          <div className="max-w-7xl mx-auto relative">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur border border-blue-200 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-sm">
                <Search className="w-4 h-4" />
                AI-Powered Discovery
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#0C1445] mb-4">
                Visual <span className="bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] bg-clip-text text-transparent">Product Search</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
                Upload any product image and instantly find exact matches and similar items across your entire catalog.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative max-w-4xl mx-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#3B82F6] via-[#8B5CF6] to-[#EC4899] rounded-[2rem] blur-sm opacity-60" />
              <div className="relative bg-white rounded-[1.75rem] shadow-2xl p-8 sm:p-10 border-2 border-white/50 backdrop-blur">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <motion.div 
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] flex items-center justify-center shadow-lg shadow-purple-300/50"
                    >
                      <Search className="w-7 h-7 text-white" />
                    </motion.div>
                    <div>
                      <div className="font-bold text-lg text-[#0C1445]">Visual Product Search</div>
                      <div className="text-sm text-gray-500">AI-powered instant matching</div>
                    </div>
                  </div>
                  <div className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 px-4 py-2 rounded-full">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium text-green-700">Live Search</span>
                  </div>
                </div>

                <div className="flex gap-6 sm:gap-8 mb-8 items-center">
                  <motion.div 
                    animate={{ scale: [1, 1.03, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-32 h-32 sm:w-44 sm:h-44 rounded-2xl overflow-hidden relative flex-shrink-0 shadow-xl"
                    style={{ 
                      background: 'linear-gradient(135deg, #FF4D4D 0%, #9333EA 100%)',
                      padding: '3px'
                    }}
                  >
                    <div className="w-full h-full rounded-[14px] overflow-hidden bg-white">
                      <img 
                        src={sourceShoe} 
                        alt="Source shoe" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-0 left-0 right-0 bg-gradient-to-r from-[#FF4D4D] to-[#9333EA] text-white text-sm py-2 text-center font-bold tracking-wide">
                      SOURCE
                    </div>
                  </motion.div>

                  <div className="flex flex-col items-center gap-1 flex-shrink-0">
                    <motion.div
                      animate={{ x: [0, 12, 0] }}
                      transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                      className="flex items-center"
                    >
                      <div className="w-16 h-0.5 bg-gradient-to-r from-purple-300 to-purple-500 rounded-full" />
                      <ArrowRight className="w-8 h-8 text-purple-500 -ml-1" />
                    </motion.div>
                    <span className="text-xs text-purple-500 font-medium">AI Match</span>
                  </div>

                  <div className="flex-1 flex flex-col gap-4">
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      whileHover={{ scale: 1.02, y: -4 }}
                      className="relative rounded-2xl overflow-hidden shadow-xl cursor-pointer group"
                      style={{ 
                        background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
                        padding: '3px'
                      }}
                    >
                      <div className="bg-white rounded-[13px] overflow-hidden">
                        <img 
                          src={perfectMatch} 
                          alt="Perfect match" 
                          className="w-full h-28 sm:h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="absolute top-2 right-2">
                        <motion.div 
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5, type: "spring" }}
                          className="bg-white/95 backdrop-blur px-2 py-1 rounded-full shadow-lg flex items-center gap-1"
                        >
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-xs font-bold text-green-700">98%</span>
                        </motion.div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-emerald-600 to-green-500 text-white text-sm py-2.5 text-center font-bold tracking-wide flex items-center justify-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        Perfect Match
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      whileHover={{ scale: 1.02, y: -4 }}
                      className="relative rounded-2xl overflow-hidden shadow-xl cursor-pointer group"
                      style={{ 
                        background: 'linear-gradient(135deg, #8B5CF6 0%, #6366F1 100%)',
                        padding: '3px'
                      }}
                    >
                      <div className="bg-white rounded-[13px] overflow-hidden">
                        <img 
                          src={similarMatch} 
                          alt="Similar match" 
                          className="w-full h-28 sm:h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="absolute top-2 right-2">
                        <motion.div 
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.7, type: "spring" }}
                          className="bg-white/95 backdrop-blur px-2 py-1 rounded-full shadow-lg flex items-center gap-1"
                        >
                          <CheckCircle className="w-4 h-4 text-purple-600" />
                          <span className="text-xs font-bold text-purple-700">87%</span>
                        </motion.div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-purple-600 to-indigo-500 text-white text-sm py-2.5 text-center font-bold tracking-wide flex items-center justify-center gap-2">
                        <Sparkles className="w-4 h-4" />
                        Similar Match
                      </div>
                    </motion.div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-slate-50 to-gray-50 rounded-xl p-4 border border-gray-100">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-gray-600">Search Progress</span>
                    <span className="text-sm font-bold text-purple-600">Complete</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5 }}
                      className="h-full bg-gradient-to-r from-[#3B82F6] via-[#8B5CF6] to-[#EC4899] rounded-full"
                    />
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                        <span className="text-xs text-gray-600">Perfect: 1</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-purple-500" />
                        <span className="text-xs text-gray-600">Similar: 1</span>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-gray-500">0.3s response time</span>
                  </div>
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full shadow-lg text-sm font-medium"
              >
                98% Accuracy
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Vista Studio Section - Enhanced */}
        <section className="py-20 sm:py-28 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
          </div>

          <div className="max-w-7xl mx-auto relative">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/20 to-orange-500/20 backdrop-blur border border-amber-400/30 text-amber-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Palette className="w-4 h-4" />
                AI-Powered Creative Studio
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Vista Studio</span>
              </h2>
              <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto mb-4">
                AI-Powered Jewellery Portfolio Generation
              </p>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Generate stunning product portfolios in seconds. No expensive photoshoots required.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-2 lg:order-1"
              >
                <div className="bg-white/5 backdrop-blur border border-white/10 rounded-3xl p-6 sm:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center"
                    >
                      <Sparkles className="w-5 h-5 text-white" />
                    </motion.div>
                    <div>
                      <div className="font-semibold text-white">Portfolio Generated</div>
                      <div className="text-sm text-gray-400">Premium collection ready</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {jewelleryItems.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.15 }}
                        whileHover={{ scale: 1.05 }}
                        className="relative"
                      >
                        <motion.div
                          animate={{ 
                            boxShadow: ["0 0 0px rgba(139, 92, 246, 0)", "0 0 20px rgba(139, 92, 246, 0.4)", "0 0 0px rgba(139, 92, 246, 0)"]
                          }}
                          transition={{ duration: 2, repeat: Infinity, repeatDelay: index * 0.3 }}
                          className="aspect-square rounded-xl overflow-hidden border border-amber-200/30"
                        >
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2">
                            <span className="text-xs text-white font-medium">{item.name}</span>
                          </div>
                        </motion.div>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div 
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2 }}
                    className="h-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full origin-left"
                  />
                  <p className="text-center text-sm text-gray-400 mt-3">2 portfolio images generated</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-1 lg:order-2"
              >
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                  Studio-Quality Images Without the Studio
                </h3>
                <ul className="space-y-4">
                  {[
                    "AI-generated studio and lifestyle product images",
                    "Consistent branding across entire catalogs",
                    "Rapid creation of portfolio and marketing visuals",
                    "Reduced dependency on expensive photography setups",
                    "Perfect for jewellery, fashion, and luxury brands"
                  ].map((feature, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-300">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0C1445] mb-4">
                Key <span className="bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] bg-clip-text text-transparent">Capabilities</span>
              </h2>
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {keyCapabilities.map((cap, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group"
                >
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 h-full">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cap.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <cap.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-[#0C1445] mb-2">{cap.title}</h3>
                    <p className="text-sm text-gray-600">{cap.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
              {stats.map((stat, index) => (
                <AnimatedCounter key={index} {...stat} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0C1445] mb-4">
                Ideal <span className="bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] bg-clip-text text-transparent">For</span>
              </h2>
            </motion.div>
            
            <div className="flex flex-wrap justify-center gap-4">
              {idealFor.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className={`flex items-center gap-3 ${item.color} px-6 py-4 rounded-full shadow-md cursor-default`}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.title}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 sm:py-32 px-4 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '50px 50px' }}></div>
          </div>
          
          <div className="max-w-4xl mx-auto text-center relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Ready to transform product discovery?
              </h2>
              <p className="text-xl sm:text-2xl text-white/90 mb-10 max-w-2xl mx-auto">
                Join leading brands using AI Vista to revolutionize how customers find and experience products
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button 
                    size="lg" 
                    className="bg-white text-[#8B5CF6] hover:bg-gray-100 text-base sm:text-lg px-10 py-7 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 font-semibold group"
                  >
                    Book a Demo
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
