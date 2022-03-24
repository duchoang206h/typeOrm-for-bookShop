import {PrimaryGeneratedColumn, Entity, Column, ManyToOne, OneToMany, JoinColumn} from 'typeorm'
import { Category } from './category.entity'
import { Photo } from './photo.entity'

@Entity()
export class Book{
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column()
    titile: string

    @Column()
    price: number

    @Column()
    display_price: number

    @Column()
    discription: number

    @ManyToOne(()=> Category,category => category.books)
    @JoinColumn({
        name:"category_id"
    })
    category: Category
    @OneToMany(()=> Photo, photo => photo.book)
    photos: Photo[]
}