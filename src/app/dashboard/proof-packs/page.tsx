'use client'
import { useParams } from 'next/navigation'
import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent, Badge, Button, Input } from '@/components/ui'
import { AppHeader } from '@/components/layout'
import { proofPacks } from '@/lib/data'

export default function ProofPacksPage() {
  const params = useParams()
  const slug = (params.feature as string) ?? ''
  const [search, setSearch] = useState('')
  const [selected, setSelected] = useState<string | null>(null)

  if (slug === 'proof-packs') {
    return (
      <div className="p-6 space-y-6">
        <AppHeader title="Proof Packs" subtitle="Manage your proof packs" actions={<Button size="sm">+ New Proof Pack</Button>} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {proofPacks.map((pack) => (
            <Card key={pack.id}>
              <CardHeader>
                <CardTitle>{pack.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{pack.description}</p>
                <Badge variant="primary">{pack.status}</Badge>
              </CardContent>
            </Card>
          ))}
        </div>
        <Input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search proof packs"
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