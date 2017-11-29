import {Router, ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from "@angular/router"
import { Injectable } from "@angular/core"
import {AuthService} from "./authService";



@Injectable()
export class BjjNoteRouteActivator implements CanActivate {

  public isLoggedIn: boolean = false;
  public redirectUrl: string = '/404'

  constructor(private router:Router, private authService: AuthService) {
    authService.isAuthenticated()
      .subscribe(
        success => this.isLoggedIn = success
      );
  }

  public canActivate() {

      if(this.isLoggedIn) {
        return true;
      }

      this.router.navigate(['/404'])
      return false;
  }

/*
  canActivate(route:ActivatedRouteSnapshot) {
    const note = this.notesService.getNote(route.params['noteId'])

    console.log("Does Event Exist??  : " + note)

    if (!note == null)
      this.router.navigate(['/404'])
    return true
  }
*/
}
