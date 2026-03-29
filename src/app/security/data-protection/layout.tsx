import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Data Protection - Himorix | Enterprise Data Security & Encryption Services',
  description: 'Comprehensive data protection solutions including encryption, DLP, access control, and data masking to secure sensitive information and ensure compliance.',
};

export default function DataProtectionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
