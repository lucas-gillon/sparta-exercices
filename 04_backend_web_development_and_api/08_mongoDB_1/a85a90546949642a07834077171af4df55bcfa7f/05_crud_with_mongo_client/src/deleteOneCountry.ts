import { Db } from "mongodb";

export async function deleteOneCountry(db: Db): Promise<boolean> {
  // code your function here
  const patate = await db.collection("worldAtlas").deleteOne({ name: "France" });
  if (patate.deletedCount === 1) {
    return true;
  } else {
    return false;
  }
}
