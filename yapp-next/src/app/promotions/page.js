import { getPromotionsByRestaurantId } from './promotionService';

async function PromotionsPage({ params }) {
  const { restaurantId } = params;
  const promotions = await getPromotionsByRestaurantId(restaurantId);

  return (
    <div>
      <h1>Promotions</h1>
      {promotions.map((promotion) => (
        <div key={promotion.id}>
          <h2>{promotion.name}</h2>
          <p>{promotion.description}</p>
          <p>Start Date: {promotion.startDate.toDateString()}</p>
          <p>End Date: {promotion.endDate.toDateString()}</p>
        </div>
      ))}
    </div>
  );
}

export default PromotionsPage; 