import { Injectable, NotFoundException } from '@nestjs/common';
import { IUser } from './user.interface';
import * as fs from 'fs';
import * as path from 'path';
import { CreateUserDto } from './dto/create-user.dto';

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
}

@Injectable()
export class UserService {
  test(): User[] {
    return [];
  }

  findAll(): IUser[] {
    const filePath = path.join(process.cwd(), 'data', 'users.json');

    const fileData = fs.readFileSync(filePath, 'utf-8');

    const users: IUser[] = JSON.parse(fileData) as IUser[];
    return users;
  }

  findOne(id: string, fields?: string[]): Partial<IUser> {
    const users = this.findAll();
    const user = users.find((u: IUser) => u.id === id);

    if (!user) {
      throw new NotFoundException('User not found');
    }
    if (fields) {
      const filteredUser: Partial<IUser> = {};

      fields.forEach((fields: string) => {
        if (fields in user) {
          const key = fields as keyof IUser;
          filteredUser[key] = user[key];
        }
      });
      return filteredUser;
    }
    return user;
  }
  create(dto: CreateUserDto): IUser {
    const users = this.findAll();

    const maxId = users.reduce((max: number, currentUser: IUser) => {
      const currentId = parseInt(currentUser.id, 10);
      return currentId > max ? currentId : max;
    }, 0);

    const newId = (maxId + 1).toString();

    const newUser: IUser = {
      id: newId,
      ...dto,
    };
    users.push(newUser);

    const filePath = path.join(process.cwd(), 'data', 'users.json');
    fs.writeFileSync(filePath, JSON.stringify(users, null, 2), 'utf-8');
    return newUser;
  }
}
