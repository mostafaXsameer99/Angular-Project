import { Component } from '@angular/core';
import { ICategory } from 'src/app/Shared/ICategory';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  StoreName: string;
  StoreLogo: string;
  CategoryList: ICategory[];
  ClientName: string;
  constructor() {
    this.CategoryList = [
      { id: 1, name: "Category 1" },
      { id: 2, name: "Category 2" }
    ];
    this.ClientName = "Mostafa Sameer";
    this.StoreName = "MS Store";
    this.StoreLogo = "./../../assets/3.jpg";
  }

}
