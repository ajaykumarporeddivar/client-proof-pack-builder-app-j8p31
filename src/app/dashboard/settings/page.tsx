'use client';

import { AppHeader } from '@/components/layout';
import { Card, Button, Input, Badge } from '@/components/ui';
import { DEMO_USER } from '@/lib/data';
import { useState } from 'react';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('profile');
  const [name, setName] = useState(DEMO_USER.name);
  const [email, setEmail] = useState(DEMO_USER.email);
  const [role, setRole] = useState(DEMO_USER.role);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="max-w-5xl mx-auto p-4">
      <AppHeader />
      <Card>
        <div className="flex justify-between mb-4">
          <h2 className="text-lg font-bold">Settings</h2>
        </div>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/3 px-4 mb-4">
            <Button
              variant="primary"
              onClick={() => setActiveTab('profile')}
              className={activeTab === 'profile' ? 'bg-zinc-900 text-white' : 'bg-zinc-200 text-zinc-600'}
            >
              Profile
            </Button>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-4">
            <Button
              variant="primary"
              onClick={() => setActiveTab('notifications')}
              className={activeTab === 'notifications' ? 'bg-zinc-900 text-white' : 'bg-zinc-200 text-zinc-600'}
            >
              Notifications
            </Button>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-4">
            <Button
              variant="primary"
              onClick={() => setActiveTab('appearance')}
              className={activeTab === 'appearance' ? 'bg-zinc-900 text-white' : 'bg-zinc-200 text-zinc-600'}
            >
              Appearance
            </Button>
          </div>
        </div>
        {activeTab === 'profile' && (
          <div>
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              className="mb-4"
            />
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="mb-4"
            />
            <Input
              type="text"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              placeholder="Role"
              className="mb-4"
            />
            <Button variant="primary" onClick={handleSave}>
              Save
            </Button>
            {saved && <Badge variant="success" className="ml-2">Saved!</Badge>}
          </div>
        )}
        {activeTab === 'notifications' && (
          <div>
            <div className="flex items-center mb-4">
              <Input type="checkbox" id="email" className="mr-2" />
              <label htmlFor="email" className="text-zinc-600">Email</label>
            </div>
            <div className="flex items-center mb-4">
              <Input type="checkbox" id="push" className="mr-2" />
              <label htmlFor="push" className="text-zinc-600">Push</label>
            </div>
            <div className="flex items-center mb-4">
              <Input type="checkbox" id="weekly" className="mr-2" />
              <label htmlFor="weekly" className="text-zinc-600">Weekly Digest</label>
            </div>
          </div>
        )}
        {activeTab === 'appearance' && (
          <div>
            <div className="flex items-center mb-4">
              <Button variant="primary" className="mr-2">Light</Button>
              <Button variant="primary" className="mr-2">Dark</Button>
              <Button variant="primary" className="mr-2">System</Button>
            </div>
            <div className="flex items-center mb-4">
              <Input type="radio" id="en" className="mr-2" />
              <label htmlFor="en" className="text-zinc-600">English</label>
            </div>
            <div className="flex items-center mb-4">
              <Input type="radio" id="fr" className="mr-2" />
              <label htmlFor="fr" className="text-zinc-600">French</label>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
}