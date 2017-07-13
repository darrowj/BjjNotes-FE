import { Component, OnInit } from '@angular/core';
import { NotesService} from '../service/notes.service';
import { Note} from '../service/Note';
import 'rxjs/Rx';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styles: []
})
export class NoteListComponent implements OnInit {

  private nbNotes: number = 2;

  private notes: Note[];


  constructor(private notesService: NotesService) { }

  ngOnInit() {
    this.notesService.getNotes().subscribe(notes => this.notes = notes);
  }

}
