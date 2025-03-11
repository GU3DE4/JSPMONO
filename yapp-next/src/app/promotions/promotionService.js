import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getPromotionsByRestaurantId(restaurantId) {
  return prisma.promotion.findMany({
    where: { restaurantId },
  });
}

export async function createPromotion(data) {
  return prisma.promotion.create({ data });
}

export async function updatePromotion(id, data) {
  return prisma.promotion.update({ where: { id }, data });
}

export async function deletePromotion(id) {
  return prisma.promotion.delete({ where: { id } });
} 