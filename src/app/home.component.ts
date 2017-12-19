import {Component, OnInit, OnDestroy, AfterContentInit} from '@angular/core';
import { TruncateModule } from 'ng2-truncate'
import { ISubscription } from "rxjs/Subscription";
import { NotesService} from './service/notes.service';
import { Note} from './model/note';
import 'rxjs/Rx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit, OnDestroy, AfterContentInit {

  nbNotes: string;
  private getNotesSubscription: ISubscription;
  private getNoteCountSubscription: ISubscription;
  notes: Note[];
  p: any;


  constructor(private notesService: NotesService) { }

  ngOnInit() {
    console.log("ngOnInit() called");
    this.getNotesSubscription = this.notesService.getHomeNotes().subscribe(notes => this.notes = notes.reverse());
    this.getNoteCountSubscription = this.notesService.getHomeNoteCount().subscribe(count => this.nbNotes = count);
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
