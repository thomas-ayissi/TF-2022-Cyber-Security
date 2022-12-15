import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './services/product.service';
import { ShopService } from './services/shop.service';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

    shops: Array<{ id: number, name: string }> = [];

    constructor(
        private $shop: ShopService,
        private $router: Router,
        private $route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.$shop.getAll().subscribe(data => this.shops = data);
    }

    handleShopChange({ target }: any) {
        if (target) {
            console.log(target.value);

            this.$router.navigate([`./${target.value}`], { relativeTo: this.$route })
        }
    }
}
