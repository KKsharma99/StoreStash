import mongoose, { Schema } from "mongoose";
import { Listing } from "./Listing";

export type RentalDocument = mongoose.Document & {
    host: mongoose.Types.ObjectId | string;
    renter: mongoose.Types.ObjectId | string;
    listing: mongoose.Types.ObjectId | string;
    boxes: number;
    dropoff: Date;
    pickup: Date;
    price: number;
    construct: (listingId: mongoose.Types.ObjectId | string, renter: mongoose.Types.ObjectId | string, boxes: number, dropoff: Date, pickup: Date) => Promise<RentalDocument>;
    listRenterHistory: (renter: mongoose.Types.ObjectId | string) => Promise<Array<RentalDocument>>;
};

const rentalSchema = new mongoose.Schema({
    host: { type: Schema.Types.ObjectId, ref: "User" },
    renter: { type: Schema.Types.ObjectId, ref: "User" },
    listing: { type: Schema.Types.ObjectId, ref: "Listing" },
    boxes: { type: Number, required: true },
    dropoff: { type: Date, required: true },
    pickup: { type: Date, required: true },
    price: { type: Number, required: true }
}, { timestamps: true });

rentalSchema.statics.construct = async function (listingId: mongoose.Types.ObjectId | string, renter: mongoose.Types.ObjectId | string, boxes: number, dropoff: Date, pickup: Date) {
    // TODO: validate parameters
    try {
        const listing = await (await Listing.findById(listingId)).execPopulate();
        const newRental = new Rental({
            host: listing.host._id, renter, listing: listingId, boxes, dropoff, pickup, price: boxes * listing.price
        });
        await newRental.save();
        return newRental;
    } catch (err) {
        return Promise.reject(err);
    }
}

rentalSchema.statics.listRenterHistory = async function (renter: mongoose.Types.ObjectId | string): Promise<Array<RentalDocument>> {
    try {
        return await this.find({ renter }).sort({ dropoff: -1 }).exec();
    } catch (err) {
        return Promise.reject(err);
    }
}

export const Rental = mongoose.model<RentalDocument>("Rental", rentalSchema);

console.log((Rental as any as RentalDocument).listRenterHistory("5e54294bb94f6528e40c1518"))
