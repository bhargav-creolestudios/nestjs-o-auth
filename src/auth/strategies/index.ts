import { Strategy } from "passport-google-oauth20";
import { PassportStrategy } from "@nestjs/passport";
import { Inject, Injectable } from "@nestjs/common";
import { Profile } from "passport";
import { AuthenticationProvider } from "../services/auth/auth";

@Injectable()
export class GoogleOAuthStrategy extends PassportStrategy(Strategy) {
    constructor(@Inject('AUTH_SERVICE') private readonly autheService: AuthenticationProvider) {
        super({
            clientID      : process.env.GOOGLE_CLIENT_ID,
            clientSecret  : process.env.GOOGLE_CLIENT_SECRET,
            callbackURL   : process.env.CALLBACK_URL,
            userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo",
            scope         : ["profile"]
        })
    }

    async validate(accessToken: string, refreshToken: string, profile: Profile, cb) {
        const googleId = profile.id;
        const details = {googleId};
        return this.autheService.validateUser(details);
    }
}