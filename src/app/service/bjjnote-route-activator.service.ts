import { Router, ActivatedRouteSnapshot, CanActivate } from "@angular/router"
import { Injectable } from "@angular/core"
import { NotesService } from './notes.service'

@Injectable()
export class BjjNoteRouteActivator implements CanActivate {
  constructor(private notesService:NotesService, private router:Router) {

  }

  canActivate(route:ActivatedRouteSnapshot) {
    const note = this.notesService.getNote(route.params['noteId'])

    console.log("Does Event Exist??  : " + note)

    if (!note == null)
      this.router.navigate(['/404'])
    return true
  }
}
