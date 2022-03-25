import { PrimaryGeneratedColumn, Entity, Column, OneToMany, ManyToOne, OneToOne, JoinColumn } from 'typeorm'
import { Book } from './book.entity'
import { Cart } from './cart.entity'
import { User } from './user.entity'

@Entity()
export class Cart_item{
    @PrimaryGeneratedColumn('increment')
    id: number
    @Column()
    amount: number
   @ManyToOne(()=> Cart,cart =>cart.items)
   @JoinColumn({
       name:"cart_id"
   })
    cart: Cart
   @OneToOne(()=> Book,book => book.cart_item)
   @JoinColumn({
       name:"book_id"
   })
   book:Book
}