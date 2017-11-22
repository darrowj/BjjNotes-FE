import { Component } from '@angular/core';
import { AuthService } from './service/authService'
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public isLoggedIn;
  title = 'BJJ Notes';
  user$ = this.authService.user;

  constructor(private authService: AuthService, private router: Router) {
    authService.isAuthenticated()
      .subscribe(
    success => this.isLoggedIn = success
      );

  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/note-list']);
  }




}
