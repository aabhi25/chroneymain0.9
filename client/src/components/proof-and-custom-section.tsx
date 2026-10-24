import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Rocket, TrendingUp, GraduationCap } from "lucide-react";

export default function ProofAndCustomSection() {
  return (
    <section className="py-20 sm:py-28 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-3"
        >
          <Link href="/case-studies/jaro-education">
            <div className="group relative h-full overflow-hidden rounded-3xl bg-gradient-to-br from-[#0C1445] via-[#2a1a5e] to-[#5b21b6] p-8 sm:p-12 cursor-pointer hover:shadow-2xl transition-all duration-500">
              <div className="absolute -top-20 -right-20 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl" aria-hidden="true" />
              <div className="relative">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs font-semibold uppercase tracking-wider mb-6">
                  <GraduationCap className="w-3.5 h-3.5" />
                  Case study · Education
                </div>
                <div className="flex items-end gap-3 mb-4">
                  <span className="text-7xl sm:text-8xl font-bold bg-gradient-to-r from-[#FF7A7A] to-[#C084FC] bg-clip-text text-transparent leading-none">5x</span>
                  <TrendingUp className="w-10 h-10 text-pink-300 mb-2" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">more leads for Jaro Education</h3>
                <p className="text-white/70 text-base sm:text-lg max-w-lg mb-8">
                  How one of India's leading online education companies multiplied its leads after switching on AI Chroney.
                </p>
                <span className="inline-flex items-center gap-2 text-white font-semibold">
                  Read the case study
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-span-2"
        >
          <Link href="/custom-ai-solutions">
            <div className="group h-full rounded-3xl border border-purple-100 bg-purple-50/60 p-8 sm:p-10 cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-500 flex flex-col">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FF4D4D] to-[#9333EA] flex items-center justify-center shadow-md mb-6">
                <Rocket className="w-7 h-7 text-white" />
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-purple-600 mb-2">Custom AI solutions</div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#0C1445] mb-3">
                Your own AI product. <span className="bg-gradient-to-r from-[#FF4D4D] to-[#9333EA] bg-clip-text text-transparent">MVP in 14 days.</span>
              </h3>
              <p className="text-gray-600 mb-8 flex-1">
                Need something beyond our agents? Our team designs and builds custom AI for your business and puts a working MVP in your hands in two weeks.
              </p>
              <span className="inline-flex items-center gap-2 text-[#0C1445] font-semibold">
                See how we build
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
