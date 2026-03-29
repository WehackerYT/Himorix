import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Machine Learning - Himorix | ML Solutions & Model Development',
  description: 'Expert machine learning solutions including custom model development, predictive analytics, and AI-powered automation for business intelligence.',
};

export default function MachineLearningLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
