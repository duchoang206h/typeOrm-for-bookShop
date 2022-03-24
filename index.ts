import { DataSource, createConnection} from 'typeorm'
import { Book, Category, Photo} from './entities'

const boostrap = async () =>{
  const connecttion = await createConnection({
    type:"postgres",
    username:"postgres",
    host:"localhost",
    password:"password",
    entities:[Book, Category, Photo],
    synchronize: true,
    port:5432
  })
}
boostrap()