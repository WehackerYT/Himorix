import Link from "next/link";
import { ArrowRight, Code, Server, Cloud, Database, Smartphone, Shield, Cpu } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { TechLogos } from "@/components/TechLogos";

export const metadata = {
  title: "Technologies",
  description: "Explore the technologies and tech stack Himorix uses to build modern, scalable, and secure software solutions.",
};

const categories = [
  {
    title: "Frontend",
    icon: Code,
    techs: ["React", "Next.js", "Vue.js", "Angular", "TypeScript", "TailwindCSS"],
  },
  {
    title: "Backend",
    icon: Server,
    techs: ["Node.js", "Python", "Java", "Go", ".NET", "PHP"],
  },
  {
    title: "Mobile",
    icon: Smartphone,
    techs: ["React Native", "Flutter", "Swift", "Kotlin"],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    techs: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Jenkins"],
  },
  {
    title: "Databases",
    icon: Database,
    techs: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Elasticsearch", "DynamoDB"],
  },
  {
    title: "Security & AI",
    icon: Shield,
    techs: ["OAuth 2.0", "JWT", "TensorFlow", "PyTorch", "OpenAI", "LangChain"],
  },
];

export default function TechnologiesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-[80px] bg-white">
        {/* Hero */}
        <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-black/40" />
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Our <span className="text-pink-500">Technologies</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Powered by modern tech stacks for robust, scalable, and future-ready solutions
            </p>
          </div>
        </section>

        {/* Tech Categories */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((cat) => (
                <div key={cat.title} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                    <cat.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{cat.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {cat.techs.map((tech) => (
                      <span key={tech} className="text-sm text-gray-700 bg-gray-100 px-3 py-1 rounded-full">{tech}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Logos */}
        <section className="py-20 bg-white">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Tools We Work With</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {[
                { logo: TechLogos.React, name: "React" },
                { logo: TechLogos.Node, name: "Node.js" },
                { logo: TechLogos.Python, name: "Python" },
                { logo: TechLogos.Java, name: "Java" },
                { logo: TechLogos.DotNet, name: ".NET" },
                { logo: TechLogos.AWS, name: "AWS" },
                { logo: TechLogos.Azure, name: "Azure" },
                { logo: TechLogos.Docker, name: "Docker" },
                { logo: TechLogos.Kubernetes, name: "Kubernetes" },
                { logo: TechLogos.MongoDB, name: "MongoDB" },
                { logo: TechLogos.PostgreSQL, name: "PostgreSQL" },
                { logo: TechLogos.Redis, name: "Redis" },
              ].map((tech) => (
                <div key={tech.name} className="text-center">
                  <div className="w-20 h-20 bg-gray-50 rounded-lg shadow-md flex items-center justify-center mx-auto mb-3">
                    <tech.logo />
                  </div>
                  <span className="text-sm font-medium text-gray-700">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-pink-600 to-pink-700">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Build With the Best Technologies
            </h2>
            <p className="text-xl text-pink-100 mb-8 max-w-3xl mx-auto">
              Let our experts help you choose the right tech stack for your project
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center bg-white text-pink-600 font-bold py-4 px-8 rounded-lg hover:bg-pink-50 transition-colors"
            >
              Get Consultation <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
