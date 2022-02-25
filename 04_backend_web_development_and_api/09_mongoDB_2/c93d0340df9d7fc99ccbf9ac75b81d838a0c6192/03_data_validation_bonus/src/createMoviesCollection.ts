import * as mongo from "mongodb";

export const moviesValidator = {
  // write your validator here
  validator: {
    $jsonSchema: {
      bsonType: "object",
      additionalProperties: false,
      required: ["_id", "title", "genre", "year"],
      properties: {
        _id: { bsonType: "objectId" },
        title: {
          bsonType: "string",
          description: "must be a string and is required",
        },
        genre: {
          bsonType: "string",
          enum: ["action", "comedy", "dramatic", "horror", "romance"],
          description: "can be only a string in: action, comedy, dramatic, horror or romance",
        },
        year: {
          bsonType: "int",
          minimum: 1950,
          maximum: 2020,
          description: "can be only a integer between 1950 and 2020",
        },
        ratings: {
          bsonType: "object",
          additionalProperties: false,
          required: ["pressRating", "spectatorsRating"],
          properties: {
            pressRating: {
              bsonType: "int",
              minimum: 1,
              maximum: 5,
              description: "can be only a integer between 1 and 5",
            },
            spectatorsRating: {
              bsonType: "int",
              minimum: 1,
              maximum: 5,
              description: "can be only a integer between 1 and 5",
            },
          },
        },
      },
    },
  },
};

export function createMoviesCollection(db: mongo.Db): Promise<mongo.Collection> {
  return db.createCollection("movies", moviesValidator);
}
