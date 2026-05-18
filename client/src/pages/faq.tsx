import { Helmet } from "react-helmet-async";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is AI Chroney?",
    a: "AI Chroney is an AI agent platform that helps businesses sell and support customers across Website, WhatsApp, and Instagram \u2014 automatically. It answers product queries, captures leads, and handles support conversations 24/7 without any human intervention."
  },
  {
    q: "Which channels does AI Chroney support?",
    a: "AI Chroney deploys agents on three channels: your Website (as an embedded chat widget), WhatsApp (via the WhatsApp Business API), and Instagram (responding to DMs and comments). All three agents share the same knowledge base and brand voice."
  },
  {
    q: "How does the Website AI agent work?",
    a: "You add a single line of script to your website and the AI agent appears as a chat widget. It greets visitors, answers product and service questions, and captures lead details \u2014 all in real time, without any manual effort."
  },
  {
    q: "How does the WhatsApp AI agent work?",
    a: "Once connected via the WhatsApp Business API, Chroney\u2019s agent automatically replies to customer messages on WhatsApp. It can answer queries, share product details, collect contact information, and hand off to a human agent when needed."
  },
  {
    q: "How does the Instagram AI agent work?",
    a: "The Instagram agent connects to your business account and automatically responds to DMs and comments. Whether a customer asks about a product in a post comment or sends a direct message, Chroney replies instantly and guides them towards a purchase or support resolution."
  },
  {
    q: "Can AI Chroney capture leads automatically?",
    a: "Yes. Across all three channels, Chroney can collect customer names, emails, and phone numbers during conversations and store them as leads \u2014 so your sales team always has a ready pipeline without manually chasing inquiries."
  },
  {
    q: "Can I train Chroney on my own products and FAQs?",
    a: "Absolutely. You can upload your product catalogue, FAQ documents, pricing sheets, and brand guidelines. Chroney uses this information to give accurate, on-brand answers across Website, WhatsApp, and Instagram."
  },
  {
    q: "Can AI Chroney be customised for my brand?",
    a: "Yes. You can customise the agent\u2019s name, personality, tone of voice, chat colours, and language to match your brand identity. Each channel can also have its own tailored greeting and conversation flow."
  },
  {
    q: "Is my customer data safe?",
    a: "Yes. All conversations and customer data are encrypted and securely stored. Chroney never uses your business data to train public AI models, and you retain full ownership of your data at all times."
  },
  {
    q: "Is there a free trial?",
    a: "Yes, you can get started with a free trial to experience how AI Chroney works across your channels before committing to a paid plan. Our team is available to help you set everything up."
  }
];

export default function FAQ() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>FAQ – Common Questions About AI Chroney Chatbot Widget</title>
        <meta name="description" content="Find answers to frequently asked questions about AI Chroney. Learn about customization, integrations, pricing, security, LLM support, and how our AI chatbot works for your business." />
        <link rel="canonical" href="https://aichroney.com/faq" />
      </Helmet>
      <Navigation />
      
      <main className="relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-100 to-pink-100 opacity-40 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-100 to-purple-100 opacity-40 blur-3xl rounded-full"></div>
        
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center gap-2 bg-purple-50 border border-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <HelpCircle className="w-4 h-4" />
              Got questions?
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0C1445] mb-4">
              Frequently Asked <span className="bg-gradient-to-r from-[#FF4D4D] to-[#9333EA] bg-clip-text text-transparent">Questions</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-500 max-w-xl mx-auto">
              Everything you need to know about AI Chroney and how it works for your business.
            </p>
          </motion.div>

          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <AccordionItem 
                  value={`item-${index + 1}`} 
                  className="bg-white border border-gray-100 rounded-2xl px-6 py-1 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <AccordionTrigger className="text-base sm:text-lg font-semibold text-[#0C1445] hover:no-underline text-left">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm sm:text-base text-gray-600 leading-relaxed pb-4">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-br from-[#0C1445] to-[#1a1f5e] rounded-3xl p-8 sm:p-10 shadow-xl border border-purple-500/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-purple-600/20 to-transparent rounded-full blur-3xl"></div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">Still have questions?</h3>
              <p className="text-white/60 mb-6 max-w-md mx-auto">
                Our team is here to help. Reach out and we'll get back to you within a few hours.
              </p>
              <a href="https://wa.me/919999080825" target="_blank" rel="noopener noreferrer">
                <button className="bg-gradient-to-r from-[#FF4D4D] to-[#9333EA] text-white font-semibold px-8 py-3 rounded-full hover:opacity-90 transition-opacity shadow-lg">
                  Chat with us on WhatsApp
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
