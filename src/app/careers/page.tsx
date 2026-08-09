import Link from "next/link";
import { MapPin, Briefcase, ArrowRight, Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Careers",
  description: "Join Himorix and build the future of technology. Explore open positions and career opportunities.",
};

const jobs = [
  { title: "Senior Full Stack Developer", department: "Engineering", location: "Jaipur, India", type: "Full-time" },
  { title: "Mobile App Developer (React Native)", department: "Engineering", location: "Remote", type: "Full-time" },
  { title: "UI/UX Designer", department: "Design", location: "Jaipur, India", type: "Full-time" },
  { title: "Cloud DevOps Engineer", department: "Infrastructure", location: "Remote", type: "Full-time" },
  { title: "Data Scientist", department: "Data & AI", location: "Jaipur, India", type: "Full-time" },
  { title: "Business Development Manager", department: "Sales", location: "Jaipur, India", type: "Full-time" },
];

export default function CareersPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-[80px] bg-white">
        {/* Hero */}
        <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-black/40" />
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Join <span className="text-pink-500">Himorix</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Build the future of technology with a team that values innovation, creativity, and excellence
            </p>
          </div>
        </section>

        {/* Why Join Us */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Work With Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Innovation First", desc: "Work with cutting-edge technologies and modern tech stacks" },
                { title: "Growth Opportunities", desc: "Continuous learning with training budgets and mentorship" },
                { title: "Flexible Work", desc: "Hybrid and remote options for a healthy work-life balance" },
                { title: "Great Culture", desc: "Collaborative, inclusive, and fun team environment" },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-xl shadow-lg p-6 text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Open Positions</h2>
            <div className="space-y-4">
              {jobs.map((job) => (
                <div key={job.title} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1"><Briefcase className="w-4 h-4" /> {job.department}</span>
                      <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {job.location}</span>
                      <span className="text-pink-600 font-medium">{job.type}</span>
                    </div>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors whitespace-nowrap"
                  >
                    Apply Now <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-pink-600 to-pink-700">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Don't See the Right Role?</h2>
            <p className="text-xl text-pink-100 mb-8 max-w-3xl mx-auto">
              Send us your resume and we'll reach out when a matching position opens up
            </p>
            <a
              href="mailto:info@himorix.com"
              className="inline-flex items-center bg-white text-pink-600 font-bold py-4 px-8 rounded-lg hover:bg-pink-50 transition-colors"
            >
              <Mail className="w-5 h-5 mr-2" /> Email Us Your Resume
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
