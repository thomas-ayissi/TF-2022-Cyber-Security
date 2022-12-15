import { Injectable } from '@angular/core';
import {
    Router, Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { SessionService } from '../security/services/session.service';
import { ProductService } from './services/product.service';

@Injectable()
export class ProductListResolver implements Resolve<any[]> {

    constructor(
        private $product: ProductService,
        private $session: SessionService<{ id: number }>
    ) {
        this.$session.subscribe(user => console.log(user))
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any[]> {
        const shopId = route.paramMap.get('shop')!;

        return this.$product.getByShop(shopId)
    }
}
