import {Component, OnInit, OnDestroy, AfterContentInit} from '@angular/core';
import { TruncateModule } from 'ng2-truncate'
import { ISubscription } from "rxjs/Subscription";
import { NotesService} from '../service/notes.service';
import { Note} from '../service/Note';
import 'rxjs/Rx';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styles: []
})
export class NoteListComponent implements OnInit, OnDestroy, AfterContentInit {

  nbNotes: string;
  private getNotesSubscription: ISubscription;
  private getNoteCountSubscription: ISubscription;
  notes: Note[];


  constructor(private notesService: NotesService) { }

  ngOnInit() {
    console.log("ngOnInit() called");
    this.getNotesSubscription = this.notesService.getNotes().subscribe(notes => this.notes = notes.reverse());
    this.getNoteCountSubscription = this.notesService.getNoteCount().subscribe(count => this.nbNotes = count);
  }

  ngOnDestroy() {
    console.log("ngOnDestroy() called");
    this.getNotesSubscription.unsubscribe();
    this.getNoteCountSubscription.unsubscribe();
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit() called");

  }



}
