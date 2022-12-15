import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin, Observable, of, map } from 'rxjs';
import { ProductService } from '../../services/product.service';
import { Product } from './../../models/product.model';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

    products$: Observable<Product[]> = of();

    constructor(
        private $route: ActivatedRoute
    ) { }

    ngOnInit() {
        // this.$route.paramMap.subscribe(paramMap => {
        //     const shopId = paramMap.get('shop')!;
        //     this.products$ = this.$product.getByShop(shopId);
        // })

        this.products$ = this.$route.data.pipe(map((it: any) => it.products));
    }
}
