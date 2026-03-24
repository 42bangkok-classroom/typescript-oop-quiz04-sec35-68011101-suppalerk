// import { Module } from '@nestjs/common';
import {
  Controller,
  Get,
  Param,
  Query,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import type { IUser } from './user.interface';
import { CreateUserDto } from './dto/create-user.dto';

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
    @Param('id') id: string,
    @Query('fields') fields?: string,
  ): Partial<IUser> {
    let fieldsArray: string[] | undefined;
    if (fields) {
      fieldsArray = fields.split(',');
    }
    return this.userService.findOne(id, fieldsArray);
  }

  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() createUserDto: CreateUserDto): IUser {
    return this.userService.create(createUserDto);
  }
}
