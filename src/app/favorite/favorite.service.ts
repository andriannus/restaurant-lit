import { IDBPDatabase, openDB } from "idb";

import { FavoriteDb } from "./favorite.model";

import { Restaurant } from "@/app/restaurant/restaurant.model";

export class FavoriteService {
  public async createDatabase(): Promise<IDBPDatabase<FavoriteDb>> {
    return await openDB<FavoriteDb>("wethefood", 1, {
      upgrade(db) {
        if (db.objectStoreNames.contains("restaurants")) return;

        const restaurantOs = db.createObjectStore("restaurants", {
          keyPath: "id",
        });
        restaurantOs.createIndex("id", "id", { unique: false });
      },
    });
  }

  public async add(restaurant: Restaurant): Promise<string> {
    const db = await this.createDatabase();

    const tx = db.transaction("restaurants", "readwrite");
    const store = tx?.objectStore("restaurants");

    return store?.add(restaurant);
  }

  public async delete(id: string): Promise<void> {
    const db = await this.createDatabase();

    const tx = db.transaction("restaurants", "readwrite");
    const store = tx?.objectStore("restaurants");

    return store?.delete(id);
  }

  public async get(id: string): Promise<Restaurant | undefined> {
    const db = await this.createDatabase();

    const tx = db.transaction("restaurants", "readonly");
    const store = tx?.objectStore("restaurants");

    return store?.get(id);
  }

  public async getAll(): Promise<Restaurant[]> {
    const db = await this.createDatabase();

    const tx = db.transaction("restaurants", "readonly");
    const store = tx?.objectStore("restaurants");

    return store?.getAll();
  }
}
