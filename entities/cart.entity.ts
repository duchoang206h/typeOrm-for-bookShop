import { PrimaryGeneratedColumn, Entity, Column, OneToMany, ManyToOne, OneToOne, JoinColumn } from 'typeorm'
import { Cart_item } from './cart_item.entity'
import { User } from './user.entity'

@Entity()
export class Cart{
    @PrimaryGeneratedColumn('increment')
    id: number
   @OneToOne(()=> User,user =>user.cart)
   @JoinColumn({
       name: "user_id"
   })
   user: User
   @OneToMany(()=> Cart_item, item  =>item.cart)
   items: Cart_item[]
}