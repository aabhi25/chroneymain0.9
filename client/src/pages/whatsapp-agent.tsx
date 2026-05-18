import { Helmet } from "react-helmet-async";
import { useState, useEffect } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Zap, Users, Target, Shield, Globe, ArrowRight, CheckCircle, Building2, ShoppingCart, Laptop, TrendingUp, Sparkles, Bot, Send, Clock, BarChart3, Megaphone, Reply, UserCheck, Package, Image, LayoutTemplate, MousePointerClick, ContactRound, LineChart, UtensilsCrossed, HeartPulse, Home } from "lucide-react";

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

    const element = document.getElementById(`counter-wa-${end}`);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return <span id={`counter-wa-${end}`}>{count}{suffix}</span>;
}

function WhatsAppChatWidget() {
  const [messages, setMessages] = useState<{ type: 'bot' | 'user'; text: string }[]>([
    { type: 'bot', text: "Hi there! 👋 Welcome to our WhatsApp store. How can I help you today?" }
  ]);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  
  const conversation = [
    { type: 'user' as const, text: "I'd like to check my order status" },
    { type: 'bot' as const, text: "Sure! Please share your order ID and I'll look it up instantly 📦" },
    { type: 'user' as const, text: "Order #WA-29481" },
    { type: 'bot' as const, text: "Your order is out for delivery! Expected by 3 PM today. Want me to share the live tracking link? 🚚" },
  ];

  useEffect(() => {
    if (currentMessageIndex >= conversation.length) {
      setTimeout(() => {
        setMessages([{ type: 'bot', text: "Hi there! 👋 Welcome to our WhatsApp store. How can I help you today?" }]);
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
        <div className="bg-gradient-to-r from-[#075E54] to-[#25D366] p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
            <MessageCircle className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="text-white font-semibold text-sm">WhatsApp Agent</p>
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-green-300 animate-pulse"></span>
              <span className="text-white/80 text-xs">Online</span>
            </div>
          </div>
        </div>
        
        <div className="p-4 h-[280px] overflow-y-auto space-y-3" style={{ backgroundColor: '#ECE5DD' }}>
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
                    ? 'bg-[#DCF8C6] text-gray-800 rounded-tr-sm' 
                    : 'bg-white shadow-sm text-gray-700 rounded-tl-sm'
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
              <div className="bg-white shadow-sm rounded-2xl px-4 py-3 rounded-tl-sm">
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
              placeholder="Type a message..." 
              className="flex-1 bg-transparent text-sm outline-none text-gray-600"
              readOnly
            />
            <button className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center">
              <Send className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      </motion.div>
      
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center"
      >
        <Sparkles className="w-4 h-4 text-white" />
      </motion.div>
    </motion.div>
  );
}

export default function WhatsAppAgent() {
  const stats = [
    { value: 90, suffix: "%", label: "Message Open Rate", icon: TrendingUp },
    { value: 24, suffix: "/7", label: "Always-On Support", icon: Clock },
    { value: 45, suffix: "%", label: "Reply Rate", icon: BarChart3 },
    { value: 5, suffix: "x", label: "Faster Responses", icon: Zap },
  ];

  const features = [
    {
      icon: Megaphone,
      title: "Broadcast Campaigns",
      description: "Send targeted promotional messages to segmented audiences with rich media support.",
      gradient: "from-green-500 to-emerald-500",
      stat: "90%",
      statLabel: "open rate",
    },
    {
      icon: Reply,
      title: "Automated Replies",
      description: "Instant responses to common queries, FAQs, and support requests — around the clock.",
      gradient: "from-emerald-500 to-teal-500",
      stat: "< 1s",
      statLabel: "response time",
    },
    {
      icon: UserCheck,
      title: "Lead Qualification",
      description: "Automatically qualify leads through conversational flows and route hot leads to your team.",
      gradient: "from-teal-500 to-cyan-500",
      stat: "65%",
      statLabel: "qualification rate",
    },
    {
      icon: Package,
      title: "Order Updates",
      description: "Send real-time order confirmations, shipping updates, and delivery notifications.",
      gradient: "from-cyan-500 to-green-500",
      stat: "98%",
      statLabel: "delivery rate",
    },
  ];

  const capabilities = [
    { icon: Globe, title: "WhatsApp Business API integration", color: "from-green-500 to-emerald-500" },
    { icon: Image, title: "Rich media messages (images, videos, docs)", color: "from-emerald-500 to-teal-500" },
    { icon: LayoutTemplate, title: "Template messages & catalog sharing", color: "from-teal-500 to-cyan-500" },
    { icon: MousePointerClick, title: "Quick replies & interactive buttons", color: "from-cyan-500 to-green-500" },
    { icon: ContactRound, title: "Contact management & segmentation", color: "from-green-600 to-emerald-600" },
    { icon: LineChart, title: "Analytics dashboard & reporting", color: "from-emerald-600 to-teal-600" },
  ];

  const idealFor = [
    { icon: ShoppingCart, title: "D2C & Ecommerce brands", color: "bg-green-100 text-green-700" },
    { icon: ShoppingCart, title: "Ecommerce stores", color: "bg-emerald-100 text-emerald-700" },
    { icon: UtensilsCrossed, title: "Restaurants & food delivery", color: "bg-teal-100 text-teal-700" },
    { icon: HeartPulse, title: "Healthcare providers", color: "bg-cyan-100 text-cyan-700" },
    { icon: Home, title: "Real estate businesses", color: "bg-green-100 text-green-600" },
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Helmet>
        <title>WhatsApp Agent - AI-Powered WhatsApp Business Automation | AI Chroney</title>
        <meta name="description" content="Automate your WhatsApp Business conversations with AI. Handle customer queries, capture leads, send broadcasts, and deliver order updates — all on autopilot, 24/7." />
      </Helmet>
      <Navigation />
      
      <main>
        <section className="relative pt-20 pb-24 sm:pt-28 sm:pb-32 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-50 to-white"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
          
          <div className="max-w-7xl mx-auto relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur px-4 py-2 rounded-full text-sm font-medium text-green-700 mb-6 shadow-sm border border-green-100">
                  <Sparkles className="w-4 h-4" />
                  WhatsApp Business AI Agent
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#0C1445] mb-6 leading-tight">
                  Your 24/7 <br />
                  <span className="bg-gradient-to-r from-[#25D366] to-[#128C7E] bg-clip-text text-transparent">WhatsApp Sales</span> <br />
                  & Support Agent
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-xl">
                  Automate WhatsApp conversations, handle customer queries instantly, capture and qualify leads, and deliver order updates — all on autopilot.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="https://wa.me/919999080825" target="_blank" rel="noopener noreferrer">
                    <Button 
                      size="lg" 
                      className="bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:opacity-90 text-white text-base sm:text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
                    >
                      Start Free Trial
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </a>
                </div>
              </motion.div>

              <div className="flex justify-center md:justify-end">
                <WhatsAppChatWidget />
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
                  <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <stat.icon className="w-7 h-7 text-green-600" />
                  </div>
                  <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#25D366] to-[#128C7E] bg-clip-text text-transparent mb-2">
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
                What WhatsApp Agent <span className="bg-gradient-to-r from-[#25D366] to-[#128C7E] bg-clip-text text-transparent">Delivers</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-500 max-w-xl mx-auto">
                Four pillars that supercharge your WhatsApp channel
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
                Core <span className="bg-gradient-to-r from-[#25D366] to-[#128C7E] bg-clip-text text-transparent">Features</span>
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
                Ideal <span className="bg-gradient-to-r from-[#25D366] to-[#128C7E] bg-clip-text text-transparent">For</span>
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

        <section className="py-24 sm:py-32 px-4 bg-gradient-to-r from-[#25D366] to-[#128C7E] relative overflow-hidden">
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
                Ready to transform your WhatsApp?
              </h2>
              <p className="text-xl sm:text-2xl text-white/90 mb-10 max-w-2xl mx-auto">
                Turn WhatsApp into your most powerful sales and support channel with AI automation
              </p>
              <div className="flex justify-center">
                <a href="https://wa.me/919999080825" target="_blank" rel="noopener noreferrer">
                  <Button 
                    size="lg" 
                    className="bg-white text-[#128C7E] hover:bg-gray-100 text-base sm:text-lg px-12 py-7 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 font-semibold group"
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