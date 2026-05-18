import { Helmet } from "react-helmet-async";
import { useState, useEffect } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Zap, Users, Target, Shield, Globe, ArrowRight, CheckCircle, Building2, GraduationCap, ShoppingCart, Laptop, TrendingUp, Sparkles, Bot, Send, Clock, BarChart3 } from "lucide-react";

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

    const element = document.getElementById(`counter-${end}`);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return <span id={`counter-${end}`}>{count}{suffix}</span>;
}

function FloatingChatWidget() {
  const [messages, setMessages] = useState<{ type: 'bot' | 'user'; text: string }[]>([
    { type: 'bot', text: "Hi! Looking to upskill? I can help you find the perfect course!" }
  ]);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  
  const conversation = [
    { type: 'user' as const, text: "I want to learn digital marketing" },
    { type: 'bot' as const, text: "Great choice! Our Digital Marketing Masterclass is 40% off this week. Includes certification & lifetime access. Interested?" },
    { type: 'user' as const, text: "Yes! How do I enroll?" },
    { type: 'bot' as const, text: "I'll send you the enrollment link now. You can start learning in minutes! Want me to add the SEO bonus module too?" },
  ];

  useEffect(() => {
    if (currentMessageIndex >= conversation.length) {
      setTimeout(() => {
        setMessages([{ type: 'bot', text: "Hi! Looking to upskill? I can help you find the perfect course!" }]);
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
        <div className="bg-gradient-to-r from-[#0C1445] to-[#4F46E5] p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
            <Bot className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="text-white font-semibold text-sm">Chroney Assist</p>
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              <span className="text-white/80 text-xs">Online</span>
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
                    ? 'bg-gradient-to-r from-[#0C1445] to-[#4F46E5] text-white rounded-tr-sm' 
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
              placeholder="Type a message..." 
              className="flex-1 bg-transparent text-sm outline-none text-gray-600"
              readOnly
            />
            <button className="w-8 h-8 rounded-full bg-gradient-to-r from-[#FF4D4D] to-[#9333EA] flex items-center justify-center">
              <Send className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      </motion.div>
      
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-gradient-to-r from-[#FF4D4D] to-[#9333EA] flex items-center justify-center"
      >
        <Sparkles className="w-4 h-4 text-white" />
      </motion.div>
    </motion.div>
  );
}

export default function ChroneyAssist() {
  const stats = [
    { value: 85, suffix: "%", label: "Increase in Conversions", icon: TrendingUp },
    { value: 24, suffix: "/7", label: "Always-On Support", icon: Clock },
    { value: 60, suffix: "%", label: "Reduced Support Tickets", icon: BarChart3 },
    { value: 3, suffix: "x", label: "Faster Response Time", icon: Zap },
  ];

  const features = [
    {
      icon: Users,
      title: "Customer Engagement",
      description: "Real-time contextual conversations that guide visitors toward the right action.",
      gradient: "from-blue-500 to-cyan-500",
      stat: "85%",
      statLabel: "engagement rate",
    },
    {
      icon: TrendingUp,
      title: "Sales Enablement",
      description: "Answer queries instantly, guide users, and identify buying intent to drive revenue.",
      gradient: "from-purple-500 to-pink-500",
      stat: "3x",
      statLabel: "more conversions",
    },
    {
      icon: Zap,
      title: "Automated Support",
      description: "Instant, accurate support for FAQs and complex queries — no delays, ever.",
      gradient: "from-emerald-500 to-teal-500",
      stat: "<1s",
      statLabel: "response time",
    },
    {
      icon: Target,
      title: "Lead Capture",
      description: "Collect verified details, qualify leads by intent, and route them to your CRM.",
      gradient: "from-orange-500 to-amber-500",
      stat: "65%",
      statLabel: "qualification rate",
    },
  ];

  const capabilities = [
    { icon: Globe, title: "Website-embedded AI assistant", color: "from-blue-500 to-indigo-500" },
    { icon: MessageCircle, title: "Contextual learning from website, PDFs, FAQs", color: "from-purple-500 to-pink-500" },
    { icon: Users, title: "Multilingual conversations", color: "from-cyan-500 to-teal-500" },
    { icon: Zap, title: "Custom workflows for sales & support", color: "from-orange-500 to-red-500" },
    { icon: Shield, title: "Enterprise-ready architecture", color: "from-emerald-500 to-green-500" },
    { icon: Target, title: "CRM and third-party integrations", color: "from-violet-500 to-purple-500" },
  ];

  const idealFor = [
    { icon: Building2, title: "Enterprises & large organizations", color: "bg-blue-100 text-blue-600" },
    { icon: GraduationCap, title: "EdTech platforms", color: "bg-purple-100 text-purple-600" },
    { icon: ShoppingCart, title: "Ecommerce & D2C brands", color: "bg-pink-100 text-pink-600" },
    { icon: Laptop, title: "SaaS & service businesses", color: "bg-cyan-100 text-cyan-600" },
    { icon: TrendingUp, title: "High-traffic websites", color: "bg-orange-100 text-orange-600" },
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Helmet>
        <title>Chroney Assist - Enterprise AI Assistant for Sales & Support | AI Chroney</title>
        <meta name="description" content="Chroney Assist is an enterprise-grade AI assistant that operates 24x7 on your website, engaging visitors, driving conversions, and delivering accurate customer support at scale." />
      </Helmet>
      <Navigation />
      
      <main>
        <section className="relative pt-20 pb-24 sm:pt-28 sm:pb-32 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-white"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
          
          <div className="max-w-7xl mx-auto relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur px-4 py-2 rounded-full text-sm font-medium text-purple-700 mb-6 shadow-sm border border-purple-100">
                  <Sparkles className="w-4 h-4" />
                  Enterprise-Grade AI Assistant
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#0C1445] mb-6 leading-tight">
                  Your 24/7 <br />
                  <span className="bg-gradient-to-r from-[#FF4D4D] to-[#9333EA] bg-clip-text text-transparent">Sales & Support</span> <br />
                  Team Member
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-xl">
                  Transform your website into a revenue engine with AI that engages visitors, drives conversions, and delivers exceptional support at scale.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="https://wa.me/919999080825" target="_blank" rel="noopener noreferrer">
                    <Button 
                      size="lg" 
                      className="bg-gradient-to-r from-[#FF4D4D] to-[#9333EA] hover:opacity-90 text-white text-base sm:text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
                    >
                      Start Free Trial
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </a>
                </div>
              </motion.div>

              <div className="flex justify-center md:justify-end">
                <FloatingChatWidget />
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
                  <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <stat.icon className="w-7 h-7 text-purple-600" />
                  </div>
                  <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#FF4D4D] to-[#9333EA] bg-clip-text text-transparent mb-2">
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
                What Chroney Assist <span className="bg-gradient-to-r from-[#FF4D4D] to-[#9333EA] bg-clip-text text-transparent">Delivers</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-500 max-w-xl mx-auto">
                Four pillars that transform your customer engagement
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
                Core <span className="bg-gradient-to-r from-[#FF4D4D] to-[#9333EA] bg-clip-text text-transparent">Features</span>
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
                Ideal <span className="bg-gradient-to-r from-[#FF4D4D] to-[#9333EA] bg-clip-text text-transparent">For</span>
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

        <section className="py-24 sm:py-32 px-4 bg-gradient-to-r from-[#FF4D4D] to-[#9333EA] relative overflow-hidden">
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
                Ready to transform your website?
              </h2>
              <p className="text-xl sm:text-2xl text-white/90 mb-10 max-w-2xl mx-auto">
                Experience the future of customer engagement with Chroney Assist
              </p>
              <div className="flex justify-center">
                <a href="https://wa.me/919999080825" target="_blank" rel="noopener noreferrer">
                  <Button 
                    size="lg" 
                    className="bg-white text-[#9333EA] hover:bg-gray-100 text-base sm:text-lg px-12 py-7 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 font-semibold group"
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
