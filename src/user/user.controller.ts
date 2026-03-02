import { UserService } from './user.service';

export class UserController {
  constructor(private readonly userService: UserService) {}

  getUsers(): string {
    return this.userService.test();
  }
}
