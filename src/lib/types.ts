export interface Client {
  id:;
  name: string;
  email:;
  createdAt: string;
  updatedAt: string;
  status: 'active' | 'inactive';
}

export interface {
  id:;
  name:;
  email:;
  role: '' | 'user  createdAt: string  updatedAt: string}

export interface Proof {
  id:;
  clientId:;
  name:;
  description:;
  createdAt:;
  updatedAt:;
  status:draft' | 'published' | 'archived';
}

export interface Campaign {
  id:;
  proofPackId: string;
  name: string;
 : string;
  endDate: string;
  budget: number;
  spend number;
  status: 'active' | 'completed' | 'cancelled';
}

export type ApiResponse<T> = { ok: boolean; data?: T; error?: string };
export type SortDir = 'asc' | 'desc';

export interface DemoUser {
  id: string;
  name: string;
  email: string;
  role: string;
  plan: string;
  avatar: string;
  joinedAt: string;
}