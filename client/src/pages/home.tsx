import { useEffect, useState } from "react";
import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import MarketingEngineSection from "@/components/marketing-engine-section";
import ProofAndCustomSection from "@/components/proof-and-custom-section";
import NvidiaBadge, { NvidiaMark, NVIDIA_BADGE_PREFIX, NVIDIA_BADGE_PROGRAM } from "@/components/nvidia-badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { MessageCircle, Zap, Users, Settings, Code, Sparkles, RefreshCw, ArrowRight, Target, ShoppingCart, Calendar, Package, HelpCircle, Eye, Gift, ClipboardCheck, UserPlus, Search, Palette, Phone } from "lucide-react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import nikeAirMaxImage from "@assets/stock_images/nike_air_max_90_snea_6823c7b1.jpg";
import shopifyLogo from "@assets/Chroney_logo_1769900142416.png";
import chroneyLogo from "@assets/Chroney_logo_1769900142416.png";
import sourceShoe from "@assets/stock_images/red_high_heel_shoe_e_3d462f5e.jpg";
import perfectMatch from "@assets/stock_images/red_embroidered_high_776fb38b.jpg";
import similarMatch from "@assets/stock_images/red_stiletto_high_he_ce31121d.jpg";
import modelNecklace from "@assets/stock_images/elegant_necklace_on__d4fa33c1.jpg";
import modelRing from "@assets/stock_images/female_hand_fingers__72a56e21.jpg";
import shopifyProduct1 from "@assets/stock_images/e-commerce_products__b8a7e17c.jpg";
import shopifyProduct2 from "@assets/stock_images/e-commerce_products__391ae9f6.jpg";
import shopifyProduct3 from "@assets/stock_images/e-commerce_products__a4ba67c6.jpg";
import shopifyProduct4 from "@assets/stock_images/e-commerce_products__ecc1a97d.jpg";

function SequentialTypingText({ texts, speed = 30 }: { texts: string[]; speed?: number }) {
  const [displayedTexts, setDisplayedTexts] = useState<string[]>([]);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  useEffect(() => {
    setDisplayedTexts([]);
    setCurrentTextIndex(0);
    setCurrentCharIndex(0);
  }, [texts]);

  useEffect(() => {
    if (currentTextIndex < texts.length) {
      const currentText = texts[currentTextIndex];
      
      if (currentCharIndex < currentText.length) {
        const timeout = setTimeout(() => {
          setDisplayedTexts(prev => {
            const newTexts = [...prev];
            if (!newTexts[currentTextIndex]) {
              newTexts[currentTextIndex] = "";
            }
            newTexts[currentTextIndex] = currentText.substring(0, currentCharIndex + 1);
            return newTexts;
          });
          setCurrentCharIndex(prev => prev + 1);
        }, speed);

        return () => clearTimeout(timeout);
      } else {
        setCurrentTextIndex(prev => prev + 1);
        setCurrentCharIndex(0);
      }
    }
  }, [currentTextIndex, currentCharIndex, texts, speed]);

  return (
    <>
      {displayedTexts.map((text, index) => (
        <p key={index} className="text-gray-800 text-sm sm:text-base mt-3 first:mt-0">
          {text}
        </p>
      ))}
    </>
  );
}

