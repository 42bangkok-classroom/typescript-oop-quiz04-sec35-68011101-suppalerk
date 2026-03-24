import { Injectable } from '@nestjs/common';
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
}
