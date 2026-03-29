import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Identity Management - Himorix | IAM & Access Control Solutions',
  description: 'Advanced identity and access management solutions including SSO, MFA, role-based access control, and privileged access management for enterprise security.',
};

export default function IdentityManagementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
