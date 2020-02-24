"use strict";

import graph from "fbgraph";
import moment from "moment";
import { Response, Request, NextFunction } from "express";
import mongoose, { Schema } from "mongoose";
import { UserDocument, User } from "../models/User";
import { Listing, ListingDocument } from "../models/Listing";


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
        console.log(req.body);
        console.log(req.query);
        // const listing = await ((Listing as any) as ListingDocument).construct(req.body.hostId, req.body.lat, req.body.lon, req.body.capacity, new Date(req.body.startDate), new Date(req.body.endDate), req.body.price);
        const listing = await ((Listing as any) as ListingDocument).construct(req.query.hostId, req.query.lat, req.query.lon, req.query.capacity, new Date(req.query.startDate), new Date(req.query.endDate), req.query.price);
        await res.json(listing.toObject());
    } catch (err) {
        console.log(err);
        res.status(500).send("Something wrong happened with creating a new listing.");
    }
};

export const newUser = async (req: Request, res: Response) => {
    try {
        const user = await new User({ email: "michaelchen@gatech.edu", password: "sdjfiosojidffsdoji" }).save(err => console.log(err));
        res.json(user.toObject());
    } catch (err) {
        console.log(err);
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
