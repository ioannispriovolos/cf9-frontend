import { Injectable, inject, signal } from '@angular/core';
import { GoogleClientId } from '../config';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { environment } from '../../../environments/environment';
import { IGoogleUser } from '../interfaces/google-user.interface';
import { UserService } from './user.service';

const API_AUTH_URL = `${environment.apiURL}/api/auth/google-auth`;
declare const google: any;

@Injectable({
  providedIn: 'root',
})
export class GoogleService {
    http: HttpClient = inject(HttpClient);
    router = inject(Router);

    googleUser = signal<IGoogleUser | null>(null)

    initializeGoogleSignIn(){
        google.accounts.id.initialize({
            client_id: GoogleClientId,
            callback: (response: any) => this.handleCredentials(response)
        });
        google.accounts.id.prompt();
        return google;
    }

    handleCredentials(response: any) {
        console.log(response);
        const idToken = response.credential;
        this.loginGoogle(idToken).subscribe({
            next: (res) => {
                console.log(res);
            },
            error : (err) => console.log("Problem in Google login", err)
        })
    }

    loginGoogle(token:string){
        return this.http.post<{token:string}>(`${API_AUTH_URL}`, {token})
    }
}