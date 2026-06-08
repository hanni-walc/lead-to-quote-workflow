
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Lead-to-Quote Workflow',
  description: 'Turn inquiries into quotes fast with a polished, mobile-first SaaS workflow.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
