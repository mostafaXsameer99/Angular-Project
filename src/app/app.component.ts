import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ProductsComponent } from './components/products/products.component';

@Component({
  selector: 'myfirstapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(ProductsComponent) prod!: ProductsComponent;

  // callRenderValues() {
  //   this.prod.renderValues();
  // }

  title = 'Angular_Project';
}
