import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product';
import { Product } from '../../common/product';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule],
  templateUrl: './product-list-grid.html',
  //templateUrl: './product-list-table.html',
  styleUrl: './product-list.scss'
})
export class ProductList implements OnInit{

  products: Product[] = [];
  currentCategoryId: number = 1;

  constructor(private productService: ProductService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {

      if (params.has('id')) {
        // Pega o 'id' do 'params' que veio da rota ATUAL.
        // O '!' diz ao TypeScript que sabemos que o valor não será nulo aqui.
        // O '+' converte a string do ID para um número.
        this.currentCategoryId = +params.get('id')!;

        // Busca os produtos para a categoria específica
        this.productService.getProductListByCategory(this.currentCategoryId).subscribe(
          data => {
            this.products = data;
          }
        );
      } else {
        // Se não houver 'id' na rota, busca todos os produtos 
        this.productService.getProductList().subscribe(
          data => {
            this.products = data;
          }
        );
      }
    });
  }
}