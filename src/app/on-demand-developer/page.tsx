import Link from "next/link";
import { ArrowRight, Code, Clock, Shield, Users, Zap } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "On-Demand Developer",
  description: "Hire dedicated developers from Himorix on-demand. Scale your team with experienced full-stack, mobile, and cloud developers.",
};

export default function OnDemandDeveloperPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-[80px] bg-white">
        {/* Hero */}
        <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-black/40" />
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              On-Demand <span className="text-pink-500">Developer</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Scale your team with experienced developers, available when you need them
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center bg-pink-600 hover:bg-pink-700 text-white font-bold py-4 px-8 rounded-lg transition-colors"
            >
              Hire a Developer <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Code, title: "Expert Developers", desc: "Access to senior-level developers across multiple tech stacks" },
                { icon: Clock, title: "Flexible Engagement", desc: "Hire hourly, part-time, or full-time based on your needs" },
                { icon: Shield, title: "Quality Guaranteed", desc: "All developers are vetted and experienced professionals" },
                { icon: Users, title: "Team Scaling", desc: "Quickly scale up or down as your project demands change" },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-xl shadow-lg p-8 text-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Available Roles */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Available Developer Roles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Full Stack Developer",
                "Frontend Developer (React/Next.js)",
                "Backend Developer (Node.js/Python/Java)",
                "Mobile App Developer (React Native/Flutter)",
                "DevOps Engineer (AWS/Azure/Docker)",
                "UI/UX Designer",
                "Data Scientist / ML Engineer",
                "QA & Automation Engineer",
              ].map((role) => (
                <div key={role} className="flex items-center gap-3 bg-gray-50 rounded-lg p-4">
                  <Zap className="w-5 h-5 text-pink-600 flex-shrink-0" />
                  <span className="font-medium text-gray-900">{role}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-pink-600 to-pink-700">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Scale Your Team?
            </h2>
            <p className="text-xl text-pink-100 mb-8 max-w-3xl mx-auto">
              Get in touch and we'll match you with the right developer
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center bg-white text-pink-600 font-bold py-4 px-8 rounded-lg hover:bg-pink-50 transition-colors"
            >
              Contact Us <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
