'use client'
import { useParams } from 'next/navigation'
import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent, Badge, Button, Input } from '@/components/ui'
import { AppHeader } from '@/components/layout'
import { campaigns } from '@/lib/data'

export default function CampaignsPage() {
  const params = useParams()
  const slug = (params.feature as string) ?? ''
  const [search, setSearch] = useState('')
  const [selected, setSelected] = useState<string | null>(null)

  if (slug === 'campaigns') {
    return (
      <div className="p-6 space-y-6">
        <AppHeader title="Campaigns" subtitle="Manage your campaigns" actions={<Button size="sm">+ New Campaign</Button>} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {campaigns.map((campaign) => (
            <Card key={campaign.id}>
              <CardHeader>
                <CardTitle>{campaign.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{campaign.description}</p>
                <Badge variant="primary">{campaign.status}</Badge>
              </CardContent>
            </Card>
          ))}
        </div>
        <Input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search campaigns"
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