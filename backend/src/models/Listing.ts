import mongoose, { Schema } from "mongoose";

export type ListingDocument = mongoose.Document & {
    lat: number,
    lon: number,
    capacity: number,
    price: number
};

const listingSchema = new mongoose.Schema({
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
    price: {
        type: Number,
        required: true
    }
}, { timestamps: true });

export const Listing = mongoose.model<ListingDocument>("Listing", listingSchema);
