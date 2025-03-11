import { createEstablishment } from '../../establishments/establishmentService';

export async function POST(request) {
  try {
    const data = await request.json();
    const newEstablishment = await createEstablishment(data);
    return new Response(JSON.stringify({ establishment: newEstablishment }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Failed to create establishment:', error);
    return new Response(JSON.stringify({ error: 'Failed to create establishment' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
} 