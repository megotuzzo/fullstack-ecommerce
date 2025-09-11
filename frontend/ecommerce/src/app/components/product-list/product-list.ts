import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product';
import { Product } from '../../common/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule],
  templateUrl: './product-list-grid.html',
  //templateUrl: './product-list-table.html',
  styleUrl: './product-list.scss'
})
export class ProductList implements OnInit{

  products: Product[] = [];
  constructor(private productService : ProductService) {
  }

  ngOnInit(): void {
    this.listProducts();
  }

  listProducts() {
    this.productService.getProductList().subscribe(
      data => {
        console.log('recebendo os dados: ', data);
        this.products = data;
      }
    )
  }

}
