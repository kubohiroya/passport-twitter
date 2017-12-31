// Type definitions for passport-twitter 1.0.4
// Project: https://github.com/jaredhanson/passport-twitter
// Definitions by: James Roland Cabresos <https://github.com/staticfunction>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="passport"/>



import passport = require('passport');
import express = require('express');

interface Profile extends passport.Profile {
    gender: string;
    username: string;

    _raw: string;
    _json: any;
    _accessLevel: string;
}

interface IStrategyOptionBase {
    consumerKey: string;
    consumerSecret: string;
    callbackURL: string;

    includeEmail?: true;

    reguestTokenURL?: string;
    accessTokenURL?: string;
    userAuthorizationURL?: string;
    sessionKey?: string;

    userProfileURL?: string;
    skipExtendedUserProfile?: boolean;
}

interface IStrategyOption extends IStrategyOptionBase {
    passReqToCallback?: false;
}

interface IStrategyOptionWithRequest  extends IStrategyOptionBase {
    passReqToCallback: boolean;
}

export type VerifyFunction =
    (accessToken: string, refreshToken: string, profile: Profile, done: (error: any, user?: any, info?: any) => void) => void;

export type VerifyFunctionWithRequest =
    (req: express.Request, accessToken: string, refreshToken: string, profile: Profile, done: (error: any, user?: any, info?: any) => void) => void;

declare class Strategy implements passport.Strategy {
    constructor(options: IStrategyOptionWithRequest, verify: VerifyFunctionWithRequest);
    constructor(options: IStrategyOption, verify: VerifyFunction);

    name: string;
    authenticate: (req: express.Request, options?: Object) => void;
}
