import { Db } from "mongodb";
type Country = {
  _id: string;
  name: string;
  capital: string;
  continent: string;
};

export async function insertManyCountries(db: Db, pays: Country[]): Promise<number> {
  const patate = await db.collection<Country>("worldAtlas").insertMany(pays);
  return patate.insertedCount;
}
