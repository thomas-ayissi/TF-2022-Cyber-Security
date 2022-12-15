import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from './../../../../environments/enviroment';

@Injectable({
    providedIn: 'root'
})
export class ShopService {

    constructor(private $http: HttpClient) { }

    getAll(): Observable<{ id: number, name: string }[]> {
        return this.$http.get<any[]>(`${environment.api.base_url}/shops`).pipe(
            map(it => it.map(i => ({ id: i.id, name: i.name })))
        )
    }
}
