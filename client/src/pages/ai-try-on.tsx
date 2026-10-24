import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import TryOnSlider from "@/components/try-on-slider";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Shirt, Camera, Sparkles, Share2, ShoppingBag, Heart, MessageCircle, Gem, Watch, ToggleRight, Globe } from "lucide-react";
import productImage from "@assets/stock_images/tryon_product_black_hoodie.jpg";

const steps = [
  { icon: Shirt, title: "Shopper taps \"Try it on\"", text: "Right on the product card inside the AI chat, while they're browsing your catalogue." },
  { icon: Camera, title: "They upload a photo", text: "A selfie or a photo from their gallery. No app, no sign-up." },
  { icon: Sparkles, title: "They see it on themselves", text: "In moments, AI shows them wearing the product. They can download it or share it with friends." },
];

const benefits = [
  { icon: Heart, title: "Buy with confidence", text: "Shoppers stop guessing how it will look. Seeing it on themselves removes the biggest doubt in online fashion." },
  { icon: Share2, title: "Free word of mouth", text: "\"What do you think?\" Shoppers share their try-on photo with friends and family, bringing new visitors to your store." },
  { icon: MessageCircle, title: "Longer conversations", text: "Trying on one product leads to the next. The AI agent suggests matching items and keeps the shopper engaged." },
  { icon: ShoppingBag, title: "From try-on to cart", text: "The product, price and \"Add to cart\" are right next to the result, so the next step is one tap away." },
];

const idealFor = [
  { icon: Shirt, title: "Fashion & apparel", color: "bg-purple-100 text-purple-700" },
  { icon: Sparkles, title: "Ethnic & occasion wear", color: "bg-pink-100 text-pink-700" },
  { icon: Gem, title: "Jewellery", color: "bg-amber-100 text-amber-700" },
  { icon: Watch, title: "Accessories", color: "bg-indigo-100 text-indigo-700" },
  { icon: ShoppingBag, title: "D2C & Shopify brands", color: "bg-emerald-100 text-emerald-700" },
];

function ChatProductCard() {
  return (
    <div className="w-full max-w-[320px] bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
      <div className="bg-gradient-to-r from-[#FF4D4D] to-[#9333EA] px-4 py-3 text-white text-sm font-semibold">Chroney</div>
      <div className="p-4 space-y-3 bg-gray-50">
        <div className="bg-white rounded-2xl rounded-tl-sm shadow-sm px-4 py-3 text-sm text-gray-700 max-w-[85%]">
          Here's our bestselling hoodie. Want to see how it looks on you?
        </div>
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100">
          <img src={productImage} alt="Black hoodie product photo" className="w-full aspect-square object-cover" />
          <div className="p-3">
            <p className="text-sm font-semibold text-[#0C1445]">Classic Black Hoodie</p>
            <p className="text-sm text-[#9333EA] font-semibold mb-3">$49</p>
            <div className="grid grid-cols-2 gap-2">
              <span className="text-center text-xs font-semibold rounded-full py-2 bg-gradient-to-r from-[#FF4D4D] to-[#9333EA] text-white">✨ Try it on</span>
              <span className="text-center text-xs font-semibold rounded-full py-2 border border-gray-200 text-gray-700">Add to cart</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AITryOn() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Helmet>
        <title>AI Virtual Try-On for Fashion Brands – Let Shoppers See It On Themselves | AI Chroney</title>
        <meta name="description" content="AI Chroney's Virtual Try-On lets shoppers upload a photo and see your clothes and accessories on themselves, right inside the AI chat. Built for fashion, jewellery and Shopify brands." />
        <link rel="canonical" href="https://aichroney.com/products/ai-try-on" />
      </Helmet>
      <Navigation />
      <main>
        <section className="relative pt-16 pb-20 sm:pt-24 sm:pb-28 px-4 overflow-hidden">
          <div className="absolute top-10 left-10 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40" />
          <div className="absolute bottom-0 right-10 w-80 h-80 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40" />
          <div className="max-w-6xl mx-auto relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
              <div className="inline-flex items-center gap-2 bg-purple-50 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-purple-700 mb-6 border border-purple-100">
                <Shirt className="w-3.5 h-3.5" />
                AI Virtual Try-On
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#0C1445] mb-6 leading-tight">
                Let shoppers <span className="bg-gradient-to-r from-[#FF4D4D] to-[#9333EA] bg-clip-text text-transparent">see it on themselves</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-xl">
                Shoppers upload a photo and instantly see your clothes and accessories on themselves, right inside the AI chat on your website. Less guessing, more buying.
              </p>
              <a href="https://wa.me/919999080825" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-gradient-to-r from-[#FF4D4D] to-[#9333EA] hover:opacity-90 text-white px-10 py-6 rounded-full shadow-lg text-base">
                  See it on your products
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="flex justify-center md:justify-end">
              <TryOnSlider />
            </motion.div>
          </div>
        </section>

        <section className="py-20 sm:py-28 px-4 bg-gradient-to-b from-white to-purple-50/50">
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0C1445] mb-4">
                How it <span className="bg-gradient-to-r from-[#FF4D4D] to-[#9333EA] bg-clip-text text-transparent">works</span>
              </h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">Three taps, inside the chat your shoppers are already using.</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center">
                <ChatProductCard />
              </div>
              <ol className="space-y-6">
                {steps.map((step, index) => (
                  <motion.li
                    key={step.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.12 }}
                    className="flex gap-5 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FF4D4D] to-[#9333EA] flex items-center justify-center shadow-md">
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Step {index + 1}</div>
                      <h3 className="font-semibold text-[#0C1445] mb-1">{step.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{step.text}</p>
                    </div>
                  </motion.li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28 px-4 bg-[#0C1445] relative overflow-hidden">
          <div className="absolute -top-20 right-0 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl" />
          <div className="max-w-6xl mx-auto relative">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">Why fashion brands love it</h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="rounded-2xl bg-white/5 border border-white/10 p-7"
                >
                  <item.icon className="w-7 h-7 text-pink-300 mb-4" />
                  <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-24 px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0C1445] mb-4">Part of your AI Website Agent</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Try-On isn't a separate app to install. Switch it on in your AI Chroney settings, and your Website Agent offers it on every product it recommends, including products synced from Shopify.
              </p>
              <Link href="/products/chroney-assist" className="inline-flex items-center gap-2 font-semibold text-[#9333EA] hover:gap-3 transition-all">
                Explore the Website Agent <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {[
                { icon: ToggleRight, text: "Turn it on with one switch in your settings" },
                { icon: Globe, text: "Works in the chat widget on your website" },
                { icon: ShoppingBag, text: "Uses your existing product photos" },
              ].map(item => (
                <div key={item.text} className="flex items-center gap-4 rounded-2xl border border-purple-100 bg-purple-50/50 p-5">
                  <item.icon className="w-6 h-6 text-[#9333EA] flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-center text-3xl sm:text-4xl font-bold text-[#0C1445] mb-10">
              Ideal <span className="bg-gradient-to-r from-[#FF4D4D] to-[#9333EA] bg-clip-text text-transparent">For</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {idealFor.map(item => (
                <div key={item.title} className={`flex items-center gap-3 ${item.color} px-6 py-4 rounded-full shadow-md`}>
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 sm:py-28 px-4 bg-gradient-to-r from-[#FF4D4D] to-[#9333EA]">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">See your products on your shoppers</h2>
            <p className="text-xl text-white/90 mb-10">We'll set up a live Try-On demo with your own catalogue.</p>
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
