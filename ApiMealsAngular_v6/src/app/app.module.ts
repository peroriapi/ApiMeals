import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule, JsonpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { routing } from './app.routing';

import { IndexComponent } from './index/index.component';
import { HeaderComponent} from './Header/header.component';
import { FooterComponent } from './Footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './product/products.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { userProfileComponent } from './User/userProfile.component';
import { LoginComponent } from './login/login.component';
// import { ProductComponent } from './product/product.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IndexComponent,
    ContactComponent,
    ProductsComponent,
    userProfileComponent,
    LoginComponent,
    FooterComponent,
    // ProductComponent,
   CartComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    NgbModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
