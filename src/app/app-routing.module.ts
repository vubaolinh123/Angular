import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormProductComponent } from './components/form-product/form-product.component';
import { ProductsComponent } from './components/products/products.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';

const routes: Routes = [
 {path: "", component: ClientLayoutComponent,
  children: [
          { path: 'product', component: ProductsComponent },
        ]},
  {path: "admin", component: AdminLayoutComponent,
    children: [
          { path: '', component: ProductsComponent },
          { path: 'product', component: ProductsComponent },
          { path: 'product/add', component: FormProductComponent },
          { path: 'product/:id/edit', component: FormProductComponent },
        ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
