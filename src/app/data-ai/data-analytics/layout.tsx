import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Data Analytics - Himorix | Business Intelligence & Data Visualization',
  description: 'Comprehensive data analytics solutions including business intelligence dashboards, data visualization, and actionable insights for data-driven decision making.',
};

export default function DataAnalyticsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
