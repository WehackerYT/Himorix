import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cybersecurity Solutions - Himorix | Enterprise Security Services',
  description: 'Comprehensive cybersecurity solutions including network security, threat protection, compliance management, and 24/7 security monitoring for enterprise protection.',
};

export default function SecurityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
