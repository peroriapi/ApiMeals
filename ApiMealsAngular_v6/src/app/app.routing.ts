import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './product/products.component';
import { ContactComponent } from './contact/contact.component';
import { CartComponent } from './cart/cart.component';

const appRoutes = [
    { path: '', component: IndexComponent, pathMatch: 'full' },
    { path: 'contact', component: ContactComponent },
    { path: 'product', component: ProductsComponent},
    { path: 'shoppingCart', component: CartComponent},
    // { path: 'product/:id', component: ProductComponent },
    
];

export const routing = RouterModule.forRoot(appRoutes);