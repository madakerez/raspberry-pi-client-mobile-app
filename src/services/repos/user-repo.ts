import { Injectable } from '@angular/core';
import { HttpApi } from '../http-api.service';

@Injectable()
  export class UserRepo {
    constructor(private httpApi: HttpApi) {

    }

    login({login, id}) {
      console.log(login, id)
    }
  }
