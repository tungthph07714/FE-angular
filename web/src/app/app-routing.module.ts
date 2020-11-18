import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailComponent } from './screens/product-detail/product-detail.component';
import {HomeComponent} from './screens/home/home.component';

const routes: Routes = [
  {path:'chi-tiet-san-pham/:id', component: ProductDetailComponent},
  {path:'Home', component: HomeComponent},

  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
