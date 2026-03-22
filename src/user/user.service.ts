import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {

  test(): {id : string , firstname : string , lastname : string , email : string , username : string}[] {
    return [];
  }
}