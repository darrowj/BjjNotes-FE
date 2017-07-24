import {Component, OnInit, OnDestroy, AfterContentInit} from '@angular/core';
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

  private nbNotes: string;
  private getNotesSubscription: ISubscription;
  private getNoteCountSubscription: ISubscription;
  private notes: Note[];


  constructor(private notesService: NotesService) { }

  ngOnInit() {
    console.log("ngOnInit() called");
    this.getNotesSubscription = this.notesService.getNotes().subscribe(notes => this.notes = notes);
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
