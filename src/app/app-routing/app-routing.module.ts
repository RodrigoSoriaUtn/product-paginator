import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from '../components/product-list/product-list.component';
import { SignInComponent } from '../components/sign-in/sign-in.component';
import { ProductDetailComponent } from '../components/product-detail/product-detail.component';

const appRoutes : Routes = [
  {path: 'products', component: ProductListComponent},
  {path: 'products/:id', component: ProductDetailComponent}
  {path: '', redirectTo: 'products', pathMatch: 'full'},
  {path: 'signing', component: SignInComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // <-- only for debugging purposes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
