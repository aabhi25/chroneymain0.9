import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, GraduationCap, TrendingUp, Clock, MoonStar, HelpCircle, Hourglass, Globe, Brain, UserCheck, CheckCircle, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const challenges = [
  { icon: HelpCircle, title: "Lots of questions before enquiring", text: "Prospective students wanted answers on fees, eligibility, EMI options and university recognition before they would share their details." },
  { icon: MoonStar, title: "Interest peaks after office hours", text: "Working professionals browse programs late in the evening and on weekends, when counsellors are not available." },
  { icon: Hourglass, title: "Slow follow-up meant lost leads", text: "By the time a counsellor called back, many prospects had moved on or enquired elsewhere." },
];

const solution = [
  { icon: Globe, iconBg: "bg-gradient-to-br from-[#FF4D4D] to-[#9333EA]", title: "Website Agent trained on every program", text: "AI Chroney learned Jaro's full program catalogue, so it answers detailed questions about courses, fees, eligibility and EMI instantly and captures the lead in the same conversation." },
  { icon: FaWhatsapp, iconBg: "bg-[#25D366]", title: "Instant WhatsApp follow-up", text: "New leads hear from Jaro on WhatsApp within minutes, with program details and next steps, while their interest is at its peak." },
  { icon: Phone, iconBg: "bg-gradient-to-br from-blue-500 to-indigo-600", title: "AI Calling Agent that qualifies every lead", text: "The AI Calling Agent calls new leads, answers their questions about programs and fees, and qualifies them before they reach a counsellor." },
  { icon: Brain, iconBg: "bg-gradient-to-br from-violet-500 to-purple-600", title: "One memory across channels", text: "Every conversation, on the website, on WhatsApp or on a call, is part of a single lead profile, so prospects never have to repeat themselves." },
  { icon: UserCheck, iconBg: "bg-[#0C1445]", title: "Counsellors get warm, informed leads", text: "Counsellors receive each lead with the program of interest and a summary of what was discussed, ready for a focused conversation." },
];

const outcomes = [
  "Every new lead called and qualified by the AI Calling Agent",
  "Every visitor enquiry answered instantly, day or night",
  "Leads captured inside the conversation, not just through forms",
  "Counsellors start calls with full context instead of a cold number",
];

export default function JaroCaseStudy() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Helmet>
        <title>Case Study: How Jaro Education Got 5x More Leads with AI Chroney</title>
        <meta name="description" content="Jaro Education, one of India's leading online higher-education companies, got 5x more leads after deploying AI Chroney's AI agents across its website, WhatsApp and phone calls." />
        <link rel="canonical" href="https://aichroney.com/case-studies/jaro-education" />
      </Helmet>
      <Navigation />
      <main>
        <section className="relative pt-16 pb-20 sm:pt-24 sm:pb-28 px-4 bg-gradient-to-br from-[#0C1445] via-[#2a1a5e] to-[#5b21b6] overflow-hidden">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl" aria-hidden="true" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl" aria-hidden="true" />
          <div className="max-w-5xl mx-auto relative">
            <Link href="/" className="inline-flex items-center gap-1.5 text-white/60 hover:text-white text-sm mb-10 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to home
            </Link>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs font-semibold uppercase tracking-wider mb-6">
                <GraduationCap className="w-3.5 h-3.5" />
                Case study · Education
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl">
                How Jaro Education got <span className="bg-gradient-to-r from-[#FF7A7A] to-[#C084FC] bg-clip-text text-transparent">5x more leads</span> with AI Chroney
              </h1>
              <p className="text-lg sm:text-xl text-white/70 max-w-2xl">
                One of India's leading online higher-education companies turned website visitors into enquiries, around the clock.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              <div className="rounded-2xl bg-white/10 border border-white/15 backdrop-blur p-6">
                <TrendingUp className="w-6 h-6 text-pink-300 mb-3" />
                <div className="text-5xl font-bold text-white mb-1">5x</div>
                <div className="text-white/70 text-sm">more leads after going live</div>
              </div>
              <div className="rounded-2xl bg-white/10 border border-white/15 backdrop-blur p-6">
                <Clock className="w-6 h-6 text-pink-300 mb-3" />
                <div className="text-5xl font-bold text-white mb-1">24/7</div>
                <div className="text-white/70 text-sm">every enquiry answered, including nights and weekends</div>
              </div>
              <div className="rounded-2xl bg-white/10 border border-white/15 backdrop-blur p-6">
                <Brain className="w-6 h-6 text-pink-300 mb-3" />
                <div className="text-5xl font-bold text-white mb-1">1</div>
                <div className="text-white/70 text-sm">shared memory across website, WhatsApp and calls</div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-16 sm:py-20 px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-purple-600 mb-2">The customer</div>
              <h2 className="text-2xl font-bold text-[#0C1445]">Jaro Education</h2>
            </div>
            <div className="md:col-span-2 text-gray-600 text-lg leading-relaxed space-y-4">
              <p>
                Jaro Education helps working professionals across India earn online degrees and executive qualifications from top universities and institutes. Prospective students research and compare programs on its website before they speak to a counsellor.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <div className="text-xs font-semibold uppercase tracking-wider text-purple-600 mb-2">The challenge</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0C1445] mb-10 max-w-3xl">Plenty of interest, but too many prospects left without enquiring</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {challenges.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm"
                >
                  <div className="w-11 h-11 rounded-xl bg-rose-50 text-rose-500 flex items-center justify-center mb-4">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-[#0C1445] mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-xs font-semibold uppercase tracking-wider text-purple-600 mb-2">The solution</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0C1445] mb-10 max-w-3xl">An AI marketing engine that answers, follows up and calls every lead</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {solution.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`flex gap-5 rounded-2xl border border-gray-100 p-7 hover:shadow-lg transition-shadow ${index === solution.length - 1 ? "md:col-span-2" : ""}`}
                >
                  <div className={`flex-shrink-0 w-12 h-12 rounded-2xl ${item.iconBg} flex items-center justify-center shadow-md`}>
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0C1445] mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24 px-4 bg-purple-50/60">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-purple-600 mb-2">The result</div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0C1445] mb-6">
                <span className="bg-gradient-to-r from-[#FF4D4D] to-[#9333EA] bg-clip-text text-transparent">5x more leads</span> for the admissions team
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                With AI Chroney answering every visitor, following up on WhatsApp and calling every lead, Jaro Education's lead volume grew five-fold, and every lead reached a counsellor with the context needed to convert.
              </p>
            </div>
            <ul className="space-y-4">
              {outcomes.map(item => (
                <li key={item} className="flex items-start gap-3 bg-white rounded-2xl p-5 shadow-sm border border-purple-100">
                  <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-24 sm:py-28 px-4 bg-gradient-to-r from-[#FF4D4D] to-[#9333EA] relative overflow-hidden">
          <div className="max-w-3xl mx-auto text-center relative">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">Want results like Jaro's?</h2>
            <p className="text-xl text-white/90 mb-10">See how AI Chroney would work for your business in a quick demo.</p>
            <a href="https://wa.me/919999080825" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-[#9333EA] hover:bg-gray-100 text-base sm:text-lg px-12 py-7 rounded-full shadow-xl font-semibold group">
                Book a Demo
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
