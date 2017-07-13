import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotesService} from '../service/notes.service';
import { Note} from '../service/Note';
import 'rxjs/Rx';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styles: []
})
export class NoteDetailComponent implements OnInit {

  private note: Note = new Note();


  constructor(private router: Router, private route: ActivatedRoute, private notesService: NotesService) { }

  ngOnInit() {
    this.route.params
      .map(params => params['noteId'])
      .switchMap(id => this.notesService.getNote(id))
      .subscribe(note => this.note = note);
  }



  delete() {
    //invoke our REST API
    this.router.navigate(['/note-list']);
  }

}
