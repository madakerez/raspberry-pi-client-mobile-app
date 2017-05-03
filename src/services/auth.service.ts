import { Injectable } from '@angular/core';

import { StorageService } from './storage.service';

@Injectable()
export class Auth {
  constructor(private storageService: StorageService) {
  
  }

  public isAuthorized() {
    let isAuthorized$ = this.storageService.getValue('token');
    return isAuthorized$
  }

}
