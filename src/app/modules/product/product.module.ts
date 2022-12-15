import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { ProductService } from './services/product.service';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductListResolver } from './product-list.resolver';


@NgModule({
    declarations: [
        ProductComponent,
        ProductListComponent
    ],
    imports: [
        CommonModule,
        ProductRoutingModule
    ],
    providers: [ProductService, ProductListResolver]
})
export class ProductModule { }
