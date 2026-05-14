'use client';

import {
  STATS,
  MOCK_CLIENTS,
  RECENT_ACTIVITY,
  DEMO_USER,
  CHART_DATA,
  SPARKLINE_DATA,
  formatDate,
  formatCurrency,
} from '@/lib/data';
import {
  StatCard,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Badge,
  Avatar,
  Table,
  Button,
} from '@/components/ui';
import { BarChart, Sparkline } from '@/components/charts';
import { AppHeader } from '@/components/layout';

export default function DashboardPage() {
  const [selectedRow, setSelectedRow] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');

  const kpiCards = [
    {
      title: 'Total Revenue',
      value: formatCurrency(STATS.revenue),
      sparkline: SPARKLINE_DATA.revenue,
    },
    {
      title: 'Active Clients',
      value: MOCK_CLIENTS.length.toString(),
      sparkline: SPARKLINE_DATA.clients,
    },
    {
      title: 'Campaigns',
      value: CHART_DATA.campaigns.length.toString(),
      sparkline: SPARKLINE_DATA.campaigns,
    },
    {
      title: 'Proof Packs',
      value: STATISTICS.proofPacks.length.toString(),
      sparkline: SPARKLINE_DATA.proofPacks,
    },
  ];

  return (
    <>
      <AppHeader
        title="Dashboard"
        subtitle={`Good morning, ${DEMO_USER.name}`}
        actions={
          <Button size="sm">+ New Campaign</Button>
        }
      />

      <div className="grid grid-cols-4 gap-4 mt-6">
        {kpiCards.map((card, index) => (
          <StatCard key={index} title={card.title} value={card.value}>
            <Sparkline data={card.sparkline} />
          </StatCard>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Campaign Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <BarChart
                data={CHART_DATA.weekly}
                labels={CHART_DATA.labels}
              />
            </CardContent>
          </Card>
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              {RECENT_ACTIVITY.map((activity, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 py-2 border-b border-zinc-50 last:border-0"
                >
                  <Avatar src={activity.avatar} />
                  <span>
                    {activity.text} {formatDate(activity.date)}
                  </span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>All Clients</CardTitle>
          <div className="flex items-center gap-3">
            <input
              type="search"
              placeholder="Search clients"
              className="w-full py-2 pl-10 text-zinc-600 border border-zinc-200 rounded-lg"
            />
            <Button size="sm">Export</Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {MOCK_CLIENTS.map((client, index) => (
                <tr key={index}>
                  <td>{client.name}</td>
                  <td>{client.email}</td>
                  <td>
                    <Badge variant={client.status}>
                      {client.status.toUpperCase()}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardContent>
        <footer className="p-4 border-t border-zinc-50">
          Showing {MOCK_CLIENTS.length} of {MOCK_CLIENTS.length} results
        </footer>
      </Card>

      <div className="flex gap-3 mt-6">
        <Button size="sm">New Campaign</Button>
        <Button size="sm">Send Report</Button>
        <Button size="sm">Run Analysis</Button>
      </div>

      {selectedRow && (
        <div className="fixed bottom-4 right-4 bg-zinc-900 text-white px-4 py-2 rounded-lg text-sm">
          {selectedRow.name}
        </div>
      )}
    </>
  );
}