export default function Home() {
  const [activeTab, setActiveTab] = useState("website");
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [heroChannel, setHeroChannel] = useState(0);

  const channels = [
    { key: "website", label: "Website", icon: MessageCircle, bg: "bg-gradient-to-br from-[#FF4D4D] to-[#9333EA]", ring: "ring-purple-200" },
    { key: "whatsapp", label: "WhatsApp", icon: FaWhatsapp, bg: "bg-[#25D366]", ring: "ring-green-200" },
    { key: "phone", label: "AI Calls", icon: Phone, bg: "bg-gradient-to-br from-blue-500 to-indigo-600", ring: "ring-blue-200" },
    { key: "instagram", label: "Instagram & Facebook", icon: FaInstagram, bg: "bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF]", ring: "ring-pink-200" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroChannel(prev => (prev + 1) % channels.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const tabs = ["website", "whatsapp", "instagram"];
    const interval = setInterval(() => {
      setActiveTab(currentTab => {
        const currentIndex = tabs.indexOf(currentTab);
        const nextIndex = (currentIndex + 1) % tabs.length;
        return tabs[nextIndex];
      });
    }, 7000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    setIsAutoPlaying(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>AI Chroney – AI Marketing Engine: Chat, WhatsApp & AI Calls That Convert</title>
        <meta name="description" content="AI Chroney turns prospects into customers with AI agents for your website, WhatsApp, Instagram, Facebook and phone calls, all sharing one memory. Plus custom AI solutions with an MVP in 14 days." />
        <link rel="canonical" href="https://aichroney.com/" />
      </Helmet>
      <Navigation />
      <main>
        <section className="pt-16 pb-16 sm:pt-20 sm:pb-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex flex-col items-center mb-5 sm:mb-6">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 mb-3">
                <motion.div
                  key={`ring-${heroChannel}`}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className={`absolute inset-0 rounded-full ring-4 ${channels[heroChannel].ring} ring-offset-2`}
                />
                <motion.div
                  animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className={`absolute inset-[-6px] rounded-full ${channels[heroChannel].bg} opacity-30 blur-md`}
                />
                <AnimatePresence mode="wait">
                  <motion.div
                    key={heroChannel}
                    initial={{ scale: 0.5, opacity: 0, rotateY: 90 }}
                    animate={{ scale: 1, opacity: 1, rotateY: 0 }}
                    exit={{ scale: 0.5, opacity: 0, rotateY: -90 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className={`relative w-full h-full rounded-full ${channels[heroChannel].bg} flex items-center justify-center shadow-lg`}
                  >
                    {(() => {
                      const Icon = channels[heroChannel].icon;
                      return <Icon className="w-9 h-9 sm:w-11 sm:h-11 text-white" />;
                    })()}
                  </motion.div>
                </AnimatePresence>
              </div>
              <AnimatePresence mode="wait">
                <motion.span
                  key={heroChannel}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="text-sm font-medium text-gray-500 tracking-wide"
                >
                  {channels[heroChannel].label}
                </motion.span>
              </AnimatePresence>
              <div className="flex gap-1.5 mt-2">
                {channels.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setHeroChannel(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${i === heroChannel ? 'w-6 bg-gradient-to-r from-[#FF4D4D] to-[#9333EA]' : 'bg-gray-300 hover:bg-gray-400'}`}
                  />
                ))}
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#0C1445] mb-4 sm:mb-6">
              The AI Marketing Engine That <span className="bg-gradient-to-r from-[#FF4D4D] to-[#9333EA] bg-clip-text text-transparent">Turns Prospects Into Customers</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 sm:mb-10 max-w-3xl mx-auto">
              AI agents that chat on your website, message on WhatsApp, reply on Instagram & Facebook and call your leads, all sharing one memory and following up until they convert.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <a href="https://wa.me/919999080825" target="_blank" rel="noopener noreferrer">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-[#FF4D4D] to-[#9333EA] hover:opacity-90 text-white text-base sm:text-lg px-8 sm:px-12 py-5 sm:py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Book a Demo
                </Button>
              </a>
              <a href="#engine" className="inline-flex items-center gap-2 text-base sm:text-lg font-medium text-[#0C1445] hover:text-[#9333EA] transition-colors px-4 py-3">
                See how it works
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-sm text-gray-500">
              <span className="inline-flex items-center gap-2">
                <NvidiaMark className="w-5 h-5" />
                <span>{NVIDIA_BADGE_PREFIX} <span className="font-semibold text-gray-700">{NVIDIA_BADGE_PROGRAM}</span></span>
              </span>
              <span className="hidden sm:inline text-gray-300" aria-hidden="true">·</span>
              <span>Trusted by <span className="font-semibold text-gray-700">LG, Jaro Education, Symbiosis</span></span>
            </div>
          </div>
        </section>

        <MarketingEngineSection />

        {/* AI Agents Section */}
        <section className="py-20 sm:py-28 px-4 bg-gradient-to-b from-gray-50/50 to-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14 sm:mb-20">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0C1445] mb-5"
              >
                <span className="bg-gradient-to-r from-[#FF4D4D] to-[#9333EA] bg-clip-text text-transparent">50+</span> AI Agents for Every Use Case
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-lg text-gray-500 max-w-2xl mx-auto"
              >
                Pre-built agents ready to deploy, or create custom ones tailored to your business.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Lead Qualification Agent */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white h-full group hover:-translate-y-2 rounded-2xl overflow-hidden">
                  <CardContent className="p-0">
                    <div className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 p-6 h-[200px] flex flex-col justify-center">
                      <div className="space-y-4">
                        <div className="bg-white/80 backdrop-blur rounded-2xl p-4 shadow-sm border border-gray-100/50">
                          <p className="text-sm text-gray-600">What brings you here today?</p>
                        </div>
                        <div className="flex justify-end">
                          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl px-4 py-3 text-sm text-white shadow-md">
                            Enterprise pricing
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">High Intent</span>
                          <span className="text-xs text-gray-400">Score: 85</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-6 border-t border-gray-50">
                      <h3 className="text-lg font-semibold text-[#0C1445] mb-1">Lead Qualification</h3>
                      <p className="text-gray-500 text-sm">Smart questions. Real-time scoring.</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Product Recommendation Agent */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white h-full group hover:-translate-y-2 rounded-2xl overflow-hidden">
                  <CardContent className="p-0">
                    <div className="bg-gradient-to-br from-purple-50 via-white to-pink-50 p-6 h-[200px] flex flex-col justify-center">
                      <div className="space-y-4">
                        <div className="bg-white/80 backdrop-blur rounded-2xl p-4 shadow-sm border border-gray-100/50">
                          <p className="text-sm text-gray-600">Based on your style, try these:</p>
                        </div>
                        <div className="flex gap-3 justify-center">
                          <div className="w-14 h-14 rounded-xl bg-white shadow-sm overflow-hidden border border-gray-100">
                            <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100&h=100&fit=crop" alt="Watch" className="w-full h-full object-cover" />
                          </div>
                          <div className="w-14 h-14 rounded-xl bg-white shadow-sm overflow-hidden border border-gray-100">
                            <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop" alt="Headphones" className="w-full h-full object-cover" />
                          </div>
                          <div className="w-14 h-14 rounded-xl bg-white shadow-sm overflow-hidden border border-gray-100">
                            <img src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=100&h=100&fit=crop" alt="Camera" className="w-full h-full object-cover" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-6 border-t border-gray-50">
                      <h3 className="text-lg font-semibold text-[#0C1445] mb-1">Product Recommendations</h3>
                      <p className="text-gray-500 text-sm">Personalized picks that convert.</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Appointment Booking Agent */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white h-full group hover:-translate-y-2 rounded-2xl overflow-hidden">
                  <CardContent className="p-0">
                    <div className="bg-gradient-to-br from-emerald-50 via-white to-teal-50 p-6 h-[200px] flex flex-col justify-center">
                      <div className="space-y-4">
                        <div className="flex gap-2 justify-center">
                          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((day, i) => (
                            <div key={day} className={`w-10 h-10 rounded-xl flex items-center justify-center text-xs font-medium ${i === 1 ? 'bg-emerald-500 text-white shadow-md' : 'bg-white text-gray-500 shadow-sm'}`}>
                              {day}
                            </div>
                          ))}
                        </div>
                        <div className="bg-white/80 backdrop-blur rounded-2xl p-4 shadow-sm border border-gray-100/50 text-center">
                          <p className="text-sm text-gray-600">Booked for <span className="font-medium text-emerald-600">Tue, 10:30 AM</span></p>
                        </div>
                      </div>
                    </div>
                    <div className="p-6 border-t border-gray-50">
                      <h3 className="text-lg font-semibold text-[#0C1445] mb-1">Appointment Booking</h3>
                      <p className="text-gray-500 text-sm">Zero back-and-forth scheduling.</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Order Tracking Agent */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.25 }}
              >
                <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white h-full group hover:-translate-y-2 rounded-2xl overflow-hidden">
                  <CardContent className="p-0">
                    <div className="bg-gradient-to-br from-amber-50 via-white to-orange-50 p-6 h-[200px] flex flex-col justify-center">
                      <div className="space-y-4">
                        <div className="bg-white/80 backdrop-blur rounded-2xl p-4 shadow-sm border border-gray-100/50">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium text-gray-700">Order #3782</span>
                            <span className="px-2 py-1 bg-amber-100 text-amber-700 rounded-full text-xs">In Transit</span>
                          </div>
                          <p className="text-xs text-gray-400">Arrives in 3 days</p>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                          <div className="w-8 h-1 rounded-full bg-emerald-500"></div>
                          <div className="w-8 h-1 rounded-full bg-emerald-500"></div>
                          <div className="w-8 h-1 rounded-full bg-amber-400"></div>
                          <div className="w-8 h-1 rounded-full bg-gray-200"></div>
                        </div>
                      </div>
                    </div>
                    <div className="p-6 border-t border-gray-50">
                      <h3 className="text-lg font-semibold text-[#0C1445] mb-1">Order Tracking</h3>
                      <p className="text-gray-500 text-sm">Real-time delivery updates.</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Visual Support Agent */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white h-full group hover:-translate-y-2 rounded-2xl overflow-hidden">
                  <CardContent className="p-0">
                    <div className="bg-gradient-to-br from-teal-50 via-white to-cyan-50 p-6 h-[200px] flex flex-col justify-center">
                      <div className="space-y-4">
                        <div className="flex items-center gap-3 justify-center">
                          <div className="w-16 h-12 rounded-xl bg-white shadow-sm overflow-hidden border border-gray-100">
                            <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100&h=75&fit=crop" alt="Product" className="w-full h-full object-cover" />
                          </div>
                          <span className="text-xs text-teal-600 font-medium">Image received</span>
                        </div>
                        <div className="bg-white/80 backdrop-blur rounded-2xl p-4 shadow-sm border border-gray-100/50 text-center">
                          <p className="text-sm text-gray-600">Issue resolved. Replacement on the way!</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-6 border-t border-gray-50">
                      <h3 className="text-lg font-semibold text-[#0C1445] mb-1">Visual Support</h3>
                      <p className="text-gray-500 text-sm">Image-based issue resolution.</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Offer & Discount Agent */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.35 }}
              >
                <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white h-full group hover:-translate-y-2 rounded-2xl overflow-hidden">
                  <CardContent className="p-0">
                    <div className="bg-gradient-to-br from-rose-50 via-white to-pink-50 p-6 h-[200px] flex flex-col justify-center">
                      <div className="space-y-4">
                        <div className="flex justify-end">
                          <div className="bg-gradient-to-r from-rose-400 to-pink-400 rounded-2xl px-4 py-2 text-sm text-white shadow-sm">
                            ₹25,000?
                          </div>
                        </div>
                        <div className="bg-white/80 backdrop-blur rounded-2xl p-4 shadow-sm border border-gray-100/50">
                          <p className="text-sm text-gray-600">Best I can do is <span className="font-medium text-rose-500">₹29,000</span></p>
                        </div>
                        <div className="flex justify-end">
                          <div className="bg-gradient-to-r from-rose-400 to-pink-400 rounded-2xl px-4 py-2 text-sm text-white shadow-sm">
                            Deal!
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-6 border-t border-gray-50">
                      <h3 className="text-lg font-semibold text-[#0C1445] mb-1">Smart Negotiations</h3>
                      <p className="text-gray-500 text-sm">Dynamic offers that close deals.</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

            </div>

          </div>
        </section>

        {/* AI Assistant Demo Section */}
        <section id="features" className="py-16 sm:py-20 px-4 bg-purple-50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0C1445] mb-3 sm:mb-4">
                See how <span className="bg-gradient-to-r from-[#FF4D4D] to-[#9333EA] bg-clip-text text-transparent">Chroney</span> chats.
              </h2>
              <p className="text-lg sm:text-xl text-gray-600">
                One AI agent. Three powerful channels.
              </p>
            </div>

            {/* Tabbed Chat Examples - Channel Focused */}
            <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-10 h-auto gap-3 bg-transparent p-0">
                <TabsTrigger
                  value="website"
                  className="flex items-center justify-center gap-2 text-sm sm:text-base py-3.5 px-4 rounded-full font-semibold transition-all duration-300 data-[state=active]:shadow-xl data-[state=inactive]:bg-white/80 data-[state=inactive]:backdrop-blur-sm data-[state=inactive]:text-[#4a4a4a] data-[state=inactive]:hover:bg-white data-[state=inactive]:hover:shadow-md border border-transparent data-[state=inactive]:border-gray-200"
                  style={{
                    background: activeTab === 'website' ? 'linear-gradient(135deg, #ffffff 0%, #fff5f9 50%, #f8f5ff 100%)' : undefined,
                    color: activeTab === 'website' ? '#1d1d1f' : undefined
                  }}
                >
                  <MessageCircle className="w-4 h-4" />
                  Website
                </TabsTrigger>
                <TabsTrigger
                  value="whatsapp"
                  className="flex items-center justify-center gap-2 text-sm sm:text-base py-3.5 px-4 rounded-full font-semibold transition-all duration-300 data-[state=active]:shadow-xl data-[state=inactive]:bg-white/80 data-[state=inactive]:backdrop-blur-sm data-[state=inactive]:text-[#4a4a4a] data-[state=inactive]:hover:bg-white data-[state=inactive]:hover:shadow-md border border-transparent data-[state=inactive]:border-gray-200"
                  style={{
                    background: activeTab === 'whatsapp' ? '#e7f9ee' : undefined,
                    color: activeTab === 'whatsapp' ? '#128C7E' : undefined
                  }}
                >
                  <FaWhatsapp className="w-4 h-4" />
                  WhatsApp
                </TabsTrigger>
                <TabsTrigger
                  value="instagram"
                  className="flex items-center justify-center gap-2 text-sm sm:text-base py-3.5 px-4 rounded-full font-semibold transition-all duration-300 data-[state=active]:shadow-xl data-[state=inactive]:bg-white/80 data-[state=inactive]:backdrop-blur-sm data-[state=inactive]:text-[#4a4a4a] data-[state=inactive]:hover:bg-white data-[state=inactive]:hover:shadow-md border border-transparent data-[state=inactive]:border-gray-200"
                  style={{
                    background: activeTab === 'instagram' ? 'linear-gradient(135deg, #fff5f0, #fdf0fa)' : undefined,
                    color: activeTab === 'instagram' ? '#C13584' : undefined
                  }}
                >
                  <FaInstagram className="w-4 h-4" />
                  Instagram
                </TabsTrigger>
              </TabsList>

              {/* Website Example */}
              <TabsContent value="website">
                <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-10 border border-gray-100 min-h-[350px] sm:min-h-[380px]">
                  <div className="space-y-6">
                    <div className="flex justify-end">
                      <div className="max-w-[80%] bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-3xl rounded-tr-lg px-6 py-4 shadow-md">
                        <p className="text-sm sm:text-base">Do you have Nike Air Max 90 in stock?</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden shadow-md flex-shrink-0">
                          <img src={chroneyLogo} alt="Chroney" className="w-full h-full object-cover" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-semibold text-[#0C1445] text-sm sm:text-base">Chroney</span>
                        </div>
                        <div className="bg-gray-50 rounded-3xl rounded-tl-lg px-6 py-4 shadow-sm">
                          <div className="flex gap-4 items-start">
                            <img
                              src={nikeAirMaxImage}
                              alt="Nike Air Max 90"
                              className="rounded-2xl max-w-[120px] shadow-md flex-shrink-0"
                            />
                            <div className="flex-1 flex flex-col gap-3">
                              <SequentialTypingText texts={[
                                "Yes! Nike Air Max 90 is available in sizes 7–11.",
                                "Would you like to see the color options or add it to your cart?"
                              ]} />
                              <motion.button
                                className="bg-gradient-to-r from-[#FF4D4D] to-[#9333EA] text-white text-sm font-semibold px-4 py-2 rounded-xl hover:opacity-90 transition-opacity shadow-md self-start"
                                initial={{ scale: 1 }}
                                animate={{ scale: [1, 0.95, 1] }}
                                transition={{ duration: 0.3, repeat: Infinity, repeatDelay: 3, delay: 2 }}
                              >
                                Add to cart
                              </motion.button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* WhatsApp Example */}
              <TabsContent value="whatsapp">
                <div className="bg-[#ECE5DD] rounded-3xl shadow-2xl p-6 sm:p-10 border border-gray-100 min-h-[350px] sm:min-h-[380px]">
                  <div className="space-y-6">
                    <div className="flex justify-end">
                      <div className="max-w-[80%] bg-[#DCF8C6] text-gray-800 rounded-3xl rounded-tr-lg px-6 py-4 shadow-md">
                        <p className="text-sm sm:text-base">I placed an order 2 days ago but haven't received any update 😟</p>
                        <p className="text-xs text-gray-500 text-right mt-1">2:14 PM ✓✓</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#25D366] flex items-center justify-center shadow-md">
                          <FaWhatsapp className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-semibold text-[#0C1445] text-sm sm:text-base">Chroney</span>
                        </div>
                        <div className="bg-white rounded-3xl rounded-tl-lg px-6 py-4 shadow-sm">
                          <SequentialTypingText texts={[
                            "Hi! Sorry to hear that 🙏 Let me check your order right away.",
                            "Could you share your order ID or the phone number used at checkout?",
                            "I'll pull up the latest status and tracking details for you instantly! 📦"
                          ]} />
                          <p className="text-xs text-gray-400 text-right mt-2">2:14 PM</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Instagram Example */}
              <TabsContent value="instagram">
                <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-10 border border-gray-100 min-h-[350px] sm:min-h-[380px]">
                  <div className="space-y-6">
                    <div className="flex justify-end">
                      <div className="max-w-[80%] bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white rounded-3xl rounded-tr-lg px-6 py-4 shadow-md">
                        <p className="text-sm sm:text-base">Saw your reel! Do you work with small businesses? 🙌</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF] flex items-center justify-center shadow-md">
                          <FaInstagram className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-semibold text-[#0C1445] text-sm sm:text-base">Chroney</span>
                        </div>
                        <div className="bg-gray-50 rounded-3xl rounded-tl-lg px-6 py-4 shadow-sm">
                          <SequentialTypingText texts={[
                            "Absolutely! 🎉 We love helping small businesses grow.",
                            "AI Chroney handles your DMs, answers product questions & captures leads 24/7.",
                            "Drop your number and we'll set up a free demo for you! 📲"
                          ]} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="py-16 sm:py-24 px-4 relative overflow-hidden">
          <div className="absolute top-10 left-1/4 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
          <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
          <div className="max-w-6xl mx-auto relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12 sm:mb-16"
            >
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-purple-600 mb-4 border border-purple-100 shadow-sm">
                <Sparkles className="w-3.5 h-3.5" />
                Multi-Channel AI
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0C1445] mb-3">
                Every channel. <span className="bg-gradient-to-r from-[#FF4D4D] to-[#9333EA] bg-clip-text text-transparent">One memory.</span>
              </h2>
              <p className="text-gray-500 text-base sm:text-lg max-w-xl mx-auto">
                Four AI agents that work as one team and know every conversation a prospect has had.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: MessageCircle,
                  title: "Website Agent",
                  tagline: "Always on your site",
                  tagColor: "text-[#9333EA]",
                  iconBg: "bg-gradient-to-br from-[#FF4D4D] to-[#9333EA]",
                  borderHover: "hover:border-purple-200",
                  link: "/products/chroney-assist",
                  items: [
                    "Answers questions and captures leads 24/7",
                    "Recommends products and closes deals",
                    "Passes context to every other channel",
                  ],
                },
                {
                  icon: FaWhatsapp,
                  title: "WhatsApp Agent",
                  tagline: "In your customers' inbox",
                  tagColor: "text-[#25D366]",
                  iconBg: "bg-[#25D366]",
                  borderHover: "hover:border-green-200",
                  link: "/products/whatsapp-agent",
                  items: [
                    "Follows up on every new lead instantly",
                    "Sends campaigns, reminders and brochures",
                    "Qualifies leads and handles support",
                  ],
                },
                {
                  icon: Phone,
                  title: "AI Calling Agent",
                  tagline: "A voice that never misses a lead",
                  tagColor: "text-blue-600",
                  iconBg: "bg-gradient-to-br from-blue-500 to-indigo-600",
                  borderHover: "hover:border-blue-200",
                  link: "/products/ai-calling-agent",
                  items: [
                    "Calls new leads within minutes",
                    "Answers incoming calls 24/7",
                    "Qualifies and books meetings",
                  ],
                },
                {
                  icon: FaInstagram,
                  title: "Meta Agent",
                  tagline: "Instagram & Facebook",
                  tagColor: "text-[#C13584]",
                  iconBg: "bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF]",
                  borderHover: "hover:border-pink-200",
                  link: "/products/instagram-agent",
                  items: [
                    "Auto-responds to DMs and comments",
                    "Turns followers into customers",
                    "Captures leads from ads, posts and reels",
                  ],
                },
              ].map((agent, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                >
                  <Link href={agent.link}>
                    <div className={`group bg-white/70 backdrop-blur-sm rounded-3xl border border-gray-100 ${agent.borderHover} p-7 h-full cursor-pointer hover:shadow-xl hover:-translate-y-2 transition-all duration-500`}>
                      <div className="text-center mb-6">
                        <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${agent.iconBg} mb-5 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                          <agent.icon className="w-7 h-7 text-white" />
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-[#0C1445] mb-1">{agent.title}</h3>
                        <p className={`${agent.tagColor} font-medium text-sm`}>{agent.tagline}</p>
                      </div>
                      <div className="w-12 h-0.5 bg-gradient-to-r from-gray-200 to-transparent mx-auto mb-5"></div>
                      <ul className="space-y-3">
                        {agent.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-gray-600 text-sm sm:text-[15px] leading-relaxed">
                            <span className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded-full ${agent.iconBg} flex items-center justify-center`}>
                              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6 flex items-center justify-center gap-1.5 text-sm font-medium text-gray-400 group-hover:text-[#0C1445] transition-colors">
                        Learn more
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Shopify Integration Section - Apple Inspired */}
        <section className="relative overflow-hidden bg-purple-50" style={{ padding: 'clamp(120px, 12vw, 160px) 1rem' }}>
          <div className="max-w-[960px] mx-auto text-center">
            {/* Heading */}
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-[clamp(2.5rem,5vw,3.5rem)] font-semibold text-[#1d1d1f] mb-6 tracking-tight leading-[1.1]"
              style={{ letterSpacing: '-0.01em' }}
            >
              Seamlessly integrated with <span className="bg-gradient-to-r from-[#FF4D4D] to-[#9333EA] bg-clip-text text-transparent">Shopify</span>.
            </motion.h2>
            
            {/* Subheading */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[clamp(1.125rem,2vw,1.5rem)] font-normal text-[#6e6e73] mb-12 max-w-[720px] mx-auto leading-relaxed"
              style={{ letterSpacing: '0.02em' }}
            >
              Connect AI Chroney to Shopify — sync products, track orders, and chat with customers instantly.
            </motion.p>
            
            {/* Shopify Products Screenshot Mockup */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative mt-12 mb-8"
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden max-w-4xl mx-auto"
              >
                {/* Browser Header */}
                <div className="bg-gray-100 px-4 py-3 flex items-center gap-3 border-b border-gray-200">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="bg-white rounded-lg px-4 py-1.5 flex items-center gap-2 text-sm text-gray-500 border border-gray-200">
                      <img src={shopifyLogo} alt="Shopify" className="w-4 h-4" />
                      <span>your-store.myshopify.com/admin/products</span>
                    </div>
                  </div>
                </div>
                
                {/* Product Grid */}
                <div className="p-6 bg-gray-50">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-800">Products</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-500">Synced with AI Chroney</span>
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {[
                      { img: shopifyProduct1, name: "Summer Collection", price: "₹7,499" },
                      { img: shopifyProduct2, name: "Classic Accessories", price: "₹3,799" },
                      { img: shopifyProduct3, name: "Premium Wear", price: "₹10,899" },
                      { img: shopifyProduct4, name: "Designer Items", price: "₹16,799" }
                    ].map((product, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + idx * 0.1 }}
                        className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                      >
                        <div className="aspect-square overflow-hidden">
                          <img src={product.img} alt={product.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="p-3">
                          <p className="text-sm font-medium text-gray-800 truncate">{product.name}</p>
                          <p className="text-sm text-[#9333EA] font-semibold">{product.price}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
              
              {/* Floating AI Chroney Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, type: "spring" }}
                className="absolute -bottom-4 -right-4 sm:right-8"
              >
                <div className="bg-gradient-to-br from-[#E95C7B] to-[#9333EA] rounded-full p-3 shadow-xl">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
              </motion.div>
            </motion.div>
            
            {/* Tagline */}
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-base text-[#86868b] tracking-wide"
              style={{ letterSpacing: '0.04em' }}
            >
              Built for D2C brands. 100% Shopify compatible.
            </motion.p>
          </div>
        </section>

        <ProofAndCustomSection />

        <section className="py-16 sm:py-24 bg-gray-50 overflow-hidden">
          <div className="max-w-6xl mx-auto text-center px-4 mb-10 sm:mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0C1445] mb-6 sm:mb-8">
              Trusted by <span className="bg-gradient-to-r from-[#FF4D4D] to-[#9333EA] bg-clip-text text-transparent">Industry Leaders</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto">
              Powering conversations for leading brands across education, finance, and more
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
            <div className="flex animate-scroll">
              <div className="flex gap-6 px-3">
                <span className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 font-semibold text-lg shadow-md hover:shadow-lg hover:scale-105 transition-all whitespace-nowrap border border-purple-200">LG</span>
                <span className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 font-semibold text-lg shadow-md hover:shadow-lg hover:scale-105 transition-all whitespace-nowrap border border-blue-200">Jaro Education</span>
                <span className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-100 to-rose-100 text-pink-700 font-semibold text-lg shadow-md hover:shadow-lg hover:scale-105 transition-all whitespace-nowrap border border-pink-200">Liquiloans</span>
                <span className="px-6 py-3 rounded-full bg-gradient-to-r from-slate-100 to-gray-100 text-slate-700 font-semibold text-lg shadow-md hover:shadow-lg hover:scale-105 transition-all whitespace-nowrap border border-slate-200">Meckavo Sports</span>
                <span className="px-6 py-3 rounded-full bg-gradient-to-r from-teal-100 to-emerald-100 text-teal-700 font-semibold text-lg shadow-md hover:shadow-lg hover:scale-105 transition-all whitespace-nowrap border border-teal-200">Liquibonds</span>
                <span className="px-6 py-3 rounded-full bg-gradient-to-r from-violet-100 to-purple-100 text-violet-700 font-semibold text-lg shadow-md hover:shadow-lg hover:scale-105 transition-all whitespace-nowrap border border-violet-200">Symbiosis</span>
                <span className="px-6 py-3 rounded-full bg-gradient-to-r from-indigo-100 to-blue-100 text-indigo-700 font-semibold text-lg shadow-md hover:shadow-lg hover:scale-105 transition-all whitespace-nowrap border border-indigo-200">Avinash College of Commerce</span>
              </div>
              <div className="flex gap-6 px-3">
                <span className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 font-semibold text-lg shadow-md hover:shadow-lg hover:scale-105 transition-all whitespace-nowrap border border-purple-200">LG</span>
                <span className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 font-semibold text-lg shadow-md hover:shadow-lg hover:scale-105 transition-all whitespace-nowrap border border-blue-200">Jaro Education</span>
                <span className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-100 to-rose-100 text-pink-700 font-semibold text-lg shadow-md hover:shadow-lg hover:scale-105 transition-all whitespace-nowrap border border-pink-200">Liquiloans</span>
                <span className="px-6 py-3 rounded-full bg-gradient-to-r from-slate-100 to-gray-100 text-slate-700 font-semibold text-lg shadow-md hover:shadow-lg hover:scale-105 transition-all whitespace-nowrap border border-slate-200">Meckavo Sports</span>
                <span className="px-6 py-3 rounded-full bg-gradient-to-r from-teal-100 to-emerald-100 text-teal-700 font-semibold text-lg shadow-md hover:shadow-lg hover:scale-105 transition-all whitespace-nowrap border border-teal-200">Liquibonds</span>
                <span className="px-6 py-3 rounded-full bg-gradient-to-r from-violet-100 to-purple-100 text-violet-700 font-semibold text-lg shadow-md hover:shadow-lg hover:scale-105 transition-all whitespace-nowrap border border-violet-200">Symbiosis</span>
                <span className="px-6 py-3 rounded-full bg-gradient-to-r from-indigo-100 to-blue-100 text-indigo-700 font-semibold text-lg shadow-md hover:shadow-lg hover:scale-105 transition-all whitespace-nowrap border border-indigo-200">Avinash College of Commerce</span>
              </div>
            </div>
          </div>
          <p className="mt-10 text-gray-400 text-sm text-center">and many more...</p>
          <div className="mt-10 flex justify-center px-4">
            <NvidiaBadge />
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
