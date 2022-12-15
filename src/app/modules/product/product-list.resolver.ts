import { Injectable } from '@angular/core';
import {
    Router, Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ProductService } from './services/product.service';

@Injectable()
export class ProductListResolver implements Resolve<any[]> {

    constructor(
        private $product: ProductService
    ) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any[]> {
        const shopId = route.paramMap.get('shop')!;

        return this.$product.getByShop(shopId)
    }
}
