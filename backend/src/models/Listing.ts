import { createSchema, Type, typedModel } from "ts-mongoose";
import { PointSchema } from "./Point";
import { ImageSchema } from "./Image";

export const ListingSchema = createSchema({
    location: Type.schema({ required: true }).of(PointSchema),
    capacity: Type.number({ required: true }),
    price: Type.number({ required: true}),
    images: Type.array().of(Type.schema().of(ImageSchema))
});

export const Listing = typedModel("Listing", ListingSchema);