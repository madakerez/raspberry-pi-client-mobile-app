import { Injectable } from '@angular/core';
import { HttpApi } from '../http-api.service';

@Injectable()
  export class PinsRepo {
    constructor(private httpApi: HttpApi) {

    }

    getPinState({pinId}) {
      console.log(pinId)
    }
  }
