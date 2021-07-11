import { DBSchema } from "idb";

import { Restaurant } from "../restaurant/restaurant.model";

export interface FavoriteDb extends DBSchema {
  restaurants: {
    indexes: { id: string };
    key: string;
    value: Restaurant;
  };
}
