import { v4 as uuidv4 } from 'uuid';

let restaurants = [
  { id: uuidv4(), name: "Restaurant 1", location: "Location 1", hours: "Hours 1" },
  { id: uuidv4(), name: "Restaurant 2", location: "Location 2", hours: "Hours 2" },
  { id: uuidv4(), name: "Restaurant 3", location: "Location 3", hours: "Hours 3" },
];

export function getRestaurants() {
  return restaurants;
}

export function addRestaurant(restaurant) {
  const newRestaurant = { id: uuidv4(), ...restaurant };
  restaurants = [...restaurants, newRestaurant];
  return newRestaurant;
} 