export class UserService {
  constructor(private readonly User: string[]) {
    User : ""
  }

  getUsers(): string[] {
    return this.User;
  }
}