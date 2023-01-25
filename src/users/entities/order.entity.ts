import { Product } from 'src/products/entities/product.entity';
import { User } from './user.entity';
/**
 * Las entidades pueden ser exportadas
 * sin necesidad de hacer inyección de dependencias
 */
export class Order {
  date: Date;
  user: User;
  products: Product[];
}
