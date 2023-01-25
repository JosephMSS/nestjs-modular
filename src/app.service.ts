import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(@Inject('API_KEY') private API_KEY: string) {}
  getHello(): string {
    return `Hello World! ${this.API_KEY}`;
  }
}
