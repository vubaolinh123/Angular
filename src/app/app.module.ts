import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ThongkeComponent } from './components/thongke/thongke.component';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { FormProductComponent } from './components/form-product/form-product.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    HomepageComponent,
    NavbarComponent,
    ThongkeComponent,
    AdminLayoutComponent,
    ClientLayoutComponent,
    FormProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
