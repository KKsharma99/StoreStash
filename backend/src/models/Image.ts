import { createSchema, Type, typedModel } from "ts-mongoose";

export const ImageSchema = createSchema({
    filename: Type.string({ required: true }),
    originalname: Type.string({ required: true })
}, { timestamps: true });

export const Image = typedModel("Image", ImageSchema);