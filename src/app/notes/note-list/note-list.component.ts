import {Component, OnInit, OnDestroy, AfterContentInit} from '@angular/core';
import { TruncateModule } from 'ng2-truncate'
import { ISubscription } from "rxjs/Subscription";
import { NotesService} from '../../service/notes.service';
import { Note} from '../../model/note';
import 'rxjs/Rx';
import {AngularFireAuth} from "angularfire2/auth";

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
  userId: string;


  constructor(private notesService: NotesService, private afAuth: AngularFireAuth  ) {
    this.afAuth.authState.subscribe(user => {
      if(user) this.userId = user.uid
    })
  }

  ngOnInit() {
    //console.log("ngOnInit() called");
    this.getNotesSubscription = this.notesService.getNotes(this.userId).subscribe(notes => this.notes = notes.reverse());
    this.getNoteCountSubscription = this.notesService.getNoteCount(this.userId).subscribe(count => this.nbNotes = count);
  }

  ngOnDestroy() {
    //console.log("ngOnDestroy() called");
    this.getNotesSubscription.unsubscribe();
    this.getNoteCountSubscription.unsubscribe();
  }

  ngAfterContentInit() {


  }



}
