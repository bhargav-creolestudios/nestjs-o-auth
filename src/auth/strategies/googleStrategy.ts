import { Strategy } from "passport-google-oauth20";
import { PassportStrategy } from "@nestjs/passport";
import { Inject, Injectable } from "@nestjs/common";
import { Profile } from "passport";
import { AuthenticationProvider } from "../services/auth/auth";
import * as lodash from 'lodash';

@Injectable()
export class GoogleOAuthStrategy extends PassportStrategy(Strategy) {
    constructor(@Inject('AUTH_SERVICE') private readonly autheService: AuthenticationProvider) {
        super({
            clientID      : process.env.GOOGLE_CLIENT_ID,
            clientSecret  : process.env.GOOGLE_CLIENT_SECRET,
            callbackURL   : process.env.CALLBACK_URL,
            userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo",
            scope         : ["profile", "email"]
        })
    }

    async validate(accessToken: string, refreshToken: string, profile: Profile, cb) {
        console.log(profile);
        
        const {id: googleId, emails, displayName} = profile;
        
        let emailId = emails[0].value;
        let fullName = displayName.split(' ');
        const username = lodash.upperFirst(fullName[0]) + " " + lodash.upperFirst(fullName[1]);
        const details = {googleId, username, emailId, facebookId: null};
        
        return this.autheService.validateUser(details);
    }
}