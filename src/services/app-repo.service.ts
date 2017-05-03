import { Injectable } from '@angular/core';

import { PinsRepo } from './repos/pins-repo';
import { UserRepo } from './repos/user-repo';

export const APP_REPOS = [
  PinsRepo,
  UserRepo
]

@Injectable()
export class AppRepo {
  constructor(
    public pinsRepo: PinsRepo,
    public userRepo: UserRepo
  ) { }
}
