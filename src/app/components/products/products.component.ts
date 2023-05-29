import { Component, ViewEncapsulation } from '@angular/core';
import { DiscountOffers } from '../../Shared/DiscountOffers';
import { IProduct } from '../../Shared/IProduct';
import { ProductServiceService } from '../../services/product-service.service';
import { ActivatedRoute, Route, Router } from '@angular/router';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  //encapsulation:ViewEncapsulation.ShadowDom,
  //encapsulation:ViewEncapsulation.None
})

export class ProductsComponent {
  errorMessage!: string;
  Discount: DiscountOffers;
  ProductByID?: IProduct;
  ProductList: IProduct[] | undefined;
  IsPurchased: boolean;

  constructor(private productService: ProductServiceService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.Discount = DiscountOffers.NoDiscount;
    this.IsPurchased = false;
  }

  buyProduct() {
    this.IsPurchased = true;
  }

  hoverable: boolean = true;
  Hover = {
    "effect": this.hoverable
  }


  ngOnInit() {
    // this.ProductList = this.productService.GetAllProducts();
    // this.ProductByID = this.productService.GetProductById(1) || undefined;

    this.productService.GetAllProducts().subscribe({
      next: data => this.ProductList = data,
      error: err => this.errorMessage = err
    });

    // this.productService.GetProductById(1)?.subscribe(data => { this.ProductByID = data });
  }

  goToDiscountedProd() {
    this.router.navigate(["discounted"], { relativeTo: this.activatedRoute })
  }

  goToNormalProd() {
    this.router.navigate(["Normal"], { relativeTo: this.activatedRoute })
  }
}
