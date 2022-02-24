import { Db } from "mongodb";

type Country = {
  _id: string;
  name: string;
  capital: string;
  continent: string;
};

export async function updateOneCountry(db: Db): Promise<Country> {
  await db.collection("worldAtlas").updateOne({ name: "Australia" }, { $set: { capital: "Canberra" } });
  return await db.collection<Country>("worldAtlas").findOne({ capital: "Canberra" });
}
