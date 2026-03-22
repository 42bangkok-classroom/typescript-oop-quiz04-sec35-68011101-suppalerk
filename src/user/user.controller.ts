import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
@Controller('users/test')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('test')
  test(){
    return this.userService.test();
  }
}
