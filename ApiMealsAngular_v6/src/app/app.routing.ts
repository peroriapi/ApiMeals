import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './product/products.component';
import { ContactComponent } from './contact/contact.component';
import { CartComponent } from './cart/cart.component';
import { userProfileComponent } from './User/userProfile.component';
import { HeaderComponent} from './Header/header.component';
import { FooterComponent } from './Footer/footer.component';
import { LoginComponent } from './login/login.component';

const appRoutes = [
    { path: '', component: IndexComponent, pathMatch: 'full' },
    { path: 'header', component: HeaderComponent},
    { path: 'footer', component: FooterComponent},
    { path: 'contact', component: ContactComponent },
    { path: 'user', component:userProfileComponent},
    { path: 'product', component: ProductsComponent},
    { path: 'shoppingCart', component: CartComponent},
    { path: 'login', component: LoginComponent},
    // { path: 'product/:id', component: ProductComponent },
    
];

export const routing = RouterModule.forRoot(appRoutes);