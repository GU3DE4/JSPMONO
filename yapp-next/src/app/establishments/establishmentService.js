import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
//hola borrame
export async function getEstablishments() {
  const establishments = await prisma.establishment.findMany();
  return establishments;
}

export async function createEstablishment(data) {
  try {
    const newEstablishment = await prisma.establishment.create({ data });
    return newEstablishment;
  } catch (error) {
    console.error('Failed to create establishment:', error);
    throw error;
  }
} 