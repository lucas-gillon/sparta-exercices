import * as mongo from "mongodb";

export const sweaterProperties = {
  // write your sweater properties here
  bsonType: "object",
  additionalProperties: false,
  required: ["_id", "name", "color", "category", "size"],
  properties: {
    _id: { bsonType: "objectId" },
    name: {
      bsonType: "string",
      maxLength: 30,
      description: "must be a string and is required",
    },
    color: {
      bsonType: "string",
      maxLength: 15,
      description: "must be a string and is required",
    },
    category: {
      bsonType: "string",
      enum: ["sweater"],
    },
    size: {
      bsonType: "string",
      enum: ["XXS", "XS", "S", "M", "L", "XL", "XXL", "XXXL"],
    },
  },
};

export const shoesProperties = {
  // write your shoes properties here
  bsonType: "object",
  additionalProperties: false,
  required: ["_id", "name", "color", "category", "size"],
  properties: {
    _id: { bsonType: "objectId" },
    name: {
      bsonType: "string",
      maxLength: 30,
    },
    color: {
      bsonType: "string",
      maxLength: 15,
    },
    category: {
      bsonType: "string",
      enum: ["shoes"],
    },
    size: {
      bsonType: "int",
      minimum: 30,
      maximum: 50,
    },
    material: {
      bsonType: "string",
      enum: ["leather", "textile", "synthetic"],
    },
  },
};

export const pantsProperties = {
  // write your pants properties here
  bsonType: "object",
  additionalProperties: false,
  required: ["_id", "name", "color", "category", "size"],
  properties: {
    _id: { bsonType: "objectId" },
    name: {
      bsonType: "string",
      maxLength: 30,
    },
    color: {
      bsonType: "string",
      maxLength: 15,
    },
    category: {
      bsonType: "string",
      enum: ["pants"],
    },
    size: {
      bsonType: "object",
      additionalProperties: false,
      required: ["width"],
      properties: {
        width: {
          bsonType: "int",
          minimum: 32,
          maximum: 46,
        },
        cut: {
          enum: ["slim", "skinny", "regular", "straight"],
        },
      },
    },
  },
};

export const clothesValidator = {
  // write your validator here
  validator: {
    $jsonSchema: {
      bsonType: "object",
      additionalProperties: false,
      required: ["_id", "name", "color", "category", "size"],
      oneOf: [
        { type: "string", category: "sweater" },
        { type: "string", category: "shoes" },
        { type: "string", category: "pants" },
      ],
      properties: {
        _id: { bsonType: "objectId" },
        name: {
          bsonType: "string",
          maxLength: 30,
          description: "must be a string and is required",
        },
        color: {
          bsonType: "string",
          maxLength: 15,
          description: "must be a string and is required",
        },
        category: {
          bsonType: "string",
          enum: ["sweater", "pants", "shoes"],
        },
      },
    },
  },
};

export function createClothesCollection(db: mongo.Db): Promise<mongo.Collection> {
  return db.createCollection("clothes", clothesValidator);
}
