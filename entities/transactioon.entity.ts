import {PrimaryGeneratedColumn, Entity, Column, OneToMany, ManyToMany, ManyToOne, JoinColumn, OneToOne } from 'typeorm'
import { Book } from './book.entity'
import { Order } from './order.entity'
import { User } from './user.entity'

@Entity()
export class Transaction{
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column()
    type: string

    @Column()
    status: string

   
    @ManyToOne(()=>User, user => user.transactions)
    @JoinColumn({
        name:"user_id"
    })
    user: User
    @OneToOne(()=>Order, order => order.transaction)
    @JoinColumn({
        name:"order_id"
    })
    order: Order
}