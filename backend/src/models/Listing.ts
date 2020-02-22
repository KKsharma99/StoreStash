import { createSchema, Type, typedModel } from "ts-mongoose";
import { PointSchema } from "./Point";
import { ImageSchema } from "./Image";
import { assign } from "nodemailer/lib/shared";

/**
 * Find the distance between two latitude–longitude points, using the Haversine formula.
 * This does not account for 
 * Derived from https://stackoverflow.com/a/21623206/ by Salvador Dali, licensed under CC BY-SA 4.0.
 * 
 * @param lat1 latitude of point 1
 * @param lon1 longitude of point 1
 * @param lat2 latitude of point 2
 * @param lon2 longitude of point 2
 * @param km   whether to output result in kilometers or miles
 */
function distance(lat1: number, lon1: number, lat2: number, lon2: number, km: boolean = false): number {
    const p = 0.017453292519943295;    // Math.PI / 180
    const c = Math.cos;
    const a = 0.5 - c((lat2 - lat1) * p)/2 + 
            c(lat1 * p) * c(lat2 * p) * 
            (1 - c((lon2 - lon1) * p))/2;
    const twoR = km ? 12742 : 7918; // 2 * mean radius of the Earth

    return twoR * Math.asin(Math.sqrt(a));
}

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
    find: async function (lat?: number, lon?: number, minCapacity: number = 1, maxPrice: number = Infinity, startDate: Date = new Date(2300, 1, 1), endDate: Date = new Date()) {
        const listings = await this.find({ 
            remCapacity: { $gte: minCapacity },
            price: { $lte: maxPrice },
            startDate: { $lte: startDate },
            endDate: { $gte: endDate },
        });
        return {
            // [{ price: decimal, distance: float, max boxes: int, image: url }]
        };
    }
});