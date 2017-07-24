import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotesService} from '../service/notes.service';
import { Note} from '../service/Note';
import 'rxjs/Rx';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styles: []
})
export class NoteFormComponent implements OnInit {

  private note =
    {
      id: null,
      title: "Enter Title Here",
      description: "Enter Desciption Here"
    }
  errorMessage: string;

  constructor(private router: Router, private route: ActivatedRoute, private notesService: NotesService) { }

  submitNewNote() {

      this.notesService.insertNote(this.note)
        .subscribe((note: Note) => {
            if (note) {
              this.router.navigate(['/note-list']);
            } else {
              this.errorMessage = 'Unable to save BJJ Note';
            }
          },
          (err: any) => console.log(err));

  }

  ngOnInit() {
  }

}
