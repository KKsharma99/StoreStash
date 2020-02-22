import { createSchema, Type, typedModel } from "ts-mongoose";
import { UserSchema } from "./User";
import { ListingSchema } from "./Listing";

export const TransactionSchema = createSchema({
    host: Type.ref(Type.objectId()).to("User", UserSchema),
    renter: Type.ref(Type.objectId()).to("User", UserSchema),
    listing: Type.ref(Type.objectId()).to("Listing", ListingSchema),
    boxes: Type.number({ required: true }), // number of boxes rented out
    dropoff: Type.date({ required: true }),
    pickup: Type.date({ required: true }),
    price: Type.number({ required: true })
});

// TODO: dynamically update listing's remaining capacity

export const Transaction = typedModel("Transaction", TransactionSchema);