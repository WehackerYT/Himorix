import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cloud Storage - Himorix | Secure Cloud Storage Solutions',
  description: 'Scalable cloud storage solutions with automatic backups, multi-region replication, and enterprise-grade security.',
};

export default function CloudStorageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
