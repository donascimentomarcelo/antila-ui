import { Cosif } from './../models/cosif.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CosifService {

  private api = `${environment.apiUrl}/cosifs`;

  constructor(private http: HttpClient) { }

  getCosifByProduct(productId: string) {
    return this.http.get<Cosif[]>(`${this.api}/product/${productId}`)
  }

}
