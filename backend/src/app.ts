import express from "express";
import compression from "compression";  // compresses requests
import session from "express-session";
import bodyParser from "body-parser";
import lusca from "lusca";
import mongo from "connect-mongo";
import flash from "express-flash";
import path from "path";
import mongoose from "mongoose";
import passport from "passport";
import bluebird from "bluebird";
import { MONGODB_URI, SESSION_SECRET } from "./util/secrets";
import cors from "cors";
import morgan from "morgan";
import jwt from "jsonwebtoken";

const MongoStore = mongo(session);

// Controllers (route handlers)
import * as userController from "./controllers/user";
import * as apiController from "./controllers/api";

// Create Express server
const app = express();

// Enable all CORS requests
app.use(cors({credentials: true, origin: true}));
app.options("*", cors());

// Log requests
app.use(morgan("combined"));

// Connect to MongoDB
const mongoUrl = MONGODB_URI;
mongoose.Promise = bluebird;

mongoose.connect(mongoUrl, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true } ).then(
    () => { /** ready to use. The `mongoose.connect()` promise resolves to undefined. */ },
).catch(err => {
    console.log("MongoDB connection error. Please make sure MongoDB is running. " + err);
    // process.exit();
});

// Express configuration
app.set("port", process.env.PORT || 3001);
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "pug");
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    store: new MongoStore({
        url: mongoUrl,
        autoReconnect: true
    })
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use(lusca.xframe("SAMEORIGIN"));
app.use(lusca.xssProtection(true));
app.use((req, res, next) => {
    res.locals.user = req.user;
    next();
});
app.use((req, res, next) => {
    // After successful login, redirect back to the intended page
    if (!req.user &&
    req.path !== "/login" &&
    req.path !== "/signup" &&
    !req.path.match(/^\/auth/) &&
    !req.path.match(/\./)) {
        req.session.returnTo = req.path;
    } else if (req.user &&
    req.path == "/account") {
        req.session.returnTo = req.path;
    }
    next();
});

app.use(
    express.static(path.join(__dirname, "public"), { maxAge: 31557600000 })
);

/**
 * API routes.
 */
app.post("/api/login", apiController.login);
app.post("/api/new-listing", apiController.newListing);
app.get("/api/discover", apiController.getNearby);
app.post("/api/register", apiController.newUser);
app.get("/api/users/:id/listings", apiController.getListingsByHostId);
app.get("/api/users/:id/rentals", apiController.getRentalHistory);
app.get("/api/users/:id/lendings", apiController.getLendingHistory);
app.post("/api/listings/:id/rent", apiController.rentListing);
app.get("/api/listings/:id", apiController.getListing);

export default app;
