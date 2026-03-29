import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Data & AI Solutions - Himorix | Artificial Intelligence Services',
  description: 'Advanced data analytics and AI solutions including machine learning, data science, and business intelligence to drive insights and innovation.',
};

export default function DataAILayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
