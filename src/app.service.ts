import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config/dist';

@Injectable()
export class AppService {
  constructor(
    private configService: ConfigService,
    @Inject('TASK') private task: any[],
  ) {}
  getHello(): string {
    console.log(this.task);
    const apiKey = this.configService.get('API_KEY');
    return `Hello World! ${apiKey}`;
  }
}
