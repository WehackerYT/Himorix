import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Himorix | Get in Touch',
  description: 'Contact Himorix for custom software development, web development, mobile apps, and cloud solutions. Reach out to discuss your project requirements.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
