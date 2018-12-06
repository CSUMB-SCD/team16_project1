import { CheckoutComponent } from './checkout/checkout.component';
import { CartComponent } from './cart/cart.component';
import { ProductExpandedComponent } from './product-expanded/product-expanded.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path: '',
  component: HomeComponent
  },
  {
    path: 'home',
  component: HomeComponent
  },
  {
    path: 'products',
  component: ProductsComponent
  },
  {
    path: 'cart',
  component: CartComponent
  },
  {
    path: 'checkout',
  component: CheckoutComponent
  },
  {
    path: 'product-expanded/:id',
  component: ProductExpandedComponent
  },
  {
    path: 'login',
  component: LoginComponent
  },

  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
