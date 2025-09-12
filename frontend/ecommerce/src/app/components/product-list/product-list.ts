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
  searchMode: boolean = false;

  constructor(private productService: ProductService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    // A única responsabilidade do ngOnInit é se inscrever para ouvir TODAS as mudanças de rota.
    this.route.paramMap.subscribe(params => {

      // A lógica de decisão agora está DENTRO do subscribe, usando o 'params' sempre atualizado.
      if (params.has('keyword')) {
        // Modo de busca
        const keyword = params.get('keyword')!;
        this.productService.searchProducts(keyword).subscribe(data => {
          this.products = data;
        });
      }
      else {
      //SHOW BY CATEGORY (has id on route)
        if (params.has('id')) {
          this.currentCategoryId = +params.get('id')!;

          this.productService.getProductListByCategory(this.currentCategoryId).subscribe(data => {
            this.products = data;
          });
        }
        //SHOW ALL (doesn't have id on the route)
        else {
          this.productService.getProductList().subscribe(
            data => {
              this.products = data;
            }
          );
        }

      }
    });
  }

}