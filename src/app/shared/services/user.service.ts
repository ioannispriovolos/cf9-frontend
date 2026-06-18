import { effect, inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Credentials, LoggedInUser } from '../interfaces/user-login.interface';

const API_AUTH_URL = `${environment.apiURL}/api/auth`;

@Injectable({
    providedIn: 'root',
})
export class UserService {
    http: HttpClient = inject(HttpClient);

    user = signal<LoggedInUser | null>(null);

    constructor() {
        effect(()=>{
            if (this.user()){
                console.log("User Logged in:", this.user()?.username);
            } else {
                console.log('No user logged in');
            }
        })
    }

    loginUser(data: Credentials) {
        return this.http.post<{token:string, user:{id:string, username:string}}>(
            `${API_AUTH_URL}/login`, 
            data
        );
    }
}
