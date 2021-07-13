import { CustomerReview } from "@/app/restaurant/restaurant.model";

export interface ReviewData {
  id: string;
  name: string;
  review: string;
}

export interface ReviewResponse {
  error: boolean;
  message: string;
  customerReviews: CustomerReview[];
}
