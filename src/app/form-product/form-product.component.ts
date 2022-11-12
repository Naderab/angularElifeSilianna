import { Component, OnInit } from '@angular/core';
import { Product } from 'src/core/Product';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {
  product:Product=new Product();
  telephonee:string='';
  email:string='';
  constructor() { }

  ngOnInit(): void {
  }

  ajout(){
    this.product.like = 0;
    console.log(this.product);
  }

}
