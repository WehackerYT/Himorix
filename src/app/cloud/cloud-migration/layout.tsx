import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cloud Migration - Himorix | Cloud Infrastructure Migration Services',
  description: 'Expert cloud migration services for seamless transition to cloud infrastructure. Zero-downtime migration with data integrity assurance.',
};

export default function CloudMigrationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
