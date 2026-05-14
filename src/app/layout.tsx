import { Inter } from 'next/font/google';
import DemoBanner from '@/components/layout';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Client Proof Pack Builder — Simplify Client Reporting',
  description: 'Streamline your client reporting with our intuitive proof pack builder',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-zinc-50 antialiased">
        <DemoBanner />
        <div className="pt-9">{children}</div>
      </body>
    </html>
  );
}