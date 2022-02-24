import { Db } from "mongodb";
type country = {
  name: string;
  capital: string;
  continent: string;
};

export function findManyCountries(db: Db): Promise<country[]> {
  return db.collection<country>("worldAtlas").find({ continent: "Europe" }).toArray();
}
