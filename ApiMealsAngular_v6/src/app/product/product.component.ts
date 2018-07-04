import { OnInit, Component } from "@angular/core";
import { Http } from "@angular/http";

import { ProductService } from '../product/product.service';

import { Product } from "../interfaces/Product/product.model";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html'

})

export class ProductComponent {
    product:Product;
    
    constructor (private router: Router, private productService: ProductService, activatedRoute:ActivatedRoute) {
        const id = activatedRoute.snapshot.params['id'];
        productService.getProduct(id).subscribe(
            product=> this.product = product,
            error => console.error(error)
        );
    }

    removeProduct(){
        
    }
    
    gotoProducts() {
        this.router.navigate(['/products']);
    }

    }
