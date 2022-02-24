import { Db } from "mongodb";
type country = {
  name: string;
  capital: string;
  continent: string;
};

export async function findOneCountry(db: Db): Promise<country> {
  return db.collection<country>("worldAtlas").findOne({ name: "Iceland" });
}
