"use strict";

import graph from "fbgraph";
import crypto from "crypto";
import { Response, Request, NextFunction } from "express";
import { UserDocument, User } from "../models/User";
import { Listing, ListingDocument } from "../models/Listing";

/**
 * Returns a random string of characters 0-9, a-f.
 * 
 * @param bytes number of bytes used for the string; each byte is two hex digits
 */
function randomString(bytes: number) {
    return crypto.randomBytes(bytes).toString("hex");
}

/**
 * GET /api
 * List of API examples.
 */
export const getApi = (req: Request, res: Response) => {
    res.render("api/index", {
        title: "API Examples"
    });
};

export const newListing = async (req: Request, res: Response) => {
    try {
        // const listing = await ((Listing as any) as ListingDocument).construct(mongoose.Types.ObjectId("5e504f591c9d440000ae8586"), 11, -11, 5, new Date(2020, 2, 1), new Date(2022, 5, 1), 14).then(listing => listing);
        // console.log(req.body);
        // console.log(req.query);
        const listing = await (Listing as unknown as ListingDocument).construct(req.body.hostId, req.body.lat, req.body.lon, req.body.capacity, new Date(req.body.startDate), new Date(req.body.endDate), req.body.price);
        // const listing = await ((Listing as any) as ListingDocument).construct(req.query.hostId, req.query.lat, req.query.lon, req.query.capacity, new Date(req.query.startDate), new Date(req.query.endDate), req.query.price);
        await res.json(listing.toObject());
    } catch (err) {
        console.log(err);
        res.sendStatus(400);
    }
};

export const newUser = async (req: Request, res: Response) => {
    try {
        let user;
        if (req.query.random == "true" || req.body.random == "true") {
            user = await (User as unknown as UserDocument).construct(`${randomString(5)}@gatech.edu`, randomString(8));
        } else {
            user = await (User as unknown as UserDocument).construct(req.body.email, req.body.password);
        }
        res.json(user.toObject());
    } catch (err) {
        console.log(err);
        res.sendStatus(400);
    }
};

/**
 * GET /api/facebook
 * Facebook API example.
 */
export const getFacebook = (req: Request, res: Response, next: NextFunction) => {
    const user = req.user as UserDocument;
    const token = user.tokens.find((token: any) => token.kind === "facebook");
    graph.setAccessToken(token.accessToken);
    graph.get(`${user.facebook}?fields=id,name,email,first_name,last_name,gender,link,locale,timezone`, (err: Error, results: graph.FacebookUser) => {
        if (err) { return next(err); }
        res.render("api/facebook", {
            title: "Facebook API",
            profile: results
        });
    });
};
