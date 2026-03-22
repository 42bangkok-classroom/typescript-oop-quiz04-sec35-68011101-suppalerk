import { Injectable } from '@nestjs/common';
import { IUser } from './user.interface';
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
  findAll() {
    return UserService.length

  }

}
