import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';

import { ProductList } from "./components/product-list/product-list";
import { ProductService } from './services/product';

import { CommonModule } from '@angular/common';

import { ProductCategory } from './common/product-category';
import { ProductCategoryService } from './services/product-category';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, RouterModule],
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
        // ADICIONE ESTE LOG PARA VER OS DADOS CRUS
        console.log("--- [DEBUG ARRAY DE CATEGORIAS] ---");
        console.log("Dados recebidos para o menu de categorias:", data);

        this.categories = data;
      }
    );
  }

}
