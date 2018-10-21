import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path: '',
  component: LoginComponent
  },
  {
    path: 'home',
  component: HomeComponent
  },
  {
    path: 'products',
  component: ProductsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
