import { AxiosResponse } from "axios";

import { RestaurantResponse } from "./restaurant.model";

import { HttpService } from "@/app/shared/services/http";

export class RestaurantService extends HttpService {
  public fetchRestaurant(
    id: string,
  ): Promise<AxiosResponse<RestaurantResponse>> {
    return this.instance.get<RestaurantResponse>(`/detail/${id}`);
  }
}
