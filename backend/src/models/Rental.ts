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
    listLenderHistory: (renter: mongoose.Types.ObjectId | string) => Promise<Array<RentalDocument>>;
};

export type HistoryType = {
    _id: string;
    name: string;
    isRental: boolean; // or else it is a listing
    
}

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
    // if (boxes < 1 || !Number.isInteger(boxes)) {
    //     return Promise.reject(new RangeError("Number of boxes must be a positive integer"));
    // }
    // if (dropoff > pickup) {
    //     return Promise.reject(new RangeError("Dropoff date cannot be after pickup date."));
    // }
    try {
        const listing = await (await Listing.findById(listingId)).execPopulate();
        // if (boxes > listing.remSpace) {
        //     return Promise.reject(new RangeError("Number of boxes cannot be greater than remaining space in storage space."));
        // }
        const newRental = new Rental({
            host: listing.host._id, renter, listing: listingId, boxes, dropoff, pickup, price: boxes * listing.price
        });
        await newRental.save();
        return newRental;
    } catch (err) {
        return Promise.reject(err);
    }
};

rentalSchema.statics.listRenterHistory = async function (renter: mongoose.Types.ObjectId | string): Promise<Array<RentalDocument>> {
    try {
        const results = await this.find({ renter }).sort({ dropoff: -1 }).populate("host");
        return results;
    } catch (err) {
        return Promise.reject(err);
    }
};

rentalSchema.statics.listLenderHistory = async function (host: mongoose.Types.ObjectId | string): Promise<Array<RentalDocument>> {
    try {
        return await this.find({ host }).sort({ dropoff: -1 }).populate("renter");
    } catch (err) {
        return Promise.reject(err);
    }
};

export const Rental = mongoose.model<RentalDocument>("Rental", rentalSchema);
