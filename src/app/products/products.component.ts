import { Component, OnInit } from '@angular/core';
import { Product } from 'src/core/Product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  //data binding
  title: string = 'la liste de produits'

  listProducts: Product[] = []

  constructor(private p:ProductService) { }

  ngOnInit(): void {
    this.p.get().subscribe(
      
      (data)=>this.listProducts = data,
      (error)=>console.log(error)
    );
  }
  buy(id: string) {
    this.listProducts.map((p) => {
      return p.id === id && p.quantity--;
    })
  }

  like(id: string) {
    this.listProducts.map((p) => {
      return p.id === id && p.like++;
    })
  }
}
