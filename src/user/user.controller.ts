// import { Module } from '@nestjs/common';
import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { IUser } from './user.interface';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('test')
  test() {
    return this.userService.test();
  }

  @Get('user')
  async findAll(): Promise<IUser[]> {
    const users: IUser[] = await this.userService.findAll();
    return users;
  }
}
