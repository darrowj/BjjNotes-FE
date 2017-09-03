import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotesService} from '../service/notes.service';
import { Note} from '../service/Note';
import 'rxjs/Rx';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styles: [`
    em { float:right; color:#E05C67; padding-left:10px; }
  `]
})
export class NoteDetailComponent implements OnInit {

  private note: Note = new Note();
  errorMessage: string;

  constructor(private router: Router, private route: ActivatedRoute, private notesService: NotesService) { }

  ngOnInit() {
    this.route.params
      .map(params => params['noteId'])
      .switchMap(noteId => this.notesService.getNote(noteId))
      .subscribe(note => this.note = note);
      //console.log(this.note.title);
  }

  destroyNote(noteId: string){
    this.notesService.deleteNoteById(noteId)
      .subscribe((status: string) => {
          //console.log("Status returned from the service is: " + status)
          if (status) {
            this.router.navigate(['/note-list']);
          }
          else {
            this.errorMessage = 'Unable to delete BJJ Note';
          }
        },
        (err) => console.log(err));

  }

  submitUpdateNote(note: Note) {
    //console.log(note)
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
