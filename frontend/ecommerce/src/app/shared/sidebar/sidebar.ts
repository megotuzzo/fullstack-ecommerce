import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductCategory } from '../../common/product-category';
import { ProductCategoryService } from '../../services/product-category';
import { ProductService } from '../../services/product';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})
export class Sidebar implements OnInit{
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
