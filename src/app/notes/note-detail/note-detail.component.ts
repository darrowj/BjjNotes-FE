import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotesService} from '../../service/notes.service';
import {YouTubeService} from '../../service/youtube.service';
import { Observable } from 'rxjs/Observable';
import { Note} from '../../model/note';
import {AuthService} from "../../service/authService";

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styles: [`
    em { float:right; color:#E05C67; padding-left:10px; }
  `]
})
export class NoteDetailComponent implements OnInit {

  note: Note = new Note();
  results: Observable<any>;
  videoSearchString: string;
  errorMessage: string;
  searchCalled: boolean = false;
  isLoggedIn: boolean = false;
  userId: string;

  constructor(private router: Router, private route: ActivatedRoute, private notesService: NotesService, public youtube: YouTubeService, private authService: AuthService) {
    authService.isAuthenticated()
      .subscribe(
        success => this.isLoggedIn = success
      );

    this.authService.afAuth.authState.subscribe(user => {
      if(user) this.userId = user.uid
    })
  }

  ngOnInit() {
    this.route.params
      .map(params => params['noteId'])
      .switchMap(noteId => this.notesService.getNote(noteId))
      .subscribe(note => this.note = note);


  }

  ngAfterViewChecked() {
    //console.log("This is the video search string 1: " + this.note )
       if ((!this.searchCalled)&&(this.note.id != undefined)) {
         this.subitYoutbeSearch(this.constructYoutubeSearchString(this.note))
         this.searchCalled = true;

       }

  }

  subitYoutbeSearch(searchString) {

    //console.log("This is the video search string 3: " + searchString)
    this.youtube.search(searchString)
      .subscribe(videos => this.results = videos);

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

  constructYoutubeSearchString(note: Note): string {
    let searchString = "BJJ";
    if (this.note.category) {searchString = searchString + " " + this.note.category}
    if (this.note.engagement) {searchString = searchString + " " + this.note.engagement}
    if (this.note.offensivePosition) {searchString = searchString + " " + this.note.offensivePosition}
    if (this.note.posture) {searchString = searchString + " " + this.note.posture}
    if (this.note.guard) {searchString = searchString + " " + this.note.guard}
    if (this.note.sweep) {searchString = searchString + " " + this.note.sweep}
    if (this.note.submission) {searchString = searchString + " " + this.note.submission}
    //console.log("This is the video search string 2: " + searchString + "  Note ID " + this.note.id)
    return searchString
  }

}
