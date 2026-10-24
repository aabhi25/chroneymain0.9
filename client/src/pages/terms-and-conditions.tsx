import { Helmet } from "react-helmet-async";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Terms and Conditions | AI Chroney</title>
        <meta name="description" content="AI Chroney Terms and Conditions - Read our service agreement and usage terms." />
      </Helmet>
      <Navigation />
      
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-[#0C1445] mb-8">Terms and Conditions</h1>
          <p className="text-gray-600 mb-8">Last updated: January 2026</p>
          
          <div className="space-y-8 text-gray-700">
            <section>
              <h2 className="text-2xl font-semibold text-[#0C1445] mb-4">1. Acceptance of Terms</h2>
              <p className="leading-relaxed">
                By accessing or using AI Chroney's services, including Chroney Assist and AI Vista platforms, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#0C1445] mb-4">2. Description of Services</h2>
              <p className="leading-relaxed mb-4">AI Chroney provides:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Chroney Assist:</strong> An enterprise AI assistant for sales, support, and customer engagement, available as an embeddable chatbot widget.</li>
                <li><strong>AI Vista:</strong> A visual intelligence platform for product discovery, image-based search, and AI-powered content creation for e-commerce and luxury brands.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#0C1445] mb-4">3. Account Responsibilities</h2>
              <p className="leading-relaxed mb-4">When using our services, you agree to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate and complete registration information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Promptly notify us of any unauthorized access</li>
                <li>Be responsible for all activities under your account</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#0C1445] mb-4">4. Acceptable Use</h2>
              <p className="leading-relaxed mb-4">You agree not to use our services to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Violate any applicable laws or regulations</li>
                <li>Transmit harmful, offensive, or illegal content</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with or disrupt service operations</li>
                <li>Use automated systems to abuse our platform</li>
                <li>Engage in fraudulent or deceptive practices</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#0C1445] mb-4">5. Intellectual Property</h2>
              <p className="leading-relaxed">
                All content, features, and functionality of AI Chroney, including but not limited to text, graphics, logos, AI models, and software, are owned by AI Chroney and protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#0C1445] mb-4">6. Service Level and Availability</h2>
              <p className="leading-relaxed">
                We strive to maintain high availability of our services but do not guarantee uninterrupted access. We reserve the right to modify, suspend, or discontinue any aspect of our services with reasonable notice. Enterprise clients may have specific SLA terms outlined in their service agreements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#0C1445] mb-4">7. Payment Terms</h2>
              <p className="leading-relaxed mb-4">For paid services:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Fees are billed according to your selected plan</li>
                <li>All payments are non-refundable unless otherwise specified</li>
                <li>We may change pricing with 30 days' notice</li>
                <li>Late payments may result in service suspension</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#0C1445] mb-4">8. Limitation of Liability</h2>
              <p className="leading-relaxed">
                To the maximum extent permitted by law, AI Chroney shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services. Our total liability shall not exceed the amount paid by you in the twelve months preceding the claim.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#0C1445] mb-4">9. Indemnification</h2>
              <p className="leading-relaxed">
                You agree to indemnify and hold harmless AI Chroney, its affiliates, and their respective officers, directors, and employees from any claims, damages, or expenses arising from your use of our services or violation of these terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#0C1445] mb-4">10. Termination</h2>
              <p className="leading-relaxed">
                Either party may terminate the service agreement with 30 days' written notice. We may suspend or terminate your access immediately for violation of these terms. Upon termination, your right to use our services ceases, and we may delete your data after a reasonable retention period.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#0C1445] mb-4">11. Governing Law</h2>
              <p className="leading-relaxed">
                These Terms shall be governed by and construed in accordance with applicable laws. Any disputes shall be resolved through binding arbitration or in the courts of competent jurisdiction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#0C1445] mb-4">12. Changes to Terms</h2>
              <p className="leading-relaxed">
                We reserve the right to modify these Terms at any time. Material changes will be communicated via email or through our platform. Continued use of our services after changes constitutes acceptance of the updated terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#0C1445] mb-4">13. Contact Information</h2>
              <p className="leading-relaxed">
                For questions about these Terms and Conditions, please contact us at gopika@aichroney.com or through our Contact page.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
