import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './modules/security/guards/auth.guard';

const routes: Routes = [
    {
        path: 'product',
        canActivate: [AuthGuard],
        data: { "roles": ["ADMIN", "USER"] },
        loadChildren: () => import('./modules/product/product.module').then(m => m.ProductModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
