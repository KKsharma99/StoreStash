import mongoose, { Schema } from "mongoose";

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

type _ListingDocument = {
    host: any;
    lat: number;
    lon: number;
    capacity: number;
    remSpace: number;
    startDate: Date;
    endDate: Date;
    price: number;
    construct: (hostId: any, lat: number, lon: number, capacity: number, startDate: Date, endDate: Date, price: number) => Promise<ListingDocument>;
    getNearby: (lat?: number, lon?: number, minCapacity?: number, maxPrice?: number, startDate?: Date, endDate?: Date) => Promise<Array<ListingDocument & { distance: number }>>;
}

export type ListingDocument = mongoose.Document & _ListingDocument;

const listingSchema = new mongoose.Schema({
    host: { type: Schema.Types.ObjectId, ref: "User" },
    lat: { type: Number, required: true },
    lon: { type: Number, required: true },
    capacity: { type: Number, required: true },
    remSpace: { type: Number, required: true },
    startDate: { type: Date, default: new Date() },
    endDate: { type: Date, default: new Date(2200, 1, 1) },
    price: { type: Number, required: true }
}, { timestamps: true });

listingSchema.statics.construct = async function (hostId: any, lat: number, lon: number, capacity: number, startDate: Date, endDate: Date, price: number): Promise<ListingDocument> {
    return new Promise((resolve, reject) => {
        new Listing({ host: hostId, lat, lon, capacity, remSpace: capacity, startDate, endDate, price }).save()
            .then(newListing => resolve(newListing))
            .catch(err => { console.log(err); reject(err); });
    });
};

listingSchema.statics.getNearby = async function (lat: number, lon: number, minCapacity: number = 1, maxPrice: number = Infinity, startDate: Date = new Date(2300, 1, 1), endDate: Date = new Date()): Promise<Array<_ListingDocument & { distance: number }>> {
    try {
        let listings = await this.find({ 
            remSpace: { $gte: minCapacity },
            price: { $lte: maxPrice },
            startDate: { $lte: startDate },
            endDate: { $gte: endDate },
        }).exec();
        return listings.map((listing: ListingDocument) => { return {...listing.toObject(), distance: distance(lat, lon, listing.lat, listing.lon)}; });
    } catch (err) {
        console.log(err);
        return err;
    }
};

export const Listing = mongoose.model<ListingDocument>("Listing", listingSchema);
