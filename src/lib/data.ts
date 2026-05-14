export const DEMO_CLIENTS = [
  {
    id: 'client-1',
    name: 'John Doe',
    email: 'john@example.com',
    status: 'active',
  },
  {
    id: 'client-2',
    name: 'Jane Doe',
    email: 'jane@example.com',
    status: 'active',
  },
];

export const DEMO_USERS = [
  {
    id: 'user-1',
    name: 'Alex Chen',
    email: 'alex@example.com',
    role: 'admin',
  },
  {
    id: 'user-2',
    name: 'Emily Lee',
    email: 'emily@example.com',
    role: 'user',
  },
];

export const DEMO_PROOF_PACKS = [
  {
    id: 'proof-pack-1',
    clientId: 'client-1',
    name: 'Proof Pack 1',
    description: 'This is a sample proof pack',
    status: 'published',
  },
  {
    id: 'proof-pack-2',
    clientId: 'client-2',
    name: 'Proof Pack 2',
    description: 'This is another sample proof pack',
    status: 'published',
  },
];

export const DEMO_CAMPAIGNS = [
  {
    id: 'campaign-1',
    proofPackId: 'proof-pack-1',
    name: 'Campaign 1',
    startDate: '2022-01-01',
    endDate: '2022-01-31',
    budget: 1000,
    spend: 500,
    status: 'completed',
  },
  {
    id: 'campaign-2',
    proofPackId: 'proof-pack-2',
    name: 'Campaign 2',
    startDate: '2022-02-01',
    endDate: '2022-02-28',
    budget: 2000,
    spend: 1500,
    status: 'completed',
  },
];