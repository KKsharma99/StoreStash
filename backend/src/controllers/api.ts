"use strict";

import graph from "fbgraph";
import { Response, Request, NextFunction } from "express";
import mongoose, { Schema } from "mongoose";
import { UserDocument } from "../models/User";
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
    const listing = await ((Listing as any) as ListingDocument).construct(mongoose.Types.ObjectId("5e504f591c9d440000ae8586"), 11, -11, 5, new Date(2020, 2, 1), new Date(2022, 5, 1), 14).then(listing => listing);
    res.json(listing.toObject());
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
