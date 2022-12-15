import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, mergeMap, Observable } from 'rxjs';
import { environment } from '../../../../environments/enviroment';
import { Product } from './../models/product.model';

@Injectable()
export class ProductService {
    private static URI: string = '/products';

    constructor(private $http: HttpClient) { }

    getAll(): Observable<any[]> {
        return this.$http.get<any[]>(`${environment.api.base_url}${ProductService.URI}`)
    }

    getByShop(shopId: string): Observable<Product[]> {
        const params = new HttpParams()
            .append("shopId", shopId)
            .append("_expand", "product");

        const url = `${environment.api.base_url}/stocks`;

        return this.$http
            .get<any>(url, { params })
            .pipe(
                map(it => it.map((i: any) => ({ ...i.product, qttStock: i.qtt } as Product)))
            )
    }

    getById(id: number) {
        return this.$http.get<any>(`${environment.api.base_url}/products/${id}`)
    }
}
