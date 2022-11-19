import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from './../../core/Product';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {
  product:Product=new Product();
  telephonee:string='';
  email:string='';
  constructor(private p:ProductService,private router:Router) { }

  ngOnInit(): void {
  }

  ajout(){
    this.product.like = 0;
    //this.p.addProduct(this.product)
    this.p.add(this.product).subscribe(()=>{this.router.navigateByUrl('/products')})
    
    console.log(this.product);
  }

}
