"use strict";

import mongoose from "mongoose";
import { Response, Request, NextFunction } from "express";
import { UserDocument, User } from "../models/User";
import { Listing, ListingDocument } from "../models/Listing";
import { Rental, RentalDocument } from "../models/Rental";

// Some types just as a reference to understand the expected response from the API
type ListingJson = {
    host: any; // host ID
    lat: number;
    lon: number;
    capacity: number;
    remSpace: number;
    startDate: string;
    endDate: string;
    price: number;
}

type UserJson = {
    email: string;
    password: string;
    passwordResetToken: string;
    passwordResetExpires: string; // date

    facebook: string;
    tokens: {accessToken: string; kind: string}[];

    phone: string;
    firstName: string;
    lastName: string;
    gender: string;
    location: string;
    website: string;
    picture: string;
}

type RentalJson = {
    host: string;
    renter: string;
    listing: string;
    boxes: number;
    dropoff: string; // dropoff date
    pickup: string; // pickup date
    price: number;
}

// Some fields that will likely be in the response
type MongoJson = {
    _id: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

/**
 * POST /api/login
 * @param req.body.email
 * @param req.body.password
 * Response: the token of the user
 */
export const login = async (req: Request, res: Response) => {
    try {
        const user: any = await User.findOne({ email: req.body.email });
        user.comparePassword(req.body.password, (err: any, isMatch: any) => {
            if (err) {
                console.log(err);
                res.status(400).send(err);
            } else {
                if (isMatch) {
                    res.json({ ...user.toObject(), gravatar: user.gravatar() });
                } else {
                    res.status(401).send("Password did not match");
                }
            }
        });
    } catch (err) {
        console.log(err);
        res.status(400).send(err);
    }
};

/**
 * POST /api/register
 * @param {string} req.body.email
 * @param {string} req.body.password
 * @param {string} req.body.phone
 * @param {string?} req.body.firstName
 * @param {string?} req.body.lastName
 * Response: the new User
 */
export const newUser = async (req: Request, res: Response) => {
    try {
        const user = await (User as unknown as UserDocument).construct(req.body.email, req.body.password, req.body.firstName, req.body.lastName, req.body.phone);
        console.log(user);
        res.json({ ...user.toObject(), gravatar: user.gravatar() });
    } catch (err) {
        res.status(400).send(err);
    }
};

/**
 * GET /api/users/:id/rentals
 * @param {string} req.params.id User ID
 * Response: Rental[]
 */
export const getRentalHistory = async (req: Request, res: Response) => {
    try {
        const history = await (Rental as unknown as RentalDocument).listRenterHistory(req.params.id);
        res.json(history.map((rental: any) => { return { ...(rental.toObject()), name: rental.host.firstName + " " + rental.host.lastName };}));
    } catch (err) {
        res.status(400).send(err);
    }
};

/**
 * GET /api/users/:id/lendings
 * @param {string} req.params.id User ID
 * Response: Rental[]
 */
export const getLendingHistory = async (req: Request, res: Response) => {
    try {
        const history = await (Rental as unknown as RentalDocument).listLenderHistory(req.params.id);
        res.json(history.map((rental: any) => {return { ...(rental.toObject()), name: rental.renter.firstName + " " + rental.renter.lastName };}));
    } catch (err) {
        res.status(400).send(err);
    }
};

/**
 * POST /api/new-listing
 * @param {string} req.body.hostId
 * @param {number} req.body.lat
 * @param {number} req.body.lon
 * @param {number} req.body.capacity
 * @param {string} req.body.startDate
 * @param {string} req.body.endDate
 * @param {number} req.body.price
 * @param {string} req.body.image
 * Response: the new Listing
 */
export const newListing = async (req: Request, res: Response) => {
    try {
        const listing = await (Listing as unknown as ListingDocument).construct(req.body.hostId, req.body.lat, req.body.lon, req.body.capacity, new Date(req.body.startDate), new Date(req.body.endDate), req.body.price, req.body.image);
        await res.json(listing.toObject());
    } catch (err) {
        console.log(err);
        res.sendStatus(400);
    }
};

/**
 * GET /api/listings/:id
 * @param {string} req.params.id
 * Response: Listing
 */
export const getListing = async (req: Request, res: Response) => {
    try {
        const listing = await (await Listing.findById(req.params.id)).execPopulate();
        res.json(listing.toObject());
    } catch (err) {
        res.status(400).send(err);
    }
};

/**
 * POST /api/listings/:id/rent
 * @param {string} req.params.id Listing ID
 * @param {string} req.body.renter Renter ID
 * @param {number} req.body.boxes Number of boxes to be rented
 * @param {string} req.body.dropoff Dropoff date
 * @param {string} req.body.pickup Pickup date
 * Response: the new Rental
 */
export const rentListing = async (req: Request, res: Response) => {
    try {
        const rental = await (Rental as unknown as RentalDocument).construct(mongoose.Types.ObjectId(req.params.id), req.body.renter, req.body.boxes, req.body.dropoff, req.body.pickup);
        res.json(rental.toObject());
    } catch (err) {
        res.status(400).send(err);
    }
};

/**
 * GET /api/discover
 * @param {number} req.query.lat Latitude of where the user is
 * @param {number} req.query.lon Longitude of where the user is
 * @param {number} req.query.minCapacity Minimum capacity of a listing to show up in the results
 * @param {number} req.query.maxPrice
 * @param {string?} req.query.startDate
 * @param {string?} req.query.endDate
 */
export const getNearby = async (req: Request, res: Response) => {
    try {
        const startDate = req.query.startDate ? new Date(req.query.startDate as string) : undefined;
        const endDate = req.query.endDate ? new Date(req.query.endDate as string) : undefined;
        const listings = await (Listing as unknown as ListingDocument).getNearby(req.query.lat as any as number, req.query.lon as any as number, req.query.minCapacity as any as number, req.query.maxPrice as any as number, startDate, endDate);
        res.json(listings);
    } catch (err) {
        res.status(400).send(err);
    }
};

/**
 * GET /api/users/:id/listings
 * @param {string} req.params.id
 */
export const getListingsByHostId = async (req: Request, res: Response) => {
    try {
        const listings = await (Listing as any as ListingDocument).getByHostId(req.params.id);
        res.json(listings);
    } catch (err) {
        res.status(400).send(err);
    }
};
