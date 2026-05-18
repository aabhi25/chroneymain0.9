import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sparkles, Send, Palette } from "lucide-react";
import { motion } from "framer-motion";

export default function Playground() {
  const [startColor, setStartColor] = useState("#221c1b");
  const [endColor, setEndColor] = useState("#3b82f6");
  const [headerText, setHeaderText] = useState("Chroney");

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Helmet>
        <title>Widget Playground \u2013 Customize Your AI Chroney Chatbot Design</title>
        <meta name="description" content="Try AI Chroney's interactive playground. Customize chat widget colors, gradient styles, and header text. See live preview of how your chatbot will look on your website." />
        <link rel="canonical" href="https://aichroney.com/playground" />
      </Helmet>
      <Navigation />
      <main className="flex-1 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-100 to-pink-100 opacity-40 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-100 to-purple-100 opacity-40 blur-3xl rounded-full"></div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-purple-50 border border-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Palette className="w-4 h-4" />
              Design your widget
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0C1445] mb-4">
              Widget <span className="bg-gradient-to-r from-[#FF4D4D] to-[#9333EA] bg-clip-text text-transparent">Playground</span>
            </h1>
            <p className="text-lg text-gray-500 max-w-xl mx-auto">
              Customise your chatbot's look and feel. Preview it live before adding it to your site.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              <Card className="border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <h2 className="text-base font-bold text-[#0C1445] mb-4">Chat Header Text</h2>
                  <Input
                    type="text"
                    value={headerText}
                    onChange={(e) => setHeaderText(e.target.value.slice(0, 30))}
                    placeholder="Your company name"
                    maxLength={30}
                    className="mb-2 rounded-xl"
                  />
                  <p className="text-xs text-gray-400">{headerText.length}/30 characters</p>
                </CardContent>
              </Card>

              <Card className="border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <h2 className="text-base font-bold text-[#0C1445] mb-5">Gradient Colors</h2>
                  
                  <div className="space-y-5">
                    <div>
                      <Label htmlFor="startColor" className="text-sm font-medium text-gray-600 mb-2 block">
                        Start Color
                      </Label>
                      <div className="flex gap-3 items-center">
                        <div 
                          className="w-12 h-12 rounded-xl border-2 border-gray-100 cursor-pointer hover:border-gray-300 transition-colors shadow-sm"
                          style={{ backgroundColor: startColor }}
                          onClick={() => document.getElementById('startColor')?.click()}
                        />
                        <Input
                          id="startColor"
                          type="color"
                          value={startColor}
                          onChange={(e) => setStartColor(e.target.value)}
                          className="w-0 h-0 invisible absolute"
                        />
                        <Input
                          type="text"
                          value={startColor}
                          onChange={(e) => setStartColor(e.target.value)}
                          className="flex-1 font-mono text-sm rounded-xl"
                          placeholder="#221c1b"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="endColor" className="text-sm font-medium text-gray-600 mb-2 block">
                        End Color
                      </Label>
                      <div className="flex gap-3 items-center">
                        <div 
                          className="w-12 h-12 rounded-xl border-2 border-gray-100 cursor-pointer hover:border-gray-300 transition-colors shadow-sm"
                          style={{ backgroundColor: endColor }}
                          onClick={() => document.getElementById('endColor')?.click()}
                        />
                        <Input
                          id="endColor"
                          type="color"
                          value={endColor}
                          onChange={(e) => setEndColor(e.target.value)}
                          className="w-0 h-0 invisible absolute"
                        />
                        <Input
                          type="text"
                          value={endColor}
                          onChange={(e) => setEndColor(e.target.value)}
                          className="flex-1 font-mono text-sm rounded-xl"
                          placeholder="#3b82f6"
                        />
                      </div>
                    </div>

                    <div>
                      <Label className="text-sm font-medium text-gray-600 mb-2 block">Preview</Label>
                      <div 
                        className="h-14 rounded-xl shadow-inner"
                        style={{
                          background: `linear-gradient(to right, ${startColor}, ${endColor})`
                        }}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="lg:sticky lg:top-24 h-fit"
            >
              <div className="text-center mb-4">
                <span className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Live Preview</span>
              </div>

              <div className="flex justify-center">
                <div className="w-full max-w-sm bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                  <div 
                    className="p-4 text-white"
                    style={{
                      background: `linear-gradient(135deg, ${startColor}, ${endColor})`
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-bold text-lg">{headerText}</div>
                        <div className="text-xs flex items-center gap-1.5 opacity-90">
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          Online
                        </div>
                      </div>
                      <div className="text-white/60 rounded-lg p-1">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 h-72 overflow-y-auto bg-gray-50/50">
                    <div className="flex gap-2.5 mb-4">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm" style={{ background: `linear-gradient(135deg, ${startColor}, ${endColor})` }}>
                        <Sparkles className="w-4 h-4 text-white" />
                      </div>
                      <div className="bg-white rounded-2xl rounded-tl-sm p-3.5 max-w-[80%] shadow-sm border border-gray-50">
                        <p className="text-sm text-gray-700">Hi! How can I help you today?</p>
                        <p className="text-[10px] text-gray-400 mt-1.5">Just now</p>
                      </div>
                    </div>

                    <div className="flex gap-2 mb-4 justify-end">
                      <div 
                        className="text-white rounded-2xl rounded-tr-sm p-3.5 max-w-[80%] shadow-sm"
                        style={{
                          background: `linear-gradient(135deg, ${startColor}, ${endColor})`
                        }}
                      >
                        <p className="text-sm">Tell me about your products</p>
                        <p className="text-[10px] opacity-70 mt-1.5">Just now</p>
                      </div>
                    </div>

                    <div className="flex gap-2.5">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm" style={{ background: `linear-gradient(135deg, ${startColor}, ${endColor})` }}>
                        <Sparkles className="w-4 h-4 text-white" />
                      </div>
                      <div className="bg-white rounded-2xl rounded-tl-sm p-3.5 max-w-[80%] shadow-sm border border-gray-50">
                        <p className="text-sm text-gray-700">We offer AI agents for Website, WhatsApp, and Instagram. Which channel interests you?</p>
                        <p className="text-[10px] text-gray-400 mt-1.5">Just now</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 border-t border-gray-100 bg-white">
                    <div className="flex gap-2 items-center">
                      <input
                        type="text"
                        placeholder="Type a message..."
                        className="flex-1 border border-gray-200 rounded-full px-4 py-2.5 text-sm focus:outline-none focus:border-gray-300 bg-gray-50/50"
                        readOnly
                      />
                      <button 
                        className="w-10 h-10 rounded-full flex items-center justify-center text-white flex-shrink-0 shadow-sm"
                        style={{
                          background: `linear-gradient(135deg, ${startColor}, ${endColor})`
                        }}
                      >
                        <Send className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
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
