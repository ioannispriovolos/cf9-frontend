import { effect, inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Credentials, LoggedInUser } from '../interfaces/user-login.interface';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

const API_AUTH_URL = `${environment.apiURL}/api/auth`;

@Injectable({
    providedIn: 'root',
})
export class UserService {
    http: HttpClient = inject(HttpClient);

    user = signal<LoggedInUser | null>(null);

    router = inject(Router);

    constructor() {
        const access_token = localStorage.getItem('access_token');
        if (access_token) {
            const decodedToken = jwtDecode(access_token) as unknown as LoggedInUser
            this.user.set({
                username: decodedToken.username,
                email: decodedToken.email,
                roles: decodedToken.roles
            });
        }


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

    logoutUser() {
        this.user.set(null);
        localStorage.removeItem('access_token');
        this.router.navigate(['user-login']);
    }

    isTokenExpired(): boolean {
        const token = localStorage.getItem('access_token');
        if (!token)
            return true;

        try {
            const decoded: any = jwtDecode(token);
            const exp = decoded.exp;
            const now = Math.floor(Date.now() / 1000);
            return exp < now
            } catch (e) {
                return true;
            }
    }
}
