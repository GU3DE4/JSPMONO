import { createEstablishment } from './establishmentService';

export async function createEstablishmentAction(data) {
  try {
    const newEstablishment = await createEstablishment(data);
    return { establishment: newEstablishment };
  } catch (error) {
    console.error('Failed to create establishment:', error);
    throw error;
  }
} 