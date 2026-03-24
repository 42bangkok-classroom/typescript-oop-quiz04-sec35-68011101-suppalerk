import { Injectable, NotFoundException } from '@nestjs/common';
import { IUser } from './user.interface';
import * as fs from 'fs';
import * as path from 'path';

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
    const user = users.find((u: IUser) => u.id);

    if (!user) {
      throw new NotFoundException('User not found');
    }
    if (fields && fields.length > 0) {
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
}
