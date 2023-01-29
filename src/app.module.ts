import { Module, HttpModule, HttpService } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
/**de esta manera se exportan variables que se deban usar en los otros modulos */

/**
 * ! En siguientes versiones hay que instalar npm i --save @nestjs/axios
 * ya que los modulos http fueron transferidos aqui
 */
@Module({
  /**
   * Registro el //!MODULO {HttpModule}
   * en los imports
   * En el objeto del provider registro el //!SERVICIO con el atributo Inject
   * Solo asi puedo pasar parámetros el modulo https
   */
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    UsersModule,
    ProductsModule,
    HttpModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      /**
       * Detiene los procesos hasta que el proceso se resuelva, su uso es para conexiones de bases de datos, no para cualquier solicitudes,
       *
       */
      provide: 'TASK',
      useFactory: async (http: HttpService) => {
        const URL = 'https://jsonplaceholder.typicode.com/todos';
        const task = await http.get(URL).toPromise();
        return task.data;
      },
      inject: [HttpService],
    },
  ],
})
export class AppModule {}
