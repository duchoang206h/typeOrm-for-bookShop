import { PrimaryGeneratedColumn, Entity, Column, OneToMany, OneToOne } from 'typeorm'
import { Cart } from './cart.entity'
import { Order } from './order.entity'
import { Transaction } from './transactioon.entity'

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
    })
    phone_number:string
    @Column({
    })
    address: string
    @OneToOne(()=> Cart, cart => cart.user)
    cart: Cart
    @OneToMany(()=>Order, order => order.user)
    orders: Order[]
    @OneToMany(()=>Transaction, transaction => transaction.user)
    transactions: Transaction[]
}