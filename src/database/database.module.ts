import { Module, Global } from '@nestjs/common';
/**
 * Creacion de variables globales
 */
/**
 * Todo lo registrado va a ser  de acceso a todos los modulos
 */
const API_KEY_DEV = 'DEV qwerqwerqwe';
const API_KEY_PROD = 'PRODUCTION qwerqwerqwe';
const API_KEY =
  process.env.NODE_ENV === 'production' ? API_KEY_PROD : API_KEY_DEV;

@Global()
@Module({
  providers: [
    {
      /**
       * useValues
       */
      provide: 'API_KEY', //Nombre de la variable
      useValue: API_KEY,
    },
  ],
  exports: ['API_KEY'],
})
export class DatabaseModule {}
