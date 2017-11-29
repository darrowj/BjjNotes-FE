import { Component } from '@angular/core';
import { AuthService } from '../service/authService'
import { Router } from '@angular/router'
import {Observable} from "rxjs/Observable";
import {ProfileService} from "../service/profile.service";
import {Profile} from "../model/profile";

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

  constructor(private router:Router, private authService: AuthService, private profileService: ProfileService) {
    authService.isAuthenticated()
      .subscribe(
        success => this.isLoggedIn = success
      );

    this.authService.afAuth.authState.subscribe(user => {
      if(user) this.userId = user.uid
    })
  }

  login(formValues) {
    this.authService.loginUser(formValues.userName, formValues.password)
      .subscribe(
        (success) => {
          if (this.hasProfile())
            this.router.navigate(['/'])
          else
            this.router.navigate(['/profile'])
        },
        error => alert(error)
      )

  }

  cancel() {
    this.router.navigate(['note-list'])
  }

  loginWithGoogle() {
    this.authService.loginWithGoogle().then(
      (success) => {
        if (this.hasProfile())
          this.router.navigate(['/'])
        else
          this.router.navigate(['/profile'])
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

  hasProfile(): boolean{
    let profileCheck: Profile = new Profile();
    this.profileService.getProfile(this.userId).subscribe(profile => profileCheck = profile);
    if(profileCheck.uid != undefined) {
      return true;
    } else {
      return false;
    }

  }
}
