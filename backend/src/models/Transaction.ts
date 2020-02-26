import mongoose, { Schema } from "mongoose";

export type TransactionDocument = mongoose.Document & {
    host: any;
    renter: any;
    listing: any;
    boxes: number;
    dropoff: Date;
    pickup: Date;
    price: number;
};

const transactionSchema = new mongoose.Schema({
    host: { type: Schema.Types.ObjectId, ref: "User" },
    renter: { type: Schema.Types.ObjectId, ref: "User" },
    listing: { type: Schema.Types.ObjectId, ref: "Listing" },
    boxes: { type: Number, required: true },
    dropoff: { type: Date, required: true },
    pickup: { type: Date, required: true },
    price: { type: Number, required: true }
}, { timestamps: true });

export const Transaction = mongoose.model<TransactionDocument>("Transaction", transactionSchema);
