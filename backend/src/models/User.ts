import bcrypt from "bcrypt";
import crypto from "crypto";
import mongoose from "mongoose";
import { createSchema, Type, typedModel, ExtractDoc } from "ts-mongoose";
type comparePasswordFunction = (candidatePassword: string, cb: (err: any, isMatch: any) => {}) => void;

export interface AuthToken {
    accessToken: string;
    kind: string;
}

const UserSchema = createSchema({
    email: Type.string({ unique: true }),
    password: Type.string(),
    passwordResetToken: Type.string(),
    passwordResetExpires: Type.date(),

    facebook: Type.string(),
    twitter: Type.string(),
    google: Type.string(),
    tokens: Type.array(), // array of AuthToken

    profile: {
        name: Type.string(),
        gender: Type.string(),
        location: Type.string(),
        website: Type.string(),
        picture: Type.string()
    },

    ...({} as {
        comparePassword: comparePasswordFunction;
        gravatar: (size: number) => string;
    })
}, { timestamps: true });

export type UserDocument = ExtractDoc<typeof UserSchema>

/**
 * Password hash middleware.
 */
UserSchema.pre("save", function save(next) {
    const user = this as UserDocument;
    if (!user.isModified("password")) { return next(); }
    bcrypt.genSalt(10, (err, salt) => {
        if (err) { return next(err); }
        bcrypt.hash(user.password, salt, (err: mongoose.Error, hash) => {
            if (err) { return next(err); }
            user.password = hash;
            next();
        });
    });
});

const comparePassword: comparePasswordFunction = function (candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, (err: mongoose.Error, isMatch: boolean) => {
        cb(err, isMatch);
    });
};

UserSchema.methods.comparePassword = comparePassword;

/**
 * Helper method for getting user's gravatar.
 */
UserSchema.methods.gravatar = function (size: number = 200) {
    if (!this.email) {
        return `https://gravatar.com/avatar/?s=${size}&d=retro`;
    }
    const md5 = crypto.createHash("md5").update(this.email).digest("hex");
    return `https://gravatar.com/avatar/${md5}?s=${size}&d=retro`;
};

export const User = typedModel("User", UserSchema);
