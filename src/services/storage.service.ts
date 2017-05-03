import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class StorageService {
  constructor(private storage: Storage) {}

  public setValue(key, value) {
    this.storage.ready().then(() => {
      this.storage.set(key, value);
    });
  }

  public getValue(key) {
    let storage$ = new BehaviorSubject(null);
    this.storage.get(key).then((value) => {
      storage$.next(value)
    });

    return storage$
  }
}
