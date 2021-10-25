import { User } from "src/typeorm"

export type UserDetails = {
    googleId: string,
}

export type Done = (err: Error, user: User) => void;