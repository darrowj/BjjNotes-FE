import {Router, ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from "@angular/router"
import { Injectable } from "@angular/core"
import {AuthService} from "./authService";
import {ProfileService} from "./profile.service";
import {AngularFireAuth} from "angularfire2/auth";
import {Profile} from "../model/profile";



@Injectable()
export class CreateBjjNoteRouteActivator implements CanActivate {

  public isLoggedIn: boolean;
  userId: string;
  profile: Profile;

  constructor(private router:Router, private authService: AuthService, private profileService: ProfileService, private afAuth: AngularFireAuth) {



  }

  Oninit() {

    this.setIsAuthenticated();
    this.setUserId();
  }

  public canActivate() {


    if(!this.isLoggedIn) {
      this.router.navigate(['/404'])
      return false;
    }

    this.profileService.getProfile(this.userId).subscribe(profile => this.profile = profile);
    if (this.profile == undefined) {
      this.router.navigate(['/profile'])
      return false;
    }  else {
      return true;
    }


  }

  private setIsAuthenticated() {
    this.authService.isAuthenticated()
      .subscribe(
        success => this.isLoggedIn = success
      );
  }

  private setUserId() {
    this.afAuth.authState.subscribe(user => {
      if(user) this.userId = user.uid
    })
  }

}
