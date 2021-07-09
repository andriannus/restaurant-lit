export interface Category {
  name: string;
}

export interface CustomerReview {
  date: string;
  name: string;
  review: string;
}

export interface Menu {
  name: string;
}

export interface Restaurant {
  address: string;
  categories: Category[];
  city: string;
  customerReviews: CustomerReview[];
  description: string;
  id: string;
  menus: {
    drinks: Menu[];
    foods: Menu[];
  };
  name: string;
  pictureId: string;
  rating: number;
}

export interface RestaurantResponse {
  error: boolean;
  message: string;
  restaurant: Restaurant;
}
