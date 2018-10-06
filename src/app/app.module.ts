import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';

import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';
import { CheckoutComponent } from './checkout/checkout.component';
import { AdminAuthGuardService } from './admin-auth-guard.service';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { CategoryService } from './category.service';
import { ProductService } from './product.service';
import { CustomFormsModule } from 'ng2-validation';
import { EditFormComponent } from './edit-form/edit-form.component'

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { DialogModule } from '@progress/kendo-angular-dialog';
import { GridModule } from '@progress/kendo-angular-grid';
import { EditServService } from './edit-serv.service';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent,
    CheckoutComponent,
    ProductFormComponent,
    EditFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    CustomFormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ReactiveFormsModule,
    DialogModule,
    GridModule,
    RouterModule.forRoot([
      { path : '' ,component: HomeComponent},
      { path : 'products' , component: ProductsComponent},
      { path : 'shopping-cart' ,component: ShoppingCartComponent},
      { path : 'order-sucess' ,component: OrderSuccessComponent},
      { path : 'me/orders' ,component: OrderSuccessComponent},
      { path : 'login' ,component: LoginComponent},
      { path : 'admin/products' ,component: AdminProductsComponent,canActivate: [AuthGuardService,AdminAuthGuardService]},
      { path : 'admin/products/new' ,component: ProductFormComponent,canActivate: [AuthGuardService,AdminAuthGuardService]},

      { path : 'admin/orders' ,component: AdminOrdersComponent,canActivate: [AuthGuardService,AdminAuthGuardService]},
      { path : 'checkout' ,component: CheckoutComponent,canActivate: [AuthGuardService]},
    ]),
    NgbModule,
    AngularFireModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule
    ],
    
  providers: [
    {
      deps: [HttpClient],
      provide: EditServService,
      useFactory: (jsonp: HttpClient) => () => new EditServService(jsonp)
  },
    AuthService,
    AuthGuardService,
    AdminAuthGuardService,
    CategoryService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
