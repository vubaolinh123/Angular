import { ProductService } from './../../service/product.service';
import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/Product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  detailProduct!: IProduct;
  productList!: IProduct[];

  @Input() products!:IProduct[];
  
  constructor(private productService: ProductService) {
    this.showProduct();
   }

  ngOnInit(): void {
  }
  showProduct(){
    this.productService.getProducts().subscribe((data)=>{
      this.productList = data
    })
  }
  onRemoveItem(id: string){
    const confirm = window.confirm("Bạn có chắc muốn xóa không ?")
    if(confirm){
      this.productService.removeProducts(id).subscribe(()=>{
          this.productList = this.productList.filter(item => item._id !== id);
      })
    }
  }

}
