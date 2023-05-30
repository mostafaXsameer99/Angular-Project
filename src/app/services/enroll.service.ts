import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from '../Shared/IUserModel';

@Injectable({
  providedIn: 'root'
})
export class EnrollService {

  _url = "http://localhost:8080/enroll";
  constructor(private http: HttpClient) { }

  enroll(user: UserModel) {
    return this.http.post<any>(this._url, user);
  }
}
