import { Helmet } from "react-helmet-async";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Privacy Policy | AI Chroney</title>
        <meta name="description" content="AI Chroney Privacy Policy - Learn how we collect, use, and protect your data." />
      </Helmet>
      <Navigation />
      
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-[#0C1445] mb-8">Privacy Policy</h1>
          <p className="text-gray-600 mb-8">Last updated: January 2026</p>
          
          <div className="space-y-8 text-gray-700">
            <section>
              <h2 className="text-2xl font-semibold text-[#0C1445] mb-4">1. Introduction</h2>
              <p className="leading-relaxed">
                AI Chroney ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI chatbot widget platform, including Chroney Assist and AI Vista products.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#0C1445] mb-4">2. Information We Collect</h2>
              <p className="leading-relaxed mb-4">We may collect information about you in various ways:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Personal Data:</strong> Name, email address, phone number, and company information you provide when contacting us or signing up for our services.</li>
                <li><strong>Usage Data:</strong> Information about how you interact with our chatbot widgets, including conversation logs, response times, and user preferences.</li>
                <li><strong>Technical Data:</strong> IP address, browser type, device information, and cookies to improve service performance.</li>
                <li><strong>Business Data:</strong> Information about your business requirements when configuring our AI assistants.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#0C1445] mb-4">3. How We Use Your Information</h2>
              <p className="leading-relaxed mb-4">We use the collected information to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide, operate, and maintain our AI chatbot services</li>
                <li>Improve and personalize your experience with Chroney Assist and AI Vista</li>
                <li>Train and enhance our AI models for better customer interactions</li>
                <li>Communicate with you about updates, promotions, and support</li>
                <li>Analyze usage patterns to improve our products</li>
                <li>Ensure compliance with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#0C1445] mb-4">4. Data Sharing and Disclosure</h2>
              <p className="leading-relaxed mb-4">We may share your information with:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Service Providers:</strong> Third-party vendors who assist in operating our platform (hosting, analytics, AI processing).</li>
                <li><strong>Business Partners:</strong> With your consent, for integrated services.</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights.</li>
              </ul>
              <p className="leading-relaxed mt-4">We do not sell your personal information to third parties.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#0C1445] mb-4">5. Data Security</h2>
              <p className="leading-relaxed">
                We implement industry-standard security measures including encryption, secure data centers, and access controls to protect your information. Our infrastructure is SOC 2 compliant, and we regularly audit our security practices.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#0C1445] mb-4">6. Data Retention</h2>
              <p className="leading-relaxed">
                We retain your data only as long as necessary to fulfill the purposes outlined in this policy or as required by law. Conversation data is typically retained for 90 days unless otherwise configured by enterprise clients.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#0C1445] mb-4">7. Your Rights</h2>
              <p className="leading-relaxed mb-4">Depending on your location, you may have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access and receive a copy of your personal data</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to or restrict data processing</li>
                <li>Data portability</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#0C1445] mb-4">8. Cookies and Tracking</h2>
              <p className="leading-relaxed">
                We use cookies and similar tracking technologies to enhance your experience. You can control cookie preferences through your browser settings. Essential cookies are required for our services to function properly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#0C1445] mb-4">9. Contact Us</h2>
              <p className="leading-relaxed">
                If you have questions about this Privacy Policy or wish to exercise your rights, please contact us at hello@aichroney.com or through our Contact page.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
