import { Injectable } from '@angular/core';
import { IProduct } from '../Shared/IProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  private ProductList: IProduct[];
  constructor() {
    this.ProductList = [
      { ID: 1, Name: "Product 1", Quantity: 10, Price: 20, Img: "./../../assets/1.png" },
      { ID: 2, Name: "Product 2", Quantity: 5, Price: 15, Img: "./../../assets/1.png" },
      { ID: 3, Name: "Product 3", Quantity: 7, Price: 10, Img: "./../../assets/1.png" }
    ];
  }


  GetAllProducts(): IProduct[] {
    return this.ProductList;
  }

  GetProductById(prdId: number): IProduct | null {

    if (typeof prdId !== 'number') {
      return null;
    }


    let product = this.ProductList.find(prd => prd.ID === prdId)

    return product || null;
  }

  // AddProduct(prd: IProduct) {
  //   this.ProductList.push(prd);
  //   }

}
