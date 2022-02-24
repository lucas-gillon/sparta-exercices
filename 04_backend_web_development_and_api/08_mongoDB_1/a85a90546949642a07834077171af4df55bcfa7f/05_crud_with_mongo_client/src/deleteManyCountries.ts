import { Db } from "mongodb";

export async function deleteManyCountries(db: Db): Promise<boolean> {
  const patate = await db.collection("worldAtlas").deleteMany({ continent: "Europe" });
  if (patate.deletedCount > 0) {
    return true;
  } else {
    return false;
  }
}
