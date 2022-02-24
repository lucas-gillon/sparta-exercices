import { Db } from "mongodb";
type Country = {
  _id: string;
  name: string;
  capital: string;
  continent: string;
};

export async function insertOneCountry(db: Db, pays: Country): Promise<string> {
  const patate = await db.collection<Country>("worldAtlas").insertOne(pays);
  return patate.insertedId;
}
