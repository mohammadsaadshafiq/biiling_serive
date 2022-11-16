import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  handleORderCreated(orderCreatedEvent: any) {
    console.log(orderCreatedEvent);
  }
}
