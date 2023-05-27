import { Component, ViewEncapsulation } from '@angular/core';
import { DiscountOffers } from '../Shared/DiscountOffers';
import { IProduct } from '../Shared/IProduct';
import { ICategory } from '../Shared/ICategory';
import { ProductServiceService } from '../services/product-service.service';
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
  ProductByID?: IProduct;
  ProductList: IProduct[] | undefined;
  CategoryList: ICategory[];
  ClientName: string;
  IsPurchased: boolean;
  ShowProducts: boolean;
  constructor(private productService: ProductServiceService) {
    this.Discount = DiscountOffers.TwentyFivePercent;
    this.StoreName = "MS Store";
    this.StoreLogo = "./../../assets/1.png";
    this.CategoryList = [
      { id: 1, name: "Category 1" },
      { id: 2, name: "Category 2" }
    ];
    this.ClientName = "Mostafa Sameer";
    this.IsPurchased = false;
    this.ShowProducts = true;
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

  ngOnInit() {
    this.ProductList = this.productService.GetAllProducts();
    this.ProductByID = this.productService.GetProductById(2) || undefined;

  }
}
