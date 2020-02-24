import { createSchema, Type, typedModel, ExtractDoc } from "ts-mongoose";
import { UserSchema } from "./User";
import { ListingSchema } from "./Listing";

const statuses = ["not dropped off", "dropped off", "picked up"] as const;

export const TransactionSchema = createSchema({
    host: Type.ref(Type.objectId()).to("User", UserSchema),
    renter: Type.ref(Type.objectId()).to("User", UserSchema),
    listing: Type.ref(Type.objectId()).to("Listing", ListingSchema),
    boxes: Type.number({ required: true }), // number of boxes rented out
    dropoff: Type.date({ required: true }),
    pickup: Type.date({ required: true }),
    status: Type.string({ enum: statuses }),
    price: Type.number({ required: true })
});

// TODO: dynamically update listing's remaining capacity

export type TransactionDocument = ExtractDoc<typeof TransactionSchema>;
export const Transaction = typedModel("Transaction", TransactionSchema);