import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
/**de esta manera se exportan variables que se deban usar en los otros modulos */
const API_KEY_DEV = 'DEV qwerqwerqwe';
const API_KEY_PROD = 'PRODUCTION qwerqwerqwe';
const API_KEY =
  process.env.NODE_ENV === 'production' ? API_KEY_PROD : API_KEY_DEV;
console.log(
  '🚀 ~ file: app.module.ts:11 ~ process.env.NODE_ENV',
  process.env.NODE_ENV,
);
console.log('🚀 ~ file: app.module.ts:10 ~ API_KEY', API_KEY);
@Module({
  imports: [UsersModule, ProductsModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'API_KEY', //Nombre de la variable
      useValue: API_KEY,
    },
  ],
})
export class AppModule {}
