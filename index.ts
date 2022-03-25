import { DataSource, createConnection} from 'typeorm'
import { Book, Category, Photo, Cart, Cart_item, Order, Order_item, Transaction, User} from './entities'

const boostrap = async () =>{
  const connecttion = await createConnection({
    type:"postgres",
    username:"postgres",
    host:"localhost",
    password:"password",
    entities:[Book, Category, Photo, Cart, Cart_item, Order, Order_item, Transaction, User],
    synchronize: true,
    port:5432
  })
}
boostrap()