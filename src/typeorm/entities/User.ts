import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'google_id', unique: true})
    googleId: string

    @Column({name: 'facebook_id', unique: true})
    facebookId: string

    @Column({default: ''})
    username: string

    @Column({name: 'email_id', default: ''})
    emailId: string
}