import {PrimaryGeneratedColumn, Entity, Column, OneToMany, ManyToMany, ManyToOne, JoinColumn, OneToOne } from 'typeorm'
import { Book } from './book.entity'
import { Order_item } from './order_item.entity'
import { Transaction } from './transactioon.entity'
import { User } from './user.entity'

@Entity()
export class Order{
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column()
    phone_number: string

    @Column()
    address: string

    @Column()
    shipping: number

    @Column()
    total: number

    @ManyToOne(()=>User, user => user.orders)
    @JoinColumn({
        name:"user_id"
    })
    user: User
    @OneToOne(()=>Transaction, transaction => transaction.order)
    transaction: Transaction
    @OneToMany(()=> Order_item, order_item => order_item.order)
    items: Order_item[]
}