import { Component } from '@angular/core';
import { AuthService } from '../service/authService'
import { Router } from '@angular/router'

@Component({
  templateUrl: './login.component.html',
  styles: [`
    em {float:right; color:#E05C65; padding-left:10px;}
  `]
})
export class LoginComponent {

  public user$ = this.authService.user;
  public isLoggedIn;
  userId: string;
  success: boolean;


  constructor(private router:Router, private authService: AuthService) {
    authService.isAuthenticated()
      .subscribe(
        success => this.isLoggedIn = success
      );

    this.setUserId();
  }

  login(formValues) {
    this.authService.loginUser(formValues.userName, formValues.password)
      .subscribe((res) => {this.router.navigate(['/'])},
        error => alert(error));
  }

  cancel() {
    this.router.navigate(['note-list'])
  }

  loginWithGoogle() {
    this.authService.loginWithGoogle().then((res) => {
      this.router.navigate(['/'])
    })
      .catch((err) => console.log(err));
  }

  loginWithFacebook() {
    this.authService.loginWithFacebook().then((res) => {
      this.router.navigate(['/'])
    })
      .catch((err) => console.log(err));
  }

  loginWithTwitter() {
    this.authService.loginWithTwitter().then((res) => {
      this.router.navigate(['/'])
    })
      .catch((err) => console.log(err));
  }


  setUserId() {
    this.authService.afAuth.authState.subscribe(user => {
      if(user) this.userId = user.uid
    })
  }
}
