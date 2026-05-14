'use client';

import { AppSidebar, DemoBanner } from '@/components/layout';
import { GiChart } from 'lucide-react';

const navItems = [
  {
    icon: <GiChart size={16} />,
    label: 'Campaign Overview',
    href: '/dashboard/campaigns',
  },
  {
    icon: <GiChart size={16} />,
    label: 'Client Reporting',
    href: '/dashboard/reports',
  },
  {
    icon: <GiChart size={16} />,
    label: 'Proof Pack Builder',
    href: '/dashboard/proof-packs',
  },
  {
    icon: <GiChart size={16} />,
    label: 'Settings',
    href: '/dashboard/settings',
  },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-zinc-50 pt-9">
      <AppSidebar items={navItems} projectName="Client Proof Pack Builder" />
      <div className="flex-1 ml-64 flex flex-col min-h-full">
        <DemoBanner />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}