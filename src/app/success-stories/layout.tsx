import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Success Stories - Himorix | Client Case Studies & Testimonials',
  description: 'Explore our success stories and client case studies across various industries. See how Himorix has helped businesses achieve their digital transformation goals.',
};

export default function SuccessStoriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
