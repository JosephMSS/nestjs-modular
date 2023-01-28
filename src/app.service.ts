import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(
    @Inject('API_KEY') private API_KEY: string,
    @Inject('TASK') private task: any[],
  ) {}
  getHello(): string {
    console.log(this.task);

    return `Hello World! ${this.API_KEY}`;
  }
}
