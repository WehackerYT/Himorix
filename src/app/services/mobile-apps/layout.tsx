import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mobile App Development - Himorix | iOS & Android Apps',
  description: 'Expert mobile app development services for iOS and Android. Native and cross-platform solutions with modern UI/UX design.',
};

export default function MobileAppsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
