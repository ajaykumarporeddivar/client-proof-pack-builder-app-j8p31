import { clients, users, campaigns } from '@/lib/data';
import { Response } from 'next';
import { useRouter } from 'next/navigation';

export async function GET(): Promise<Response> {
  const router = useRouter();
  const query = router.query;
  const q = query.q as string | undefined;
  const type = query.type as string | undefined;

  const entityName = type || 'clients';
  let data;

  switch (entityName) {
    case 'clients':
      data = clients;
      break;
    case 'users':
      data = users;
      break;
    case 'campaigns':
      data = campaigns;
      break;
    default:
      data = clients;
  }

  if (!q || q.trim() === '') {
    const results = data.slice(0, 5);
    return new Response(
      JSON.stringify({
        ok: true,
        data: { results: results, total: data.length, query: q },
      }),
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } else {
    const regex = new RegExp(q.trim(), 'i');
    const results = data
      .filter((item) => {
        if (entityName === 'clients') {
          return item.name.includes(q.trim()) || item.email.includes(q.trim());
        } else if (entityName === 'users') {
          return item.name.includes(q.trim()) || item.email.includes(q.trim());
        } else {
          return (
            item.name.includes(q.trim()) ||
            item.description.includes(q.trim())
          );
        }
      })
      .slice(0, 20);

    return new Response(
      JSON.stringify({
        ok: true,
        data: { results: results, total: data.length, query: q },
      }),
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
}