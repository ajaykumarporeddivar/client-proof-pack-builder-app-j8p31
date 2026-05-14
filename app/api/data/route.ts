import { clients, users, campaigns } from '@//data';
import { Response } from 'next';

export async function GET(): Promise<Response> {
  const entityName = 'clients';
  const data = clients;
  const stats = {
    total: data.length,
    active: data.filter((client) => client.status === 'active').length,
  };

  return new Response(
    JSON.stringify({
      ok: true,
      data: { [entityName]: data, stats: stats, total: data.length },
    }),
    {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    }
  );
}

export async function POST(): Promise<Response> {
  const body = await new Response().json();
  return new Response(
    JSON.stringify({
      ok: true,
      message: 'Demo mode — data not persisted',
      received: body,
    }),
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
}

export async function OPTIONS(): Promise<Response> {
  return new Response('ok', {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    },
  });
}