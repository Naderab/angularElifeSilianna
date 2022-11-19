import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/core/Product';
import { ProductService } from '../services/product.service';

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
    this.router.navigateByUrl('/products')
    console.log(this.product);
  }

}
