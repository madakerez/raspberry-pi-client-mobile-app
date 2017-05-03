import { Injectable } from '@angular/core';

import { StorageService } from './storage.service';

@Injectable()
export class Auth {
  token;

  constructor(private storageService: StorageService) {
    this.token = null;
  }

  public isAuthorized() {
    let isAuthorized$ = this.storageService.getValue('token');
    return isAuthorized$
  }

  public setToken(token) {
    this.token = token;
  }

}
