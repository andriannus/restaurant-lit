import { AxiosResponse } from "axios";

import { RestaurantsResponse } from "./home.model";

import { HttpService } from "@/app/shared/services/http";

export class HomeService extends HttpService {
  public fetchRestaurants(): Promise<AxiosResponse<RestaurantsResponse>> {
    return this.instance.get<RestaurantsResponse>("/list");
  }
}
