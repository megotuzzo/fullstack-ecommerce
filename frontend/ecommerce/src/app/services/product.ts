import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from '../common/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'http://localhost:8080/api/products';

  constructor(private httpClient : HttpClient) {}

  getProductListByCategory(categoryId: number): Observable<Product[]> {


    const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${categoryId}`;

    console.log(`Buscando produtos pela URL: ${searchUrl}`);

    return this.httpClient.get<GetResponse>(searchUrl).pipe(
      map(response => response._embedded.products)
    );
  }

  getProductList(): Observable<Product[]> {
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
    map(response => response._embedded.products) 
  );
  }
}

interface GetResponse {
  _embedded: {
    products: Product[];
  }
}
