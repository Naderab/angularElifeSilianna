import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/core/Product';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productsUrl:string=environment.url+"/products"
  constructor(private http:HttpClient) { }

  get():Observable<Product[]>{
    return this.http.get<Product[]>(this.productsUrl)
  }
  add(data:Product):Observable<Product>{
    return this.http.post<Product>(this.productsUrl,data);
  }
  update(id:number,data:Product):Observable<Product>{
    return this.http.put<Product>(this.productsUrl+'/'+id,data)
  }
  remove(id:number){
    return this.http.delete(this.productsUrl+'/'+id)  
  }
  
}
