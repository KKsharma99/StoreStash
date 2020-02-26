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

export type ListingDocument = mongoose.Document & {
    host: any;
    lat: number;
    lon: number;
    capacity: number;
    remSpace: number;
    startDate: Date;
    endDate: Date;
    price: number;
    construct: (hostId: any, lat: number, lon: number, capacity: number, startDate: Date, endDate: Date, price: number) => Promise<ListingDocument>;
    findNearby: (lat?: number, lon?: number, minCapacity?: number, maxPrice?: number, startDate?: Date, endDate?: Date) => Promise<ListingDocument>;
};

const listingSchema = new mongoose.Schema({
    host: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    lat: {
        type: Number,
        required: true
    },
    lon: {
        type: Number,
        required: true
    },
    capacity: {
        type: Number,
        required: true
    },
    remSpace: {
        type: Number,
        required: true
    },
    startDate: {
        type: Date,
        default: new Date()
    },
    endDate: {
        type: Date,
        default: new Date(2200, 1, 1)
    },
    price: {
        type: Number,
        required: true
    }
}, { timestamps: true });

listingSchema.statics.construct = async function (hostId: any, lat: number, lon: number, capacity: number, startDate: Date, endDate: Date, price: number) {
    const newListing = new Listing({
        host: hostId, lat, lon, capacity, remSpace: capacity, startDate, endDate, price
    });
    await newListing.save(err => console.log(err));
    return newListing;
};

listingSchema.statics.findNearby = async function (lat: number, lon: number, minCapacity: number = 1, maxPrice: number = Infinity, startDate: Date = new Date(2300, 1, 1), endDate: Date = new Date()) {
    try {
        return await this.find({ 
            remCapacity: { $gte: minCapacity },
            price: { $lte: maxPrice },
            startDate: { $lte: startDate },
            endDate: { $gte: endDate },
        }).map((listing: any) => { return {...listing, distance: distance(lat, lon, listing.lat, listing.lon)}; });
    } catch (err) {
        console.log(err);
    }
};

export const Listing = mongoose.model<ListingDocument>("Listing", listingSchema);
