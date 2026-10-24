import { motion } from "framer-motion";
import { Globe, Phone, Brain, UserCheck, Sparkles, Flame } from "lucide-react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

const journey = [
  {
    icon: Globe,
    iconBg: "bg-gradient-to-br from-[#FF4D4D] to-[#9333EA]",
    title: "Capture",
    text: "A prospect lands from an ad, a search or a reel. The Website Agent answers their questions and captures the lead in the same conversation.",
  },
  {
    icon: FaWhatsapp,
    iconBg: "bg-[#25D366]",
    title: "Follow up in minutes",
    text: "The WhatsApp Agent sends a personalised message right away: brochure, pricing, next steps. Prospects reply, and the agent keeps the conversation going.",
  },
  {
    icon: Phone,
    iconBg: "bg-gradient-to-br from-blue-500 to-indigo-600",
    title: "Call and qualify",
    text: "The AI Calling Agent calls the lead, speaks naturally in your customer's language, answers objections and books a meeting or site visit.",
  },
  {
    icon: FaInstagram,
    iconBg: "bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF]",
    title: "Nurture everywhere",
    text: "Instagram and Facebook DMs, WhatsApp campaigns and reminders keep the lead warm until they are ready to buy.",
  },
  {
    icon: UserCheck,
    iconBg: "bg-[#0C1445]",
    title: "Hand over hot leads",
    text: "Your sales team gets ready-to-close leads with a score and a full summary of every conversation, not a cold phone number.",
  },
];

const timeline = [
  { icon: Globe, color: "text-purple-600 bg-purple-50", time: "10:02 AM", channel: "Website", text: "Asked about Online MBA fees. Shared name and number." },
  { icon: FaWhatsapp, color: "text-[#25D366] bg-green-50", time: "10:05 AM", channel: "WhatsApp", text: "Brochure sent. Replied: \"Is EMI available?\"" },
  { icon: Phone, color: "text-blue-600 bg-blue-50", time: "11:30 AM", channel: "AI call", text: "Explained EMI options. Counselling booked for Tue, 5 PM." },
  { icon: FaInstagram, color: "text-pink-600 bg-pink-50", time: "Next day", channel: "Instagram", text: "DM'd about placements. Agent already knew her MBA interest." },
];

export default function MarketingEngineSection() {
  return (
    <section id="engine" className="py-20 sm:py-28 px-4 bg-gradient-to-b from-white via-purple-50/40 to-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-purple-600 mb-4 border border-purple-100 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            The AI Marketing Engine
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0C1445] mb-4">
            From first click to <span className="bg-gradient-to-r from-[#FF4D4D] to-[#9333EA] bg-clip-text text-transparent">paying customer</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            AI Chroney chats, messages and calls your prospects across every channel, and follows up until they convert. No lead goes cold.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <ol className="relative space-y-8">
            <div className="absolute left-6 top-6 bottom-6 w-px bg-gradient-to-b from-purple-200 via-pink-200 to-gray-200" aria-hidden="true" />
            {journey.map((step, index) => (
              <motion.li
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex gap-5"
              >
                <div className={`relative z-10 flex-shrink-0 w-12 h-12 rounded-2xl ${step.iconBg} flex items-center justify-center shadow-md`}>
                  <step.icon className="w-6 h-6 text-white" />
                </div>
                <div className="pt-1">
                  <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Step {index + 1}</div>
                  <h3 className="text-lg font-semibold text-[#0C1445] mb-1">{step.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-[15px] leading-relaxed">{step.text}</p>
                </div>
              </motion.li>
            ))}
          </ol>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:sticky lg:top-24"
          >
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-[#0C1445] to-[#3b1d6e] p-5 sm:p-6 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-white/15 flex items-center justify-center text-white font-semibold">PS</div>
                  <div>
                    <p className="text-white font-semibold">Priya Sharma</p>
                    <p className="text-white/60 text-xs">Interested in: Online MBA</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-orange-400/20 text-orange-200 text-xs font-semibold">
                  <Flame className="w-3.5 h-3.5" /> Hot · 92
                </span>
              </div>
              <div className="p-5 sm:p-6">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-600 mb-5">
                  <Brain className="w-4 h-4" />
                  Unified memory across channels
                </div>
                <ul className="space-y-4">
                  {timeline.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.15 }}
                      className="flex gap-3"
                    >
                      <div className={`flex-shrink-0 w-9 h-9 rounded-xl ${item.color} flex items-center justify-center`}>
                        <item.icon className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-baseline gap-2">
                          <span className="text-sm font-semibold text-[#0C1445]">{item.channel}</span>
                          <span className="text-xs text-gray-400">{item.time}</span>
                        </div>
                        <p className="text-sm text-gray-600 leading-snug">{item.text}</p>
                      </div>
                    </motion.li>
                  ))}
                </ul>
                <div className="mt-6 rounded-2xl bg-emerald-50 border border-emerald-100 p-4 flex items-start gap-3">
                  <UserCheck className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-emerald-800">
                    <span className="font-semibold">Handed to counsellor</span> with the full story: course, budget, EMI question and booked slot.
                  </p>
                </div>
              </div>
            </div>
            <p className="text-center text-sm text-gray-500 mt-5">
              Every agent remembers every conversation, so your prospect never has to repeat themselves.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
