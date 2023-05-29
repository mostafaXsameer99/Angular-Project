import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { IUser } from '../Shared/IUser';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  // private usersList: IUser[] = [];
  private Url = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) { }

  GetAllUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.Url).pipe(catchError((err) => {
      return throwError(() => err.message || "ServerError")
    }));
  }
}
