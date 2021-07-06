import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProductModelServer, serverResponse} from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private SERVER_URL = environment.SERVER_URL;
  constructor(private http: HttpClient) { }

  showMassege(){
    console.log('service products');
  }
  getAllProducts(limitOfResults = 6): Observable<serverResponse>{
    return this.http.get<serverResponse>(this.SERVER_URL + `/products/`, {
      params: {
        limit: limitOfResults.toString()
      }
    });
  }

  getSingleProduct(id: number): Observable<ProductModelServer> {
    return this.http.get<ProductModelServer>(this.SERVER_URL + `/products/` + id);
  }

  getProductsFromCategory(catName: string): Observable<ProductModelServer[]> {
    return this.http.get<ProductModelServer[]>(this.SERVER_URL + `/products/category/` + catName);
  }
}
