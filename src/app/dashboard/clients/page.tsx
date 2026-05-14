'use client'
import { useParams } from 'next/navigation'
import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent, Badge, Button, Input } from '@/components/ui'
import { AppHeader } from '@/components/layout'
import { clients } from '@/lib/data'

export default function ClientsPage() {
  const params = useParams()
  const slug = (params.feature as string) ?? ''
  const [search, setSearch] = useState('')
  const [selected, setSelected] = useState<string | null>(null)

  if (slug === 'clients') {
    return (
      <div className="p-6 space-y-6">
        <AppHeader title="Clients" subtitle="Manage your clients" actions={<Button size="sm">+ New Client</Button>} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {clients.map((client) => (
            <Card key={client.id}>
              <CardHeader>
                <CardTitle>{client.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{client.email}</p>
                <Badge variant="primary">{client.status}</Badge>
              </CardContent>
            </Card>
          ))}
        </div>
        <Input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search clients"
          className="w-full"
        />
      </div>
    )
  }

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* 3 feature cards with Open → links */}
    </div>
  )
}