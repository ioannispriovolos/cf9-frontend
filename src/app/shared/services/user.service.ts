import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Credentials } from '../interfaces/user-login.interface';

const API_AUTH_URL = `${environment.apiURL}/api/auth`;

@Injectable({
    providedIn: 'root',
})
export class UserService {
    http: HttpClient = inject(HttpClient);

    loginUser(data: Credentials) {
        return this.http.post<{token:string, user:{id:string, username:string}}>(
            `${API_AUTH_URL}/login`, 
            data
        );
    }
}
