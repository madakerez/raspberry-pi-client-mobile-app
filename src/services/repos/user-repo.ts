import { Injectable } from '@angular/core';
import { HttpApi } from '../http-api.service';

@Injectable()
  export class UserRepo {
    constructor(private httpApi: HttpApi) {}

    login(name: string, password: string) {
      let data = {
        name: name,
        password: password
      }
      return this.httpApi.post(`user/login`, data);
    }
    logout() {
      return this.httpApi.get(`user/login`);
    }
  }
