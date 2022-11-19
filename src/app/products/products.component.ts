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
  buy(id: number) {
    this.listProducts.map((p) => {
      return p.id === id && p.quantity--;
    })
  }

  like(p: any) {
    p.like++;
    this.p.update(p.id,p).subscribe((product)=>{
      // this.listProducts.map((p1) => {
      //   return p1.id === product.id && p1.like++;
      // })
    })
    
  }
  delete(id:number){
    this.p.remove(id).subscribe(()=>this.listProducts=this.listProducts.filter((p)=>p.id != id))
  }
}
