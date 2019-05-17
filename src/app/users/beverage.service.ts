import { Component, Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { environment } from '../../environments/environment';

import 'rxjs';

@Injectable()
export class BeverageService {

    private apiUrl: string;

    constructor(
        private http: Http
    ) {
        this.apiUrl = environment.apiUrl;
    }

    getBeverages(): Promise<Array<Object>> {
        return this.http.get(`${this.apiUrl}/beverage`)
        .toPromise()
        .then((resp) => {
            let users = resp.json();
            return users;
        });
    }

    getBeverageById(userId): Promise<Object> {
        return;
    }

    addBeverage(user): Promise<Object> {
        return;
    }

    deleteUser(id): Promise<Object> {
        return;
    }

    updateUser(id, user): Promise<Object> {
        return;
    }

}
