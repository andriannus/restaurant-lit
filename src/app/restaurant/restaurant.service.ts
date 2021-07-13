import { AxiosResponse } from "axios";

import { RestaurantResponse } from "./restaurant.model";

import {
  ReviewData,
  ReviewResponse,
} from "@/app/shared/components/review/review.model";
import { HttpService } from "@/app/shared/services/http";

export class RestaurantService extends HttpService {
  public fetchRestaurant(
    id: string,
  ): Promise<AxiosResponse<RestaurantResponse>> {
    return this.instance.get<RestaurantResponse>(`/detail/${id}`);
  }

  public submitReview(
    data: ReviewData,
  ): Promise<AxiosResponse<ReviewResponse>> {
    return this.instance.post<ReviewResponse>("/review", data, {
      headers: {
        "Content-Type": "application/json",
        "X-Auth-Token": 12345,
      },
    });
  }
}
