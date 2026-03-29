import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cloud Security - Himorix | Enterprise Cloud Security Services',
  description: 'Comprehensive cloud security solutions including threat protection, compliance management, and 24/7 monitoring for your cloud infrastructure.',
};

export default function CloudSecurityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
