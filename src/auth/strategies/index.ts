import { Strategy } from "passport-google-oauth20";
import { PassportStrategy } from "@nestjs/passport";
import { Injectable } from "@nestjs/common";
import { Profile } from "passport";

@Injectable()
export class GoogleOAuthStrategy extends PassportStrategy(Strategy) {
    constructor() {super({})}

    async validate(accessToken: string, refreshToken: string, profile: Profile, cb) {
        const googleId =  profile.id;
    }
}