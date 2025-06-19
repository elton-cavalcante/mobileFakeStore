import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FakestoreapiserviceService {

  constructor(private http: HttpClient) { }

  // Raiz API : https://fakestoreapi.com/

  // método para obter todos os produtos
  getAllProducts(): Observable<any> {
    return this.http.get('https://fakestoreapi.com/products');
  }

  getProductById(id: number): Observable<any> {
    return this.http.get(`https://fakestoreapi.com/products/${id}`);
  }
}
