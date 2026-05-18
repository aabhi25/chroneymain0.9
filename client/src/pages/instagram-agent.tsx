import { Helmet } from "react-helmet-async";
import { useState, useEffect } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Zap, Users, Target, Shield, Globe, ArrowRight, Heart, Camera, ShoppingBag, TrendingUp, Sparkles, Send, Clock, BarChart3, Hash, UserPlus } from "lucide-react";

function AnimatedCounter({ end, suffix = "", duration = 2 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (hasAnimated) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasAnimated(true);
          let start = 0;
          const increment = end / (duration * 60);
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 1000 / 60);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById(`counter-ig-${end}`);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return <span id={`counter-ig-${end}`}>{count}{suffix}</span>;
}

function FloatingDMWidget() {
  const [messages, setMessages] = useState<{ type: 'bot' | 'user'; text: string }[]>([
    { type: 'bot', text: "Hey! 👋 Thanks for reaching out. How can I help you today?" }
  ]);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  
  const conversation = [
    { type: 'user' as const, text: "I saw that dress in your story! Is it available?" },
    { type: 'bot' as const, text: "Yes! The Floral Maxi Dress is in stock 🌸 Available in S, M, L. Want me to share the product link?" },
    { type: 'user' as const, text: "Yes please! Size M" },
    { type: 'bot' as const, text: "Here's your exclusive link with 15% off! 🎉 Use code INSTA15 at checkout. Shall I reserve it for you?" },
  ];

  useEffect(() => {
    if (currentMessageIndex >= conversation.length) {
      setTimeout(() => {
        setMessages([{ type: 'bot', text: "Hey! 👋 Thanks for reaching out. How can I help you today?" }]);
        setCurrentMessageIndex(0);
      }, 4000);
      return;
    }

    const timer = setTimeout(() => {
      setMessages(prev => [...prev, conversation[currentMessageIndex]]);
      setCurrentMessageIndex(prev => prev + 1);
    }, 2000);

    return () => clearTimeout(timer);
  }, [currentMessageIndex]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="relative"
    >
      <motion.div 
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="w-[340px] sm:w-[380px] bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100"
      >
        <div className="bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
            <Camera className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1">
            <p className="text-white font-semibold text-sm">your_brand</p>
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              <span className="text-white/80 text-xs">Active now</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
              <Phone className="w-4 h-4 text-white" />
            </div>
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
              <Video className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>
        
        <div className="p-4 h-[280px] overflow-y-auto bg-gradient-to-b from-gray-50 to-white space-y-3">
          <AnimatePresence>
            {messages.map((msg, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.3 }}
                className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm ${
                  msg.type === 'user' 
                    ? 'bg-gradient-to-r from-[#DD2A7B] to-[#8134AF] text-white rounded-tr-sm' 
                    : 'bg-white shadow-md border border-gray-100 text-gray-700 rounded-tl-sm'
                }`}>
                  {msg.text}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          {currentMessageIndex < conversation.length && currentMessageIndex > 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-start"
            >
              <div className="bg-white shadow-md border border-gray-100 rounded-2xl px-4 py-3 rounded-tl-sm">
                <div className="flex gap-1">
                  <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0ms' }}></span>
                  <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '150ms' }}></span>
                  <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '300ms' }}></span>
                </div>
              </div>
            </motion.div>
          )}
        </div>
        
        <div className="p-4 border-t border-gray-100 bg-white">
          <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2">
            <input 
              type="text" 
              placeholder="Message..." 
              className="flex-1 bg-transparent text-sm outline-none text-gray-600"
              readOnly
            />
            <button className="w-8 h-8 rounded-full bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] flex items-center justify-center">
              <Send className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      </motion.div>
      
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] flex items-center justify-center"
      >
        <Heart className="w-4 h-4 text-white" />
      </motion.div>
    </motion.div>
  );
}

function Phone({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  );
}

function Video({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polygon points="23 7 16 12 23 17 23 7"/>
      <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
    </svg>
  );
}

export default function InstagramAgent() {
  const stats = [
    { value: 70, suffix: "%", label: "Engagement Boost", icon: TrendingUp },
    { value: 24, suffix: "/7", label: "DM Replies", icon: Clock },
    { value: 40, suffix: "%", label: "Conversion Rate", icon: BarChart3 },
    { value: 10, suffix: "x", label: "Faster Responses", icon: Zap },
  ];

  const features = [
    {
      icon: Heart,
      title: "Story Reply Automation",
      description: "Instantly respond to story mentions and replies with personalized messages that drive engagement.",
      gradient: "from-[#F58529] to-[#DD2A7B]",
      stat: "3x",
      statLabel: "more replies",
    },
    {
      icon: UserPlus,
      title: "DM Lead Capture",
      description: "Automatically qualify and capture leads from DM conversations with smart follow-up sequences.",
      gradient: "from-[#DD2A7B] to-[#8134AF]",
      stat: "65%",
      statLabel: "capture rate",
    },
    {
      icon: ShoppingBag,
      title: "Product Catalog Sharing",
      description: "Share product cards, galleries, and purchase links directly within DM conversations.",
      gradient: "from-[#8134AF] to-[#5851DB]",
      stat: "40%",
      statLabel: "click-through",
    },
    {
      icon: Hash,
      title: "Comment-to-DM",
      description: "Automatically move comment conversations to DMs to capture leads and provide personalized responses.",
      gradient: "from-[#5851DB] to-[#F58529]",
      stat: "85%",
      statLabel: "engagement rate",
    },
  ];

  const capabilities = [
    { icon: Globe, title: "Instagram API integration", color: "from-[#F58529] to-[#DD2A7B]" },
    { icon: Heart, title: "Auto-reply to story mentions", color: "from-[#DD2A7B] to-[#8134AF]" },
    { icon: ShoppingBag, title: "Product tagging in DMs", color: "from-[#8134AF] to-[#5851DB]" },
    { icon: MessageCircle, title: "Quick reply templates", color: "from-[#5851DB] to-[#F58529]" },
    { icon: Users, title: "Follower segmentation", color: "from-[#F58529] to-[#8134AF]" },
    { icon: BarChart3, title: "Engagement analytics", color: "from-[#DD2A7B] to-[#5851DB]" },
  ];

  const idealFor = [
    { icon: ShoppingBag, title: "Fashion & lifestyle brands", color: "bg-pink-100 text-pink-600" },
    { icon: Sparkles, title: "Beauty & cosmetics", color: "bg-purple-100 text-purple-600" },
    { icon: Users, title: "Influencers & creators", color: "bg-orange-100 text-orange-600" },
    { icon: Heart, title: "Food & beverage", color: "bg-red-100 text-red-600" },
    { icon: Globe, title: "Travel & hospitality", color: "bg-cyan-100 text-cyan-600" },
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Helmet>
        <title>Instagram DM Agent - AI-Powered Instagram DM Automation | AI Chroney</title>
        <meta name="description" content="Automate your Instagram DMs with AI. Respond to story replies, capture leads, share products, and convert followers into customers — 24/7 with Chroney's Instagram Agent." />
      </Helmet>
      <Navigation />
      
      <main>
        <section className="relative pt-20 pb-24 sm:pt-28 sm:pb-32 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
          
          <div className="max-w-7xl mx-auto relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur px-4 py-2 rounded-full text-sm font-medium text-pink-700 mb-6 shadow-sm border border-pink-100">
                  <Camera className="w-4 h-4" />
                  Instagram DM Automation
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#0C1445] mb-6 leading-tight">
                  Your 24/7 <br />
                  <span className="bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] bg-clip-text text-transparent">Instagram DM</span> <br />
                  Sales Agent
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-xl">
                  Automate your Instagram DMs, respond to story replies instantly, and convert followers into loyal customers — all on autopilot.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="https://wa.me/919999080825" target="_blank" rel="noopener noreferrer">
                    <Button 
                      size="lg" 
                      className="bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] hover:opacity-90 text-white text-base sm:text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
                    >
                      Start Free Trial
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </a>
                </div>
              </motion.div>

              <div className="flex justify-center md:justify-end">
                <FloatingDMWidget />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <stat.icon className="w-7 h-7 text-pink-600" />
                  </div>
                  <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] bg-clip-text text-transparent mb-2">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-20 px-4 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0C1445] mb-3">
                What Instagram Agent <span className="bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] bg-clip-text text-transparent">Delivers</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-500 max-w-xl mx-auto">
                Four powerful tools to supercharge your Instagram engagement
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="group"
                >
                  <div className="bg-white rounded-2xl border border-gray-100 p-5 h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <feature.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="mb-3">
                      <span className={`text-2xl font-bold bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}>{feature.stat}</span>
                      <span className="text-xs text-gray-400 ml-1.5">{feature.statLabel}</span>
                    </div>
                    <h3 className="text-base font-semibold text-[#0C1445] mb-1.5">{feature.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28 px-4 bg-[#0C1445] relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #9C92AC 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
          </div>
          
          <div className="max-w-6xl mx-auto relative">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                Core <span className="bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] bg-clip-text text-transparent">Features</span>
              </h2>
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {capabilities.map((cap, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 h-full">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cap.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <cap.icon className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-white font-medium">{cap.title}</p>
                  </div>
                </motion.div>
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
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0C1445] mb-4">
                Ideal <span className="bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] bg-clip-text text-transparent">For</span>
              </h2>
            </motion.div>
            
            <div className="flex flex-wrap justify-center gap-4">
              {idealFor.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
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

        <section className="py-24 sm:py-32 px-4 bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] relative overflow-hidden">
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
                Ready to transform your Instagram?
              </h2>
              <p className="text-xl sm:text-2xl text-white/90 mb-10 max-w-2xl mx-auto">
                Turn every DM into a conversion opportunity with AI-powered Instagram automation
              </p>
              <div className="flex justify-center">
                <a href="https://wa.me/919999080825" target="_blank" rel="noopener noreferrer">
                  <Button 
                    size="lg" 
                    className="bg-white text-[#DD2A7B] hover:bg-gray-100 text-base sm:text-lg px-12 py-7 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 font-semibold group"
                  >
                    Talk to Sales
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}