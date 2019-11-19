import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductRowComponent } from './components/product-row/product-row.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ProductListOptionsSelectorComponent } from './components/product-list-options-selector/product-list-options-selector.component';
import { AuthInterceptor } from './security/interceptors/auth-interceptor';
import { ProductsPanelComponent } from './components/products-panel/products-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    ProductListComponent,
    ProductRowComponent,
    PageNotFoundComponent,
    ProductDetailComponent,
    SignUpComponent,
    ProductListOptionsSelectorComponent,
    ProductsPanelComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserModule, 
    AppRoutingModule
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass : AuthInterceptor,
      multi : true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
