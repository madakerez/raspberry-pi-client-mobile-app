import { Injectable } from '@angular/core';
import { Http, RequestOptions, Request, RequestMethod, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class HttpApi {
  authToken;
  root = 'root';

  constructor(private http: Http) { }

  public get(path, params?, options?, headers?) {
    let requestOptions = new RequestOptions({
      method: RequestMethod.Get,
      url: this.buildUrl(path),
      search: this.createSearchParams(params)
    });
    let request = new Request(requestOptions);
    return this.sendRequest(request);
 }

 public post(path, body?, options?) {
    let requestOptions = new RequestOptions({
      method: RequestMethod.Post,
      url: this.buildUrl(path),
      body: body
    });
    let request = new Request(requestOptions);
    return this.sendRequest(request);
  }

  private createSearchParams(params) {
    let search = new URLSearchParams();
    Object.keys(params || {}).forEach((key) => {
      let value = params[key];
      if (value != null) {
        search.set(key, value);
      }
    });
    if (this.authToken) {
      search.set('token', this.authToken);
    }
    return search;
  }

  private buildUrl(path = '') {
    let url = `http://${this.root}/`;
    return url + path;
  }

  private sendRequest(request) {
    return this.http.request(request)
      .map((response) => {
        return response
      })
      .catch((error) => {
        switch (error.status) {
          case 401:
            // logout
            break;
        }
        return Observable.throw(error);
      })
      .share();
  }
}
