import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  rootUrl = '/api';

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(this.rootUrl + '/users');
  }

  addUser(user: any) {
    return this.http.post(this.rootUrl + '/user', {user});
  }
  
}
