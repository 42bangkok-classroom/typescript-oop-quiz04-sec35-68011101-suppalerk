import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
@Controller('users/test')
export class UserController {
  constructor(private readonly UserService: UserService) {}

  @Get('test')
  test() : {id : string , firstname : string , lastname : string , email : string , username : string}[] {
    return this.UserService.test();
  }


}