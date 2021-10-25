import { User } from "src/typeorm";
import { UserDetails } from "src/utils/types";

export interface AuthenticationProvider {
    validateUser(details: UserDetails);
    createUser(details: UserDetails);
    findUser(googleId: string): Promise<User | undefined>;
}