import { Db } from "mongodb";
type country = {
  id: string;
  name: string;
  capital: string;
  continent: string;
};

export function insertOneCountry(db: Db, pays: country): Promise<country[]> {
  // code your function here
  db.collection<country>("worldAtlas").insertOne(pays);
  return db.collection<country>("worldAtlas").find({ name: "France" }).toArray();
}
