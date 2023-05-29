import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/Shared/IProduct';
import { DiscountedProductsService } from 'src/app/services/discounted-products.service';

@Component({
  selector: 'app-discounted-products',
  templateUrl: './discounted-products.component.html',
  styleUrls: ['./discounted-products.component.scss']
})
export class DiscountedProductsComponent {
  ProductList: IProduct[] | undefined;
  errorMessage!: string;

  constructor(private discountedProductService: DiscountedProductsService, private activatedRoute: ActivatedRoute, private router: Router) {
  }
  ngOnInit() {
    this.discountedProductService.GetAllProducts().subscribe({
      next: data => this.ProductList = data,
      error: err => this.errorMessage = err
    });
  }

}
