import { Injectable } from '@angular/core';
import { IProduct } from '../Shared/IProduct';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlashProductsService {
  private Url = '../../assets/Data/flashProducts.json';
  constructor(private http: HttpClient) {
  }
  GetAllProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.Url).pipe(catchError((err) => {
      return throwError(() => err.message || "ServerError")
    }));
  }

}
