import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Portfolio",
  description: "Explore Himorix's portfolio of successful projects across various industries including custom software, web apps, mobile apps, and cloud solutions.",
};

const projects = [
  { title: "Enterprise CRM Platform", category: "Custom Software", description: "A comprehensive CRM solution for a leading enterprise, streamlining sales and customer management.", tags: ["React", "Node.js", "PostgreSQL"] },
  { title: "Healthcare Management System", category: "Web Application", description: "End-to-end healthcare platform managing patient records, appointments, and billing.", tags: ["Next.js", "Python", "AWS"] },
  { title: "E-Commerce Mobile App", category: "Mobile App", description: "Cross-platform mobile application with real-time inventory and secure payments.", tags: ["React Native", "Firebase", "Stripe"] },
  { title: "Cloud Migration & DevOps", category: "Cloud Solutions", description: "Migrated legacy infrastructure to AWS with automated CI/CD pipelines.", tags: ["AWS", "Docker", "Kubernetes"] },
  { title: "FinTech Analytics Dashboard", category: "Data Analytics", description: "Real-time financial analytics dashboard with predictive insights.", tags: ["Vue.js", "Python", "MongoDB"] },
  { title: "Aviation Booking System", category: "Web Application", description: "Online flight booking platform with real-time availability and pricing.", tags: ["React", "Java", "Redis"] },
];

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-[80px] bg-white">
        {/* Hero */}
        <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-black/40" />
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Our <span className="text-pink-500">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Showcasing our successful projects and the impact we've delivered
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div key={project.title} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="h-48 bg-gradient-to-br from-pink-500/20 to-purple-600/20 flex items-center justify-center">
                    <span className="text-6xl font-black text-pink-600/30">{project.category.charAt(0)}</span>
                  </div>
                  <div className="p-6">
                    <span className="inline-block text-xs font-semibold text-pink-600 bg-pink-50 px-3 py-1 rounded-full mb-3">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-pink-600 to-pink-700">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Want to Be Our Next Success Story?
            </h2>
            <p className="text-xl text-pink-100 mb-8 max-w-3xl mx-auto">
              Let's build something amazing together
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center bg-white text-pink-600 font-bold py-4 px-8 rounded-lg hover:bg-pink-50 transition-colors"
            >
              Start Your Project <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
