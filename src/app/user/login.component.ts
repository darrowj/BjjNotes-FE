import { Component } from '@angular/core';
import { AuthService } from '../service/authService'
import { Router } from '@angular/router'
import {Observable} from "rxjs/Observable";

@Component({
  templateUrl: './login.component.html',
  styles: [`
    em {float:right; color:#E05C65; padding-left:10px;}
  `]
})
export class LoginComponent {

  public user$ = this.authService.user;

  constructor(private router:Router, private authService: AuthService) {

  }

  login(formValues) {
    this.authService.loginUser(formValues.userName, formValues.password)
      .subscribe(
          success => this.router.navigate(['note-list']),
        error => alert(error)
      )

  }

  cancel() {
    this.router.navigate(['note-list'])
  }

  loginWithGoogle() {
    this.authService.loginWithGoogle();
  }

  loginWithFacebook() {
    this.authService.loginWithFacebook();
  }

  loginWithTwitter() {
    this.authService.loginWithTwitter();
  }

}
