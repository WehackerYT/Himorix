import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Compliance Management - Himorix | Regulatory Compliance & Audit Services',
  description: 'Comprehensive compliance management services including GDPR, HIPAA, SOC 2, PCI DSS compliance with automated monitoring and audit trails.',
};

export default function ComplianceManagementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
