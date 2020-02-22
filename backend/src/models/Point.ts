import { createSchema, Type } from "ts-mongoose";

// https://mongoosejs.com/docs/geojson.html

const point = ["Point"] as const;

export const PointSchema = createSchema({
    type: Type.string({
        enum: point,
        required: true
    }),
    // Array of [longitude, latitude]
    coordinates: Type.array({ required: true }).of(Type.number({ required: true}))
});