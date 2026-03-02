export class UserService {
  constructor(private readonly User: string) {
    User : "[]"
  }

  test(): string {
    return this.User;
  }
}