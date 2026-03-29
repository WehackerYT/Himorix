"use client";

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Search, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

function SearchContent() {
  const searchParams = useSearchParams();
  const q = searchParams.get('q') || '';
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  // Simple mock search for now — replace with real data/API later
  useEffect(() => {
    if (!q) return;
    setLoading(true);
    // Simulate search delay
    setTimeout(() => {
      const mockResults = [
        { title: 'About Himorix', href: '/about', description: 'Learn more about our company, mission, and values' },
        { title: 'Custom Software Development', href: '/services/custom-software', description: 'Tailored solutions for your business needs' },
        { title: 'Web Application Development', href: '/services/web-development', description: 'Modern, responsive web applications' },
        { title: 'Mobile App Development', href: '/services/mobile-apps', description: 'iOS and Android native applications' },
        { title: 'Cloud Solutions', href: '/cloud', description: 'Scalable cloud infrastructure and migration' },
        { title: 'Cybersecurity', href: '/security', description: 'Comprehensive security solutions' },
      ].filter(item => 
        item.title.toLowerCase().includes(q.toLowerCase()) ||
        item.description.toLowerCase().includes(q.toLowerCase())
      );
      setResults(mockResults);
      setLoading(false);
    }, 300);
  }, [q]);

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="pt-24 px-4 max-w-4xl mx-auto">
        {/* Back to home */}
        <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        {/* Search header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Search Results</h1>
          {q && <p className="text-gray-400">Showing results for: <span className="text-pink-400">"{q}"</span></p>}
        </div>

        {/* Loading */}
        {loading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-pink-500"></div>
          </div>
        )}

        {/* No results */}
        {!loading && q && results.length === 0 && (
          <div className="text-center py-12">
            <Search className="w-12 h-12 text-gray-600 mx-auto mb-4" />
            <p className="text-gray-400">No results found for "{q}"</p>
            <p className="text-gray-500 text-sm mt-2">Try different keywords or browse our services</p>
          </div>
        )}

        {/* Results list */}
        {!loading && results.length > 0 && (
          <div className="space-y-4">
            {results.map((item, idx) => (
              <Link key={idx} href={item.href} className="block p-6 bg-gray-900/50 border border-gray-800 rounded-lg hover:border-pink-500/50 transition-all hover:bg-gray-800/50">
                <h2 className="text-xl font-semibold text-pink-400 mb-2">{item.title}</h2>
                <p className="text-gray-400">{item.description}</p>
              </Link>
            ))}
          </div>
        )}

        {/* No query prompt */}
        {!q && (
          <div className="text-center py-12">
            <Search className="w-12 h-12 text-gray-600 mx-auto mb-4" />
            <p className="text-gray-400">Enter a search term to find services and solutions</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-pink-500"></div>
      </div>
    }>
      <SearchContent />
    </Suspense>
  );
}
