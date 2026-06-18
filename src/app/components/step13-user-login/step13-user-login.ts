import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Credentials, LoggedInUser } from '../../shared/interfaces/user-login.interface';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-step13-user-login',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './step13-user-login.html',
  styleUrl: './step13-user-login.css',
})
export class Step13UserLogin {
  userService = inject(UserService);

  form = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  onSubmit(){
    console.log(this.form.value);
    const credentials = this.form.value as Credentials;
    this.userService.loginUser(credentials).subscribe({
      next: (response) => {
        console.log(response);
        
      },
      error: (error) => {
        console.log(error);
      }
    })
  }
}
