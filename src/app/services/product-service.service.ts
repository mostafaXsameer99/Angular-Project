import { Injectable } from '@angular/core';
import { IProduct } from '../Shared/IProduct';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductServiceService {
  private Url = '../../assets/Data/product.json';
  constructor(private http: HttpClient) {
  }


  GetAllProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.Url).pipe(catchError((err) => {
      return throwError(() => err.message || "ServerError")
    }));
  }

  // GetProductById(prdId: number): Observable<IProduct> | null {

  //   if (isNaN(prdId)) {
  //     return throwError(()=>{"Invalid ID"});
  //   }
  //   return this.http.get<IProduct>(this.Url).pipe(catchError((err) => {
  //     return throwError(() => err.message || "ServerError")
  //   }));
  // }
}
