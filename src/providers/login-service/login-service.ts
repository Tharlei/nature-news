import { Login } from './../../models/login';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginServiceProvider {

  private _url = 'http://api-fingerprint.herokuapp.com/api';
  private _options = {
    headers: {
      'content':"application/json",
      'contet-type':"application/x-www-form-urlencoded"
    }
  };

  constructor(public http: HttpClient) {
  }

  acessar(usuario: Login) {
    return this.http
        .post<Login>(this._url+'/login', usuario, this._options);
  }
}
