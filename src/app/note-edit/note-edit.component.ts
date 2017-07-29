import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotesService} from '../service/notes.service';
import { Note} from '../service/Note';
import 'rxjs/Rx';

@Component({
  selector: 'app-note-edit',
  templateUrl: './note-edit.component.html',
  styles: []
})
export class NoteEditComponent implements OnInit {

  private note: Note = new Note();
  errorMessage: string;

  constructor(private router: Router, private route: ActivatedRoute, private notesService: NotesService) { }

  ngOnInit() {
    this.route.params
      .map(params => params['noteId'])
      .switchMap(id => this.notesService.getNote(id))
      .subscribe(note => this.note = note);
  }

  submitUpdateNote(note: Note) {
    this.notesService.updateNote(note)
      .subscribe((note: Note) => {
          if (note) {
            this.router.navigate(['/note-list']);
          } else {
            this.errorMessage = 'Unable to save BJJ Note';
          }
        },
        (err: any) => console.log(err));
  }

}
