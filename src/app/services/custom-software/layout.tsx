import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Custom Software Development - Himorix | Bespoke Software Solutions',
  description: 'Expert custom software development services tailored to your business needs. Build scalable, secure, and innovative software solutions.',
};

export default function CustomSoftwareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
