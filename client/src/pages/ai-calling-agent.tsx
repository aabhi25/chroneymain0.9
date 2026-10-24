import { Helmet } from "react-helmet-async";
import { useState, useEffect } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, PhoneIncoming, PhoneOutgoing, Languages, CalendarCheck, FileText, Brain, ArrowRight, Sparkles, BellRing, RefreshCcw, GraduationCap, Home, Landmark, HeartPulse, Car } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const callScript = [
  { speaker: "agent" as const, text: "Hi Rahul, this is Chroney calling from Horizon Realty. You asked about our 3-bedroom apartments at Lakeview Heights earlier today. Is now a good time?" },
  { speaker: "lead" as const, text: "Yes, tell me. What's the price range?" },
  { speaker: "agent" as const, text: "The 3-bedroom starts at $420,000, and there's a launch offer this month. Would you like to see the site this weekend?" },
  { speaker: "lead" as const, text: "Saturday morning works." },
  { speaker: "agent" as const, text: "Done! Saturday, 11 AM. I'll send the location and brochure on WhatsApp right now." },
];

function LiveCallCard() {
  const [shown, setShown] = useState(1);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const tick = setInterval(() => setSeconds(s => s + 1), 1000);
    return () => clearInterval(tick);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (shown >= callScript.length) {
        setShown(1);
        setSeconds(0);
      } else {
        setShown(shown + 1);
      }
    }, shown >= callScript.length ? 5000 : 2600);
    return () => clearTimeout(timer);
  }, [shown]);

  const mm = String(Math.floor(seconds / 60)).padStart(2, "0");
  const ss = String(seconds % 60).padStart(2, "0");

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="w-full max-w-[380px] bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100"
    >
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative w-11 h-11 rounded-full bg-white/20 flex items-center justify-center">
            <Phone className="w-5 h-5 text-white" />
            <span className="absolute inset-0 rounded-full ring-2 ring-white/40 animate-ping" />
          </div>
          <div>
            <p className="text-white font-semibold text-sm">AI Calling Agent</p>
            <p className="text-white/70 text-xs">Outgoing · Rahul M.</p>
          </div>
        </div>
        <span className="text-white/90 font-mono text-sm">{mm}:{ss}</span>
      </div>
      <div className="p-4 h-[300px] overflow-hidden flex flex-col justify-end gap-3 bg-slate-50">
        <AnimatePresence initial={false}>
          {callScript.slice(0, shown).map((line, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`flex ${line.speaker === "lead" ? "justify-end" : "justify-start"}`}
            >
              <div className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm ${line.speaker === "lead" ? "bg-indigo-600 text-white rounded-tr-sm" : "bg-white shadow-sm text-gray-700 rounded-tl-sm"}`}>
                {line.text}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <div className="px-4 py-3 border-t border-gray-100 flex items-center gap-2 text-xs text-gray-500">
        <span className="flex gap-0.5 items-end h-4" aria-hidden="true">
          {[0, 1, 2, 3, 4].map(i => (
            <motion.span
              key={i}
              className="w-1 bg-indigo-500 rounded-full"
              animate={{ height: [4, 14, 6, 12, 4] }}
              transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.15 }}
            />
          ))}
        </span>
        Live transcript · summary and WhatsApp follow-up sent after the call
      </div>
    </motion.div>
  );
}

export default function AICallingAgent() {
  const features = [
    { icon: PhoneOutgoing, title: "Calls new leads in minutes", description: "The moment a lead comes in from your website, ads or WhatsApp, the agent calls them while their interest is still high." },
    { icon: PhoneIncoming, title: "Answers every incoming call", description: "No more missed calls after hours or on busy days. The agent picks up, answers questions and captures the enquiry." },
    { icon: Languages, title: "Multilingual", description: "Speaks naturally in the language your customer is comfortable with, and switches when they do." },
    { icon: CalendarCheck, title: "Books meetings and visits", description: "Qualifies the lead, handles objections and books a demo, site visit or counselling slot on the call." },
    { icon: FileText, title: "Summary after every call", description: "Your team gets a transcript, a short summary, the lead's status and the agreed next step." },
    { icon: FaWhatsapp, title: "WhatsApp follow-up", description: "Right after the call, the brochure, location or payment link goes out on WhatsApp automatically." },
  ];

  const useCases = [
    { icon: PhoneOutgoing, title: "Speed-to-lead calling", text: "Call every new enquiry within minutes, before a competitor does." },
    { icon: BellRing, title: "Reminders and confirmations", text: "Confirm appointments, visits and demos, and cut no-shows." },
    { icon: RefreshCcw, title: "Re-engage cold leads", text: "Work through old lead lists and bring interested prospects back." },
    { icon: PhoneIncoming, title: "Inbound enquiry line", text: "A 24/7 front desk that answers, qualifies and routes callers." },
  ];

  const idealFor = [
    { icon: GraduationCap, title: "Education & admissions", color: "bg-blue-100 text-blue-700" },
    { icon: Home, title: "Real estate", color: "bg-indigo-100 text-indigo-700" },
    { icon: Landmark, title: "Financial services", color: "bg-violet-100 text-violet-700" },
    { icon: HeartPulse, title: "Healthcare & clinics", color: "bg-sky-100 text-sky-700" },
    { icon: Car, title: "Automotive dealers", color: "bg-blue-100 text-blue-600" },
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Helmet>
        <title>AI Calling Agent – AI Voice Calls That Qualify Leads & Book Meetings | AI Chroney</title>
        <meta name="description" content="AI Chroney's Calling Agent calls new leads in minutes, answers incoming calls 24/7 in multiple languages, books meetings and follows up on WhatsApp, all with shared memory across channels." />
        <link rel="canonical" href="https://aichroney.com/products/ai-calling-agent" />
      </Helmet>
      <Navigation />
      <main>
        <section className="relative pt-20 pb-24 sm:pt-28 sm:pb-32 px-4 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
          <div className="max-w-7xl mx-auto relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
              >
                <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-blue-700 mb-6 border border-blue-100">
                  <Phone className="w-3.5 h-3.5" />
                  AI Calling Agent
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#0C1445] mb-6 leading-tight">
                  Every lead gets a call. <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">In minutes.</span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-xl">
                  An AI voice agent that calls your new leads, answers incoming calls, qualifies prospects and books meetings, then follows up on WhatsApp. It remembers every chat and message the lead has already had with you.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href="https://wa.me/919999080825" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-90 text-white px-10 py-6 rounded-full shadow-lg text-base">
                      Hear a demo call
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </a>
                </div>
              </motion.div>
              <div className="flex justify-center md:justify-end">
                <LiveCallCard />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28 px-4 bg-gradient-to-b from-white to-slate-50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-14"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0C1445] mb-4">
                A sales caller that <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">never sleeps</span>
              </h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">Natural conversations, real outcomes, and nothing lost between channels.</p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-5 shadow-md">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#0C1445] mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28 px-4 bg-[#0C1445] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />
          <div className="max-w-6xl mx-auto relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-blue-200 mb-5">
                <Brain className="w-3.5 h-3.5" />
                Unified memory
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5">It already knows who it's calling</h2>
              <p className="text-white/70 text-lg leading-relaxed">
                The Calling Agent shares one memory with your Website, WhatsApp and Meta agents. If a prospect asked about pricing in a chat this morning, the call picks up from there instead of starting over. After the call, every other agent knows what was agreed.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {useCases.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="rounded-2xl bg-white/5 border border-white/10 p-6"
                >
                  <item.icon className="w-6 h-6 text-blue-300 mb-3" />
                  <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                  <p className="text-white/60 text-sm">{item.text}</p>
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
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0C1445]">
                Ideal <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">For</span>
              </h2>
            </motion.div>
            <div className="flex flex-wrap justify-center gap-4">
              {idealFor.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`flex items-center gap-3 ${item.color} px-6 py-4 rounded-full shadow-md`}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.title}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 sm:py-32 px-4 bg-gradient-to-r from-blue-600 to-indigo-700 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '50px 50px' }}></div>
          </div>
          <div className="max-w-4xl mx-auto text-center relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Sparkles className="w-10 h-10 text-white/80 mx-auto mb-6" />
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Stop letting leads go cold</h2>
              <p className="text-xl sm:text-2xl text-white/90 mb-10 max-w-2xl mx-auto">
                Hear the AI Calling Agent on a real call with your own script.
              </p>
              <div className="flex justify-center">
                <a href="https://wa.me/919999080825" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-white text-indigo-700 hover:bg-gray-100 text-base sm:text-lg px-12 py-7 rounded-full shadow-xl font-semibold group">
                    Book a Demo
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
