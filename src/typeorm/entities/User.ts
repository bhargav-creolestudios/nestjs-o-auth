import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'google_id'})
    googleId: string

    @Column()
    username: string

    @Column({name: 'email_id'})
    emailId: string
}