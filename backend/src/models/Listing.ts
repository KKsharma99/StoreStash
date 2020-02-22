import { createSchema, Type, typedModel } from "ts-mongoose";
import { PointSchema } from "./Point";
import { ImageSchema } from "./Image";

export const ListingSchema = createSchema({
    location: Type.schema({ required: true }).of(PointSchema),
    totalCapacity: Type.number({ required: true }),
    // TODO: dynamically calculate remCapacity
    remCapacity: Type.number(),
    startDate: Type.date({ default: new Date() }),
    endDate: Type.date({ default: new Date(2200, 1, 1) }),
    price: Type.number({ required: true }),
    images: Type.array().of(Type.schema().of(ImageSchema))
});

export const Listing = typedModel("Listing", ListingSchema, undefined, undefined, {
    // Static methods
    find: async function (loc?: [number], minCapacity: number = 1, maxPrice: number = Infinity, startDate: Date = new Date(2300, 1, 1), endDate: Date = new Date()) {
        const listings = await this.find({ 
            remCapacity: { $gt: minCapacity },
            price: { $lt: maxPrice },
            startDate: { $lt: startDate },
            endDate: { $gt: endDate },
        });
        return {
            // [{ price: decimal, distance: float, max boxes: int, image: url }]
        };
    }
});