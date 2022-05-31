import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { IProduct } from 'src/app/models/Product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {
  id: string| null = null
  product: any = {
    name: "",
    price: 0,
    oldPrice: 0,
    image: "",
    size: "",
    desc: "",
    status: 0,
    CategoryProduct: "6249eecb8b2af261e433a958"
  }
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router,
    ) 
    { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;
    if(this.id != ""){
      this.productService.getOneProduct(this.id).subscribe(data=>{
      this.product = data      
    })
    }
  }
  onSubmit(){
    const id = this.route.snapshot.paramMap.get('id')!;
    
    if(id != null){
      this.product._id = id
      
       this.productService.updateProducts(this.product).subscribe(data=>{
        setTimeout(() => {
          this.router.navigateByUrl('/admin');
        }, 2000)
      })
     }else{
       this.productService.addProducts(this.product).subscribe(data=>{
        setTimeout(() => {
          this.router.navigateByUrl('/admin');
        }, 2000)
      })
     }
  }

}

