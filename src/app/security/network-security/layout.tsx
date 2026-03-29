import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Network Security - Himorix | Enterprise Network Protection Services',
  description: 'Advanced network security solutions including firewalls, IDS/IPS, VPN management, and network segmentation for comprehensive infrastructure protection.',
};

export default function NetworkSecurityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
