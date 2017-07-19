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

  private nbNotes: number = 2;
  private subscription: ISubscription;
  private notes: Note[];


  constructor(private notesService: NotesService) { }

  ngOnInit() {
    console.log("ngOnInit() called");
    this.subscription = this.notesService.getNotes().subscribe(notes => this.notes = notes);
  }

  ngOnDestroy() {
    console.log("ngOnDestroy() called");
    this.subscription.unsubscribe();
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit() called");

  }



}
