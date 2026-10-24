import { Helmet } from "react-helmet-async";
import { Mail, Phone, MessageSquare, MapPin } from "lucide-react";
import Logo from "@/components/logo";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { motion } from "framer-motion";

function openChatWidget() {
  const iframe = document.getElementById('hichroney-widget-iframe') as HTMLIFrameElement;
  if (iframe) {
    iframe.style.display = 'block';
    iframe.classList.remove('partial-mode');
    iframe.classList.add('chat-opening');
    setTimeout(() => {
      iframe.classList.remove('chat-opening');
      iframe.classList.add('chat-open-glow');
      setTimeout(() => iframe.classList.remove('chat-open-glow'), 2000);
    }, 500);
    return;
  }
  const widgetBtn = document.getElementById('hichroney-widget-button') as HTMLElement;
  if (widgetBtn) {
    widgetBtn.click();
    return;
  }
  window.location.href = "mailto:gopika@aichroney.com?subject=Business%20Inquiry&body=Hi%20AI%20Chroney%20team%2C%0A%0AI'd%20like%20to%20learn%20more%20about%20your%20AI%20chatbot%20solution.";
}

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Contact Us – Get AI Chroney for Your Business | Schedule Demo</title>
        <meta name="description" content="Contact AI Chroney to grow your business with AI. Schedule a free demo, get pricing info, or ask questions about our chatbot widget. Email: gopika@aichroney.com | WhatsApp: +91-9999-0808-25" />
        <link rel="canonical" href="https://aichroney.com/contact" />
      </Helmet>
      <Navigation />
      
      <main className="relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-100 to-pink-100 opacity-40 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-100 to-purple-100 opacity-40 blur-3xl rounded-full"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 mb-6">
              <Logo className="w-20 h-20" />
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0C1445] mb-4">
              Ready to grow your business with <span className="bg-gradient-to-r from-[#FF4D4D] to-[#9333EA] bg-clip-text text-transparent">AI</span>?
            </h1>
            <p className="text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Let's talk about how AI Chroney can help you sell smarter, support faster, and capture more leads.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-2 space-y-6"
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <h2 className="text-xl font-bold text-[#0C1445] mb-6">Get in touch</h2>
                <div className="space-y-6">
                  <a href="mailto:gopika@aichroney.com" className="flex items-start group">
                    <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0C1445] text-sm mb-0.5">Email</h3>
                      <span className="text-gray-500 hover:text-[#9333EA] transition-colors text-sm">
                        gopika@aichroney.com
                      </span>
                    </div>
                  </a>
                  
                  <a href="https://wa.me/919999080825" target="_blank" rel="noopener noreferrer" className="flex items-start group">
                    <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0C1445] text-sm mb-0.5">WhatsApp</h3>
                      <span className="text-gray-500 hover:text-[#9333EA] transition-colors block text-sm">
                        +91-9999-0808-25
                      </span>
                      <p className="text-xs text-gray-400 mt-1">Mon–Fri, 9 AM – 6 PM IST</p>
                    </div>
                  </a>

                  <div className="flex items-start group">
                    <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mr-4 flex-shrink-0 shadow-sm">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0C1445] text-sm mb-0.5">Location</h3>
                      <span className="text-gray-500 text-sm">India</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="lg:col-span-3"
            >
              <div className="bg-gradient-to-br from-[#0C1445] to-[#1a1f5e] rounded-3xl p-8 sm:p-10 shadow-2xl border border-purple-500/20 relative overflow-hidden flex flex-col items-center justify-center text-center min-h-[400px]">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-purple-600/20 to-transparent rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-pink-600/15 to-transparent rounded-full blur-3xl"></div>

                <div className="relative z-10 flex flex-col items-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-6 shadow-lg shadow-purple-500/30">
                      <MessageSquare className="w-8 h-8 text-white" />
                    </div>

                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2 leading-tight">
                      Contact Us Forms are <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-500 line-through decoration-red-500/60">outdated</span>.
                    </h2>
                    <h3 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 mb-4">
                      Use our AI chatbot instead.
                    </h3>
                    <p className="text-white/50 text-base sm:text-lg mb-8 max-w-md leading-relaxed">
                      Skip the form. Get instant answers from our AI agent — available 24/7, right here on this page.
                    </p>
                  </motion.div>

                  <p className="text-white/30 text-xs mt-4 tracking-wide">No forms. No waiting. Just answers.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
