import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from '../components/product-list/product-list.component';
import { SignInComponent } from '../components/sign-in/sign-in.component';
import { ProductDetailComponent } from '../components/product-detail/product-detail.component';
import { AuthGuardGuard } from '../security/auth-guard.guard';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { SignUpComponent } from '../components/sign-up/sign-up.component';

const appRoutes : Routes = [
  {path: 'products', component: ProductListComponent, canActivate : [AuthGuardGuard]},
  {path: 'products/:id', component: ProductDetailComponent, canActivate : [AuthGuardGuard]},
  {path: '', redirectTo: 'products', pathMatch: 'full'},
  {path: 'signin', component: SignInComponent},
  {path: 'signup', component: SignUpComponent},
  {path: '**', component: PageNotFoundComponent}
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
