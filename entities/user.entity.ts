import { PrimaryGeneratedColumn, Entity, Column, OneToMany } from 'typeorm'

@Entity()
export class User{
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column()
    fullname: string

    @Column()
    email:string

    @Column()
    password: string

    @Column({
        nullable: true
    })
    number:string
    @Column({
        nullable: true
    })
    address: string
}