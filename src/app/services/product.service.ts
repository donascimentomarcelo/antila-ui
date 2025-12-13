import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private api = `${environment.apiUrl}/products`;

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<Product[]>(this.api);
  }
}
