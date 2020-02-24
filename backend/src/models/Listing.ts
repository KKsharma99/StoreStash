import { createSchema, Type, typedModel, ExtractDoc } from "ts-mongoose";
import { PointSchema } from "./Point";
import { ImageSchema } from "./Image";

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
    // location: Type.schema({ required: true }).of(PointSchema),
    lat: Type.number({ required: true }),
    lon: Type.number({ required: true }),
    totalCapacity: Type.number({ required: true }),
    // TODO: dynamically calculate remCapacity
    price: Type.number({ required: true }),
    startDate: Type.date({ default: new Date() }),
    endDate: Type.date({ default: new Date(2200, 1, 1) }),
    images: Type.array().of(Type.schema().of(ImageSchema)),
    toObject: { virtuals: true },
    toJSON: { vrituals: true }
});

export type ListingDocument = ExtractDoc<typeof ListingSchema>;

import { UserSchema } from "./User";
import { TransactionSchema, Transaction, TransactionDocument } from "./Transaction";

ListingSchema.add(createSchema({
    host: Type.ref(Type.objectId()).to("User", UserSchema),
    transactions: Type.array().of(Type.ref(Type.object()).to("Transaction", TransactionSchema))
}));
ListingSchema.virtual("remCapacity").get(async function () {
    const activeTransactions = await this.transactions.find({
        listing: this._id,
        status: { $in: ["dropped off"] },
    }).exec();
    const usedSpace = activeTransactions.map((transaction: TransactionDocument) => transaction.boxes).reduce((a: number, b: number) => a + b);
    return this.remCapacity = this.totalCapacity - usedSpace;
});

export const Listing = typedModel("Listing", ListingSchema, undefined, undefined, {
    // Static methods
    create: async function (host: string, lat: number, lon: number, totalCapacity: number, price: number, startDate?: Date, endDate?: Date) {
        const newListing = new Listing({
            host,
            lat,
            lon,
            totalCapacity,
            price,
            startDate,
            endDate
        });
        return await newListing.save();
    },
    find: async function (lat?: number, lon?: number, minCapacity: number = 1, maxPrice: number = Infinity, startDate: Date = new Date(2300, 1, 1), endDate: Date = new Date()) {
        const listings = await this.find({ 
            remCapacity: { $gte: minCapacity },
            price: { $lte: maxPrice },
            startDate: { $lte: startDate },
            endDate: { $gte: endDate },
        });
        return listings.map((listing: any) => {
            return {
                ...listing.toObject(),
                distance: distance(listing.lat, listing.lon, lat, lon)
            };
        });
    },
});