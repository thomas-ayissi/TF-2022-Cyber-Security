import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductListResolver } from './product-list.resolver';
import { ProductComponent } from './product.component';

const routes: Routes = [
    {
        path: '', component: ProductComponent, children: [
            { path: ':shop', component: ProductListComponent, resolve: { "products": ProductListResolver } }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductRoutingModule { }
