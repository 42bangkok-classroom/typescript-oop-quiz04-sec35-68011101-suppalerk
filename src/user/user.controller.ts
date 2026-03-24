// import { Module } from '@nestjs/common';
import { Controller, Get ,Param ,Query} from '@nestjs/common';
import { UserService } from './user.service';
import { IUser } from './user.interface';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('test')
  test() {
    return this.userService.test();
  }

  @Get()
  findAll(): IUser[] {
    const users: IUser[] = this.userService.findAll();
    return users;
  }
  
  @Get(':id')
  findOne(
    @Param('id') id :string,
    @Query('fields') fields?: string
  ): Partial<IUser>{
    let fieldsArray: string[] | undefined
    if (fields){
      fieldsArray = fields.split(',')
    }
    return this.userService.findOne(id,fieldsArray)
  }
}
