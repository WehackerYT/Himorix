import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy",
  description: "Read Himorix's privacy policy to understand how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-[80px] bg-white">
        <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-black/40" />
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Privacy <span className="text-pink-500">Policy</span>
            </h1>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-xl shadow-lg p-8 lg:p-12 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
                <p className="text-gray-600">
                  Himorix Technologies ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and disclose your personal information when you use our website and services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
                <p className="text-gray-600 mb-2">We may collect the following types of information:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Contact information: name, email address, phone number, company name</li>
                  <li>Project details: information you provide about your project requirements</li>
                  <li>Technical data: IP address, browser type, and usage data</li>
                  <li>Communication records: emails, messages, and form submissions</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>To provide and improve our services</li>
                  <li>To respond to your inquiries and provide customer support</li>
                  <li>To send you updates and newsletters (with your consent)</li>
                  <li>To analyze website usage and improve user experience</li>
                  <li>To comply with legal obligations</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Security</h2>
                <p className="text-gray-600">
                  We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, loss, or misuse. However, no method of transmission over the internet is 100% secure.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Cookies</h2>
                <p className="text-gray-600">
                  Our website may use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings, though some features may not function properly.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Third-Party Services</h2>
                <p className="text-gray-600">
                  We may use third-party services (e.g., analytics, hosting) that have their own privacy policies. We are not responsible for the privacy practices of these third parties.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Your Rights</h2>
                <p className="text-gray-600">
                  You have the right to access, correct, or delete your personal information. To exercise these rights, please contact us at info@himorix.com.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Contact Us</h2>
                <p className="text-gray-600">
                  If you have any questions about this Privacy Policy, please contact us at:<br />
                  Email: info@himorix.com
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
