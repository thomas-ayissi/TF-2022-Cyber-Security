import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { merge, Observable, mergeMap, first, single, map } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(
        private $http: HttpClient,
    ) { }

    login(params: any) {
        // const params = new HttpParams()
        //     .appendAll({ username: id, password });

        return this.$http.get<any[]>(`http://localhost:3000/users`, { params })
            .pipe(map(it => it[0]))
    }
}
