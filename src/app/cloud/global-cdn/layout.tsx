import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Global CDN - Himorix | Content Delivery Network Services',
  description: 'High-performance global CDN with edge locations, auto-scaling bandwidth, and real-time analytics for lightning-fast content delivery.',
};

export default function GlobalCDNLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
