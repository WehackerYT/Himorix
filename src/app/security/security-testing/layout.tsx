import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Security Testing - Himorix | Penetration Testing & Vulnerability Assessment',
  description: 'Comprehensive security testing services including penetration testing, vulnerability scanning, security audits, and code review for enterprise security.',
};

export default function SecurityTestingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
