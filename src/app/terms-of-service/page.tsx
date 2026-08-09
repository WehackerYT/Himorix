import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Terms of Service",
  description: "Read Himorix's terms of service to understand the terms and conditions for using our website and services.",
};

export default function TermsOfServicePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-[80px] bg-white">
        <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-black/40" />
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Terms of <span className="text-pink-500">Service</span>
            </h1>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-xl shadow-lg p-8 lg:p-12 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-600">
                  By accessing and using the Himorix Technologies website, you accept and agree to be bound by these Terms of Service. If you do not agree, please do not use our website.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Services</h2>
                <p className="text-gray-600">
                  Himorix provides software development, consulting, and related technology services. The specific scope of services will be defined in separate agreements or statements of work.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Intellectual Property</h2>
                <p className="text-gray-600">
                  All content on this website, including text, graphics, logos, and software, is the property of Himorix Technologies and is protected by intellectual property laws. Upon project completion and full payment, intellectual property for deliverables transfers to the client as specified in the project agreement.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Payment Terms</h2>
                <p className="text-gray-600">
                  Payment terms, including amounts, milestones, and due dates, are specified in individual project agreements. Invoices are due within 30 days unless otherwise agreed.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Confidentiality</h2>
                <p className="text-gray-600">
                  Both parties agree to keep confidential all proprietary information shared during the course of engagement. This obligation survives termination of any agreement.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Limitation of Liability</h2>
                <p className="text-gray-600">
                  Himorix shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services. Our total liability shall not exceed the amount paid for the specific service giving rise to the claim.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Termination</h2>
                <p className="text-gray-600">
                  Either party may terminate services with written notice as specified in the project agreement. Upon termination, all outstanding payments shall become due.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Governing Law</h2>
                <p className="text-gray-600">
                  These terms are governed by the laws of India. Any disputes shall be subject to the jurisdiction of courts in Jaipur, Rajasthan, India.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact</h2>
                <p className="text-gray-600">
                  For questions about these Terms, contact us at info@himorix.com or +91 9929171178.
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-400">Last updated: {new Date().getFullYear()}</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
