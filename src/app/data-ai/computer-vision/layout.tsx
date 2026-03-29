import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Computer Vision - Himorix | Visual AI & Image Recognition Solutions',
  description: 'Advanced computer vision solutions including image recognition, object detection, facial recognition, and visual analytics for automated image processing.',
};

export default function ComputerVisionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
