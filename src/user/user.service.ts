import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {

  test(): {id : string , firstName : string , lastName : string , email : string , username : string}[] {
    return [];
  }
}