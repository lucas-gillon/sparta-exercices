import { Db } from "mongodb";

type Country = {
  _id: string;
  name: string;
  capital: string;
  continent: string;
};

export async function updateManyCountries(db: Db): Promise<Country[]> {
  // code your function here
  await db.collection("worldAtlas").updateMany({ continent: "Europe" }, { $set: { continent: "EU" } });
  return db.collection<Country>("worldAtlas").find({ continent: "EU" }).toArray();
}
