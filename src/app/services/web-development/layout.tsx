import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Web Development - Himorix | Modern Web Applications',
  description: 'Professional web development services including responsive websites, web applications, and e-commerce solutions using modern technologies.',
};

export default function WebDevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
