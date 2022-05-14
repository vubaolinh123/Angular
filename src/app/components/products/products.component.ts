import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/Product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  isStatus = false
  productName: string = ""
  listProduct: IProduct[] = [
    {id: 1, name: "Product A", price: 100},
    {id: 2, name: "Product B", price: 200},
  ]

  constructor() { }

  ngOnInit(): void {
  }
  onHandleClick(){
    this.isStatus = !this.isStatus;
  }
  onHandleDelete(id:number){
    this.listProduct = this.listProduct.filter(item=> item.id !== id)
  }

}
