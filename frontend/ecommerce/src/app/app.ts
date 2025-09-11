import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ProductList } from "./components/product-list/product-list";
import { ProductService } from './services/product';

import { CommonModule } from '@angular/common';

import { ProductCategory } from './common/product-category';
import { ProductCategoryService } from './services/product-category';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductList, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  providers: [ProductService, ProductCategoryService],
})
export class App implements OnInit {
  protected readonly title = signal('ecommerce');

  categories: ProductCategory[] = [];

  constructor(private productCategoryService: ProductCategoryService) {

  }

  ngOnInit(): void {
    this.listCategories();
  }

  listCategories() {
    this.productCategoryService.getCategories().subscribe(
      data => {
        console.log('Categorias recebidas da API:', data);
        this.categories = data;
      }
    )
  }

}
