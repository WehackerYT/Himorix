import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Sitemap",
  description: "Navigate through all pages on the Himorix website with our comprehensive sitemap.",
};

const sections = [
  {
    title: "Main Pages",
    links: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Contact Us", href: "/contact" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "All Services", href: "/services" },
      { label: "Custom Software Development", href: "/services/custom-software" },
      { label: "Web Application Development", href: "/services/web-development" },
      { label: "Mobile App Development", href: "/services/mobile-apps" },
      { label: "Cloud Solutions", href: "/services/cloud-solutions" },
      { label: "Database Solutions", href: "/services/database" },
      { label: "Cybersecurity", href: "/services/security" },
      { label: "UI/UX Design", href: "/services/ui-ux" },
      { label: "Data Analytics", href: "/services/analytics" },
      { label: "API Development", href: "/services/api-development" },
    ],
  },
  {
    title: "Cloud",
    links: [
      { label: "Cloud Overview", href: "/cloud" },
      { label: "Cloud Migration", href: "/cloud/cloud-migration" },
      { label: "Cloud Storage", href: "/cloud/cloud-storage" },
      { label: "Cloud Security", href: "/cloud/cloud-security" },
      { label: "Global CDN", href: "/cloud/global-cdn" },
    ],
  },
  {
    title: "Data & AI",
    links: [
      { label: "Data & AI Overview", href: "/data-ai" },
      { label: "Machine Learning", href: "/data-ai/machine-learning" },
      { label: "Data Analytics", href: "/data-ai/data-analytics" },
      { label: "NLP", href: "/data-ai/nlp" },
      { label: "Computer Vision", href: "/data-ai/computer-vision" },
    ],
  },
  {
    title: "Security",
    links: [
      { label: "Security Overview", href: "/security" },
      { label: "Network Security", href: "/security/network-security" },
      { label: "Data Protection", href: "/security/data-protection" },
      { label: "Identity Management", href: "/security/identity-management" },
      { label: "Security Testing", href: "/security/security-testing" },
      { label: "Compliance Management", href: "/security/compliance-management" },
    ],
  },
  {
    title: "Other",
    links: [
      { label: "Industries", href: "/industries" },
      { label: "Technologies", href: "/technologies" },
      { label: "On-Demand Developer", href: "/on-demand-developer" },
      { label: "Success Stories", href: "/success-stories" },
      { label: "Login", href: "/auth" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-of-service" },
    ],
  },
];

export default function SitemapPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-[80px] bg-white">
        <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-black/40" />
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Site<span className="text-pink-500">map</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A complete map of all pages on our website
            </p>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sections.map((section) => (
                <div key={section.title} className="bg-white rounded-xl shadow-lg p-6">
                  <h2 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                    {section.title}
                  </h2>
                  <ul className="space-y-2">
                    {section.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-gray-600 hover:text-pink-600 transition-colors text-sm"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
