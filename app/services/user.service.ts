import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../classes/users';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        debugger;
        return this.http.get<User[]>(`${config.apiUrl}/users`);
    }
}