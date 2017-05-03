import { Injectable } from '@angular/core';
import { HttpApi } from '../http-api.service';

@Injectable()
  export class PinsRepo {
    constructor(private httpApi: HttpApi) { }

    public changePinState(pinId: number) {
      return this.httpApi.get(`pins/change_state/${pinId}`);
    }

    public getPinState(pinId: number) {
      return this.httpApi.get(`pins/get_state/${pinId}`);
    }
  }
