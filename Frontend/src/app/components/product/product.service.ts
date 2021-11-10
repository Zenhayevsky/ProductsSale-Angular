import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';

import { Product } from './product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = "http://localhost:3001/products "

  constructor( 
    private http: HttpClient,
    private snackBar: MatSnackBar ) {}

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'undo', {
      duration: 3000,
      horizontalPosition:"right",
      verticalPosition: "top",
  })}
    
  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product)

  }

}
