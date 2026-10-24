import { Helmet } from "react-helmet-async";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Rocket, Search, PenTool, Code, FlaskConical, BookOpen, Workflow, FileSearch, Phone, AppWindow, Plug, Layers, ShieldCheck, Target, Cpu } from "lucide-react";

const whatWeBuild = [
  { icon: BookOpen, title: "AI assistants on your data", text: "Internal and customer-facing assistants that answer from your documents, policies and product data." },
  { icon: Workflow, title: "Workflow automation agents", text: "Agents that take repetitive work off your team: triaging requests, updating systems and sending follow-ups." },
  { icon: FileSearch, title: "Document & data extraction", text: "Read invoices, forms, applications and contracts, and turn them into clean, structured data." },
  { icon: Phone, title: "Voice agents", text: "Custom AI callers and phone assistants for your own scripts, languages and call flows." },
  { icon: AppWindow, title: "AI-powered products", text: "New apps and features for your customers, such as AI tutors, advisors and recommendation engines." },
  { icon: Plug, title: "Integrations", text: "Connect AI to your CRM, ERP, LMS or internal tools, so it works inside the systems you already use." },
];

const sprint = [
  { days: "Days 1–2", icon: Search, title: "Discover & scope", text: "We map the problem, the users and the data, and agree a fixed MVP scope and success measure." },
  { days: "Days 3–5", icon: PenTool, title: "Design & prepare data", text: "Conversation and screen design, data preparation and the technical plan, reviewed with you." },
  { days: "Days 6–12", icon: Code, title: "Build & iterate", text: "We build in short cycles and show you working software every few days, so feedback shapes the product." },
  { days: "Days 13–14", icon: FlaskConical, title: "Test & launch", text: "Testing with real scenarios, then a working MVP in your hands with a walkthrough for your team." },
];

const whyUs = [
  { icon: Layers, title: "Built on a proven platform", text: "We reuse the engine behind AI Chroney's agents, so you start from production-tested building blocks, not a blank page." },
  { icon: Target, title: "Fixed scope, clear outcome", text: "A defined MVP and a clear measure of success, agreed on day two." },
  { icon: Cpu, title: "The right model for the job", text: "We work with leading models such as GPT, Claude and Gemini, and pick what fits your quality, speed and cost needs." },
  { icon: ShieldCheck, title: "Your data stays yours", text: "Your data is never used to train public AI models, and you own what we build for you." },
];

export default function CustomAISolutions() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Helmet>
        <title>Custom AI Solutions – Your AI MVP in 14 Days | AI Chroney</title>
        <meta name="description" content="AI Chroney designs and builds custom AI solutions for businesses: assistants on your data, workflow agents, voice agents and AI products. Get a working MVP in 14 days." />
        <link rel="canonical" href="https://aichroney.com/custom-ai-solutions" />
      </Helmet>
      <Navigation />
      <main>
        <section className="relative pt-20 pb-24 sm:pt-28 sm:pb-32 px-4 overflow-hidden">
          <div className="absolute top-10 left-1/4 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40" />
          <div className="max-w-4xl mx-auto text-center relative">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-purple-600 mb-6 border border-purple-100 shadow-sm">
                <Rocket className="w-3.5 h-3.5" />
                Custom AI Solutions
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#0C1445] mb-6 leading-tight">
                Custom AI for your business. <span className="bg-gradient-to-r from-[#FF4D4D] to-[#9333EA] bg-clip-text text-transparent">MVP in 14 days.</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto">
                When an off-the-shelf agent isn't enough, our team designs and builds AI around your process and your data, and puts a working MVP in your hands in two weeks.
              </p>
              <a href="https://wa.me/919999080825" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-gradient-to-r from-[#FF4D4D] to-[#9333EA] hover:opacity-90 text-white text-base sm:text-lg px-10 sm:px-12 py-6 rounded-full shadow-lg">
                  Discuss your idea
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
            </motion.div>
          </div>
        </section>

        <section className="py-20 sm:py-28 px-4 bg-[#0C1445] relative overflow-hidden">
          <div className="absolute -top-20 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
          <div className="max-w-6xl mx-auto relative">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">The 14-day MVP sprint</h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto">From idea to working software in two weeks, with you in the loop at every step.</p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {sprint.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  className="relative rounded-2xl bg-white/5 border border-white/10 p-7"
                >
                  <div className="text-xs font-semibold uppercase tracking-wider text-pink-300 mb-4">{step.days}</div>
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#FF4D4D] to-[#9333EA] flex items-center justify-center mb-4 shadow-md">
                    <step.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">{step.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{step.text}</p>
                </motion.div>
              ))}
            </div>
            <p className="text-center text-white/50 text-sm mt-10">After launch, we can take the MVP to full production and support it as it grows.</p>
          </div>
        </section>

        <section className="py-20 sm:py-28 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0C1445] mb-4">
                What we <span className="bg-gradient-to-r from-[#FF4D4D] to-[#9333EA] bg-clip-text text-transparent">build</span>
              </h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">If it can be done with AI, we can scope it, build it and ship it.</p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {whatWeBuild.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="rounded-2xl border border-gray-100 p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white"
                >
                  <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-5">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#0C1445] mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28 px-4 bg-purple-50/60">
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0C1445]">
                Why build with <span className="bg-gradient-to-r from-[#FF4D4D] to-[#9333EA] bg-clip-text text-transparent">AI Chroney</span>
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {whyUs.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex gap-5 bg-white rounded-2xl p-7 border border-purple-100 shadow-sm"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FF4D4D] to-[#9333EA] flex items-center justify-center shadow-md">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0C1445] mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 sm:py-28 px-4 bg-gradient-to-r from-[#FF4D4D] to-[#9333EA]">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">Have an AI idea? Let's ship it in 14 days.</h2>
            <p className="text-xl text-white/90 mb-10">Tell us the problem. We'll come back with a scope, a plan and a fixed timeline.</p>
            <a href="https://wa.me/919999080825" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-[#9333EA] hover:bg-gray-100 text-base sm:text-lg px-12 py-7 rounded-full shadow-xl font-semibold group">
                Discuss your idea
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
