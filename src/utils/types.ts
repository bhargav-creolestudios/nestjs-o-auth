import { User } from "src/typeorm"

export type UserDetails = {
    username: string,
    googleId: string,
    emailId: string,
}

export type Done = (err: Error, user: User) => void;