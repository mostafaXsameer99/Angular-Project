import { Component, ViewEncapsulation } from '@angular/core';
import { DiscountOffers } from '../Shared/DiscountOffers';
import { IProduct } from '../Shared/IProduct';
import { ICategory } from '../Shared/ICategory';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  //encapsulation:ViewEncapsulation.ShadowDom,
  //encapsulation:ViewEncapsulation.None
})

export class ProductsComponent {
  Discount: DiscountOffers;
  StoreName: string;
  StoreLogo: string;
  ProductList: IProduct[];
  CategoryList: ICategory[];
  ClientName: string;
  IsPurchased: boolean;
  ShowProducts:boolean;
  constructor() {
    this.Discount = DiscountOffers.TwentyFivePercent;
    this.StoreName = "MS Store";
    this.StoreLogo = "./../../assets/1.png";
    this.ProductList = [
      { ID: 1, Name: "Product 1", Quantity: 10, Price: 20, Img: "./../../assets/1.png" },
      { ID: 2, Name: "Product 2", Quantity: 5, Price: 15, Img: "./../../assets/1.png" },
      { ID: 3, Name: "Product 3", Quantity: 7, Price: 10, Img: "./../../assets/1.png" },
      { ID: 4, Name: "Product 4", Quantity: 6, Price: 25, Img: "./../../assets/1.png" }
    ];
    this.CategoryList = [
      { id: 1, name: "Category 1" },
      { id: 2, name: "Category 2" }
    ];
    this.ClientName = "Mostafa Sameer";
    this.IsPurchased = false;
    this.ShowProducts=false;
  }

  renderValues() {
    this.ShowProducts=true;
  }
  
  buyProduct() {
    this.IsPurchased = true;
  }

  hoverable: boolean = true;

  Hover = {
    "effect": this.hoverable
  }

  

}