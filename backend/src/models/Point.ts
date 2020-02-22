import { createSchema, Type, typedModel, ExtractDoc } from "ts-mongoose";

const point = ["Point"] as const;

export const PointSchema = createSchema({
    type: Type.string({
        enum: point,
        required: true
    }),
    coordinates: Type.object().of(Type.array().of(Type.number({ required: true})))
}),;