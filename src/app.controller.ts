import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  
  @Get('/health')
  getHealth(): any {
      return 'Welcome, Mr Saenz';
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
