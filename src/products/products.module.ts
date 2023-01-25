import { Module } from '@nestjs/common';

import { ProductsController } from './controllers/products.controller';
import { BrandsController } from './controllers/brands.controller';
import { CategoriesController } from './controllers/categories.controller';
import { ProductsService } from './services/products.service';
import { BrandsService } from './services/brands.service';
import { CategoriesService } from './services/categories.service';
/**
 * Cada uno de los modulos  posee un dominio de servicio
 * Dominio: servicios que están relacionados al modulo
 * En este caso un producto posee: marcas y categorías
 */
@Module({
  controllers: [ProductsController, CategoriesController, BrandsController],
  providers: [ProductsService, BrandsService, CategoriesService],
})
export class ProductsModule {}

