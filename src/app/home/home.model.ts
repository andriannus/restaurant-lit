export interface Restaurant {
  city: string;
  description: string;
  id: string;
  name: string;
  pictureId: string;
  rating: number;
}

export interface RestaurantsResponse {
  count: number;
  error: boolean;
  message: string;
  restaurants: Restaurant[];
}
