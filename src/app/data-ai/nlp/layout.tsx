import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Natural Language Processing - Himorix | NLP Solutions & Text Analytics',
  description: 'Advanced NLP solutions including text analysis, sentiment analysis, chatbots, and language understanding for automated text processing and insights.',
};

export default function NLPLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
