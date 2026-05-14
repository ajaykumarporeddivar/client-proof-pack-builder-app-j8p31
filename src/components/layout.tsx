'use client';

import DemoBanner from './DemoBanner';
import { AppSidebar, AppHeader } from './AppLayout';
import DEMO_USER from '@/lib/data';

interface SidebarProps {
  items: { icon: React.ReactNode; label: string; href: string }[];
  projectName: string;
}

export function AppSidebar({ items, projectName }: SidebarProps) {
  return (
    <aside
      className="bg-zinc-900 w-64 fixed left-0 top-9 bottom-0 flex flex-col"
      aria-label="Sidebar"
    >
      <div className="p-4 border-b border-zinc-800">
        <h2 className="text-white font-bold">{projectName}</h2>
      </div>
      <nav className="flex-1">
        {items.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="flex items-center py-2 px-4 hover:bg-zinc-800"
          >
            {item.icon}
            <span className="ml-2 text-zinc-400">{item.label}</span>
          </a>
        ))}
      </nav>
      <div className="p-4 border-t border-zinc-800">
        <div className="flex items-center">
          <img src={DEMO_USER.avatar} alt="Avatar" className="w-8 h-8 rounded-full" />
          <span className="ml-2 text-zinc-400">{DEMO_USER.name}</span>
          <span className="ml-2 text-zinc-400">Demo Mode</span>
        </div>
      </div>
    </aside>
  );
}

// Rest of the layout components...
export { AppSidebar, AppHeader, DemoBanner };