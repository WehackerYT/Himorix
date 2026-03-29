import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cloud Solutions - Himorix | Cloud Computing Services',
  description: 'Expert cloud solutions including cloud migration, infrastructure, and managed services. Transform your business with scalable cloud solutions.',
};

export default function CloudLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
