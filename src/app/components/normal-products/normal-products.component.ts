import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/Shared/IProduct';
import { FlashProductsService } from 'src/app/services/flash-products.service';

@Component({
  selector: 'app-normal-products',
  templateUrl: './normal-products.component.html',
  styleUrls: ['./normal-products.component.scss']
})
export class NormalProductsComponent {
  ProductList: IProduct[] | undefined;
  errorMessage!: string;
  constructor(private flashProductService: FlashProductsService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.flashProductService.GetAllProducts().subscribe({
      next: data => this.ProductList = data,
      error: err => this.errorMessage = err
    });
  }

}





